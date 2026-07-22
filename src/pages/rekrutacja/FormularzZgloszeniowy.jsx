import { useState } from 'react';
import { sendRecruitmentForm } from '../../services/recruitmentFormService';

const PROFILE_SUBJECTS = [
    'Biologia',
    'Chemia',
    'Matematyka',
    'Historia',
    'Geografia',
    'Fizyka',
    'Biznes i Zarządzanie',
    'WOS',
    'Język polski',
];

const FOREIGN_LANGUAGES = [
    'Język angielski',
    'Język hiszpański',
    'Język niemiecki',
];

const START_SEMESTERS = [
    '1 semestr',
    '2 semestr',
    '3 semestr',
    '4 semestr',
    '5 semestr',
    '6 semestr',
    '7 semestr',
];

export default function FormularzZgloszeniowy() {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [competitions, setCompetitions] = useState('');
    const [antiSpamAnswer, setAntiSpamAnswer] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState({
        type: '',
        message: '',
    });

    const toggleSubject = (subject) => {
        setSelectedSubjects((currentSubjects) => {
            if (currentSubjects.includes(subject)) {
                return currentSubjects.filter((item) => item !== subject);
            }

            if (currentSubjects.length >= 3) {
                return currentSubjects;
            }

            return [...currentSubjects, subject];
        });

        setFormStatus({
            type: '',
            message: '',
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        /* Ukryte pole antyspamowe */
        if (formData.get('company')) {
            return;
        }

        if (selectedSubjects.length === 0) {
            setFormStatus({
                type: 'error',
                message:
                    'Wybierz przynajmniej jeden preferowany przedmiot rozszerzony.',
            });
            return;
        }

        if (antiSpamAnswer.trim() !== '7') {
            setFormStatus({
                type: 'error',
                message: 'Odpowiedź w polu weryfikacyjnym jest nieprawidłowa.',
            });
            return;
        }

        const applicationData = Object.fromEntries(formData.entries());

        applicationData.preferowane_przedmioty = selectedSubjects;
        applicationData.adres_odbiorcy = 'dyrektor@vp-lo.krakow.pl';

        setIsSubmitting(true);
        setFormStatus({
            type: '',
            message: '',
        });

        try {
            const result = await sendRecruitmentForm(applicationData);

            setFormStatus({
                type: 'success',
                message:
                    result.message ||
                    'Formularz został poprawnie sprawdzony w trybie testowym.',
            });

            form.reset();
            setSelectedSubjects([]);
            setCompetitions('');
            setAntiSpamAnswer('');
        } catch (error) {
            console.error('Błąd formularza:', error);

            setFormStatus({
                type: 'error',
                message:
                    'Nie udało się przetworzyć formularza. Spróbuj ponownie.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="page-wrap container article-page recruitment-page application-page">
            <div className="article-header-grid">
                <div className="page-header">
                    <h1>Formularz zgłoszeniowy</h1>

                    <p className="recruitment-intro-card">
                        Wypełnienie formularza pozwoli rozpocząć procedurę rekrutacyjną.
                        Po otrzymaniu zgłoszenia przedstawiciel liceum skontaktuje się
                        telefonicznie lub mailowo.
                    </p>
                </div>

                <aside className="article-highlights">
                    <h2>Jak to działa?</h2>

                    <ul>
                        <li>Wypełnij formularz</li>
                        <li>Oczekuj na kontakt szkoły</li>
                        <li>Ustal termin rozmowy</li>
                    </ul>
                </aside>
            </div>

            <div className="article-layout">
                <article className="page-main-card">
                    <form className="application-form" onSubmit={handleSubmit}>
                        {/* Ukryte pole – użytkownik go nie widzi */}
                        <div className="form-honeypot" aria-hidden="true">
                            <label htmlFor="company">
                                Pozostaw to pole puste
                            </label>

                            <input
                                id="company"
                                name="company"
                                type="text"
                                tabIndex="-1"
                                autoComplete="off"
                            />
                        </div>

                        <p className="application-required-info">
                            Pola oznaczone gwiazdką są obowiązkowe.
                        </p>

                        <section className="application-form-section">
                            <h2>Dane kontaktowe</h2>

                            <div className="application-form-grid">
                                <div className="application-field application-field-full">
                                    <label htmlFor="candidateName">
                                        Imię i nazwisko kandydata <span>*</span>
                                    </label>

                                    <input
                                        id="candidateName"
                                        name="imie_i_nazwisko_kandydata"
                                        type="text"
                                        autoComplete="name"
                                        required
                                    />
                                </div>

                                <div className="application-field">
                                    <label htmlFor="email">
                                        Adres e-mail <span>*</span>
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                    />
                                </div>

                                <div className="application-field">
                                    <label htmlFor="phone">
                                        Numer telefonu <span>*</span>
                                    </label>

                                    <input
                                        id="phone"
                                        name="numer_telefonu"
                                        type="tel"
                                        autoComplete="tel"
                                        pattern="[0-9+() -]{7,}"
                                        required
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="application-form-section">
                            <h2>Informacje edukacyjne</h2>

                            <div className="application-form-grid">
                                <div className="application-field application-field-full">
                                    <label htmlFor="currentSchool">
                                        Aktualna szkoła <span>*</span>
                                    </label>

                                    <input
                                        id="currentSchool"
                                        name="aktualna_szkola"
                                        type="text"
                                        required
                                    />
                                </div>

                                <div className="application-field">
                                    <label htmlFor="language">
                                        Preferowany język obcy <span>*</span>
                                    </label>

                                    <select
                                        id="language"
                                        name="preferowany_jezyk_obcy"
                                        defaultValue=""
                                        required
                                    >
                                        <option value="" disabled>
                                            Wybierz język
                                        </option>

                                        {FOREIGN_LANGUAGES.map((language) => (
                                            <option key={language} value={language}>
                                                {language}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="application-field">
                                    <label htmlFor="semester">
                                        Semestr rozpoczęcia nauki <span>*</span>
                                    </label>

                                    <select
                                        id="semester"
                                        name="semestr_rozpoczecia_nauki"
                                        defaultValue=""
                                        required
                                    >
                                        <option value="" disabled>
                                            Wybierz semestr
                                        </option>

                                        {START_SEMESTERS.map((semester) => (
                                            <option key={semester} value={semester}>
                                                {semester}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <fieldset className="application-subjects">
                                <legend>
                                    Preferowane przedmioty rozszerzone
                                    <span> — wybierz od 1 do 3 *</span>
                                </legend>

                                <p className="application-selection-counter">
                                    Wybrano: {selectedSubjects.length}/3
                                </p>

                                <div className="application-subjects-grid">
                                    {PROFILE_SUBJECTS.map((subject) => {
                                        const checked = selectedSubjects.includes(subject);
                                        const disabled =
                                            !checked && selectedSubjects.length >= 3;

                                        return (
                                            <label
                                                className={`application-option ${
                                                    checked ? 'is-selected' : ''
                                                }`}
                                                key={subject}
                                            >
                                                <input
                                                    type="checkbox"
                                                    name="preferowane_przedmioty"
                                                    value={subject}
                                                    checked={checked}
                                                    disabled={disabled}
                                                    onChange={() => toggleSubject(subject)}
                                                />

                                                <span>{subject}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </fieldset>
                        </section>

                        <section className="application-form-section">
                            <h2>Zainteresowania i osiągnięcia</h2>

                            <div className="application-field application-field-full">
                                <label htmlFor="interests">
                                    Krótka informacja o zainteresowaniach
                                    <small> — pole nieobowiązkowe</small>
                                </label>

                                <textarea
                                    id="interests"
                                    name="zainteresowania"
                                    rows="5"
                                    maxLength="1200"
                                />
                            </div>

                            <fieldset className="application-radio-group">
                                <legend>
                                    Czy kandydat brał udział w konkursach lub olimpiadach?
                                    <span> *</span>
                                </legend>

                                <div className="application-radio-options">
                                    <label>
                                        <input
                                            type="radio"
                                            name="udzial_w_konkursach"
                                            value="tak"
                                            checked={competitions === 'tak'}
                                            onChange={(event) =>
                                                setCompetitions(event.target.value)
                                            }
                                            required
                                        />

                                        <span>Tak</span>
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            name="udzial_w_konkursach"
                                            value="nie"
                                            checked={competitions === 'nie'}
                                            onChange={(event) =>
                                                setCompetitions(event.target.value)
                                            }
                                            required
                                        />

                                        <span>Nie</span>
                                    </label>
                                </div>
                            </fieldset>

                            {competitions === 'tak' && (
                                <div className="application-field application-field-full">
                                    <label htmlFor="competitionDetails">
                                        Informacja o konkursach, olimpiadach lub osiągnięciach
                                        <small> — pole nieobowiązkowe</small>
                                    </label>

                                    <textarea
                                        id="competitionDetails"
                                        name="konkursy_i_olimpiady_szczegoly"
                                        rows="4"
                                        maxLength="1000"
                                    />
                                </div>
                            )}
                        </section>

                        <section className="application-form-section application-consents">
                            <h2>Zgody i oświadczenia</h2>

                            <details className="application-information-clause">
                                <summary>
                                    Klauzula informacyjna dotycząca danych osobowych
                                </summary>

                                <div>
                                    <p>
                                        Administratorem danych osobowych jest
                                        [PEŁNA NAZWA ADMINISTRATORA PROWADZĄCEGO SZKOŁĘ],
                                        z siedzibą przy ul. Smoleńsk 14, 31-112 Kraków.
                                    </p>

                                    <p>
                                        Kontakt z administratorem jest możliwy pod adresem:
                                        dyrektor@vp-lo.krakow.pl.
                                    </p>

                                    <p>
                                        Dane podane w formularzu będą wykorzystywane w celu
                                        przyjęcia i obsługi zgłoszenia rekrutacyjnego,
                                        przeprowadzenia procesu rekrutacji oraz kontaktu
                                        telefonicznego lub mailowego.
                                    </p>

                                    <p>
                                        Dane będą przechowywane przez okres niezbędny do obsługi
                                        zgłoszenia oraz zgodnie z zasadami przechowywania
                                        dokumentacji przyjętymi przez administratora.
                                    </p>

                                    <p>
                                        Osobie, której dane dotyczą, przysługuje prawo dostępu
                                        do danych, ich sprostowania, ograniczenia przetwarzania
                                        oraz inne prawa przewidziane przepisami, w tym prawo
                                        wniesienia skargi do Prezesa Urzędu Ochrony Danych
                                        Osobowych.
                                    </p>

                                    <p>
                                        Podanie danych obowiązkowych jest niezbędne do obsługi
                                        zgłoszenia. Dane nie będą wykorzystywane do
                                        zautomatyzowanego podejmowania decyzji ani profilowania.
                                    </p>
                                </div>
                            </details>

                            <label className="application-consent">
                                <input
                                    type="checkbox"
                                    name="zgoda_na_przetwarzanie_danych"
                                    value="udzielona"
                                    required
                                />

                                <span>
                  Wyrażam zgodę na przetwarzanie danych osobowych w celu
                  obsługi zgłoszenia i przeprowadzenia procesu
                  rekrutacyjnego. *
                </span>
                            </label>

                            <label className="application-consent">
                                <input
                                    type="checkbox"
                                    name="zgoda_na_kontakt"
                                    value="udzielona"
                                    required
                                />

                                <span>
                  Wyrażam zgodę na kontakt telefoniczny i mailowy związany
                  ze zgłoszeniem rekrutacyjnym. *
                </span>
                            </label>

                            <label className="application-consent">
                                <input
                                    type="checkbox"
                                    name="potwierdzenie_prawdziwosci_danych"
                                    value="potwierdzono"
                                    required
                                />

                                <span>
                  Potwierdzam, że informacje podane w formularzu są zgodne
                  z prawdą. *
                </span>
                            </label>
                        </section>

                        <section className="application-form-section">
                            <h2>Weryfikacja antyspamowa</h2>

                            <div className="application-field application-verification-field">
                                <label htmlFor="antiSpam">
                                    Ile wynosi 3 + 4? <span>*</span>
                                </label>

                                <input
                                    id="antiSpam"
                                    name="weryfikacja_antyspamowa"
                                    type="number"
                                    inputMode="numeric"
                                    value={antiSpamAnswer}
                                    onChange={(event) =>
                                        setAntiSpamAnswer(event.target.value)
                                    }
                                    required
                                />
                            </div>
                        </section>

                        {formStatus.message && (
                            <div
                                className={`application-message application-message-${formStatus.type}`}
                                role="status"
                            >
                                {formStatus.message}
                            </div>
                        )}

                        <div className="application-submit-row">
                            <button
                                type="submit"
                                className="application-submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? 'Sprawdzanie formularza…'
                                    : 'Wyślij formularz'}
                            </button>
                        </div>
                    </form>
                </article>
            </div>
        </section>
    );
}