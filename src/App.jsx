import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  BookOpen,
  CalendarDays,
  ChevronDown,
  FileText,
  GraduationCap,
  Image as ImageIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
  School,
  Trophy,
  Users,
  X,
} from 'lucide-react';
import DlaczegoDoNas from './pages/rekrutacja/DlaczegoDoNas';

const school = {
  name: 'V Prywatne Liceum Ogólnokształcące w Krakowie im. Królowej Jadwigi',
  short: 'Liceum',
  address: 'ul. Smoleńsk 14, 31-112 Kraków',
  phone: '+48 12 422 92 02',
  extraPhone: '+48 881 009 790',
  email: 'dyrektor@vp-lo.krakow.pl',
  founded: 'Rok założenia 1992',
};

const logoSrc = `${import.meta.env.BASE_URL}logo-vplo.png`;
const jadwigaPortraitSrc = `${import.meta.env.BASE_URL}jadwiga-bacciarelli.jpg`;
const jadwigaPaintingSrc = `${import.meta.env.BASE_URL}krolowa-jadwiga-bacciarelli.png`;
const jadwigaTimelineSrc = `${import.meta.env.BASE_URL}os-czasu-jadwiga.png`;
const buildingSrc = `${import.meta.env.BASE_URL}siedziba-vplo.jpg`;
const headerBannerSlides = [
  { src: `${import.meta.env.BASE_URL}smolensk-siedziba.png`, alt: 'Siedziba V Prywatnego Liceum Ogólnokształcącego w Krakowie' },
  { src: `${import.meta.env.BASE_URL}krakow-rynek.jpeg`, alt: 'Rynek Główny w Krakowie' },
  { src: `${import.meta.env.BASE_URL}krakow-rynek-noc.jpeg`, alt: 'Rynek Główny w Krakowie nocą' },
  { src: `${import.meta.env.BASE_URL}krakow-wawel.jpeg`, alt: 'Wawel nad Wisłą' },
  { src: `${import.meta.env.BASE_URL}krakow-wisla.jpeg`, alt: 'Panorama Wawelu i Wisły' },
];
const schoolMapUrl =
  'https://www.google.com/maps/place/V+Prywatne+Liceum+Og%C3%B3lnokszta%C5%82c%C4%85ce/@50.0581904,19.9277046,19.5z/data=!3m1!5s0x47165b0ca90960b1:0x15df860a31a312a3!4m15!1m8!3m7!1s0x47165b0ca9600f99:0x975b3ee8029bc41f!2sSmole%C5%84sk+14,+31-112+Krak%C3%B3w!3b1!8m2!3d50.0583935!4d19.9279931!16s%2Fg%2F11c2fqzxsz!3m5!1s0x47165b0ca9c919b5:0xee22a70dcc45f4fc!8m2!3d50.0583811!4d19.9281055!16s%2Fg%2F1ts1lctz?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D';

const featuredNews = [
  {
    title: 'Dzień Języka Angielskiego 2026',
    excerpt:
      'Wyróżnione wydarzenie szkolne pokazujące aktywność uczniów oraz nowoczesne podejście do nauki języków.',
  },
  {
    title: 'Studniówka 2026',
    excerpt:
      'Galeria i komunikacja wokół jednego z najważniejszych wydarzeń dla klas maturalnych.',
  },
  {
    title: 'Matura 2025/2026',
    excerpt:
      'W jednym miejscu terminy, informacje organizacyjne i materiały dla maturzystów.',
  },
];

const menu = [
  {
    label: 'Aktualności',
    path: '/aktualnosci',
    icon: CalendarDays,
    children: [],
  },
  {
    label: 'O nas',
    path: '/o-nas/przeslanie-dyrektora',
    icon: School,
    children: [
      {
        group: 'Szkoła',
        items: [
          { label: 'Przesłanie Dyrektora', path: '/o-nas/przeslanie-dyrektora' },
          { label: 'Misja Liceum', path: '/o-nas/misja-liceum' },
        ],
      },
      {
        group: 'Patron',
        items: [
          { label: 'Studium Sylwetki Patrona', path: '/o-nas/edukacja/studium-sylwetki-patrona' },
          { label: 'Dlaczego Królowa Jadwiga?', path: '/o-nas/edukacja/dlaczego-krolowa-jadwiga' },
        ],
      },
      {
        group: 'Infrastruktura',
        items: [
          { label: 'Siedziba liceum', path: '/o-nas/infrastruktura/siedziba-liceum' },
          { label: 'Pracownia komputerowa', path: '/o-nas/infrastruktura/pracownia-komputerowa' },
          { label: 'Kawiarenka, ATRIUM i ogród', path: '/o-nas/infrastruktura/kawiarenka-atrium-i-ogrod' },
        ],
      },
      {
        group: 'Dokumenty',
        items: [
          { label: 'Statut', path: '/o-nas/dokumenty/statut' },
          { label: 'Standardy Ochrony Małoletnich', path: '/o-nas/dokumenty/standardy-ochrony-maloletnich' },
        ],
      },
    ],
  },
  {
    label: 'Rekrutacja',
    path: '/rekrutacja/dlaczego-do-nas',
    icon: Users,
    children: [
      {
        group: 'Dla kandydatów',
        items: [
          { label: 'Dlaczego do nas?', path: '/rekrutacja/dlaczego-do-nas' },
          { label: 'Wymagane dokumenty', path: '/rekrutacja/wymagane-dokumenty' },
          { label: 'Kandydaci sportowcy', path: '/rekrutacja/kandydaci-sportowcy' },
          { label: 'Absolwenci i uczniowie o nas', path: '/rekrutacja/absolwenci-i-uczniowie-o-nas' },
          { label: 'Zgłoszenie online', path: '/rekrutacja/zgloszenie-online' },
        ],
      },
    ],
  },
  {
    label: 'Dydaktyka',
    path: '/dydaktyka/edukacja-kulturalna',
    icon: BookOpen,
    children: [
      {
        group: 'Nauka i rozwój',
        items: [
          { label: 'Edukacja kulturalna', path: '/dydaktyka/edukacja-kulturalna' },
          { label: 'Grupy klasowe', path: '/dydaktyka/grupy-klasowe' },
          { label: 'Sesje naukowe', path: '/dydaktyka/sesje-naukowe' },
          { label: 'Szkolna Akademia Filmowa', path: '/dydaktyka/akademia-filmowa' },
          { label: 'Zajęcia warsztatowe', path: '/dydaktyka/zajecia-warsztatowe' },
          { label: 'Zajęcia sportowe - WF', path: '/dydaktyka/zajecia-sportowe-wf' },
          { label: 'Język hiszpański', path: '/dydaktyka/jezyk-hiszpanski' },
          { label: 'Kreatywny uczeń', path: '/dydaktyka/kreatywny-uczen' },
        ],
      },
    ],
  },
  {
    label: 'Matura',
    path: '/matura',
    icon: GraduationCap,
    children: [],
  },
  {
    label: 'Galeria',
    path: '/galeria',
    icon: ImageIcon,
    children: [],
  },
  {
    label: 'Info',
    path: '/info/lekcje-i-przerwy',
    icon: FileText,
    children: [
      {
        group: 'Informacje wewnętrzne',
        items: [
          { label: 'Lekcje i przerwy', path: '/info/lekcje-i-przerwy' },
          { label: 'Podręczniki', path: '/info/podreczniki' },
          { label: 'Rok szkolny 2025-2026', path: '/info/rok-szkolny-2025-2026' },
          { label: 'Projekcje filmowe', path: '/info/projekcje-filmowe' },
        ],
      },
    ],
  },
  {
    label: 'Kontakt',
    path: '/kontakt',
    icon: Mail,
    children: [],
  },
];

const pageContent = {
  '/aktualnosci': {
    title: 'Aktualności',
    lead: 'Sekcja aktualności powinna być łatwa do edycji i dobrze czytelna również na telefonie.',
    body: [
      'W tej wersji strony aktualności są prezentowane w formie nowoczesnych kart z krótkim opisem, datą publikacji i możliwością przypięcia najważniejszych komunikatów.',
      'W docelowym wdrożeniu można bez problemu podłączyć CMS albo panel administracyjny i dodać filtrowanie według roku szkolnego lub kategorii.',
    ],
    highlights: ['Wyróżnione newsy', 'Układ kart', 'Miejsce na zdjęcia i linki do pełnej treści'],
  },
  '/o-nas/przeslanie-dyrektora': {
    title: 'Przesłanie Dyrektora',
    lead: 'Strona otwierająca sekcję "O nas" z miejscem na oficjalny list i zdjęcie dyrekcji.',
    body: [
      'W nowej wersji warto podkreślić charakter szkoły, atmosferę oraz indywidualne podejście do ucznia. Tekst można przedstawić w bardziej eleganckim układzie z wyróżnionymi cytatami.',
      'Obecna architektura aplikacji pozwala później wymienić ten tekst na pełną treść bez zmiany układu strony.',
    ],
    highlights: ['Wizerunek szkoły', 'Profesjonalny układ', 'Łatwa edycja treści'],
  },
  '/o-nas/misja-liceum': {
    title: 'Misja Liceum',
    lead: 'Sekcja przedstawiająca wartości szkoły, cele edukacyjne i sposób pracy z uczniami.',
    body: [
      'Nowoczesna prezentacja misji szkoły powinna być konkretna, klarowna i wsparta czytelnym podziałem na priorytety: wiedza, kultura, rozwój osobisty, odpowiedzialność.',
      'W tym projekcie treść została rozpisana w formie bloków, dzięki czemu można ją łatwo rozbudować o dodatkowe sekcje lub multimedia.',
    ],
    highlights: ['Wartości szkoły', 'Priorytety edukacyjne', 'Czytelny układ treści'],
  },
  '/o-nas/edukacja/studium-sylwetki-patrona': {
    title: 'Studium Sylwetki Patrona',
    lead: 'Królowa Jadwiga Andegaweńska',
    body: [
      'Życie i panowanie Jadwigi Andegaweńskiej\n' +
      '\n' +
      '\n' +
      'Królowa Jadwiga Andegaweńska była córką Ludwika Węgierskiego, króla Węgier i Polski oraz Elżbiety Bośniaczki, królowej węgierskiej i niekoronowanej królowej polskiej, regentki Królestwa Węgier. Była ponadto wnuczką Karola Roberta i Elżbiety Łokietkówny, siostry Kazimierza Wielkiego\n' +
      '\n' +
      'Większość współczesnych badaczy przyjmuje, że przyszła na świat w dniu 18 lutego 1374 (jest to 12 lat później data jej ślubu z Władysławem Jagiełłą, a więc zgodnie z prawem musiała już wówczas mieć wiek sprawny, czyli właśnie 12 lat) roku, lub parę dni wcześniej. Prawdopodobnym miejscem jej narodzin był zamek w Wyszehradzie lub Budzie.\n' +
      '\n' +
      'Pochodziła z dynastii Andegawenów, będącej boczną linią francuskiej dynastii Kapetyngów.  Nazwa dynastii wzięła się od tytułu hrabiego Andegawenii (Anjou), noszonego przez założyciela dynastii – Karola – pogrobowego syna króla Francji, Ludwika VIII. Przedstawiciele Andegawenów panowali m.in. na Sycylii, Węgrzech, w Albanii i w Polsce. Ciekawostką jest, że w jednym z miast rodowej siedziby tej dynastii – Angers, od listopada 1939 do czerwca 1940 r. siedzibę miał Rząd Polski na Uchodźctwie.\n' +
      '\n' +
      'Jadwiga była najmłodszą, trzecią córką Ludwika Węgierskiego i Elżbiety Bośniaczki. Jadwiga posiadała dwie siostry, Katarzynę i Marię. Katarzyna w planach dynastycznych ojca wyznaczona była na królową Polski, jednak zmarła w wieku ośmiu lat. Po śmierci siostry, królową Polski miała zostać Maria, jednak stało się inaczej i to Jadwiga trafiła na polski tron, ze względu na to, że Maria była zaręczona z Zygmuntem Luksemburskim, którego panowie małopolscy absolutnie nie chcieli widzieć na polskim tronie.\n' +
      '\n' +
      'Jadwiga otrzymała imię najpewniej na cześć księżnej wrocławskiej Jadwigi Śląskiej lub księżnej kaliskiej i królowej Polski Jadwigi, żony Władysława Łokietka, a swojej prababki.\n' +
      '\n' +
      'Być może nosiła również drugie imię, słowiańskie - Draga. Imię Jadwiga mogła otrzymać zgodnie z życzeniem babki – Elżbiety Łokietkówny, która była szarą eminencją na dworze węgierskim i miała duży wpływ na swojego syna Ludwika Węgierskiego.\n' +
      '\n' +
      'Jadwiga odebrała bardzo staranne wykształcenie, od najmłodszych lat była przygotowywana do pełnienia roli królowej. Potrafiła czytać i pisać, znała języki obce: łacinę, niemiecki i francuski, a także podstawy polskiego. Wykazywała zainteresowanie nauką, muzyką i sztuką, a jako że wychowywała się na dworze w Budzie, miała ku temu wszelkie możliwości. Warto wspomnieć wpływ kultury francuskiej jak i włoskiej (szczególnie Neapolu) na rozwój dworu Andegawenów na Węgrzech.\n' +
      '\n' +
      'Gdy miała cztery lata, została zaręczona z ośmioletnim księciem austriackim Wilhelmem z dynastii Habsburgów w formule prawa kanonicznego „sponsalia de futuro”.Ta forma stosowana przez dynastie panujące w Europie pozwalała ona na uroczyste zaręczyny niepełnoletnich kandydatów, dzięki czemu możliwe było zawieranie przypieczętowanych małżeństwem sojuszy, bez względu na wiek potomków rodu. Po osiągnięciu wieku sprawnego (12 lat dla dziewcząt, 14 lat dla chłopców) przez zaręczonych, nie ponawiano już właściwej ceremonii ślubnej, a przypieczętowanie małżeństwa miało nastąpić poprzez jego konsumpcje. Nie były to jednak kontrakty nierozerwalne. W przypadku związku Wilhelma Habsburga i Jadwigi Andegaweńskiej  podpisano zobowiązanie według którego, strona zrywająca zaręczyny wypłaca stronie drugiej 200 tys. florenów w złocie. Była to wówczas suma zawrotna.\n' +
      '\n' +
      'Jadwiga nie od razu była kandydatką do polskiego tronu.  Jej matka, Elżbieta Bośniaczka, wdowa po Ludwiku Wielkim, który był królem Węgier i Polski, oba królestwa chciała oddać w ręce starszej córki – Marii, ale jak wspomniano wyżej panowie małopolscy nie mogli się zgodzić na Zygmunta Luksemburskiego, jak i na Wilhelma Habsburga. Regentka Elżbieta Bośniaczka zgodziła się wysłać Jadwigę do Krakowa dopiero po ciągnących się ponad rok negocjacjach, które były bliskie zerwania.  Do wyjazdu i koronacji Jadwigi, Elżbieta odnosiła się z tak wielką rezerwą, że nawet nie przekazała jej przechowywanych na Węgrzech polskich insygniów koronacyjnych.\n' +
      '\n' +
      'Jadwiga ostatecznie przy wielkim nacisku polskich elit (realna groźba zerwania unii z Węgrami) przybyła do Krakowa 13 października 1384 roku, a 16 października została koronowana na króla Polski.  Koronacja odbyła się w katedrze wawelskiej w trakcie specjalnej mszy świętej, w obecności dostojników Królestwa. Koronacji dokonał arcybiskup gnieźnieński - Bodzęta. Ponieważ do kraju nie wróciły insygnia Kazimierza Wielkiego i Ludwika Węgierskiego, berło i jabłko królewskie trzeba było wykonać na nowo.\n' +
      '\n' +
      'Jadwiga, która dotychczas żyła w rodzinnym dobrze znanym środowisku, została osamotniona, zdezorientowana, a skarbiec królewski świecił pustkami w stosunku do tego co było w posiadaniu dworu na Węgrzech. Nie znała jeszcze wówczas dobrze języka polskiego, jedynie jego podstawy, a członkowie rady koronnej, robili wszystko, żeby nie czuła się na Wawelu zbyt pewnie. Pozbawiono ją węgierskich opiekunek, dworzan i wychowawców, odsyłając ich wszystkich z powrotem na Węgry. Miała odtąd uczyć się wszystkiego od Polaków. Więź z domem zapewniał jej tylko dawny prywatny lekarz króla Ludwika, Jan Radlica, który zdążył awansować nie tylko do rangi kanclerza, ale też biskupa krakowskiego. Został osobistym kapelanem, a zarazem najbliższym doradcą i opiekunem młodziutkiej władczyni. Jadwiga podarowała mu w 1384 roku własnoręcznie wyhaftowany zachowany do dziś pas liturgiczny.\n' +
      '\n' +
      'Państwem faktycznie rządzili panowie małopolscy, którzy pozostawali w kontakcie z matką Jadwigi, ale nie powołano formalnie urzędu regenta. Możnowładcy sami podejmowali decyzje nie pytając władczyni-dziecka o zdanie. We wcześniejszych negocjacjach z Elżbietą Bośniacką uzgodniono, że oddadzą dziewczynkę matce po koronacji, aby mogła dokończyć edukację i przygotować się do sprawowania rządów. Ale teraz, gdy Jadwiga Andegaweńska została już królem Polski, uznali, że jej wyjazd z Wawelu nie jest możliwy. Zgodnie z ówczesną praktyką podsuwali jej dokumenty, które ona miała zatwierdzać i ozdabiać swoją pieczęcią, ale nie wnikać w ich treść, co było oczywiście zgodne z ich interesem politycznym.\n' +
      '\n' +
      'Należy jednak wyraźnie podkreślić, że panowie małopolscy nie traktowali Jadwigi jako Andegawenki.  Była ona dla nich ostatnią przedstawicielką głównej linii rodu Piastów, który rządził nimi od ponad 400 lat. W dokumentach podkreślano, że jest „panią przyrodzoną”, jako prawnuczka Władysława Łokietka i wnuczka Elżbiety Łokietkówny.\n' +
      '\n' +
      'Panowie małopolscy zdecydowali się ostatecznie związać Polskę z Litwą i zaproponowali polską koronę wielkiemu księciu litewskiemu Jagielle, który miał przyjąć chrzest razem ze swoimi pogańskimi poddanymi. Tymczasem Jadwiga związana była zaręczynami z Wilhelmem Habsburgiem, którego popierał książę opolski Władysław Opolczyk. Miał on nawet próbować opanować zamek wawelski, chcąc przygotować dopełnienie małżeństwa. Kasztelan krakowski Dobiesław z  Kurozwęk nie wpuścił Austriaka do zamku. Jak podaje Jan Długosz młodziutka królowa chciała uciec z Wawelu do Wilhelma, którego ponoć pokochała poznając go osobiście podczas uczt w refektarzu klasztoru franciszkanów, ale powstrzymał ją podskarbi wielki koronny Dymitr z Goraja. Sam Wilhelm wraz ze świtą rezydował wówczas przy ulicy Legackiej (dziś Poselskiej), w domu Gniewosza z Dalewic, który był jego głównym zwolennikiem wśród panów małopolskich.\n' +
      '\n' +
      'Jadwiga ostatecznie jednak zgodziła się zostać żoną Jagiełły po długotrwałych negocjacjach i wizytach w Krakowie, nawet tak znakomitych posłów jak Skirgiełły, samego rodzonego brata Wielkiego Księcia Litwy. Publicznie odwołała swoje sponsalia z Wilhelmem. Jagiełło wystawił w tym czasie, dokładnie 14 VIII 1385 roku, słynny akt w Krewie, w którym m.in. zobowiązał się do zapłaty Habsburgowi owej sumy 200 tysięcy florenów za zerwanie sponsaliów. Jagiełło  przybył do Krakowa, gdzie 15 lutego 1386 roku przyjął chrzest i przybrał imię Władysław. Następnie 18 lutego zawarł w katedrze na Wawelu związek małżeński z Jadwigą. Jadwiga w chwili ślubu miała na pewno ukończone lat dwanaście, nie więcej niż trzynaście, a Jagiełło około trzydziestu. Dwa tygodnie później 4 III 1386 roku, w katedrze wawelskiej odbyła się uroczysta koronacja Władysława Jagiełły na króla Polski. Koronacji dokonał arcybiskup Bodzęnta w obecności legata pJadwiga była ponoć wysoką (175-180 cm), urodziwą dziewczyną o rudawych włosach. W Europie znana była nie tylko z urody, ale przede wszystkim z mądrej dyplomacji i głębokiej pobożności. Mimo bardzo młodego wieku podejmowała dojrzałe decyzje, choćby w sprawie swojego z Jagiełłą ślubu. Jej silna wiara, świadomość, że przed Bogiem (wprawdzie jako małe dziecko) poślubiła Wilhelma, a zapewne też uczucie, jakim go darzyła, nie pomagały jej w podjęciu decyzji o małżeństwie z tajemniczym księciem z pogańskiego kraju. Miała świadomość, że swoją decyzją spowoduje rozszerzenie chrześcijaństwa na setki tysięcy swoich nowych poddanych, a wszystko to być może za cenę osobistego szczęścia. Choć trudno w przypadku koronowanych władców epoki średniowiecza posługiwać się tego typu kategoriami moralno-emocjonalnymi. Raczej należy rozpatrywać tę w kwestie w aspekcie poczucia obowiązku i odpowiedzialności Jadwigi, która od wczesnego dzieciństwa miała świadomość swojej wyjątkowej roli do spełnienia. W rozumieniu i odpowiednim wypełnianiu swojego powołania, jakim było królowanie nad rzeszami poddanych, pomagała kontemplacja Stwórcy, który oddał swoje życie „za wielu”. Długie godziny spędzała na modlitwie. Klęczała przed wykonaną z lipowego drewna dwumetrową figurą Chrystusa Ukrzyżowanego w katedrze wawelskiej, nazywanego dzisiaj Czarnym Krucyfiksem, czekając na znak z Nieba. Miała ponoć usłyszeć słowa "Czyń, co widzisz".\n' +
      '\n' +
      'W 1387 roku Jadwiga stanęła na czele wyprawy rycerstwa polskiego, której celem była rewindykacja zajętej przez Węgrów Rusi Czerwonej. Potwierdziła też przywileje dla Lwowa, gwarantując mu prawo składu, a hospodar mołdawski Piotr I złożył jej tam hołd lenny. Aby utrzymać dobre stosunki z Węgrami, zaprzestała używania tytułu królowej Węgier, choć się go nie zrzekła. Wraz z mężem spotkali się z Zygmuntem Luksemburskim, który odstąpił dożywotnio Jagielle swoje prawa do Rusi Halickiej, a Jagiełło zrezygnował ze zwierzchnictwa nad Mołdawią i Podolem. Podpisano układ pokojowy na 16 lat. Pozwolił on Polsce wysunąć roszczenia wobec Zakonu krzyżackiego dotyczące zwrotu ziemi dobrzyńskiej. Odbył sie zjazd z udziałem wielkiego mistrza Konrada von Jungingena, na którym krzyżacy nie wyrazili zgody na oddanie tego terenu.\n' +
      '\n' +
      'Jadwiga bardzo dbała o szerzenie wiary na Litwie. W tym celu zorganizowała specjalne kolegium przy Uniwersytecie w Pradze, w którym kształcili się przyszli litewscy księża. Oznacza to, że w końcu lat osiemdziesiątych XIV w. nie planowano jeszcze poważnego odnowienia Uniwersytetu w Krakowie, który zaprzestał działalności po śmierci Kazimierza Wielkiego. Królowa Jadwiga umiała także zjednywać sobie ludzi. Miała pogodzić skłóconych ze sobą Jagiellonów na Litwie znała się na polityce, spotykała się z władcami wrogich państw, prowadziła pertraktacje i uczestniczyła w uzgadnianiu warunków pokoju. Wielokrotnie korespondowała z Wielkimi Mistrzami Zakonu Krzyżackiego, którzy żalili się jej na działania Litwinów i wspieranie ich przez męża królowej Władysława Jagiełłę.\n' +
      '\n' +
      'Starała się bardzo dbać o poddanych, których dobro leżało jej na sercu. Fundowała szpitale i liczne kościoły, uposażała istniejące klasztory. Najbardziej znana jest legenda związana z budową kościoła na Piasku w Krakowie. Pewnego dnia królowa wizytowała budowę tego kościoła i zauważyła jednego bardzo zatroskanego pracownika. Spytała go o powód zmartwienia i dowiedziała się, że znalazł się on w bardzo trudnej sytuacji. Jego żona, matka trójki dzieci była bardzo chora, a on nie miał pieniędzy na leczenie jej. Królowa niewiele myśląc, oderwała od swoich bucików ozdobną klamrę wysadzaną drogimi kamieniami i podarowała mu ją. Odrywając klamrę oparła stopę na kamieniu pokrytym wapnem, na którym pozostał odcisk buta. Po wizycie królowej, murarz zauważył ten ślad stopy na kamieniu, ociosał kamień i wmurował go w ściany świątyni. Do dziś można podziwiać tę odciśniętą stopę. Otoczona kratą, widnieje w jednym z narożników kościoła Karmelitów na Piasku.\n' +
      '\n' +
      'Jadwiga zleciła pierwsze w historii naszego kraju tłumaczenie Księgi Psalmów na język polski. Szczęśliwie zachował się egzemplarz tego dzieła znany pod nazwą Psałterz floriański bądź Psałterz Jadwigi. Jego nazwa pochodzi od miejscowości w Austrii - Sankt Florian, gdzie w 1931 roku w imieniu polskiego rządu zakupił go Ludwik Bernacki, dyrektor lwowskiego Ossolineum. W czasie II wojny światowej Psałterz został wywieziony do Kanady, a do Warszawy powrócił po 28 latach i obecnie znajduje się w zbiorach specjalnych Biblioteki Narodowej w Warszawie.\n' +
      '\n' +
      'Była osobą niesłychanie religijną, bardzo dużo czasu spędzała na modlitwie, praktykowała umartwianie się.  Oprócz zlecenia tłumaczenia Księgi Psalmów, fundowała też tłumaczenia pism Ojców Kościoła dla katedry wawelskiej. Pragnęła, aby tam chwalono Boga psalmami, dlatego ustanowiła specjalne kolegium szesnastu psalterzystów, którzy dzień i noc śpiewali psalmy przed Najświętszym Sakramentem. Ufundowała także i częściowo sama wyhaftowała racjonał - element szaty liturgicznej, dla biskupów krakowskich. Racjonał zachował się do dziś i jest używany podczas największych uroczystości kościelnych w katedrze wawelskiej.\n' +
      '\n' +
      'Cały swój majątek ruchomy zapisała na rzecz odnowienia i rozbudowy Uniwersytet Krakowskiego. U papieża wyprosiła pozwolenie na utworzenie na Uniwersytecie Wydziału Teologicznego, co znacznie przyspieszyło ewangelizację na całym obszarze ogromnego królestwa ziem polskich, litewskich i ruskich. Posiadanie takiego wydziału bardzo podnosiło rangę uczelni, która od tej pory zaczęła liczyć się bardzo w Europie.\n' +
      '\n' +
      'W wieku 25 lat, 22 czerwca 1399 roku Jadwiga Andegaweńska urodziła córkę Elżbietę Bonifację. Córeczka niestety zmarła po trzech tygodniach, a cztery dni po śmierci córki - 17 lipca 1399 roku zmarła także Jadwiga. Nie wiadomo co było przyczyną śmierci królowej, przypuszcza się, że zmarła na gorączkę połogową. Wiadomo, że królowa była wysoką osobą o silnej budowie i bardzo wąskiej miednicy. Gdyby wówczas wykonywano cesarskie cięcia, to prawdopodobnie Jadwiga by przeżyła.\n' +
      '\n' +
      'Królowa Jadwiga została pochowana w katedrze wawelskie 19 lipca 1399 roku. Pochowano ją w bardzo skromnym grobie, być może w oczekiwaniu na rychłą kanonizację Jadwigi. Początkowo skromna płyta grobowca spoczywała po północnej stronie prezbiterium, obok ołtarza. Według źródeł z XVI wieku napis na grobie królowej brzmiał: "Gwiazda Polaków, tu spoczywa Jadwiga ich Królowa". Podczas przebudowy prezbiterium, pierwotna płyta nagrobna uległa zniszczeniu. W 1634 roku wykonano nową płytę memoratywną z czarnego marmuru, z nową inskrypcją, fundacji biskupa Piotra Gembickiego. Sarkofag królowej Jadwigi był kilkakrotnie otwierany. Pierwszy raz w XVII wieku, w czasie przebudowy katedry. W XIX wieku został otwarty w obecności Jana Matejki, który przygotowywał portrety polskich władców. Trumna zawierała kompletny szkielet i królewski płaszcz. Matejko wykonał szkic czaszki, po czym szczątki królowej umieszczono w miedzianej trumnie, a tę w większej dębowej, po czym grób ponownie zamurowano. Kolejne otwarcie grobu nastąpiło w 1949 roku, kiedy to naukowcy prowadzili badania szczątków królowej. Stwierdzono wówczas, że monarchini została prawdopodobnie pochowana ze swoją zmarłą trzy tygodnie wcześniej córeczką, której szkielet się nie zachował. Charakterystyczne było ułożenie postaci Jadwigi, zbliżone do jednego z boków trumny, co tłumaczono tym, że obok leżało ciało dziecka. Świadczyło to też o tym, że od dnia pogrzebu ciało nie było ruszane.\n' +
      '\n' +
      'W 1987 roku relikwie królowej Jadwigi umieszczono w mensie ołtarza z czarnym krucyfiksem, z którego według legendy przemówił do niej Chrystus. Osobisty, papieski relikwiarz świętej Jadwigi królowej znajduje się w zbiorach muzealnych Ośrodka Dokumentacji i Studium Pontyfikatu Jana Pawła II w Rzymie.\n' +
      '\n' +
      'Pierwsze próby wyniesienia na ołtarze Jadwigi podjął w 1426 roku arcybiskup gnieźnieński Wojciech Jastrzębiec, jednak zakończyły się one niepowodzeniem. Stolica Apostolska odpowiadała, że Polscy mają już jedną świętą Jadwigę (Jadwiga Śląska, żona Henryka Brodatego). Następnie w 1949 roku arcybiskup krakowski Adam Stefan Sapieha, zebrał materiały dotyczące przyszłej świętej i przesłał je do Rzymu. Tym razem również Stolica Apostolska nie zgodziła się na rozpoczęcie procedury beatyfikacyjnej. Dopiero Karol Wojtyła w 1974 roku wydał orzeczenie o istnieniu publicznego kultu oddawanego od "niepamiętnych czasów", co pozwoliło kardynałowi Franciszkowi Macharskiemu zwrócić się do Watykanu z prośbą o zatwierdzenie tego kultu. W 1979 roku Karol Wojtyła, już jako papież Jan Paweł II, na dwa dni przed pierwszą pielgrzymką do Polski, dokonał beatyfikacji bł. Jadwigi, poprzez zatwierdzenie jej publicznego kultu.\n' +
      '\n' +
      'Uroczystej kanonizacji świętej Jadwigi dokonał papież Jan Paweł II, 8 czerwca 1997 roku na uroczystej mszy świętej sprawowanej na krakowskich błoniach - odbyło się to w obecności około miliona wiernych. Ojciec Święty zakończył kazanie przywołując średniowieczny hymn nieszporny śpiewany współcześnie na rozpoczęcie roku akademickiego „Gaude Mater Polonia”. Była to pierwsza w dziejach kanonizacja na ziemi polskiej. Od dnia kanonizacji wspomnienie liturgiczne w Kościele katolickim obchodzone jest 8 czerwca.\n' +
      '\n' +
      'Święta Jadwiga jest patronką Inowrocławia, Tczewa, Nieszawy i Radomska. Polski kompozytor Karol Krupiński w 1814 roku poświęcił królowej Jadwidze operę "Jadwiga Królowa Polska", do libretta Juliana Ursyna Niemcewicza. Berło królowej Jadwigi, tzw. rektorskie, ze złoconego srebra, przechowywane jest obecnie w Collegium Maius Uniwersytetu Jagiellońskiego w Krakowie. Jabłko i berło królowej - drewniane, złocone insygnia grobowe, przechowywane są w katedrze na Wawelu.\n' +
      '\n' +
      'W ikonografii św. Jadwiga przedstawiana jest w stroju królewskim.  Jej atrybutem są buciki, co związane jest z legendą. Królowa Jadwiga wraz Władysławem Jagiełłą królowali prawie trzynaście lat. Jagiełło, mimo że po śmierci Jadwigi posiadał jeszcze trzy żony, do końca życia nosił podarowany mu przez nią pierścień, co świadczy o szczególnym przywiązaniu władcy do swojej pierwszej małżonki.\n' +
      '\n' +
      'Opracowanie Dr Kamil Świderski\n' +
      '\n' +
      '  ',

    ],
    highlights: ['Tożsamość szkoły', 'Historia', 'Oś czasu'],
    layout: 'article',
    firstBlockHeading: true,
    showHighlights: true,
    author: 'Opracowanie: dr Kamil Świderski',
    timelineImage: true,
  },
  '/o-nas/edukacja/dlaczego-krolowa-jadwiga': {
    title: 'Dlaczego Królowa Jadwiga?',
    lead: '',
    body: [
      'Odpowiedź formalna jest bardzo prosta. Bo takie są wskazania Samorządu Uczniowskiego i Rady Pedagogicznej zgodne z oczekiwaniami Założycieli, którzy stanowią Organ Prowadzący Liceum. Zatrzymajmy się jednak nad istotą merytoryczną problemu Patrona Szkoły.  \n' +
      '\n' +
      'Każda instytucja, a szczególnie szkoła, uczelnia, jednostka posiadająca w profilu własnej aktywności działalność edukacyjną, naukową, bądź inną działalność publiczną w celu podniesienia prestiżu, jeśli o prestiż taki zabiega,  utożsamia swoją aktywność z postacią bądź wydarzeniem historycznym, które na tę inspirację wskazują.\n' +
      '\n' +
      'I choć do faktów źródłowych w przypadku Królowej Jadwigi się odwołujemy bo takie jest spojrzenie naszego historyka, mediewisty dr Kamila Świderskiego, który w znakomitym studium sylwetki  prezentowanym w eseju  Życie i panowanie Jadwigi Andegaweńskiej to odpowiedź na tytułowe pytanie ulokujemy w formule filozoficznej, bliższej analogowej, dopuszczającej syntezę faktów. Uważny czytelnik dostrzeże, że bez studium dra Kamila Świderskiego rozważania nasze byłyby niekompletne.\n' +
      '\n' +
      'W istocie funkcjonowanie V Prywatnego Liceum Ogólnokształcącego, od czasu założenia w 1992 roku, ukierunkowane jest na formowanie w środowisku naszych uczniów, profesorów, administracji - szczególnie pożądanego  w środowisku edukacyjnym - stanu otwartości życia.\n' +
      '\n' +
      'Otwartości uczniów na ubogacanie wiedzy, mądrości, wrażliwości, gotowości na podejmowanie działań często znacznie wykraczających poza zakres obowiązujących treści programowych.\n' +
      '\n' +
      'Otwartości profesorów na przybliżanie treści nauczanych przedmiotów do zdolności percepcyjnych uczniów, której rezultat stanowi radość poznawcza, a nie wyłącznie obowiązek udziału w lekcjach.\n' +
      '\n' +
      'I w końcu otwartością administracji w wypełnianiu własnych obowiązków z promieniującą serdecznością, życzliwością i uśmiechem, bez sygnalizowania znużenia powtarzalnością wykonywanych czynności.\n' +
      '\n' +
      ' \n' +
      '\n' +
      'Dokonajmy w tym miejscu zmiany kierunku naszych rozważań i przez kilka chwil podążajmy za sylwetką Królowej Jadwigi. Proszę zauważyć, że przenosimy się do XIV wieku. Do czasu odmiennych od współczesnych uwarunkowań społecznych, cywilizacyjnych. Zatrzymajmy się na tych, które definiują postawę osoby, istoty ludzkiej, które są czytelne i nie budzące żadnych wątpliwości, w analizie stanu otwartości życia.\n' +
      '\n' +
      'Jadwiga była osobą staranne wykształconą. Staranność należy tutaj utożsamiać z wszechstronnym wykształceniem, współcześnie o profilu dyplomatycznym. Od najmłodszych lat była przygotowywana do pełnienia roli królowej. Dowodziła zainteresowanie nauką, muzyką i sztuką. Trzeba zaznaczyć, że podlegała  wpływom kultury francuskiej i włoskiej poprzez dwór Andegawenów na Węgrzech. Na to wyraźnie wskazują materiały źródłowe.\n' +
      '\n' +
      'Jej otwartość po koronacji na Króla Polski w wieku 10 lat przejawiała się we wszystkich aspektach funkcjonowania. Od spraw niemal symbolicznych po decyzje mające wpływ na sprawy kraju. Od legendo-twórczej ofiary złotej klamerki pantofelka, którą dała zatroskanemu o zdrowie żony kamieniarzowi przy budowie Kościoła NMP w Krakowie przy ul. Karmelickiej po fundacje ołtarzy, kościołów, szat liturgicznych, a w końcu ofiarowanie całego swojego majątku na rzecz chylącej się ku upadkowi Akademii Krakowskiej, współcześnie Uniwersytetu Jagiellońskiego.\n' +
      '\n' +
      ' \n' +
      '\n' +
      'Obraz Królowej Jadwigi (Marcello Bacciarelli, 1768-1771) Zamek Królewski w Warszawie,\n' +
      'Sala Marmurowa\n' +
      '\n' +
      ' \n' +
      '\n' +
      ' \n' +
      '\n' +
      'Kroniki relacjonują o wielkiej piękności Królowej Jadwigi. Była najatrakcyjniejszą księżniczką Europy. Wyobrazić można ją sobie jako wysoką blondynkę o pięknych, regularnych rysach twarzy. Los kazał oddać jej serce i rękę trzykrotnie starszemu od niej Jagielle.17 lutego 1386 roku. W Katedrze wawelskiej odbył się ślub, a za tym  koronacja Jagiełły. Przez swój ślub z Jagiełłą doprowadziła do chrystianizacji Litwy. Za jej wstawiennictwem u papieża powstała diecezja w Wilnie.\n' +
      '\n' +
      'Jej stan otwartości życia spowodowały, że większość osobistych dóbr: klejnotów, drogocennych szat, sreber, osobistych sprzętów przekazała na potrzeby Akademii. Dzięki tym sumom zakupiono w Krakowie kamienice, które po przebudowie stanowią dzisiejsze Collegium Maius. Fundowała kapłanom naczynia i szaty liturgiczne. Dzięki niej na krakowskim uniwersytecie powstał Wydział Teologiczny. Zakładała szpitale, pomagała chorym i biednym. Wielokrotnie broniła chłopów w sporach z magnaterią polską i z samym królem. Wiele razy zażegnywała konflikt z zakonem krzyżackim. W licznych przypadkach Jej stan otwartości życia, który demonstrujemy jest stanem otwartości heroicznej.\n' +
      '\n' +
      'Zadbała przy tym o rozwój intelektualny przysposobionych rodaków utrzymując na Uniwersytecie Praskim kolegium dla Litwinów. Z tego powodu Królowa cieszyła się ogromnym uznaniem. Była osobą, która zażegnywała spory książąt litewskich, zarzewia wojen. Zawsze broniła polskiej racji stanu.\n' +
      '\n' +
      'W 1399 roku Jadwiga urodziła córeczkę. Niemowlę zmarło po trzech tygodniach, a 17 lipca 1399 roku, zmarła także królowa. Jej ciało złożono w Katedrze na Wawelu, przy wielkim ołtarzu. Wkrótce po śmierci zaczęto uważać ją za świętą, ludzie pielgrzymowali do jej grobu słynącego z cudów.\n' +
      '\n' +
      'Od 1949 r. prochy jej spoczywały w alabastrowym sarkofagu dłuta Antoniego Madeyskiego. Grób ten przez lata był oblegany przez pielgrzymki. W 1986 r. rzymska Kongregacja do Spraw Świętych ogłosiła deklarację potwierdzającą kult Jadwigi od niepamiętnych czasów, akt równoznaczny z beatyfikacją.\n' +
      '\n' +
      'W następnym roku doczesne szczątki królowej Jadwigi złożono w ołtarzu cudownego Pana Jezusa, pod Czarnym Krucyfiksem. 8 czerwca 1997 roku papież Jan Paweł Wielki kanonizował Jadwigę na błoniach krakowskich. W mszy kanonizacyjnej  uczestniczyło ponad milion osób. W tym miejscu Założyciele Liceum: Lidia i Jerzy Białkiewiczowie  potwierdzają własny udział w tej doniosłej uroczystości.\n' +
      '\n' +
      'Proszę zauważyć, że uroczystości kanonizacyjne odbywały się w piątą rocznicę od czasu utworzenia naszego Liceum. I trzeba było czekać, aż 25 lat, by myśl o Królowej Jadwidze jako Naszej Patronce dojrzała w 30. lecie działalności Szkoły, która upoważniła nas do umiejscowienia na sztandarze inskrypcji:\n' +
      '\n' +
      ' \n' +
      '\n' +
      'Sancta Jadwiga Regina Patrona Lycei  Nostri\n' +
      '\n' +
      ' \n' +
      '\n' +
      ' prof. dr hab. inż. Jerzy Białkiewicz',
    ],
    highlights: ['Narracyjny układ', 'Miejsce na cytaty', 'Spójność z resztą strony'],
    layout: 'article',
    imageCaption: 'Obraz Królowej Jadwigi',
  },
  '/o-nas/infrastruktura/siedziba-liceum': {
    title: 'Siedziba liceum',
    lead: 'Historia i współczesność siedziby Liceum - rok założenia 1992',
    body: [
      'V Prywatne Liceum Ogólnokształcące zlokalizowane jest przy ul. Smoleńsk 14 w pałacyku zbudowanym w stylu art déco, zlokalizowanym w ścisłym centrum Krakowa - niespełna 5 minut spaceru od Zamku Królewskiego na Wawelu i Collegium Novum Uniwersytetu Jagiellońskiego.\n' +
      'Pałacyk został zaprojektowany i zbudowany w konwencji willi pod nadzorem autorskim przez profesora Wacława Krzyżanowskiego, znakomitego architekta okresu międzywojennego, autora wybitnych dzieł użyteczności publicznej - w najbliższym otoczeniu Pałacu: gmach Biblioteki Jagiellońskiej, Gmach A-0 Akademii Górniczo-Hutniczej, ponadto liczne obiekty sakralne, a także rezydencje prywatne - m. in. Zamek Tarnowskich w Tarnobrzegu.\n' +
      'Architektura art déco budynku nawiązująca do form klasycznych w liniach, ornamentyce, stylizowaniach geometrycznych i funkcjonalnych znakomicie komponuje się z potrzebami edukacyjnymi, szczególnie w przestrzennej aranżacji wnętrz.\n' +
      'Budynek należało przystosować do potrzeb edukacyjnych nie naruszając pierwotnej koncepcji architektonicznej profesora Wacława Krzyżanowskiego. Dzieło konserwacji zostało zaprojektowane i wykonane pod nadzorem autorskim przez profesora, architekta Andrzeja Białkiewicza, kierownika Zakładu Rysunku, Malarstwa i Rzeźby ponadto, aktualnie Rektora Politechniki Krakowskiej.\n' +
      'Współcześnie pałacyk przy ul. Smoleńsk 14 stanowi perłę architektury Krakowa z okresu międzywojennego, a jednocześnie w rozwiązaniach edukacyjnych zaprojektowanych i zrealizowanych pod kierunkiem prof. dr hab. Jerzego Marka Białkiewicza standaryzuje obiekt w kategoriach najnowocześniejszych, elitarnych szkół XXI wieku - w zabytkowej tkance architektonicznej miasta uniwersyteckiego.\n' +
      'Komfort edukacyjny zapewniają przyjęte rozwiązania komunikacyjne i recepcyjne. Ich oryginalność osiągnięto w wyniku utworzenia Atrium z przeznaczeniem rekreacyjnym na cele klubowe z telewizją satelitarną, komputerami z nieograniczonym, światłowodowym dostępem do Internetu, kawiarnią i ekskluzywną garderobą.\n' +
      'Szczególną uwagę poświęcono wyposażeniu pomieszczeń dydaktycznych. Starannie wyselekcjonowane firmy w Warszawie i Krakowie wyposażyły szkołę w atestowane stanowiska audytoryjne. Oświetlenie sal powierzono specjalistycznym firmom, które na podstawie symulacji komputerowych - zapewniających równomierność natężenia światła w każdym z punktów sali - dokonały wyboru i montażu właściwych źródeł światła.\n' +
      'Sale wyposażone są w tablice bezpyłowe. Każda z sal wykładowych i ćwiczeniowych została wyposażona w łącze sieci komputerowej ze stałym dostępem do Internetu i telewizji satelitarnej. Ponadto sale wyposażone są w komputery z pełnym oprogramowaniem Microsoft Office, projektory multimedialne z elektrycznie opuszczanymi ekranami, rzutniki pisma.\n' +
      'Aranżację wnętrz pomieszczeń recepcyjnych (2 Poziom budynku): holu wejściowego, 2. sekretariatów, gabinetów dyrektorskich i sali senackiej zostało powierzone artystycznym pracowniom dekoratorskim o uznanym dorobku w prestiżowych obiektach użyteczności publicznej w Polsce.\n' +
      'Pałacyk wyposażony jest w optymalnie skonfigurowaną do prowadzenia zajęć dydaktycznych pracownię komputerową. Wszystkie stanowiska komputerowe mają stały dostęp do Internetu.\n' +
      '\n',
    ],
    highlights: ['Duże zdjęcia', 'Mapa', 'Lokalizacja w centrum Krakowa'],
  },
  '/o-nas/infrastruktura/pracownia-komputerowa': {
    title: 'Pracownia komputerowa',
    lead: 'Podstrona pokazująca zaplecze technologiczne i warunki prowadzenia zajęć.',
    body: [
      'Projekt zakłada modułowe sekcje: wyposażenie, dostęp do internetu, oprogramowanie i zastosowanie pracowni podczas lekcji.',
      'Układ da się łatwo rozbudować o specyfikację stanowisk lub zdjęcia sali.',
    ],
    highlights: ['Technologia', 'Przestrzeń do zdjęć', 'Bloki informacyjne'],
  },
  '/o-nas/infrastruktura/kawiarenka-atrium-i-ogrod': {
    title: 'Kawiarenka, ATRIUM i ogród',
    lead: 'Miejsce na pokazanie codziennej atmosfery szkoły i przestrzeni wspólnej.',
    body: [
      'W nowej odsłonie ta zakładka może mieć bardziej lifestylowy charakter: zdjęcia, krótkie opisy, cytaty uczniów i elementy budujące klimat miejsca.',
      'To dobra sekcja do pokazania, że szkoła jest nie tylko instytucją edukacyjną, ale też przyjazną przestrzenią.',
    ],
    highlights: ['Atmosfera', 'Galeria wnętrz', 'Budowanie wizerunku'],
  },
  '/o-nas/dokumenty/statut': {
    title: 'Statut',
    lead: 'Sekcja dokumentów z miejscem na pliki PDF i wersje do pobrania.',
    body: [
      'W gotowym wdrożeniu najlepiej osadzać aktualny dokument bezpośrednio jako link do pliku lub przeglądarkę PDF.',
      'Układ wspiera także dodatkowe dokumenty formalne, regulaminy i archiwalne wersje.',
    ],
    highlights: ['Link do PDF', 'Archiwum wersji', 'Czytelna organizacja dokumentów'],
  },
  '/o-nas/dokumenty/standardy-ochrony-maloletnich': {
    title: 'Standardy Ochrony Małoletnich',
    lead: 'Wyraźnie wyeksponowana zakładka dla ważnych dokumentów i polityk szkoły.',
    body: [
      'Ta podstrona została przewidziana jako prosty i czytelny moduł z krótkim opisem oraz miejscem na pobranie dokumentu.',
      'W wersji produkcyjnej warto dodać datę aktualizacji oraz osobę odpowiedzialną za publikację.',
    ],
    highlights: ['Widoczność ważnych dokumentów', 'Data aktualizacji', 'Pobieranie plików'],
  },
  '/rekrutacja/wymagane-dokumenty': {
    title: 'Wymagane dokumenty',
    lead: 'Przejrzysta lista formalności potrzebnych kandydatom.',
    body: [
      'Ta podstrona jest gotowa do prezentacji listy dokumentów, terminów i procedury krok po kroku.',
      'Dzięki prostemu układowi kandydat łatwo znajdzie wszystkie wymagane informacje również na smartfonie.',
    ],
    highlights: ['Lista dokumentów', 'Kroki rekrutacji', 'Przyjazny układ mobilny'],
  },
  '/rekrutacja/kandydaci-sportowcy': {
    title: 'Kandydaci sportowcy',
    lead: 'Dedykowana sekcja dla uczniów łączących naukę z rozwojem sportowym.',
    body: [
      'Projekt przewiduje miejsce na opis elastycznej organizacji nauki, współpracy z trenerami oraz zasad indywidualizacji procesu edukacyjnego.',
      'To jedna z ważniejszych zakładek wizerunkowych dla szkoły i warto ją mocno wyróżnić.',
    ],
    highlights: ['Elastyczność', 'Wsparcie dla sportowców', 'Czytelna komunikacja'],
  },
  '/rekrutacja/absolwenci-i-uczniowie-o-nas': {
    title: 'Absolwenci i uczniowie o nas',
    lead: 'Nowoczesna sekcja testimoniali z opiniami i krótkimi historiami.',
    body: [
      'Zamiast ściany tekstu proponowany układ kart pomaga wyeksponować wypowiedzi absolwentów i uczniów w bardziej atrakcyjnej formie.',
      'Można dodać zdjęcia, rok ukończenia szkoły lub kierunek studiów.',
    ],
    highlights: ['Opinie w formie kart', 'Budowanie zaufania', 'Lepsza czytelność'],
  },
  '/rekrutacja/zgloszenie-online': {
    title: 'Zgłoszenie online',
    lead: 'Sekcja z formularzem kontaktowym lub odnośnikiem do zewnętrznego systemu zgłoszeń.',
    body: [
      'W tej wersji strony formularz może zbierać podstawowe dane kandydata i przekazywać je do sekretariatu.',
      'Można też zastąpić go integracją z Google Forms, Typeform lub własnym backendem.',
    ],
    highlights: ['Formularz online', 'Szybki kontakt', 'Możliwość integracji'],
  },
  '/dydaktyka/edukacja-kulturalna': {
    title: 'Edukacja kulturalna',
    lead: 'Podstrona podkreślająca humanistyczny i interdyscyplinarny wymiar nauczania.',
    body: [
      'Sekcja została pomyślana jako opowieść o kulturze, sztuce i rozwijaniu wrażliwości uczniów, z miejscem na przykłady wydarzeń i inicjatyw.',
      'Dobrze współgra z nowoczesnym layoutem, zdjęciami i dodatkowymi blokami tematycznymi.',
    ],
    highlights: ['Humanistyka', 'Interdyscyplinarność', 'Wydarzenia kulturalne'],
  },
  '/dydaktyka/grupy-klasowe': {
    title: 'Grupy klasowe',
    lead: 'Sekcja o kameralnych klasach i organizacji pracy w mniejszych zespołach.',
    body: [
      'W nowym układzie można zaakcentować zalety mniejszych grup: większy kontakt z nauczycielem, lepszą atmosferę i skuteczniejszą pracę.',
      'Podstrona może także zawierać infografiki lub liczby wspierające przekaz.',
    ],
    highlights: ['Kameralne klasy', 'Infografiki', 'Mocny argument rekrutacyjny'],
  },
  '/dydaktyka/sesje-naukowe': {
    title: 'Sesje naukowe',
    lead: 'Miejsce na prezentację tradycji szkolnych konferencji i aktywności akademickiej uczniów.',
    body: [
      'Sekcja może zawierać archiwum sesji, zdjęcia, tematy wystąpień i krótkie opisy projektów uczniów.',
      'To dobry element odróżniający szkołę od standardowych liceów.',
    ],
    highlights: ['Archiwum wydarzeń', 'Prestiż', 'Rozwój naukowy'],
  },
  '/dydaktyka/akademia-filmowa': {
    title: 'Szkolna Akademia Filmowa',
    lead: 'Sekcja poświęcona analizie filmu i edukacji audiowizualnej.',
    body: [
      'Tutaj warto wyeksponować program, repertuar, komentarze do projekcji oraz wartość edukacyjną tego działania.',
      'Nowoczesny layout dobrze wspiera sekcje z polecanymi filmami i mini-opisami.',
    ],
    highlights: ['Edukacja filmowa', 'Program zajęć', 'Lista projekcji'],
  },
  '/dydaktyka/zajecia-warsztatowe': {
    title: 'Zajęcia warsztatowe',
    lead: 'Podstrona o praktycznej pracy z uczniem i rozwijaniu kompetencji miękkich.',
    body: [
      'W nowej wersji strony warsztaty można pokazać jako zestaw modułów z przykładami tematów i osiągnięć uczniów.',
      'Układ kart i ikon ułatwia szybkie skanowanie treści.',
    ],
    highlights: ['Kompetencje miękkie', 'Forma warsztatowa', 'Czytelne moduły'],
  },
  '/dydaktyka/zajecia-sportowe-wf': {
    title: 'Zajęcia sportowe - WF',
    lead: 'Sekcja opisująca aktywność fizyczną i sposób organizacji zajęć sportowych.',
    body: [
      'To dobre miejsce na opis tenisa, siłowni, sezonowych aktywności oraz podejścia szkoły do ruchu i zdrowia.',
      'W nowoczesnej odsłonie można dodać galerię i krótkie bloki z najważniejszymi formami aktywności.',
    ],
    highlights: ['Sport i zdrowie', 'Zdjęcia aktywności', 'Elastyczny układ treści'],
  },
  '/dydaktyka/jezyk-hiszpanski': {
    title: 'Język hiszpański',
    lead: 'Prezentacja oferty językowej i nowoczesnych metod nauczania.',
    body: [
      'Podstrona została przygotowana pod rozbudowę o poziomy nauczania, projekty językowe i elementy kultury hiszpańskojęzycznej.',
      'Można tu łatwo dodać materiały, zdjęcia oraz przykłady aktywności uczniów.',
    ],
    highlights: ['Oferta językowa', 'Nowoczesne metody', 'Treści kulturowe'],
  },
  '/dydaktyka/kreatywny-uczen': {
    title: 'Kreatywny uczeń',
    lead: 'Sekcja dla programu lub inicjatywy wspierającej uczniów o ponadprzeciętnym potencjale.',
    body: [
      'Projekt umożliwia pokazanie zasad rekrutacji, korzyści programu i przykładów działań podejmowanych przez uczniów.',
      'Jest to dobra podstrona do wykorzystania jako wyróżnik szkoły.',
    ],
    highlights: ['Program rozwojowy', 'Wyróżnik szkoły', 'Sekcja do rozbudowy'],
  },
  '/matura': {
    title: 'Matura',
    lead: 'Centralne miejsce dla uczniów klas maturalnych i rodziców.',
    body: [
      'Na tej stronie można zebrać harmonogram, procedury, komunikaty i linki do materiałów przygotowawczych.',
      'W wersji docelowej warto dodać sekcję FAQ oraz dokumenty do pobrania.',
    ],
    highlights: ['Harmonogram', 'FAQ', 'Pliki do pobrania'],
  },
  '/galeria': {
    title: 'Galeria',
    lead: 'Nowoczesny widok galerii z kategoriami, siatką zdjęć i filtrowaniem.',
    body: [
      'Obecna architektura może zostać rozwinięta o lightbox, albumy rocznikowe i kategorie wydarzeń.',
      'Zachowano też przestrzeń na takie wydarzenia jak studniówka, uroczystości szkolne i wyjścia edukacyjne.',
    ],
    highlights: ['Kategorie albumów', 'Lekki grid', 'Możliwość rozbudowy o lightbox'],
  },
  '/info/lekcje-i-przerwy': {
    title: 'Lekcje i przerwy',
    lead: 'Czytelna tabela godzin lekcyjnych i długości przerw.',
    body: [
      'W tej wersji prezentacja planu dnia jest uproszczona i maksymalnie czytelna na urządzeniach mobilnych.',
      'Można dodać wersję do druku albo szybki zapis do PDF.',
    ],
    highlights: ['Tabela godzin', 'Wersja mobilna', 'Opcja wydruku'],
  },
  '/info/podreczniki': {
    title: 'Podręczniki',
    lead: 'Sekcja z listą podręczników według klas i przedmiotów.',
    body: [
      'Dobrym kierunkiem jest przygotowanie filtrowania według klasy, przedmiotu i roku szkolnego.',
      'W projekcie przewidziano układ, który można łatwo zasilić danymi z pliku JSON lub arkusza.',
    ],
    highlights: ['Filtrowanie', 'Podział na klasy', 'Łatwa aktualizacja'],
  },
  '/info/rok-szkolny-2025-2026': {
    title: 'Rok szkolny 2025-2026',
    lead: 'Kalendarz roku szkolnego z podziałem na semestry, ferie i ważne terminy.',
    body: [
      'Nowy układ może prezentować informacje w postaci osi czasu lub czytelnych bloków miesięcznych.',
      'To jedna z najczęściej odwiedzanych stron informacyjnych, dlatego powinna być bardzo przejrzysta.',
    ],
    highlights: ['Kalendarz roku', 'Ważne terminy', 'Przyjazna forma'],
  },
  '/info/projekcje-filmowe': {
    title: 'Projekcje filmowe',
    lead: 'Sekcja informacyjna dla szkolnych pokazów filmowych.',
    body: [
      'Podstrona nadaje się do pokazania harmonogramu projekcji, tytułów filmów i krótkich komentarzy dydaktycznych.',
      'Można ją połączyć z działem Akademii Filmowej albo zostawić jako odrębny dział informacyjny.',
    ],
    highlights: ['Harmonogram pokazów', 'Opis filmów', 'Połączenie z dydaktyką'],
  },
  '/kontakt': {
    title: 'Kontakt',
    lead: 'Przejrzysta sekcja kontaktowa z adresem, telefonami, e-mailem i mapą.',
    body: [
      'W nowej wersji warto zastosować dwie kolumny: dane po lewej, mapa i formularz po prawej.',
      'Na urządzeniach mobilnych układ przechodzi w jedną kolumnę, pozostając czytelny i wygodny.',
    ],
    highlights: ['Mapa', 'Formularz kontaktowy', 'Dane szkoły'],
  },
};

const lessons = [
  ['0', '7:30 - 8:15', '5 min'],
  ['1', '8:20 - 9:05', '10 min'],
  ['2', '9:15 - 10:00', '10 min'],
  ['3', '10:10 - 10:55', '10 min'],
  ['4', '11:05 - 11:50', '20 min'],
  ['5', '12:10 - 12:55', '10 min'],
  ['6', '13:05 - 13:50', '10 min'],
  ['7', '14:00 - 14:45', '10 min'],
  ['8', '14:55 - 15:40', '10 min'],
];

function App() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentPage = useMemo(
    () => pageContent[location.pathname] || pageContent['/aktualnosci'],
    [location.pathname]
  );

  return (
    <div className="app-shell">
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} showBanner={location.pathname === '/'} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rekrutacja/dlaczego-do-nas" element={<DlaczegoDoNas />} />
          {Object.keys(pageContent).map((path) => (
            <Route key={path} path={path} element={<StandardPage page={pageContent[path]} />} />
          ))}
          <Route path="*" element={<StandardPage page={currentPage} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function Header({ mobileOpen, setMobileOpen, showBanner }) {
  return (
    <header className="site-header">
      <div className="container topbar">
        <Link to="/" className="brand">
          <div className="brand-badge brand-badge-logo">
            <img src={logoSrc} alt="Logo VP-LO Kraków" className="brand-logo" />
          </div>
          <div className="brand-copy">
            <div className="brand-title">{school.short}</div>
            <div className="brand-subtitle">{school.name}</div>
            <div className="brand-meta">{school.founded}</div>
          </div>
        </Link>
        {showBanner && <HeaderBanner />}
        <div className="header-actions">
          <button
            type="button"
            className="menu-btn"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <nav className="container desktop-nav">
        {menu.map((item) => (
          <DesktopNavItem key={item.label} item={item} />
        ))}
      </nav>
      {mobileOpen && (
        <nav className="mobile-panel">
          <div className="container mobile-panel-inner">
            {menu.map((item) => (
              <MobileNavItem key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function HeaderBanner() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((index) => (index + 1) % headerBannerSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const slide = headerBannerSlides[slideIndex];

  return (
    <figure className="header-banner">
      <img key={slide.src} src={slide.src} alt={slide.alt} />
      <figcaption>{slideIndex === 0 ? 'Smoleńsk 14' : 'Kraków'}</figcaption>
    </figure>
  );
}

function DesktopNavItem({ item }) {
  const Icon = item.icon;

  return (
    <div className="nav-item-group">
      <NavLink to={item.path} className="nav-link">
        <Icon size={16} />
        <span>{item.label}</span>
        {item.children.length > 0 && <ChevronDown size={14} />}
      </NavLink>
      {item.children.length > 0 && (
        <div className="dropdown-menu">
          {item.children.map((group) => (
            <div key={group.group} className="dropdown-group">
              <div className="dropdown-title">{group.group}</div>
              {group.items.map((sub) => (
                <NavLink key={sub.path} to={sub.path} className="dropdown-link">
                  {sub.label}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <div className="mobile-nav-item">
      <div className="mobile-nav-head">
        <NavLink to={item.path} className="mobile-nav-link" onClick={onNavigate}>
          <Icon size={16} />
          <span>{item.label}</span>
        </NavLink>
        {item.children.length > 0 && (
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Zwiń podmenu' : 'Rozwiń podmenu'}
          >
            <ChevronDown size={16} className={open ? 'rotated' : ''} />
          </button>
        )}
      </div>
      {open && item.children.length > 0 && (
        <div className="mobile-submenu">
          {item.children.map((group) => (
            <div key={group.group} className="mobile-group">
              <div className="mobile-group-title">{group.group}</div>
              {group.items.map((sub) => (
                <NavLink key={sub.path} to={sub.path} className="mobile-sublink" onClick={onNavigate}>
                  {sub.label}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="pill">Kraków · edukacja · nowoczesność</span>
            <div className="hero-title-copy">
              <h1>{school.name}</h1>
              <p className="hero-title-note">Szkoła z tradycją, kameralną atmosferą i nowoczesnym podejściem do edukacji.</p>
            </div>
            <div className="hero-actions">
              <Link to="/rekrutacja/dlaczego-do-nas" className="primary-btn">
                Rekrutacja
              </Link>
              <Link to="/kontakt" className="secondary-btn">
                Przejdź do kontaktu
              </Link>
            </div>
            <figure className="hero-building-card hero-building-card-inline">
              <img
                src={buildingSrc}
                alt="Siedziba V Prywatnego Liceum Ogólnokształcącego w Krakowie"
                className="hero-building-image"
              />
              <figcaption>Siedziba szkoły</figcaption>
            </figure>
            <div className="hero-contact-grid">
              <a
                href={schoolMapUrl}
                target="_blank"
                rel="noreferrer"
                className="info-badge info-badge-link"
              >
                <MapPin size={16} />
                <span>{school.address}</span>
              </a>
              <InfoBadge icon={<Phone size={16} />} text={school.phone} />
              <InfoBadge icon={<Mail size={16} />} text={school.email} />
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-portrait-wrap">
              <div className="hero-portrait-frame">
                <img
                  src={jadwigaPortraitSrc}
                  alt="Królowa Jadwiga"
                  className="hero-portrait"
                />
              </div>
              <div className="hero-portrait-copy">
                <span className="eyebrow">Patronka szkoły</span>
                <h3>Królowa Jadwiga</h3>
                <p>Symbol mądrości, odpowiedzialności i edukacji opartej na wartościach.</p>
              </div>
            </div>
            <div className="hero-card-top">Sekcje serwisu</div>
            <ul className="hero-list">
              {menu.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow="Najważniejsze działy"
          title="Nowa strona zachowuje układ zakładek, ale porządkuje całą nawigację"
          text="Każda sekcja ma gotowy układ, zachowane adresy i miejsce na dalsze rozwinięcie treści."
        />
        <div className="cards-grid">
          {menu.map((item) => {
            const Icon = item.icon;
            const count = item.children.reduce((acc, group) => acc + group.items.length, 0);

            return (
              <Link to={item.path} key={item.label} className="feature-card">
                <div className="feature-icon">
                  <Icon size={18} />
                </div>
                <h3>{item.label}</h3>
                <p>{count > 0 ? `${count} podstron w sekcji` : 'Strona główna sekcji lub landing page'}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow="Wyróżnione"
          title="Przykładowe bloki aktualności i komunikatów"
          text="Układ kart może później zostać podłączony do CMS-a lub prostego panelu administracyjnego."
        />
        <div className="news-grid">
          {featuredNews.map((news) => (
            <article className="news-card" key={news.title}>
              <div className="news-tag">Aktualność</div>
              <h3>{news.title}</h3>
              <p>{news.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container split-section">
        <div className="panel">
          <SectionHeading
            eyebrow="Informacje praktyczne"
            title="Przykład czytelnej prezentacji godzin lekcyjnych"
            text="To gotowy moduł do sekcji Info."
          />
          <div className="table-card">
            <table>
              <thead>
                <tr>
                  <th>Lekcja</th>
                  <th>Godziny</th>
                  <th>Przerwa</th>
                </tr>
              </thead>
              <tbody>
                {lessons.slice(0, 5).map((lesson) => (
                  <tr key={lesson[0]}>
                    <td>{lesson[0]}</td>
                    <td>{lesson[1]}</td>
                    <td>{lesson[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="panel accent-panel">
          <SectionHeading
            eyebrow="Dla IntelliJ"
            title="Projekt gotowy do otwarcia jako standardowa aplikacja React/Vite"
            text="Kod jest prosty do rozwijania, a ścieżki zakładek można bezpiecznie rozbudowywać o prawdziwe treści, zdjęcia i dokumenty."
          />
          <ul className="check-list">
            <li>Responsywny układ</li>
            <li>Nawigacja desktop + mobile</li>
            <li>Łatwe dodawanie nowych podstron</li>
            <li>Możliwość wdrożenia na hostingu statycznym</li>
          </ul>
        </div>
      </section>
    </>
  );
}

function StandardPage({ page }) {
  const articlePage = page.layout === 'article';
  const articleBlocks = articlePage
    ? page.body
        .flatMap((paragraph) => paragraph.split(/\n{2,}/))
        .map((paragraph) => paragraph.trim())
        .filter((paragraph) => paragraph && !paragraph.includes('Opracowanie') && !paragraph.includes('Podstrona została przygotowana'))
    : page.body;

  return (
    <section className={`page-wrap container${articlePage ? ' article-page' : ''}`}>
      <div className={articlePage ? 'article-header-grid' : ''}>
        <div className="page-header">
          <span className="pill soft">Zakładka</span>
          <h1>{page.title}</h1>
          {page.lead && <p>{page.lead}</p>}
        </div>
        {articlePage && page.showHighlights && (
          <aside className="article-highlights">
            <h2>Najważniejsze elementy</h2>
            <ul>
              {page.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        )}
      </div>

      <div className={`${articlePage ? 'article-layout' : 'page-layout'}${page.timelineImage ? ' article-layout-with-timeline' : ''}`}>
        <article className="page-main-card">
          {articleBlocks.map((paragraph, index) => (
            articlePage && paragraph.startsWith('Sancta Jadwiga') ? (
              <blockquote className="article-quote" key={index}>{paragraph}</blockquote>
            ) : articlePage && paragraph.includes('prof. dr hab. inż. Jerzy Białkiewicz') ? (
              <p className="article-author" key={index}>{paragraph}</p>
            ) : articlePage && page.imageCaption && paragraph.startsWith(page.imageCaption) ? (
              <figure className="article-figure" key={index}>
                <img src={jadwigaPaintingSrc} alt="Królowa Jadwiga według Marcella Bacciarellego" />
                <figcaption>{paragraph}</figcaption>
              </figure>
            ) : articlePage && page.firstBlockHeading && index === 0 ? (
              <h2 className="article-section-title" key={index}>{paragraph}</h2>
            ) : (
              <p className={articlePage ? 'article-text' : ''} key={index}>{paragraph}</p>
            )
          ))}

          {articlePage && page.author && <p className="article-author">{page.author}</p>}

          {page.title === 'Lekcje i przerwy' && (
            <div className="table-card compact-margin">
              <table>
                <thead>
                  <tr>
                    <th>Lekcja</th>
                    <th>Godziny</th>
                    <th>Przerwa</th>
                  </tr>
                </thead>
                <tbody>
                  {lessons.map((lesson) => (
                    <tr key={lesson[0]}>
                      <td>{lesson[0]}</td>
                      <td>{lesson[1]}</td>
                      <td>{lesson[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {page.title === 'Kontakt' && (
            <div className="contact-grid">
              <InfoBadge icon={<MapPin size={16} />} text={school.address} />
              <InfoBadge icon={<Phone size={16} />} text={school.phone} />
              <InfoBadge icon={<Phone size={16} />} text={school.extraPhone} />
              <InfoBadge icon={<Mail size={16} />} text={school.email} />
            </div>
          )}
        </article>

        {page.timelineImage && (
          <aside className="article-timeline">
            <img src={jadwigaTimelineSrc} alt="Oś czasu kultu i pamięci o królowej Jadwidze" />
          </aside>
        )}

        {!articlePage && <aside className="page-sidebar">
          <div className="sidebar-card">
            <h3>Najważniejsze elementy</h3>
            <ul>
              {page.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>}
      </div>
    </section>
  );
}

function InfoBadge({ icon, text }) {
  return (
    <div className="info-badge">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-title">{school.short}</div>
          <p>{school.name}</p>
          <p>{school.address}</p>
        </div>
        <div>
          <div className="footer-title">Kontakt</div>

          <div className="footer-contact">
            <a
                className="footer-contact-item"
                href={`tel:${school.phone.replace(/\s+/g, '')}`}
            >
              <Phone size={18} aria-hidden="true" />
              <span>{school.phone}</span>
            </a>

            <a
                className="footer-contact-item"
                href={`mailto:${school.email}`}
            >
              <Mail size={18} aria-hidden="true" />
              <span>{school.email}</span>
            </a>
          </div>
        </div>
        <div>
          <div className="footer-title">Nawigacja</div>
          <div className="footer-links">
            {menu.slice(0, 5).map((item) => (
              <Link key={item.label} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
