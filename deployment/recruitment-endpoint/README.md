# Endpoint formularza rekrutacyjnego

Plik `rekrutacja.php` należy wgrać na stary hosting do katalogu:

`/api/rekrutacja.php`

Docelowy adres endpointu to:

`https://stara.vp-lo.krakow.pl/api/rekrutacja.php`

Przed wdrożeniem trzeba potwierdzić, że zarówno `vp-lo.krakow.pl`, jak i `stara.vp-lo.krakow.pl` działają pod HTTPS z ważnym certyfikatem. Endpoint celowo odrzuca połączenia HTTP, ponieważ formularz zawiera dane osobowe kandydatów.

Endpoint:

- akceptuje tylko żądania `POST` z `https://vp-lo.krakow.pl`;
- nie przyjmuje adresata od przeglądarki: zawsze wysyła na `rekrutacja@vp-lo.krakow.pl`;
- sprawdza pola, zgody i pytanie antyspamowe;
- ma ukryte pole-pułapkę i ograniczenie liczby żądań;
- nie zapisuje danych zgłoszeń na serwerze.

Po wgraniu pliku należy zbudować Reacta poleceniem:

```powershell
npm run build -- --base=/
```

Następnie należy wgrać zawartość `dist` do katalogu głównego docelowej witryny `vp-lo.krakow.pl`.
