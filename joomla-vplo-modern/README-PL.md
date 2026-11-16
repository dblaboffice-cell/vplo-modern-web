# Konfiguracja menu VPLO

## Sportowcy w „Uczniowie na Medal” (od 1.7.79)

Strona pokazuje równe kafelki w dwóch sekcjach: **Obecni uczniowie i ich osiągnięcia** oraz **Absolwenci**. Każdy sportowiec ma osobny artykuł. Istniejący artykuł Jakuba Muniaka i jego zdjęcia pozostają bez zmian. Nowe artykuły mają tekst zastępczy, który można później zastąpić opisem osiągnięć. Pierwsza instalacja ustawia kolejność z listy redakcyjnej; ponowna instalacja nie nadpisuje późniejszych zmian tekstów, etykiet, zdjęć i kolejności.

Aby dodać zdjęcie, otwórz **Treści → Media → images → vplo → edukacja → uczniowie-na-medal** i wczytaj plik. Następnie otwórz **Treści → Artykuły**, wyszukaj imię i nazwisko, przejdź do **Obrazki i łącza → Ilustracja wprowadzenia**, wskaż wgrane zdjęcie i zapisz artykuł. Zdjęcie pojawi się na kafelku. Opis sportowca edytuj w zakładce **Treść**. Napis pod zdjęciem edytuj w **Pola dodatkowe → Dyscyplina / rocznik**. Artykuły absolwentów znajdują się w podkategorii **Uczniowie na Medal → Absolwenci**.

## Istniejące albumy i foldery zdjęć (od 1.7.75)

Aktualizacja przypisuje pole **Folder zdjęć** do dotychczasowych albumów na podstawie ich zapisanych list importu. Albumy wgrane wcześniej przez **Media → images/vplo/galeria** pozostają pod tymi samymi adresami, ale pobierają zdjęcia bezpośrednio z własnych folderów. Zdjęcia dziewięciu najstarszych albumów zapisanych w szablonie są kopiowane do nowych folderów w Mediach; oryginały pozostają na miejscu. Istniejący tytuł, data, okładka, opis i powiązania z Aktualnościami nie są zmieniane. Stare znaczniki zdjęć w treści artykułów pozostają jako kopia awaryjna, lecz na stronie pierwszeństwo ma folder. Jeśli artykuł ma już wpisany inny folder, aktualizacja go nie nadpisuje. Albumy bez pewnego dopasowania są pomijane i wymienione w komunikacie instalatora.

## Album z całego folderu zdjęć (od 1.7.74)

Szablon dodaje do artykułów w trzech kategoriach galerii pole własne **Folder zdjęć**. W Joomla wybierz **Treści → Artykuły → Utwórz**, wpisz tytuł, wybierz kategorię **Galeria → Życie szkoły**, **Projekty edukacyjne** albo **Roczniki**, a w zakładce **Publikacja** ustaw **Datę utworzenia** na dzień wydarzenia. W treści wystarczy krótki opis albumu. Następnie w zakładce **Pola dodatkowe** wpisz **samą nazwę katalogu** z **Media → images/vplo/galeria**, na przykład `52_sesja_naukowa_13_grudnia_2018`. Zapisz artykuł. Wszystkie zdjęcia JPG, PNG, WebP i GIF z tego katalogu pojawią się automatycznie w naturalnej kolejności nazw plików. Nowe zdjęcia dodane później do tego samego katalogu także pojawią się bez ponownej edycji artykułu.

Opcjonalnie w **Obrazki i łącza → Ilustracja wprowadzenia** wybierz zdjęcie okładkowe. Bez tego okładką będzie pierwsze zdjęcie albumu. Dla 52. Sesji Naukowej właściwa data to **13 grudnia 2018**, a kategoria albumu to **Projekty edukacyjne**. Nie zmieniaj osobnego artykułu z listą referatów w **Edukacja → Sesje naukowe uczniów**. Jeżeli pole Folder zdjęć jest puste, dawne albumy nadal czytają zdjęcia z treści artykułu.

## Sesje Naukowe jako osobne artykuły (od 1.7.67)

Każda z 17 dotychczasowych Sesji Naukowych ma własny artykuł w kategorii **Edukacja → Sesje naukowe uczniów**. Dotychczasowa strona archiwum pobiera te artykuły automatycznie i zachowuje rozwijaną listę; nową sesję można dodać lub poprawić w zwykłym edytorze Joomla. Instrukcja redakcyjna znajduje się w `migration-content/INSTRUKCJA-SESJE-NAUKOWE.md` projektu. Import nie nadpisuje artykułów, które już mają treść. Dotychczasowy zbiorczy artykuł zostaje jako punkt menu i kopia awaryjna.

## Mobilne menu i ramki wartości (od 1.7.63)

Na końcu rozwijanego menu mobilnego widoczny jest link z logo Dziennika VULCAN, kierujący do tego samego adresu co link w pasku komputerowym. Trzy klikalne ramki na grafice przesłania patronki mają większe tytuły, ikony i pola dotykowe na telefonie. React pozostaje bez zmian.

## Korekty wyglądu (od 1.7.62)

Tytuł karty przeglądarki na stronie głównej pokazuje pełną nazwę liceum zamiast „Home”. W wersji mobilnej grafika przesłania patronki wypełnia tę samą szerokość co jej ramka, opisy otwierane nad grafiką mają większą czcionkę, a pozycje menu mają równy odstęp między ikoną i nazwą. Zmiany dotyczą tylko szablonu Joomla; React pozostaje bez zmian.

## Albumy według lat szkolnych (od 1.7.61)

Albumy w kategorii **Galeria → Życie szkoły** są automatycznie dzielone na foldery lat szkolnych według pola **Data utworzenia** artykułu. Rok szkolny trwa tu od 1 sierpnia do 31 lipca, tak samo jak w Aktualnościach. Etykieta na karcie i stronie albumu pokazuje właściwy rok szkolny, a link „Powrót do albumów” wraca do tego samego folderu. **Projekty edukacyjne** i **Roczniki** pozostają bez zmian. W Joomla nadal dodaje się nowe albumy do kategorii **Życie szkoły**; nie trzeba przenosić istniejących artykułów ani tworzyć nowych kategorii co roku.

## Kliknięcie nazw działów (od 1.7.60)

W menu komputerowym nazwy Szkoła, Uczeń, Edukacja i Rekrutacja prowadzą do pierwszej opublikowanej podstrony działu; najechanie nadal otwiera podmenu. W menu mobilnym nazwa działu jest osobnym linkiem, a strzałka rozwija podmenu. Adresy są pobierane z pozycji głównego menu Joomla, więc późniejsza zmiana kolejności lub adresu pierwszej podstrony nie wymaga modyfikacji skryptu.

W szablonie 1.7.60 budowanie linków mobilnych musi nastąpić po ułożeniu grup menu, aby pierwsza pozycja na telefonie odpowiadała tej widocznej w podmenu i w wersji komputerowej.

## Mobilne kafelki i stopka (od 1.7.59)

Na stronie głównej cztery kafelki z podmenu (Szkoła, Uczeń, Edukacja, Rekrutacja) rozwijają się na telefonie. Lista podstron oraz pięć linków w stopce są pobierane z opublikowanego głównego menu Joomla, więc zmiany w menu nie wymagają ponownej edycji modułu stopki. Na komputerze kafelki nadal są zwykłymi linkami. Plików Reacta ta aktualizacja nie zmienia.

Konfigurator menu jest dostarczany jako osobny komponent administracyjny `com_vplo_setup-1.0.0.zip`. Nie wymaga SSH ani CLI: instaluje się go z panelu Joomla, a następnie uruchamia jako Super User przez **Komponenty → Konfiguracja VPLO**.

Komponent działa wyłącznie na istniejącym menu `Menu główne PL` typu `mainmenu` oraz na istniejącym module `Menu główne PL`. Nie tworzy `vplo-main-pl`, nie tworzy drugiego modułu i nie modyfikuje strony domyślnej Home.

## Materiały dla kadry (od 1.7.56)

Strona `index.php/materialy-kadra` jest celowo poza menu głównym. Utwórz dla niej osobną pozycję w ukrytym menu, aby Joomla rozpoznawała trasę; treść strony renderuje szablon. Dziesięć plików do pobrania i dziewięć podglądów jest spakowanych jako pliki PHP z blokadą bezpośredniego dostępu. Szablon wydaje je tylko zalogowanej do tej strefy sesji przez `?teacher_asset=...`.

Po instalacji ustaw **nowe, silne hasło** w aktywnym stylu szablonu: **Szablony → Style → tpl_vplo_modern → Ustawienia szablonu → Hasło do materiałów dla kadry**. Nie używaj starego hasła z Reacta, ponieważ jest zapisane w publicznym kodzie tej strony. Hasło wpisuj wyłącznie w panelu Joomla, nie w kodzie ani w czacie. Pusta wartość nie odblokowuje dokumentów. Zmiana hasła unieważnia wcześniejsze sesje.

## Sekretariat (od 1.7.57)

Strona `index.php/sekretariat` także wymaga opublikowanej pozycji w ukrytym menu kanonicznych tras. Szablon pokazuje trzy grupy dokumentów jak w React. Siedem plików do pobrania i pięć podglądów jest wydawanych przez `?secretariat_asset=...` dopiero po sprawdzeniu osobnego hasła na serwerze. Bezpośrednie adresy spakowanych plików PHP nie zwracają ich treści.

Po instalacji właścicielka witryny ustawia **inne nowe, silne hasło** w aktywnym stylu, w polu **Hasło do materiałów sekretariatu**. Nie należy używać hasła z Reacta ani hasła do materiałów nauczycieli. Puste pole pozostawia strefę zamkniętą. React i jego publiczne kopie dokumentów nie są zmieniane przez tę aktualizację.

## Favicon (od 1.7.58)

Szablon wskazuje `media/templates/site/tpl_vplo_modern/images/logo-vplo.png` jako faviconę PNG, tak jak witryna React wskazuje `logo-vplo.png`. Parametr wersji w adresie ikony odświeża pamięć podręczną przeglądarki po instalacji.
