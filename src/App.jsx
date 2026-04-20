import React, { useMemo, useState } from 'react';
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
  name: 'V Prywatne Liceum Ogólnokształcące w Krakowie',
  short: 'VP-LO Kraków',
  address: 'ul. Smoleńsk 14, 31-112 Kraków',
  phone: '+48 12 422 92 02',
  extraPhone: '+48 881 009 790',
  email: 'dyrektor@vp-lo.krakow.pl',
  intro:
    'Nowoczesna wersja serwisu szkoły z czytelną nawigacją, responsywnym układem i zachowaniem dotychczasowych zakładek.',
};

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
    lead: 'Miejsce na opis patronki, kontekst historyczny i wartości ważne dla społeczności szkolnej.',
    body: [
      'Podstrona została przygotowana tak, aby można było połączyć tekst historyczny z nowoczesną oprawą wizualną i ilustracjami lub osią czasu.',
      'To dobra przestrzeń na pokazanie tożsamości szkoły i jej tradycji w atrakcyjnej formie.',
    ],
    highlights: ['Tożsamość szkoły', 'Historia', 'Możliwość dodania osi czasu'],
  },
  '/o-nas/edukacja/dlaczego-krolowa-jadwiga': {
    title: 'Dlaczego Królowa Jadwiga?',
    lead: 'Podstrona wyjaśniająca wybór patronki i znaczenie tego odniesienia w edukacji.',
    body: [
      'Sekcja została zaprojektowana jako opowieść z akcentem na wartości i tradycję. Może zawierać cytaty, krótkie sekcje wyjaśniające oraz materiały wizualne.',
      'Ten układ dobrze sprawdzi się również w przyszłości przy publikacji rozszerzonych materiałów edukacyjnych.',
    ],
    highlights: ['Narracyjny układ', 'Miejsce na cytaty', 'Spójność z resztą strony'],
  },
  '/o-nas/infrastruktura/siedziba-liceum': {
    title: 'Siedziba liceum',
    lead: 'Prezentacja budynku szkoły, lokalizacji i najważniejszych atutów miejsca.',
    body: [
      'Nowoczesna strona powinna eksponować zdjęcia, adres, mapę i najważniejsze informacje o codziennym funkcjonowaniu szkoły.',
      'Ta wersja przewiduje moduł galerii oraz blok z danymi kontaktowymi i mapą osadzoną z Google Maps lub OpenStreetMap.',
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
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
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

function Header({ mobileOpen, setMobileOpen }) {
  return (
    <header className="site-header">
      <div className="container topbar">
        <Link to="/" className="brand">
          <div className="brand-badge">V</div>
          <div>
            <div className="brand-title">{school.short}</div>
            <div className="brand-subtitle">Nowoczesna wersja serwisu szkoły</div>
          </div>
        </Link>
        <div className="header-actions">
          <a href={`mailto:${school.email}`} className="ghost-btn">
            Napisz do nas
          </a>
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
            <span className="pill">Kraków · edukacja · nowoczesny redesign</span>
            <h1>{school.name}</h1>
            <p className="hero-text">{school.intro}</p>
            <div className="hero-actions">
              <Link to="/rekrutacja/dlaczego-do-nas" className="primary-btn">
                Zobacz rekrutację
              </Link>
              <Link to="/kontakt" className="secondary-btn">
                Przejdź do kontaktu
              </Link>
            </div>
            <div className="hero-contact-grid">
              <InfoBadge icon={<MapPin size={16} />} text={school.address} />
              <InfoBadge icon={<Phone size={16} />} text={school.phone} />
              <InfoBadge icon={<Mail size={16} />} text={school.email} />
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-top">Zachowane sekcje serwisu</div>
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
  return (
    <section className="page-wrap container">
      <div className="page-header">
        <span className="pill soft">Zakładka</span>
        <h1>{page.title}</h1>
        <p>{page.lead}</p>
      </div>

      <div className="page-layout">
        <article className="page-main-card">
          {page.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

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

        <aside className="page-sidebar">
          <div className="sidebar-card">
            <h3>Najważniejsze elementy</h3>
            <ul>
              {page.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sidebar-card">
            <h3>Szybki kontakt</h3>
            <p>{school.name}</p>
            <p>{school.address}</p>
            <a href={`tel:${school.phone.replace(/\s+/g, '')}`}>{school.phone}</a>
            <a href={`mailto:${school.email}`}>{school.email}</a>
          </div>
        </aside>
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
          <a href={`tel:${school.phone.replace(/\s+/g, '')}`}>{school.phone}</a>
          <a href={`mailto:${school.email}`}>{school.email}</a>
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
