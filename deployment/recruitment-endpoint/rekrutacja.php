<?php

/*
 * Endpoint formularza rekrutacyjnego VPLO.
 * Wgraj ten plik jako /api/rekrutacja.php na serwerze stara.vp-lo.krakow.pl.
 * Nie zapisuje danych zgłoszenia na dysku ani w bazie danych.
 */

const ALLOWED_ORIGIN = 'https://vp-lo.krakow.pl';
const RECIPIENT = 'rekrutacja@vp-lo.krakow.pl';
const SENDER = 'dyrektor@vp-lo.krakow.pl';
const MAX_BODY_BYTES = 16_384;
const RATE_LIMIT_WINDOW = 3_600;
const RATE_LIMIT_MAX_REQUESTS = 8;

function respond($status, array $payload)
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function fail($status, $message)
{
    respond($status, ['success' => false, 'message' => $message]);
}

function value(array $data, $key, $maxLength, $required = true)
{
    $value = isset($data[$key]) ? $data[$key] : '';

    if (!is_string($value)) {
        fail(422, 'Nieprawidłowe dane formularza.');
    }

    $value = trim($value);

    $length = function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);

    if (($required && $value === '') || $length > $maxLength) {
        fail(422, 'Nieprawidłowe dane formularza.');
    }

    return $value;
}

function rateLimit($ip)
{
    $file = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR)
        . DIRECTORY_SEPARATOR
        . 'vplo-recruitment-' . hash('sha256', $ip) . '.json';
    $handle = @fopen($file, 'c+');

    if ($handle === false) {
        return;
    }

    try {
        if (!flock($handle, LOCK_EX)) {
            return;
        }

        $current = stream_get_contents($handle);
        $timestamps = json_decode($current ?: '[]', true);
        $timestamps = is_array($timestamps) ? $timestamps : array();
        $now = time();
        $timestamps = array_values(array_filter(
            $timestamps,
            function ($timestamp) use ($now) {
                return is_int($timestamp) && $timestamp > $now - RATE_LIMIT_WINDOW;
            }
        ));

        if (count($timestamps) >= RATE_LIMIT_MAX_REQUESTS) {
            fail(429, 'Zbyt wiele prób wysłania formularza. Spróbuj ponownie później.');
        }

        $timestamps[] = $now;
        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, json_encode($timestamps));
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}

if (!isset($_SERVER['HTTPS']) || $_SERVER['HTTPS'] !== 'on') {
    fail(400, 'Formularz wymaga bezpiecznego połączenia HTTPS.');
}

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if ($origin !== ALLOWED_ORIGIN) {
    fail(403, 'Niedozwolone źródło żądania.');
}

header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Vary: Origin');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    fail(405, 'Dozwolone są wyłącznie żądania POST.');
}

if ((int) (isset($_SERVER['CONTENT_LENGTH']) ? $_SERVER['CONTENT_LENGTH'] : 0) > MAX_BODY_BYTES) {
    fail(413, 'Przesłano zbyt dużo danych.');
}

$body = file_get_contents('php://input');
$data = json_decode($body ?: '', true);

if (!is_array($data)) {
    fail(400, 'Nieprawidłowy format formularza.');
}

rateLimit(isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown');

if (value($data, 'company', 0, false) !== '') {
    // Honeypot: zwracamy powodzenie, żeby nie ułatwiać botom omijania ochrony.
    respond(200, ['success' => true, 'message' => 'Formularz został wysłany do szkoły.']);
}

$name = value($data, 'imie_i_nazwisko_kandydata', 160);
$email = value($data, 'email', 254);
$phone = value($data, 'numer_telefonu', 40);
$school = value($data, 'aktualna_szkola', 200);
$language = value($data, 'preferowany_jezyk_obcy', 60);
$semester = value($data, 'semestr_rozpoczecia_nauki', 20);
$interests = value($data, 'zainteresowania', 1200, false);
$competitions = value($data, 'udzial_w_konkursach', 3);
$competitionDetails = value($data, 'konkursy_i_olimpiady_szczegoly', 1000, false);
$antiSpamAnswer = value($data, 'weryfikacja_antyspamowa', 2);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)
    || !preg_match('/^[0-9+() -]{7,}$/', $phone)
    || $antiSpamAnswer !== '7'
    || !in_array($language, ['Język angielski', 'Język hiszpański', 'Język niemiecki', 'Język francuski'], true)
    || !in_array($semester, ['1 semestr', '2 semestr', '3 semestr', '4 semestr', '5 semestr', '6 semestr', '7 semestr'], true)
    || !in_array($competitions, ['tak', 'nie'], true)
) {
    fail(422, 'Nieprawidłowe dane formularza.');
}

$subjects = isset($data['preferowane_przedmioty']) ? $data['preferowane_przedmioty'] : null;
$allowedSubjects = ['Biologia', 'Chemia', 'Matematyka', 'Historia', 'Geografia', 'Fizyka', 'Biznes i Zarządzanie', 'WOS', 'Język polski'];

if (!is_array($subjects) || count($subjects) < 1 || count($subjects) > 3) {
    fail(422, 'Nieprawidłowe dane formularza.');
}

foreach ($subjects as $subject) {
    if (!is_string($subject) || !in_array($subject, $allowedSubjects, true)) {
        fail(422, 'Nieprawidłowe dane formularza.');
    }
}

foreach (['zgoda_na_przetwarzanie_danych', 'zgoda_na_kontakt', 'potwierdzenie_prawdziwosci_danych'] as $consent) {
    $consentValue = isset($data[$consent]) ? $data[$consent] : '';

    if ($consentValue !== ($consent === 'potwierdzenie_prawdziwosci_danych' ? 'potwierdzono' : 'udzielona')) {
        fail(422, 'Wymagane są zgody formularza.');
    }
}

if ($competitions === 'nie') {
    $competitionDetails = '';
}

$clean = function ($text) {
    $cleaned = preg_replace('/[\r\n]+/', ' ', $text);
    return $cleaned === null ? '' : $cleaned;
};
$subject = 'Nowe zgłoszenie rekrutacyjne – ' . $clean($name);
$lines = [
    'Nowe zgłoszenie rekrutacyjne z formularza vp-lo.krakow.pl',
    '',
    'Imię i nazwisko: ' . $name,
    'E-mail: ' . $email,
    'Telefon: ' . $phone,
    'Aktualna szkoła: ' . $school,
    'Preferowany język obcy: ' . $language,
    'Semestr rozpoczęcia: ' . $semester,
    'Preferowane przedmioty rozszerzone: ' . implode(', ', $subjects),
    'Udział w konkursach lub olimpiadach: ' . $competitions,
];

if ($interests !== '') {
    $lines[] = '';
    $lines[] = 'Zainteresowania:';
    $lines[] = $interests;
}

if ($competitionDetails !== '') {
    $lines[] = '';
    $lines[] = 'Konkursy, olimpiady lub osiągnięcia:';
    $lines[] = $competitionDetails;
}

$headers = [
    'From: ' . SENDER,
    'Reply-To: ' . $clean($email),
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
];

if (!mail(RECIPIENT, '=?UTF-8?B?' . base64_encode($subject) . '?=', implode("\r\n", $lines), implode("\r\n", $headers))) {
    fail(502, 'Nie udało się wysłać formularza. Spróbuj ponownie później.');
}

respond(200, ['success' => true, 'message' => 'Formularz został wysłany do szkoły.']);
