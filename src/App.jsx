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
import WymaganeDokumenty from './pages/rekrutacja/WymaganeDokumenty';
import KandydaciSportowcy from './pages/rekrutacja/KandydaciSportowcy';
import FormularzZgloszeniowy from './pages/rekrutacja/FormularzZgloszeniowy';
import AbsolwenciONas from './pages/rekrutacja/AbsolwenciONas';

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
const vulcanLogoSrc = `${import.meta.env.BASE_URL}vulcan-logo.jpg`;
const instagramQrSrc =`${import.meta.env.BASE_URL}qr-instagram-vplo.png`;
const tiktokQrSrc =`${import.meta.env.BASE_URL}qr-tiktok-vplo.png`;
const instagramUrl = 'https://www.instagram.com/vplo.krk/';
const tiktokUrl ='https://www.tiktok.com/@vplo.krakow';
const jadwigaPortraitSrc = `${import.meta.env.BASE_URL}jadwiga-bacciarelli.jpg`;
const jadwigaPaintingSrc = `${import.meta.env.BASE_URL}krolowa-jadwiga-bacciarelli.png`;
const jadwigaTimelineSrc = `${import.meta.env.BASE_URL}os-czasu-jadwiga.png`;
const buildingTimelineSrc =`${import.meta.env.BASE_URL}os-czasu-siedziba.png`;
const buildingSrc = `${import.meta.env.BASE_URL}siedziba-vplo.jpg`;
const headerBannerSlides = [
  { src: `${import.meta.env.BASE_URL}smolensk-siedziba.png`, alt: 'Siedziba V Prywatnego Liceum Ogólnokształcącego w Krakowie', position: 'center 40%'},
  { src: `${import.meta.env.BASE_URL}krakow-rynek.jpeg`, alt: 'Rynek Główny w Krakowie', position: 'center 55%' },
  { src: `${import.meta.env.BASE_URL}krakow-rynek-noc.jpeg`, alt: 'Rynek Główny w Krakowie nocą', position: 'center 45%' },
  { src: `${import.meta.env.BASE_URL}krakow-wawel.jpeg`, alt: 'Wawel nad Wisłą', position: 'center 30%' },
  { src: `${import.meta.env.BASE_URL}krakow-wisla.jpeg`, alt: 'Panorama Wawelu i Wisły', position: 'center 30%' },
];
const schoolMapUrl =
  'https://www.google.com/maps/place/V+Prywatne+Liceum+Og%C3%B3lnokszta%C5%82c%C4%85ce/@50.0581904,19.9277046,19.5z/data=!3m1!5s0x47165b0ca90960b1:0x15df860a31a312a3!4m15!1m8!3m7!1s0x47165b0ca9600f99:0x975b3ee8029bc41f!2sSmole%C5%84sk+14,+31-112+Krak%C3%B3w!3b1!8m2!3d50.0583935!4d19.9279931!16s%2Fg%2F11c2fqzxsz!3m5!1s0x47165b0ca9c919b5:0xee22a70dcc45f4fc!8m2!3d50.0583811!4d19.9281055!16s%2Fg%2F1ts1lctz?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D';
const schoolMapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d523.1570763456707!2d19.92786264417709!3d50.058397789315215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0ca9c919b5%3A0xee22a70dcc45f4fc!2sV%20Prywatne%20Liceum%20Og%C3%B3lnokszta%C5%82c%C4%85ce!5e0!3m2!1spl!2spl!4v1784125094341!5m2!1spl!2spl';

const schoolDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Smole%C5%84sk+14%2C+31-112+Krak%C3%B3w';

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
    label: 'Szkoła',
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
    label: 'Uczeń',
    path: '/info/lekcje-i-przerwy',
    icon: GraduationCap,
    children: [
      {
        group: 'Informacje wewnętrzne',
        items: [
          {
            label: 'Lekcje i przerwy',
            path: '/info/lekcje-i-przerwy',
          },
          {
            label: 'Podręczniki',
            path: '/info/podreczniki',
          },
          {
            label: 'Rok szkolny 2025-2026',
            path: '/info/rok-szkolny-2025-2026',
          },
        ],
      },
      {
        group: 'Egzaminy',
        items: [
          {
            label: 'Matura',
            path: '/uczen/matura',
          },
          {
            label: 'Okręgowa Komisja Egzaminacyjna w Krakowie',
            href: 'https://www.oke.krakow.pl/inf/',
            external: true,
            badge: 'OKE ',
          },
          {
            label: 'Centralna Komisja Egzaminacyjna',
            href: 'https://cke.gov.pl/',
            external: true,
            badge: 'CKE ',
          },
        ],
      },
    ],
  },
  {
    label: 'Edukacja',
    path: '/edukacja/edukacja-kulturalna',
    icon: BookOpen,
    children: [
      {
        group: 'Nauka i rozwój',
        items: [
          {
            label: 'Edukacja kulturalna',
            path: '/edukacja/edukacja-kulturalna',
          },
          {
            label: 'Grupy klasowe',
            path: '/edukacja/grupy-klasowe',
          },
          {
            label: 'Zajęcia warsztatowe',
            path: '/edukacja/zajecia-warsztatowe',
          },
          {
            label: 'Zajęcia sportowe – WF',
            path: '/edukacja/zajecia-sportowe-wf',
          },
          {
            label: 'Język hiszpański',
            path: '/edukacja/jezyk-hiszpanski',
          },
          {
            label: 'Kreatywny uczeń',
            path: '/edukacja/kreatywny-uczen',
          },
        ],
      },
      {
        group: 'Projekty edukacyjne',
        items: [
          {
            label: 'Sesje Naukowe',
            path: '/edukacja/sesje-naukowe',
          },
          {
            label: 'Szkolna Akademia Filmowa',
            path: '/edukacja/akademia-filmowa',
          },
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
          { label: 'Zgłoszenie online', path: '/rekrutacja/formularz-zgloszeniowy' },
        ],
      },
      {
        group: 'Opinie',
        items: [
          {
            label: 'Absolwenci o nas', path: '/rekrutacja/absolwenci-o-nas',
          },
        ],
      },
    ],
  },
  {
    label: 'Galeria',
    path: '/galeria',
    icon: ImageIcon,
    children: [],
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
      'Wykorzystując kompetencje edukacyjne i organizacyjne pomagamy naszym uczniom przygotować się do wyzwań współczesnego świata przez wsparcie ich rozwoju osobistego.', 'W tym projekcie treść została rozpisana w formie bloków, dzięki czemu można ją łatwo rozbudować o dodatkowe sekcje lub multimedia.Nowoczesna prezentacja misji szkoły powinna być konkretna, klarowna i wsparta czytelnym podziałem na priorytety: wiedza, kultura, rozwój osobisty, odpowiedzialność.',
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
    timelineImage: jadwigaTimelineSrc,
    timelineAlt: 'Oś czasu kultu i pamięci o królowej Jadwidze',
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
    lead: 'Historia i współczesność siedziby Liceum',
    body: [
      'Historia pałacyku przy ul. Smoleńsk 14\n\n' +
      'V Prywatne Liceum Ogólnokształcące zlokalizowane jest przy ul. Smoleńsk 14 w pałacyku zbudowanym w stylu art déco, zlokalizowanym w ścisłym centrum Krakowa - niespełna 5 minut spaceru od Zamku Królewskiego na Wawelu i Collegium Novum Uniwersytetu Jagiellońskiego.\n\n' +
      'Pałacyk został zaprojektowany i zbudowany w konwencji willi pod nadzorem autorskim przez profesora Wacława Krzyżanowskiego, znakomitego architekta okresu międzywojennego, autora wybitnych dzieł użyteczności publicznej - w najbliższym otoczeniu Pałacu: gmach Biblioteki Jagiellońskiej, Gmach A-0 Akademii Górniczo-Hutniczej, ponadto liczne obiekty sakralne, a także rezydencje prywatne - m. in. Zamek Tarnowskich w Tarnobrzegu.\n\n' +
      'Architektura art déco budynku nawiązująca do form klasycznych w liniach, ornamentyce, stylizowaniach geometrycznych i funkcjonalnych znakomicie komponuje się z potrzebami edukacyjnymi, szczególnie w przestrzennej aranżacji wnętrz.\n\n' +
      'Budynek należało przystosować do potrzeb edukacyjnych nie naruszając pierwotnej koncepcji architektonicznej profesora Wacława Krzyżanowskiego. Dzieło konserwacji zostało zaprojektowane i wykonane pod nadzorem autorskim przez profesora, architekta Andrzeja Białkiewicza, kierownika Zakładu Rysunku, Malarstwa i Rzeźby ponadto, aktualnie Rektora Politechniki Krakowskiej.\n' +
      'Współcześnie pałacyk przy ul. Smoleńsk 14 stanowi perłę architektury Krakowa z okresu międzywojennego, a jednocześnie w rozwiązaniach edukacyjnych zaprojektowanych i zrealizowanych pod kierunkiem prof. dr hab. Jerzego Marka Białkiewicza standaryzuje obiekt w kategoriach najnowocześniejszych, elitarnych szkół XXI wieku - w zabytkowej tkance architektonicznej miasta uniwersyteckiego.\n\n' +
      'Komfort edukacyjny zapewniają przyjęte rozwiązania komunikacyjne i recepcyjne. Ich oryginalność osiągnięto w wyniku utworzenia Atrium z przeznaczeniem rekreacyjnym na cele klubowe z telewizją satelitarną, komputerami z nieograniczonym, światłowodowym dostępem do Internetu, kawiarnią i ekskluzywną garderobą.\n\n' +
      'Szczególną uwagę poświęcono wyposażeniu pomieszczeń dydaktycznych. Starannie wyselekcjonowane firmy w Warszawie i Krakowie wyposażyły szkołę w atestowane stanowiska audytoryjne. Oświetlenie sal powierzono specjalistycznym firmom, które na podstawie symulacji komputerowych - zapewniających równomierność natężenia światła w każdym z punktów sali - dokonały wyboru i montażu właściwych źródeł światła.\n\n' +
      'Sale wyposażone są w tablice bezpyłowe. Każda z sal wykładowych i ćwiczeniowych została wyposażona w łącze sieci komputerowej ze stałym dostępem do Internetu i telewizji satelitarnej. Ponadto sale wyposażone są w komputery z pełnym oprogramowaniem Microsoft Office, projektory multimedialne z elektrycznie opuszczanymi ekranami, rzutniki pisma.\n\n' +
      'Aranżację wnętrz pomieszczeń recepcyjnych (2 Poziom budynku): holu wejściowego, 2. sekretariatów, gabinetów dyrektorskich i sali senackiej zostało powierzone artystycznym pracowniom dekoratorskim o uznanym dorobku w prestiżowych obiektach użyteczności publicznej w Polsce.\n\n' +
      'Pałacyk wyposażony jest w optymalnie skonfigurowaną do prowadzenia zajęć dydaktycznych pracownię komputerową. Wszystkie stanowiska komputerowe mają stały dostęp do Internetu.\n' +
      '\n',
    ],
    highlights: ['Architektura art déco', 'Historia pałacyku', 'Nowoczesna przestrzeń edukacyjna', 'Lokalizacja w centrum Krakowa'
    ],
    layout: 'article',
    firstBlockHeading: true,
    showHighlights: true,
    timelineImage: buildingTimelineSrc,
    timelineAlt: 'Oś czasu historii siedziby liceum przy ul. Smoleńsk 14',
    },
  '/o-nas/infrastruktura/pracownia-komputerowa': {
    title: 'Pracownia komputerowa',
    lead: 'Środowisko rozwoju kompetencji cyfrowych',
    body: [
      'Liceum wyposażone jest w optymalnie skonfigurowaną do prowadzenia zajęć dydaktycznych, pracownię komputerową. Wszystkie stanowiska komputerowe mają stały dostęp do Internetu.\n' +
      '\n' +
      'Systematyczny upgrade stanowisk komputerowych umożliwia korzystanie bez ograniczeń z najnowszych oprogramowań wymagających dużych prędkości obliczeniowych i pojemności dyskowych. Szybkość operacji komunikacyjnych i obliczeniowych zapewnia wysokiej klasy serwer profesjonalnie skonfigurowany z każdym ze stanowisk komputerowych.' ,
      'W kodowanym dostępie uczniów i profesorów do serwera udostępniane są bieżące informacje związane z funkcjonowaniem liceum: harmonogramy zajęć, zasoby biblioteczne, wyniki sprawdzianów, ogłoszenia administracyjne i inne.',
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

  '/edukacja/edukacja-kulturalna': {
    title: 'Edukacja kulturalna',
    lead: 'Humanistyczny i interdyscyplinarny wymiar nauczania.',
    body: [
      'Edukacja kulturalna jest pojęciem niezwykle często mylnie rozumianym bądź określanym, a przecież stanowi istotę kształcenia licealnego.',
      'Wyjaśnijmy, edukacja ta prowadzona jest w trzech, wzajemnie uzupełniających się obszarach.',
    ],
    educationSections: [
      {
        title: 'Wiedza',
        paragraphs: [
          'Pierwszy, podstawowy obszar związany jest z ubogacaniem wiedzy, poprzez zajęcia dydaktyczne (lekcje) z treści objętych programem kształcenia licealnego. Edukacja kulturalna jest tutaj realizowana w różnych dyscyplinach nauki, inaczej w przedmiotach wskazanych w planach lekcji. W niektórych z przedmiotów obok przekazywanych treści programowych podejmowane są z uczniami rozważania ukierunkowane na różne systemy wartości.',

          'Zwracamy tutaj uwagę na konieczność zachowania wyjątkowej rzetelności i systematyczności w przyswajaniu wiedzy, ponieważ luki i zaniedbania w zwielokrotnionej formie dadzą o sobie znać w czasie późniejszym.',

          'Uświadamiamy naszych uczniów, że edukacja kulturalna w tym obszarze odbywa się w sposób ciągły, również w okresie poza szkolnym, bez udziału nauczycieli. Tradycyjnie edukację tę określa się wówczas mianem kształcenia ustawicznego.',
        ],
      },

      {
        title: 'Umiejętności',
        paragraphs: [
          'Drugi z obszarów kształcenia ukierunkowany jest na umiejętności, w tym interpretacji, rozumienia, refleksji, przeżywania nabytej wiedzy; krótko - zastosowań.',

          'Umiejętności kształtowane na poziomie licealnym rzutują na przyszłe losy absolwentów. W najbliższej perspektywie czasu, dobrze posadowione w wiedzy, umiejętności odegrają istotną rolę w wyborze kierunku studiów bądź dziedziny dalszej aktywności, w tym profesjonalnej. Nabyte i rozwijane umiejętności - zawsze oparte na rzetelnej wiedzy - otwierają bowiem szerszy ogląd świata, nieodpartą potrzebę poznawczą, głębsze rozumienie otaczającej nas rzeczywistości, wielopłaszczyznowe postrzeganie zjawisk, które pozornie nie pozostają w związku.',

          'Nie wolno jednak zapominać, że kształcenie licealne jest ogólnokształcącym i tylko niektóre dziedziny wiedzy będą rozwijane w toku studiów bądź podjętej aktywności. Stąd niezmiernie ważne jest kształtowanie umiejętności we wszystkich dyscyplinach objętych planem licealnym, tak by absolwenci mogli czerpać z nich wiedzę praktyczną bądź świadomie podejmować decyzje potrzeby jej uzupełnień.',
        ],
      },

      {
        title: 'Wrażliwość i zainteresowania',
        paragraphs: [
          'Trzeci z obszarów koncentruje się na rozwijaniu wrażliwości i zainteresowań. Temu celowi służy wywiązanie kontaktu uczniów ze sztukami pięknymi: malarstwem, rzeźbą, filmem, teatrem, muzyką, literaturą.',

          'Trzeba zauważyć, że dwa pierwsze obszary edukacji kulturalnej mieszczą się w podstawowym kanonie standardów licealnych. A osiągany w nich stan wiedzy i umiejętności uczniów - absolwentów, w dużej mierze zależy od poziomu szkoły. W naszym przypadku obydwa obszary kształcenia kulturalnego stanowią priorytet nauczania.',

          'Trzeci obszar kształcenia kulturalnego (wrażliwość i zainteresowania) jest naszym programem autorskim, którego oryginalność wyprowadzamy z naszych zainteresowań i przekonania, że jesteśmy powołani do kreowania przyszłej inteligencji polskiej, szczególnie tu, w królewskim mieście Krakowie z jego historią, tradycją i zabytkową tkanką architektoniczną.',
        ],
      },
    ],
    variant: 'cultural-education',

    listTitle: 'Uczniowie:',

    listItems: [
      'regularnie uczestniczą we wszystkich znaczących wydarzeniach kulturalnych Krakowa. Naturalną sekwencję lekcji historii, czy też literatury polskiej stanowi udział w prezentacjach filmowych, przedstawieniach teatralnych, wystawach i ekspozycjach muzealnych;',
      'pod kierunkiem profesorów liceum, czasem przy współudziale wyspecjalizowanych przewodników zapoznają się z dorobkiem kulturowym Krakowa i poznają miejsca kultu narodowego. W okresie licealnym stają się pełnoprawnymi znawcami dorobku kulturowego naszego, królewskiego miasta;',
      'biorą udział w wernisażach i wystawach, szczególnie w Pałacu Sztuki, Dworku Matejki, Willi Estreichera.',
    ],

    afterList: [
      'Instytucjonalnie nasze Liceum współpracuje z Towarzystwem Przyjaciół Sztuk Pięknych (TPSP) z siedzibą w Pałacu Sztuki. Uczniowie łącznie z zespołem profesorskim liceum są beneficjentami bezpłatnych wstępów na wszystkie wydarzenia kulturalne organizowane w Pałacu Sztuki.',
      'Liceum z TPSP było organizatorem małopolskiego konkursu: Wkład kultury polskiej do kultury jednoczącej się Europy, którego finał z wystawą pokonkursową przy współudziale znakomitych reprezentantów nauki w jury konkursowym pod patronatem Rektorów Akademii Sztuk Pięknych i Politechniki Krakowskiej odbył się w Pałacu Sztuki.',
    ],

    highlights: ['Humanistyka', 'Interdyscyplinarność', 'Wydarzenia kulturalne'],
  },
  '/edukacja/grupy-klasowe': {
    title: 'Grupy klasowe',
    lead: 'Organizacja grup w liceum',
    body: [
      'Liczebność klas w naszym liceum jest statutowo ograniczona do 24 uczniów, jednak w praktyce zespoły klasowe mają obecnie charakter kameralny i liczą zaledwie kilkanaście osób. W przypadku lektoratów z języka angielskiego, niemieckiego i hiszpańskiego oraz zajęć warsztatowych grupy są jeszcze mniejsze — często kilkuosobowe — tworzące warunki zbliżone do pracy indywidualnej.\n',
      '\n' +
      'Tak zorganizowane środowisko nauki sprzyja bliskiemu kontaktowi ucznia z profesorem, tworząc przestrzeń do bezpośredniego dialogu, aktywnego udziału w zajęciach oraz szybszego przyswajania treści programowych. Kameralne grupy i indywidualne podejście stanowią jeden z kluczowych wyróżników naszej szkoły, realnie wpływając na jakość i efektywność kształcenia.',
    ],
    timelineImage: `${import.meta.env.BASE_URL}grupy-klasowe-infografika.png`,
    timelineAlt: 'Infografika przedstawiająca organizację grup klasowych w liceum',
    highlights: [],
  },
  '/edukacja/sesje-naukowe': {
    title: 'Sesje naukowe',
    lead: 'Szkolna tradycja i aktywność akademicka uczniów.',
    body: [],
    highlights: ['Archiwum wydarzeń', 'Prestiż', 'Rozwój naukowy'],
  },
  '/edukacja/akademia-filmowa': {
    title: 'Szkolna Akademia Filmowa',
    lead: 'Sekcja poświęcona analizie filmu i edukacji audiowizualnej.',
    body: [
      'Tutaj warto wyeksponować program, repertuar, komentarze do projekcji oraz wartość edukacyjną tego działania.',
      'Nowoczesny layout dobrze wspiera sekcje z polecanymi filmami i mini-opisami.',
    ],
    highlights: ['Edukacja filmowa', 'Program zajęć', 'Lista projekcji'],
  },
  '/edukacja/zajecia-warsztatowe': {
    title: 'Zajęcia warsztatowe',
    lead: 'Podstrona o praktycznej pracy z uczniem i rozwijaniu kompetencji miękkich.',
    body: [
      'W nowej wersji strony warsztaty można pokazać jako zestaw modułów z przykładami tematów i osiągnięć uczniów.',
      'Układ kart i ikon ułatwia szybkie skanowanie treści.',
    ],
    highlights: ['Kompetencje miękkie', 'Forma warsztatowa', 'Czytelne moduły'],
  },
  '/edukacja/zajecia-sportowe-wf': {
    title: 'Zajęcia sportowe - WF',
    lead: 'Sekcja opisująca aktywność fizyczną i sposób organizacji zajęć sportowych.',
    body: [
      'To dobre miejsce na opis tenisa, siłowni, sezonowych aktywności oraz podejścia szkoły do ruchu i zdrowia.',
      'W nowoczesnej odsłonie można dodać galerię i krótkie bloki z najważniejszymi formami aktywności.',
    ],
    highlights: ['Sport i zdrowie', 'Zdjęcia aktywności', 'Elastyczny układ treści'],
  },
  '/edukacja/jezyk-hiszpanski': {
    title: 'Język hiszpański',
    lead: 'Prezentacja oferty językowej i nowoczesnych metod nauczania.',
    body: [
      'Podstrona została przygotowana pod rozbudowę o poziomy nauczania, projekty językowe i elementy kultury hiszpańskojęzycznej.',
      'Można tu łatwo dodać materiały, zdjęcia oraz przykłady aktywności uczniów.',
    ],
    highlights: ['Oferta językowa', 'Nowoczesne metody', 'Treści kulturowe'],
  },
  '/edukacja/kreatywny-uczen': {
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
    lead: 'Życie liceum utrwalone na zdjęciach',
    body: [ ],
    highlights: [],
    showHighlights: false,

    galleryCategories: [
      {
        title: 'Życie szkoły',
        text: 'Uroczystości, wydarzenia, wycieczki i codzienność naszej społeczności szkolnej.'
      },
      {
        title: 'Projekty edukacyjne',
        text: 'Warsztaty, konkursy, zajęcia projektowe oraz inicjatywy rozwijające zainteresowania uczniów.'
      },
      {
        title: 'Roczniki',
        text: 'Zdjęcia klasowe oraz wspomnienia uczniów z kolejnych lat szkolnych.'
      }
    ],
  },
  '/info/lekcje-i-przerwy': {
    title: 'Lekcje i przerwy',
    lead: 'Czytelna tabela godzin lekcyjnych i długości przerw.',
    body: [
      'Czas nauki i regeneracji',
      'Można dodać wersję do druku albo szybki zapis do PDF.',
    ],
    highlights: [],
    showHighlights: false,
  },
  '/info/podreczniki': {
    title: 'Podręczniki',
    lead: 'Informacje dotyczące podręczników obowiązujących w bieżącym roku szkolnym.',
    body: [

      'Podręczniki do języków obcych i pozostałych przedmiotów zostaną podane na pierwszych zajęciach we wrześniu.Dobrym kierunkiem jest przygotowanie filtrowania według klasy, przedmiotu i roku szkolnego.',
      'W projekcie przewidziano układ, który można łatwo zasilić danymi z pliku JSON lub arkusza.',
    ],
    highlights: [],
    showHighlights: false,

    textbookCards: [
      {
        title: 'Wykaz podręczników',
        subtitle: 'Klasa 1',
        subjects: [
          {
            name: 'Język polski',
            books: [
              'Dąbrowska D., Kapela-Bagińska B., Prylińska E., 2019. Sztuka wyrazu 1.1, 1.2. Podręcznik dla liceum i technikum. Zakresy podstawowy i rozszerzony. Gdańsk: Gdańskie Wydawnictwo Oświatowe.'
            ]
          },
          {
            name: 'Matematyka',
            books: [
              'Kurczab E., Kurczab M., Świda E., 2019. Podręcznik dla liceów i techników. Klasa 1. Zakres podstawowy. Warszawa: Oficyna Edukacyjna Krzysztof Pazdro.',
              'Zbiór zadań dla klasy 1 wyżej wymienionego wydawnictwa.'
            ]
          },
          {
            name: 'Chemia — klasa 1/2',
            levels: [
              {
                name: 'Zakres podstawowy',
                books: [
                  'Hassa R., Mrzigod A., Mrzigod J., 2019. To jest chemia 1. Chemia ogólna i nieorganiczna. Zakres podstawowy. Warszawa: Nowa Era.'
                ]
              },
              {
                name: 'Zakres rozszerzony',
                books: [
                  'Litwin M., Styka-Wlazło Sz., Szymońska J., 2019. To jest chemia 1. Chemia ogólna i nieorganiczna. Zakres rozszerzony. Warszawa: Nowa Era.',
                  'Kaznowski K., Pazdro K., 2019. Chemia, część 1. Podręcznik do liceów i techników, zakres rozszerzony. Warszawa: Oficyna Edukacyjna Krzysztof Pazdro.'
                ]
              }
            ]
          },
          {
            name: 'Biologia',
            levels: [
              {
                name: 'Zakres podstawowy',
                books: [
                  'Helmin A., Holaczek J., 2019. Biologia na czasie 1. Zakres podstawowy. Warszawa: Nowa Era.'
                ]
              },
              {
                name: 'Zakres rozszerzony',
                books: [
                  'Guzik M., Kozik R., Matuszewska R., 2019. Biologia na czasie 1. Zakres rozszerzony. Warszawa: Nowa Era.'
                ]
              }
            ]
          },
          {
            name: 'Język niemiecki',
            note: 'Podręcznik i zeszyt ćwiczeń',
            books: [
              'Kryczyńska-Pham A., 2022. Effekt neu 1. Warszawa: WSiP.'
            ]
          }
        ]
      },
      {
        title: 'Języki obce',
        text: 'Podręczniki do języków obcych zostaną wskazane przez nauczycieli po ustaleniu poziomu zaawansowania uczniów.'
      },
      {
        title: 'Pozostałe przedmioty',
        text: 'Informacje dotyczące podręczników do pozostałych przedmiotów będą aktualizowane zgodnie z zaleceniami nauczycieli.'
      }
    ],

    textbookNote:
        'Przed zakupem podręczników prosimy o sprawdzenie aktualnego wykazu opublikowanego przez szkołę.',
  },
  '/info/rok-szkolny-2025-2026': {
    title: 'Rok szkolny 2025-2026',
    lead: 'Kalendarz roku szkolnego z podziałem na semestry, ferie i ważne terminy.',
    body: [
      'Nowy układ może prezentować informacje w postaci osi czasu lub czytelnych bloków miesięcznych.',
      'To jedna z najczęściej odwiedzanych stron informacyjnych, dlatego powinna być bardzo przejrzysta.',
    ],
    highlights: [],
    showHighlights: false,
  },
  '/kontakt': {
    title: 'Kontakt',
    lead: 'Lokalizacja, godziny pracy sekretariatu, mapa',
    body: [],

    secretariatHours:
'od poniedziałku do piątku\n' +
'w godzinach od 9.00 do 14.00.',
    secretariatNotice:
        'W szczególnych przypadkach termin przyjęcia może zostać ustalony indywidualnie po wcześniejszym kontakcie telefonicznym.',

    locationDescription:
        'V Prywatne Liceum Ogólnokształcące działa w wyjątkowym pałacyku w stylu art déco — prestiżowej, kameralnej przestrzeni zaledwie cztery minuty spaceru od serca krakowskiej akademickiej tradycji: Collegium Novum Uniwersytetu Jagiellońskiego oraz Zamku Królewskiego na Wawelu. To lokalizacja, która łączy elegancję, historię i inspirujące otoczenie sprzyjające nauce.',

    highlights: [
      'Dane kontaktowe',
      'Mapa i dojazd',
      'Instagram i Tik Tok',
    ],
    layout: 'article',
    showHighlights: true,
  },
};

const lessons = [
  ['1', '8:00 - 8:45', '5 min'],
  ['2', '8:50 - 9:35', '10 min'],
  ['3', '9:45 - 10:30', '10 min'],
  ['4', '10:40 - 11:25', '10 min'],
  ['5', '11:35 - 12:20', '25 min'],
  ['6', '12:45 - 13:30', '10 min'],
  ['7', '13:40 - 14:25', '10 min'],
  ['8', '14:35 - 15:20', '5 min'],
  ['9', '15:25 - 16:10',      '   -' ],
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
      {location.pathname === '/' && <HomeUpdatesStrip />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
              path="/rekrutacja/dlaczego-do-nas"
              element={<DlaczegoDoNas />}
          />

          <Route
              path="/rekrutacja/wymagane-dokumenty"
              element={<WymaganeDokumenty />}
          />

          <Route
              path="/rekrutacja/kandydaci-sportowcy"
              element={<KandydaciSportowcy />}
          />

          <Route
              path="/rekrutacja/formularz-zgloszeniowy"
              element={<FormularzZgloszeniowy />}
          />

          <Route
              path="/rekrutacja/absolwenci-o-nas"
              element={<AbsolwenciONas />}
          />

          <Route path="/aktualnosci" element={<NewsPage />} />

          <Route
              path="/aktualnosci/zakonczenie-roku-2025-2026"
              element={<EndOfSchoolYearArticle />}
          />

          <Route path="/galeria" element={<GalleryPage />} />

          <Route
              path="/galeria/zakonczenie-roku-szkolnego-2025-2026"
              element={<GalleryPage initialAlbumOpen />}
          />

          {Object.keys(pageContent)
              .filter(
                  (path) => !['/aktualnosci', '/galeria'].includes(path)
              )
              .map((path) => (
                  <Route
                      key={path}
                      path={path}
                      element={<StandardPage page={pageContent[path]} />}
                  />
              ))}

          <Route
              path="*"
              element={<StandardPage page={currentPage} />}
          />
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
            <div className="brand-title">
  <span className="brand-title-school">
    V Prywatne Liceum Ogólnokształcące w&nbsp;Krakowie
  </span>{' '}
              <span className="brand-title-patron">
    im.&nbsp;Królowej Jadwigi
  </span>
            </div>

            <div className="brand-subtitle">
              Szkoła z tradycją, kameralną atmosferą i nowoczesnym podejściem do edukacji
            </div>

            <div className="brand-meta">
              {school.founded}
            </div>
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
        <a
            className="vulcan-nav-link"
            href="https://uonetplus.vulcan.net.pl/krakow/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zaloguj się do Dziennika VULCAN"
        >
          <img
              src={vulcanLogoSrc}
              alt="Dziennik VULCAN"
              className="vulcan-nav-logo"
          />
        </a>
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
      <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          style={{
            objectPosition: slide.position || 'center',
            objectFit: slide.fit || 'cover'
          }}
      />
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
              {group.items.map((sub) => {
                const isExternal =
                    sub.external || sub.href?.startsWith('http');

                const target = sub.href ?? sub.path;

                return isExternal ? (
                    <a
                        key={sub.label}
                        href={target}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dropdown-link exam-external-link"
                    >
                      {sub.badge && (
                          <span className="exam-link-badge">
          {sub.badge}
        </span>
                      )}

                      <span className="exam-link-label">
        {sub.label}
      </span>

                      <span className="exam-link-arrow" aria-hidden="true">
        ↗
      </span>
                    </a>
                ) : (
                    <NavLink
                        key={sub.path}
                        to={sub.path}
                        className="dropdown-link"
                    >
                      {sub.label}
                    </NavLink>
                );
              })}
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
              {group.items.map((sub) => {
                const isExternal =
                    sub.external || sub.href?.startsWith('http');

                const target = sub.href ?? sub.path;

                return isExternal ? (
                    <a
                        key={sub.href ?? sub.label}
                        href={target}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-sublink exam-external-link exam-external-link-mobile"
                        onClick={onNavigate}
                    >
                      {sub.badge && (
                          <span className="exam-link-badge">
          {sub.badge}
        </span>
                      )}

                      <span className="exam-link-label">
        {sub.label}
      </span>

                      <span className="exam-link-arrow" aria-hidden="true">
        ↗
      </span>
                    </a>
                ) : (
                    <NavLink
                        key={sub.path}
                        to={sub.path}
                        className="mobile-sublink"
                        onClick={onNavigate}
                    >
                      {sub.label}
                    </NavLink>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const schoolValuesData = [
  {
    id: 'individual',
    title: 'Indywidualne podejście do ucznia',
    text:
        'Znamy mocne strony naszych uczniów i wiemy, z czym mierzą się na co dzień. Dzięki małym grupom i wsparciu tutorów dopasowujemy tempo oraz styl nauki do osobistych potrzeb i celów każdego ucznia.',
    hotspotClass: 'hotspot-individual',
    popupClass: 'popup-individual',
  },
  {
    id: 'quality',
    title: 'Wysoka jakość nauczania',
    text:
        'Wyniki matur powyżej średniej to nasza codzienność, ale nie jedyny cel. Uczymy krytycznego myślenia, logicznego wyciągania wniosków oraz praktycznego wykorzystania wiedzy, która otwiera drzwi na najlepsze uczelnie.',
    hotspotClass: 'hotspot-quality',
    popupClass: 'popup-quality',
  },
  {
    id: 'passion',
    title: 'Kadra z pasją',
    text:
        'Nasi nauczyciele to mentorzy, którzy zarażają miłością do swoich przedmiotów. To eksperci, którzy nie tylko świetnie tłumaczą trudne zagadnienia, ale też wspierają uczniów po lekcjach, prowadzą koła naukowe i zawsze mają czas na rozmowę.',
    hotspotClass: 'hotspot-passion',
    popupClass: 'popup-passion',
  },
];

function HomePage() {
  const [activeValue, setActiveValue] = useState(null);
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <section className="school-values-section school-values-building">
              <span className="eyebrow school-values-eyebrow">
              Wysokie cele, ludzkie podejście, nauczyciele z pasją.
              </span>

              <div className="school-values-graphic-wrapper">
                <div className="school-values-graphic">
                  <img
                      src={`${import.meta.env.BASE_URL}wartosci-szkoly-vplo.png`}
                      alt="Wartości szkoły na tle siedziby liceum"
                      className="school-values-image"
                  />

                  {schoolValuesData.map((value) => {
                    const isActive = activeValue === value.id;

                    return (
                        <button
                            key={value.id}
                            type="button"
                            className={`school-value-hotspot ${value.hotspotClass}`}
                            onMouseEnter={() => setActiveValue(value.id)}
                            onMouseLeave={() =>
                                setActiveValue((current) =>
                                    current === value.id ? null : current
                                )
                            }
                            onClick={() =>
                                setActiveValue((current) =>
                                    current === value.id ? null : value.id
                                )
                            }
                            aria-expanded={isActive}
                            aria-label={`Pokaż opis: ${value.title}`}
                        />
                    );
                  })}

                  {schoolValuesData.map((value) =>
                      activeValue === value.id ? (
                          <div
                              key={`popup-${value.id}`}
                              className={`school-value-popup ${value.popupClass}`}
                          >
                            <h3>{value.title}</h3>
                            <p>{value.text}</p>
                          </div>
                      ) : null
                  )}
                </div>
              </div>

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
                <a
                    href={`tel:${school.phone.replace(/\s/g, '')}`}
                    className="info-badge info-badge-link"
                >
                  <Phone size={16} />
                  <span>{school.phone}</span>
                </a>
                <InfoBadge icon={<Mail size={16} />} text={school.email} />
              </div>
            </section>
            <div className="hero-mission-vision">
              <div className="hero-statement-card">
                <h2>Misja szkoły</h2>
                <p>
                  Wykorzystując kompetencje edukacyjne i organizacyjne pomagamy naszym uczniom przygotować się do wyzwań współczesnego świata przez wsparcie ich rozwoju osobistego
                </p>
              </div>

              <div className="hero-statement-card">
                <h2>Wizja szkoły</h2>
                <p>
                  V Prywatne Liceum Ogólnokształcące im. Królowej Jadwigi wysokiej klasy szkoła ogólnokształcąca położona w Krakowie - mieście królów polski
                </p>
              </div>

            </div>
          </div>
          <div className="hero-card hero-card-patron">
            <h2 className="hero-school-name">
              V Prywatne Liceum Ogólnokształcące
              <span>w Krakowie im. Królowej Jadwigi</span>
            </h2>

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
            <div className="hero-card-top">Sekcje strony</div>
            <ul className="hero-list">
              {menu.map((item) => {
                const target =
                    item.path ??
                    item.to ??
                    item.href ??
                    item.children?.[0]?.path ??
                    item.children?.[0]?.to ??
                    '/';

                const isExternal = target.startsWith('http');

                return (
                    <li key={item.label}>
                      {isExternal ? (
                          <a
                              href={target}
                              target="_blank"
                              rel="noreferrer"
                              className="hero-list-link"
                          >
                            {item.label}
                          </a>
                      ) : (
                          <Link to={target} className="hero-list-link">
                            {item.label}
                          </Link>
                      )}
                    </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow="Najważniejsze działy"
          title="Zakładki"
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
    </>
  );
}

const galleryCategories = [
  {
    title: 'Życie szkoły',
    text: 'Uroczystości, wydarzenia, wycieczki i codzienność naszej społeczności szkolnej.',
  },
  {
    title: 'Projekty edukacyjne',
    text: 'Warsztaty, konkursy, zajęcia projektowe oraz inicjatywy rozwijające zainteresowania uczniów.',
  },
  {
    title: 'Roczniki',
    text: 'Zdjęcia klasowe oraz wspomnienia uczniów z kolejnych lat szkolnych.',
  },
];

const endOfSchoolYearPhotos = Array.from({ length: 13 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');

  return {
    src: `${import.meta.env.BASE_URL}galeria/zakonczenie-roku-szkolnego-2025-2026/${number}.webp`,
    alt: `Zakończenie roku szkolnego 2025/2026 – zdjęcie ${index + 1}`,
  };
});

function GalleryPage({ initialAlbumOpen = false }) {
  const [activeCategory, setActiveCategory] = useState('Życie szkoły');
  const [albumOpen, setAlbumOpen] = useState(initialAlbumOpen);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
      <section className="gallery-page">
        <div className="container">
          <header className="gallery-page-header">
            <span>Galeria</span>
            <h1>Życie liceum utrwalone na zdjęciach</h1>
          </header>

          {!albumOpen ? (
              <>
                <div className="gallery-category-grid">
                  {galleryCategories.map((category) => (
                      <button
                          key={category.title}
                          type="button"
                          className={`gallery-category-card ${
                              activeCategory === category.title ? 'active' : ''
                          }`}
                          onClick={() => setActiveCategory(category.title)}
                      >
                        <h2>{category.title}</h2>
                        <p>{category.text}</p>
                      </button>
                  ))}
                </div>

                {activeCategory === 'Życie szkoły' ? (
                    <div className="gallery-albums-section">
                      <h2>Albumy</h2>

                      <button
                          type="button"
                          className="school-album-card"
                          onClick={() => setAlbumOpen(true)}
                      >
                        <img
                            src={endOfSchoolYearPhotos[0].src}
                            alt="Okładka albumu Zakończenie roku szkolnego 2025/2026"
                        />

                        <div className="school-album-copy">
                          <span>Życie szkoły</span>
                          <h3>Zakończenie roku szkolnego 2025/2026</h3>
                          <p>13 zdjęć</p>
                        </div>
                      </button>
                    </div>
                ) : (
                    <div className="gallery-empty">
                      Pierwsze albumy w tej części galerii pojawią się wkrótce.
                    </div>
                )}
              </>
          ) : (
              <div className="school-album-view">
                <button
                    type="button"
                    className="album-back-button"
                    onClick={() => setAlbumOpen(false)}
                >
                  ← Powrót do albumów
                </button>

                <div className="school-album-heading">
                  <span>Życie szkoły</span>
                  <h2>Zakończenie roku szkolnego 2025/2026</h2>
                  <p>13 zdjęć</p>
                </div>

                <div className="school-photo-grid">
                  {endOfSchoolYearPhotos.map((photo) => (
                      <button
                          key={photo.src}
                          type="button"
                          className="school-photo-button"
                          onClick={() => setSelectedPhoto(photo)}
                      >
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                      </button>
                  ))}
                </div>
              </div>
          )}

          {selectedPhoto && (
              <div
                  className="gallery-lightbox"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Powiększone zdjęcie"
                  onClick={() => setSelectedPhoto(null)}
              >
                <button
                    type="button"
                    className="gallery-lightbox-close"
                    onClick={() => setSelectedPhoto(null)}
                    aria-label="Zamknij zdjęcie"
                >
                  <X size={28} />
                </button>

                <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    onClick={(event) => event.stopPropagation()}
                />
              </div>
          )}
        </div>
      </section>
  );
}

const newsItems = [
  {
    slug: 'zakonczenie-roku-2025-2026',
    title: 'Zakończenie roku 2025/2026',
    date: '26 czerwca 2026',
    place: 'Kraków',
    excerpt:
        '26 czerwca odbyło się uroczyste zakończenie roku szkolnego.',
    image: `${import.meta.env.BASE_URL}galeria/zakonczenie-roku-szkolnego-2025-2026/01.webp`,
  },
];

function HomeUpdatesStrip() {
  const latestNews = newsItems[0];

  return (
      <section
          className="home-updates-strip"
          aria-label="Aktualności i media społecznościowe"
      >
        <div className="container home-updates-grid">
          <Link
              to="/aktualnosci"
              className="home-update-card home-update-card-news"
          >
            <img
                src={latestNews.image}
                alt=""
                className="home-update-news-image"
            />

            <div className="home-update-news-overlay">
            <span className="home-update-label">
              Aktualności
            </span>

              <h2>{latestNews.title}</h2>

              <p>
                {latestNews.date} · {latestNews.place}
              </p>

              <strong>Aktualności →</strong>
            </div>
          </Link>

          <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="home-update-card home-social-card home-instagram-card"
              aria-label="Otwórz profil liceum na Instagramie"
          >

            <div className="home-social-content">
            <span className="home-update-label">
              Instagram
            </span>

              <h2>@vplo.krk</h2>

              <p>
                Zdjęcia, wydarzenia i codzienność naszej szkoły.
              </p>

              <strong>Najnowsze posty →</strong>
            </div>
          </a>

          <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="home-update-card home-social-card home-tiktok-card"
              aria-label="Otwórz profil liceum na TikToku"
          >

            <div className="home-social-content">
            <span className="home-update-label">
              TikTok
            </span>

              <h2>@vplo.krakow</h2>

              <p>
                Krótkie filmy i najnowsze wiadomości z życia liceum.
              </p>

              <strong>TikTok →</strong>
            </div>
          </a>
        </div>
      </section>
  );
}

function NewsPage() {
  return (
      <section className="news-page">
        <div className="container">
          <header className="news-page-header">
            <span>Aktualności</span>
            <h1>Najnowsze wydarzenia z życia szkoły</h1>
          </header>

          <div className="news-list">
            {newsItems.map((news) => (
                <article className="news-card" key={news.slug}>
                  <Link
                      to={`/aktualnosci/${news.slug}`}
                      className="news-card-image-link"
                      aria-label={`Czytaj artykuł: ${news.title}`}
                  >
                    <img src={news.image} alt={news.title} />
                  </Link>

                  <div className="news-card-copy">
                    <div className="news-meta">
                  <span>
                    <CalendarDays size={17} />
                    <time dateTime="2026-06-26">{news.date}</time>
                  </span>

                      <span>
                    <MapPin size={17} />
                        {news.place}
                  </span>
                    </div>

                    <h2>
                      <Link to={`/aktualnosci/${news.slug}`}>
                        {news.title}
                      </Link>
                    </h2>

                    <p>{news.excerpt}</p>

                    <Link
                        to={`/aktualnosci/${news.slug}`}
                        className="news-read-more"
                    >
                      Czytaj więcej
                    </Link>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </section>
  );
}

function EndOfSchoolYearArticle() {
  const articleImage =
      `${import.meta.env.BASE_URL}galeria/zakonczenie-roku-szkolnego-2025-2026/01.webp`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">
            ← Powrót do aktualności
          </Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Zakończenie roku 2025/2026</h1>

            <div className="news-meta news-article-meta">
            <span>
              <CalendarDays size={18} />
              <time dateTime="2026-06-26">26 czerwca 2026</time>
            </span>

              <span>
              <MapPin size={18} />
              Kraków
            </span>
            </div>
          </header>

          <img
              className="news-article-cover"
              src={articleImage}
              alt="Zakończenie roku szkolnego 2025/2026"
          />

          <div className="news-article-body">
            <p>
              26 czerwca odbyło się uroczyste zakończenie roku szkolnego.
              Podczas wydarzenia uczniowie przypomnieli o najważniejszych
              wartościach, którymi warto kierować się w życiu na co dzień.
              Część artystyczną uświetniły recytacje wybranych wierszy oraz
              piosenka polsko-hiszpańska, natomiast prof. Kamil Kulpiński
              wygłosił wykład poświęcony bezpieczeństwu podczas wakacji.
              Wszystkim uczniom, rodzicom i nauczycielom życzymy udanego,
              bezpiecznego wypoczynku oraz wielu niezapomnianych wakacyjnych
              chwil.
            </p>

            <Link
                to="/galeria/zakonczenie-roku-szkolnego-2025-2026"
                className="news-gallery-link"
            >
              Galeria zdjęć
            </Link>
          </div>
        </div>
      </article>
  );
}

function StandardPage({ page }) {
  const articlePage = page.layout === 'article';
  const [timelineOpen, setTimelineOpen] = useState(false);
  const articleBlocks = articlePage
    ? page.body
        .flatMap((paragraph) => paragraph.split(/\n{2,}/))
        .map((paragraph) => paragraph.trim())
        .filter((paragraph) => paragraph && !paragraph.includes('Opracowanie') && !paragraph.includes('Podstrona została przygotowana'))
    : page.body;
  const culturalEducationPage =
      page.title === 'Edukacja kulturalna';
  const scientificSessionsPage =
      page.title === 'Sesje naukowe';
  const classGroupsPage =
      page.title?.trim().toLowerCase() === 'grupy klasowe';

  const studentsIndex = culturalEducationPage
      ? articleBlocks.findIndex(
          (paragraph) => paragraph.trim() === 'Uczniowie:'
      )
      : -1;

  const studentList =
      studentsIndex >= 0
          ? articleBlocks.slice(studentsIndex + 1, studentsIndex + 4)
          : [];
  return (
      <section
          className={`page-wrap container${articlePage ? ' article-page' : ''}${
              page.title === 'Edukacja kulturalna'
                  ? ' cultural-education-page'
                  : ''
          }`}
      >
      <div className={articlePage ? 'article-header-grid' : ''}>
        <div className="page-header">
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

      <div
          className={[
            articlePage ? 'article-layout' : 'page-layout',
            page.timelineImage ? 'article-layout-with-timeline' : '',
            page.textbookCards ? 'textbooks-page-layout' : '',
            page.galleryCategories ? 'gallery-page-layout' : '',
          ]
              .filter(Boolean)
              .join(' ')}
      >

        <article
            className={[
              'page-main-card',
              page.textbookCards ? 'textbooks-main-card' : '',
              page.galleryCategories ? 'gallery-main-card' : '',
              page.variant === 'cultural-education'
                  ? 'cultural-education-content'
                  : '',
              scientificSessionsPage ? 'scientific-sessions-page' : '',
            ]
                .filter(Boolean)
                .join(' ')}
        >

          {page.galleryCategories && (
              <section className="gallery-categories">
                <div className="gallery-categories-heading">
                  <span>Albumy szkolne</span>
                </div>

                <div className="gallery-categories-grid">
                  {page.galleryCategories.map((category) => (
                      <div className="gallery-category-card" key={category.title}>
                        <div className="gallery-category-decoration" />

                        <h3>{category.title}</h3>
                        <p>{category.text}</p>

                        <span className="gallery-category-action">
            Albumy
          </span>
                      </div>
                  ))}
                </div>
              </section>
          )}

          {page.textbookCards ? (
              <div className="textbooks-layout">
                <div className="textbooks-intro">
                  <span>Informacje dla uczniów</span>
                  <h2>Podręczniki na rok szkolny</h2>

                  {page.lead && <p>{page.lead}</p>}
                </div>

                <div className="textbooks-grid">
                  {page.textbookCards.map((card) => (
                      <div className="textbook-card" key={card.title}>
                        <h3>{card.title}</h3>

                        {card.subtitle && (
                            <div className="textbook-class-label">
                              {card.subtitle}
                            </div>
                        )}

                        {card.subjects ? (
                            <div className="textbook-subjects">
                              {card.subjects.map((subject) => (
                                  <section className="textbook-subject" key={subject.name}>
                                    <h4>{subject.name}</h4>

                                    {subject.note && (
                                        <p className="textbook-subject-note">
                                          {subject.note}
                                        </p>
                                    )}

                                    {subject.books && (
                                        <ul>
                                          {subject.books.map((book) => (
                                              <li key={book}>{book}</li>
                                          ))}
                                        </ul>
                                    )}

                                    {subject.levels?.map((level) => (
                                        <div className="textbook-level" key={level.name}>
                                          <h5>{level.name}</h5>

                                          <ul>
                                            {level.books.map((book) => (
                                                <li key={book}>{book}</li>
                                            ))}
                                          </ul>
                                        </div>
                                    ))}
                                  </section>
                              ))}
                            </div>
                        ) : (
                            <p>{card.text}</p>
                        )}
                      </div>
                  ))}
                </div>

                {page.textbookNote && (
                    <div className="textbooks-note">
                      <strong>Ważna informacja</strong>
                      <p>{page.textbookNote}</p>
                    </div>
                )}
              </div>
          ) : (
              <>

                {scientificSessionsPage ? (
                    <div className="scientific-sessions-content">

                      <p className="scientific-sessions-lead">
                        Wizytówkę naszego liceum stanowią <strong>Sesje Naukowe Uczniów</strong>,
                        które regularnie odbywają się przed zamknięciem każdego z semestrów.
                        W trybie konferencyjnym uczniowie prezentują w czasie Sesji prace wykonane
                        pod kierunkiem wybranych przez siebie profesorów.
                      </p>

                      <p>
                        Tematy prac są formułowane przez profesorów przy współudziale uczniów pod
                        kątem zainteresowań i uzdolnień uczniów. Jedynym, niepodważalnym kryterium
                        tematyki jest poszerzanie, wykraczanie poza treści programowe objęte
                        obowiązkowym programem licealnym.
                      </p>

                      <p>
                        Uczeń może zdecydować o wyborze języka referatu poza językiem polskim
                        z puli języków obcych prowadzonych w naszym liceum. W przypadku wyboru
                        języka obcego opiekun przedmiotowy jest uzupełniany przez nauczyciela
                        języka obcego, który sprawuje nadzór nad poprawnością językową wystąpienia
                        ucznia.
                      </p>

                      <div className="scientific-sessions-highlight">
                        <p>
                          Tradycja Sesji Naukowej sięga <strong>1992 roku</strong> i ma obecnie
                          imponujący dorobek. Oprócz wypełniania misji szkoły w edukacji kulturalnej
                          uczniów przywiązujemy poprzez Sesje Naukowe szczególną wagę do:
                        </p>

                        <ul className="scientific-sessions-list">
                          <li>
                            mobilizowania uczniów do rozwijania własnych zainteresowań, uzdolnień,
                            kreowania i podążania indywidualnymi ścieżkami rozwoju,
                          </li>

                          <li>
                            nabywania umiejętności do publicznych wystąpień,
                          </li>

                          <li>
                            posługiwania się środkami multimedialnymi,
                          </li>

                          <li>
                            zastosowania modelowej sekwencji referatu opracowanego zgodnie
                            z przyjętymi standardami w prestiżowych środowiskach naukowych
                            prezentacji - dostępnego na stronie internetowej liceum,
                          </li>

                          <li>
                            umocnienia poczucia własnej wartości z wiodącymi jej atrybutami -
                            <strong> potrafię</strong> (opracować własny temat, dokonać analiz,
                            współpracować w opracowaniu z profesorem, opiekunem) oraz
                            <strong> zasługuję</strong> (na podzielenie się własnymi osiągnięciami
                            na forum szkolnym z udziałem zaproszonych gości, na dobrą ocenę
                            wystąpienia, uznanie).
                          </li>
                        </ul>
                      </div>

                      <p>
                        Sesje Naukowe chronologicznie znacznie wyprzedziły obowiązującą obecnie
                        formę maturalnego egzaminu ustnego z języka polskiego - jak gdyby
                        ustawodawca podążał za wskazaniami naszej koncepcji kształcenia, niestety
                        w bardzo okrojonej formie.
                      </p>

                      <p>
                        Uczniowie nasi, w przypadku takich zainteresowań, mogą do wystąpienia
                        sesyjnego wybrać temat z języka polskiego już po pierwszym semestrze nauki
                        w liceum, natomiast obligatoryjnie w pierwszym semestrze klasy maturalnej.
                        Wszyscy są znakomicie przygotowani do prezentacji podejmowanego tematu po
                        wypełnieniu jedynie merytorycznie poprawną treścią kanonu uniwersalnego,
                        bez braków i niedomówień.
                      </p>

                      <p>
                        Stąd, pierwsze praktyczne zastosowanie umiejętności kształconych w czasie
                        Sesji Naukowych skutkuje znakomitymi wynikami ustnych egzaminów maturalnych
                        z języka polskiego. Oczywiście, jak we wszystkich aspektach aktywności
                        osoby ludzkiej niezbędna jest jedynie dobra wola ucznia i dbałość o własne
                        korzyści.
                      </p>

                      <p className="scientific-sessions-summary">
                        Inne praktyczne skutki aktywnego udziału w Sesjach Naukowych absolwenci
                        liceum będą doświadczać w przyszłym życiu studenckim i zawodowym, czego
                        dowodzą kontakty z naszymi wychowankami.
                      </p>

                    </div>
                ) : classGroupsPage ? (
                    <div className="class-groups-content">
                      {articleBlocks[0] && (
                          <p className="class-groups-lead">
                            {articleBlocks[0]}
                          </p>
                      )}

                      {articleBlocks[1] && (
                          <div className="class-groups-highlight">
                            <p>{articleBlocks[1]}</p>
                          </div>
                      )}

                      {articleBlocks.slice(2).map((paragraph, index) => (
                          <p
                              className="class-groups-text"
                              key={`class-groups-${index}`}
                          >
                            {paragraph}
                          </p>
                      ))}
                    </div>
                ) : (
                    articleBlocks.map((paragraph, index) => (
                        articlePage && paragraph.startsWith('Sancta Jadwiga') ? (
                            <blockquote className="article-quote" key={index}>
                              {paragraph}
                            </blockquote>
                        ) : articlePage &&
                        paragraph.includes('prof. dr hab. inż. Jerzy Białkiewicz') ? (
                            <p className="article-author" key={index}>
                              {paragraph}
                            </p>
                        ) : articlePage &&
                        page.imageCaption &&
                        paragraph.startsWith(page.imageCaption) ? (
                            <figure className="article-figure" key={index}>
                              <img
                                  src={jadwigaPaintingSrc}
                                  alt="Królowa Jadwiga według Marcella Bacciarellego"
                              />
                              <figcaption>{paragraph}</figcaption>
                            </figure>
                        ) : articlePage && page.firstBlockHeading && index === 0 ? (
                            <h2 className="article-section-title" key={index}>
                              {paragraph}
                            </h2>
                        ) : (
                            <p className={articlePage ? 'article-text' : ''} key={index}>
                              {paragraph}
                            </p>
                        )
                    ))
                )}

                {page.educationSections?.map((section, sectionIndex) => (
                    <section
                        className="cultural-section"
                        key={`cultural-section-${sectionIndex}`}
                    >
                      <h2 className="cultural-section-title">
                        {section.title}
                      </h2>

                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                          <p
                              className="cultural-section-text"
                              key={`cultural-section-${sectionIndex}-${paragraphIndex}`}
                          >
                            {paragraph}
                          </p>
                      ))}
                    </section>
                ))}

                {page.listTitle && (
                    <p className="cultural-list-title">
                      {page.listTitle}
                    </p>
                )}

                {page.listItems?.length > 0 && (
                    <ul className="cultural-list">
                      {page.listItems.map((item, index) => (
                          <li key={`cultural-item-${index}`}>
                            {item}
                          </li>
                      ))}
                    </ul>
                )}

                {page.afterList?.map((paragraph, index) => (
                    <p
                        className="cultural-after-list"
                        key={`cultural-after-list-${index}`}
                    >
                      {paragraph}
                    </p>
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
              <div className="contact-page-layout">
                <section className="contact-office-section">
                  <div className="contact-hours-card">
                    <span className="contact-card-label">Sekretariat</span>
                    <h2>Godziny przyjęć</h2>
                    <p>{page.secretariatHours}</p>
                  </div>

                  <div className="contact-notice-card">
                    <strong>Ważna informacja</strong>
                    <p>{page.secretariatNotice}</p>
                  </div>
                </section>
                <div className="contact-details">
                  <InfoBadge
                      icon={<MapPin size={18} />}
                      text={school.address}
                  />

                  <InfoBadge
                      icon={<Phone size={18} />}
                      text={school.phone}
                  />

                  <InfoBadge
                      icon={<Phone size={18} />}
                      text={school.extraPhone}
                  />

                  <InfoBadge
                      icon={<Mail size={18} />}
                      text={school.email}
                  />
                </div>

                <section className="social-qr-section">
                  <h2>Znajdź nas w mediach społecznościowych</h2>

                  <div className="social-qr-grid">
                    <a
                        className="social-qr-card"
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Otwórz profil szkoły na Instagramie"
                    >
                      <img
                          src={instagramQrSrc}
                          alt="Kod QR do Instagrama szkoły"
                      />

                      <div className="social-qr-copy">
                        <strong>Instagram</strong>
                        <span>Profil szkoły</span>
                      </div>
                    </a>

                    <a
                        className="social-qr-card"
                        href={tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Otwórz profil szkoły na TikToku"
                    >
                      <img
                          src={tiktokQrSrc}
                          alt="Kod QR do TikToka szkoły"
                      />

                      <div className="social-qr-copy">
                        <strong>TikTok</strong>
                        <span>Profil szkoły</span>
                      </div>
                    </a>
                  </div>
                </section>

                {page.locationDescription && (
                    <div className="contact-location-description">
                      <p>{page.locationDescription}</p>
                    </div>
                )}
                <div className="contact-map-card">
                  <iframe
                      className="contact-map-frame"
                      src={schoolMapEmbedUrl}
                      title="Mapa lokalizacji V Prywatnego Liceum Ogólnokształcącego"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                  />

                  <a
                      className="route-button"
                      href={schoolDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <MapPin size={19} aria-hidden="true" />
                    <span>Trasa do szkoły</span>
                  </a>
                </div>
              </div>
          )}
          </>
              )}
        </article>

        {page.timelineImage && (
            <aside className="article-timeline">
              <button
                  type="button"
                  className="timeline-zoom-button"
                  onClick={() => setTimelineOpen(true)}
                  aria-label="Powiększ oś czasu"
              >
                <img
                    src={page.timelineImage}
                    alt={page.timelineAlt || 'Oś czasu'}
                />

                <span className="timeline-zoom-hint">
        Powiększenie
      </span>
              </button>
            </aside>
        )}
        {timelineOpen && page.timelineImage && (
            <div
                className="timeline-lightbox"
                role="dialog"
                aria-modal="true"
                aria-label={page.timelineAlt || 'Powiększona oś czasu'}
                onClick={() => setTimelineOpen(false)}
            >
              <button
                  type="button"
                  className="timeline-lightbox-close"
                  onClick={() => setTimelineOpen(false)}
                  aria-label="Zamknij powiększenie"
              >
                <X size={28} aria-hidden="true" />
              </button>

              <div
                  className="timeline-lightbox-content"
                  onClick={(event) => event.stopPropagation()}
              >
                <img
                    src={page.timelineImage}
                    alt={page.timelineAlt || 'Oś czasu'}
                />
              </div>
            </div>
        )}
        {!articlePage && page.showHighlights && (
            <aside className="page-sidebar">
          <div className="sidebar-card">
            <h3>Najważniejsze elementy</h3>
            <ul>
              {page.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
            </aside>
         )}
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
