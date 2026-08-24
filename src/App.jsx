import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  BookOpen,
  CalendarDays,
  ChevronDown,
  ChevronRight,
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
import LekcjeIPrzerwy from './pages/uczen/LekcjeIPrzerwy';
import Podreczniki from './pages/uczen/Podreczniki';
import SchoolYearPage from './pages/uczen/SchoolYearPage';
import Matura from './pages/uczen/Matura';

import PrzeslanieDyrektoraPage from './pages/szkola/PrzeslanieDyrektora';
import IdeaZalozycieli from './pages/szkola/IdeaZalozycieli';
import MisjaLiceumPage from './pages/szkola/MisjaLiceum';
import patronkaPage from './pages/szkola/Patronka';
import krolowaJadwigaPage from './pages/szkola/KrolowaJadwiga';
import siedzibaPage from './pages/szkola/Siedziba';
import pracowniaKomputerowaPage from './pages/szkola/PracowniaKomputerowa';
import pracowniaBiologicznaPage from './pages/szkola/PracowniaBiologiczna';
import pracowniaChemicznaPage from './pages/szkola/PracowniaChemiczna';
import NowoczesnePracownie from './pages/szkola/NowoczesnePracownie';
import PrzestrzenieUczniowskie from './pages/szkola/PrzestrzenieUczniowskie';
import SaleReprezentacyjne from './pages/szkola/SaleReprezentacyjne';
import {
  aulaPage,
  collegiumMaximumPage,
  salaSenackaPage,
} from './pages/szkola/SaleReprezentacyjnePages';
import {
  cafeAtriumPage,
  miejsceCichejPracyPage,
  odskoczniaPage,
  ogrodPage,
} from './pages/szkola/PrzestrzenieUczniowskiePages';
import Statut from './pages/szkola/dokumenty/Statut';
import StandardyOM from './pages/szkola/dokumenty/StandardyOM';
import educationPages from './pages/edukacja';

import './pages/szkola/szkola.css';

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
const vulcanLogoSrc = `${import.meta.env.BASE_URL}vulcan-logo.png`;
const instagramQrSrc =`${import.meta.env.BASE_URL}qr-instagram-vplo.png`;
const tiktokQrSrc =`${import.meta.env.BASE_URL}qr-tiktok-vplo.png`;
const instagramUrl = 'https://www.instagram.com/vplo.krk/';
const tiktokUrl ='https://www.tiktok.com/@vplo.krakow';
const jadwigaPortraitSrc = `${import.meta.env.BASE_URL}jadwiga-bacciarelli.jpg`;
const jadwigaPaintingSrc = `${import.meta.env.BASE_URL}krolowa-jadwiga-bacciarelli.png`;
const jadwigaTimelineSrc = `${import.meta.env.BASE_URL}os-czasu-jadwiga.png`;
const buildingTimelineSrc =`${import.meta.env.BASE_URL}os-czasu-siedziba.png`;
const buildingSrc = `${import.meta.env.BASE_URL}siedziba-vplo.jpg`;
const schoolFilmSrc = `${import.meta.env.BASE_URL}vplo-film.mp4`;
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

const menu = [
  {
    label: 'Aktualności',
    path: '/aktualnosci',
    icon: CalendarDays,
    children: [],
  },
  {
    label: 'Szkoła',
    path: '/szkola/przeslanie-dyrektora',
    icon: School,
    children: [
      {
        group: 'Szkoła',
        items: [
          { label: 'Przesłanie Dyrektora', path: '/szkola/przeslanie-dyrektora' },
          { label: 'Dziedzictwo założycieli', path: '/szkola/idea-zalozycieli' },
          { label: 'Misja i Wizja', path: '/szkola/misja-liceum' },
        ],
      },
      {
        group: 'Patron',
        items: [
          {label: 'Studium Sylwetki Patrona', path: '/szkola/patron/studium-sylwetki-patrona'},
          {label: 'Dlaczego Królowa Jadwiga?', path: '/szkola/patron/dlaczego-krolowa-jadwiga'},
        ],
      },
      {
        group: 'Infrastruktura',
        items: [
          {label: 'Siedziba liceum', path: '/szkola/infrastruktura/siedziba-liceum'},
          {
            label: 'Nowoczesne pracownie',
            path: '/szkola/infrastruktura/nowoczesne-pracownie',
            children: [
              { label: 'Pracownia biologiczna', path: '/szkola/infrastruktura/nowoczesne-pracownie/pracownia-biologiczna' },
              { label: 'Pracownia chemiczna', path: '/szkola/infrastruktura/nowoczesne-pracownie/pracownia-chemiczna' },
              { label: 'Pracownia komputerowa', path: '/szkola/infrastruktura/nowoczesne-pracownie/pracownia-komputerowa' },
            ],
          },
          {
            label: 'Przestrzenie uczniowskie',
            path: '/szkola/infrastruktura/przestrzenie-uczniowskie',
            children: [
              { label: 'Cafe Atrium', path: '/szkola/infrastruktura/przestrzenie-uczniowskie/cafe-atrium' },
              { label: 'Odskocznia', path: '/szkola/infrastruktura/przestrzenie-uczniowskie/odskocznia' },
              { label: 'Ogród', path: '/szkola/infrastruktura/przestrzenie-uczniowskie/ogrod' },
              { label: 'Miejsce cichej pracy', path: '/szkola/infrastruktura/przestrzenie-uczniowskie/miejsce-cichej-pracy' },
            ],
          },
          {
            label: 'Sale reprezentacyjne',
            path: '/szkola/infrastruktura/sale-reprezentacyjne',
            children: [
              { label: 'Aula', path: '/szkola/infrastruktura/sale-reprezentacyjne/aula' },
              { label: 'Collegium Maximum', path: '/szkola/infrastruktura/sale-reprezentacyjne/collegium-maximum' },
              { label: 'Sala Senacka', path: '/szkola/infrastruktura/sale-reprezentacyjne/sala-senacka' },
            ],
          },
        ],
      },
      {
        group: 'Dokumenty',
        items: [
          {label: 'Statut', path: '/szkola/dokumenty/statut'},
          {label: 'Standardy Ochrony Małoletnich', path: '/szkola/dokumenty/standardy-ochrony-maloletnich'},
        ],
      },
    ],
  },
  {
    label: 'Uczeń',
    path: '/uczen/lekcje-i-przerwy',
    icon: GraduationCap,
    children: [
      {
        group: 'Informacje wewnętrzne',
        items: [
          {
            label: 'Lekcje i przerwy',
            path: '/uczen/lekcje-i-przerwy',
          },
          {
            label: 'Podręczniki',
            path: '/uczen/podreczniki',
          },
          {
            label: 'Rok szkolny',
            path: '/uczen/rok-szkolny',
          },
          {
            label: 'Zintegrowana Platforma Edukacyjna – ZPE',
            href: 'https://zpe.gov.pl/',
            external: true,
            badge: 'ZPE',
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
            label: 'Zintegrowany Interfejs Użytkownika – ZIU',
            href: 'https://ziu.gov.pl/login',
            external: true,
            badge: 'ZIU',
          },
          {
            label: 'Okręgowa Komisja Egzaminacyjna w Krakowie',
            href: 'https://www.oke.krakow.pl/inf/',
            external: true,
            badge: 'OKE',
          },
          {
            label: 'Centralna Komisja Egzaminacyjna',
            href: 'https://cke.gov.pl/',
            external: true,
            badge: 'CKE',
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
  ...educationPages,

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

function App() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentPage = useMemo(
    () => pageContent[location.pathname] || pageContent['/aktualnosci'],
    [location.pathname]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const content = document.querySelector('main');

    if (!content) return;

    const textNodes = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) =>
        node.parentElement?.closest('script, style, textarea, pre, code')
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT,
    });

    const nodes = [];
    while (textNodes.nextNode()) nodes.push(textNodes.currentNode);

    nodes.forEach((node) => {
      node.nodeValue = keepPolishShortWordsTogether(node.nodeValue);
    });
  }, [location.pathname]);

    return (
      <div className="app-shell">
        <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} showBanner={location.pathname === '/'} />
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* SZKOŁA */}

          <Route
              path="/szkola/przeslanie-dyrektora"
              element={<PrzeslanieDyrektoraPage />}
          />

          <Route
              path="/szkola/idea-zalozycieli"
              element={<IdeaZalozycieli />}
          />

          <Route
              path="/szkola/misja-liceum"
              element={<MisjaLiceumPage />}
          />

          <Route
              path="/szkola/patron/studium-sylwetki-patrona"
              element={<StandardPage page={patronkaPage} />}
          />

          <Route
              path="/szkola/patron/dlaczego-krolowa-jadwiga"
              element={<StandardPage page={krolowaJadwigaPage} />}
          />

          <Route
              path="/szkola/infrastruktura/siedziba-liceum"
              element={<StandardPage page={siedzibaPage} />}
          />

          <Route
              path="/szkola/infrastruktura/nowoczesne-pracownie"
              element={<NowoczesnePracownie />}
          />

          <Route
              path="/szkola/infrastruktura/nowoczesne-pracownie/pracownia-biologiczna"
              element={<StandardPage page={pracowniaBiologicznaPage} />}
          />

          <Route
              path="/szkola/infrastruktura/nowoczesne-pracownie/pracownia-chemiczna"
              element={<StandardPage page={pracowniaChemicznaPage} />}
          />

          <Route
              path="/szkola/infrastruktura/nowoczesne-pracownie/pracownia-komputerowa"
              element={<StandardPage page={pracowniaKomputerowaPage} />}
          />

          <Route
              path="/szkola/infrastruktura/pracownia-komputerowa"
              element={<StandardPage page={pracowniaKomputerowaPage} />}
          />

          <Route
              path="/szkola/infrastruktura/przestrzenie-uczniowskie"
              element={<PrzestrzenieUczniowskie />}
          />

          <Route
              path="/szkola/infrastruktura/przestrzenie-uczniowskie/ogrod"
              element={<StandardPage page={ogrodPage} />}
          />

          <Route
              path="/szkola/infrastruktura/przestrzenie-uczniowskie/cafe-atrium"
              element={<StandardPage page={cafeAtriumPage} />}
          />

          <Route
              path="/szkola/infrastruktura/przestrzenie-uczniowskie/odskocznia"
              element={<StandardPage page={odskoczniaPage} />}
          />

          <Route
              path="/szkola/infrastruktura/przestrzenie-uczniowskie/miejsce-cichej-pracy"
              element={<StandardPage page={miejsceCichejPracyPage} />}
          />

          <Route
              path="/szkola/infrastruktura/sale-reprezentacyjne"
              element={<SaleReprezentacyjne />}
          />

          <Route
              path="/szkola/infrastruktura/sale-reprezentacyjne/aula"
              element={<StandardPage page={aulaPage} />}
          />

          <Route
              path="/szkola/infrastruktura/sale-reprezentacyjne/collegium-maximum"
              element={<StandardPage page={collegiumMaximumPage} />}
          />

          <Route
              path="/szkola/infrastruktura/sale-reprezentacyjne/sala-senacka"
              element={<StandardPage page={salaSenackaPage} />}
          />

          <Route
              path="/szkola/infrastruktura/kawiarenka-atrium-i-ogrod"
              element={<PrzestrzenieUczniowskie />}
          />

          <Route
              path="/szkola/dokumenty/statut"
              element={<Statut />}
          />

          <Route
              path="/szkola/dokumenty/standardy-ochrony-maloletnich"
              element={<StandardyOM />}
          />

          {/* REKRUTACJA */}

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

          <Route
              path="/uczen/lekcje-i-przerwy"
              element={<LekcjeIPrzerwy />}
          />

          <Route
              path="/uczen/podreczniki"
              element={<Podreczniki />}
          />

          <Route
              path="/uczen/rok-szkolny"
              element={<SchoolYearPage />}
          />

          <Route
              path="/uczen/matura"
              element={<Matura />}
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

          <Route
              path="/szkola/idea-zalozycieli"
              element={<IdeaZalozycieli />}
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
                <MobileNavItem
                    key={item.label}
                    item={item}
                    onNavigate={() => setMobileOpen(false)}
                />
            ))}

            <a
                href="https://uonetplus.vulcan.net.pl/krakow/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-vulcan-link"
                aria-label="Zaloguj się do Dziennika VULCAN"
            >
              <img
                  src={vulcanLogoSrc}
                  alt="Dziennik VULCAN"
                  className="mobile-vulcan-logo"
              />
            </a>
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
                ) : sub.children?.length ? (
                    <div className="dropdown-link-with-submenu" key={sub.path}>
                      <NavLink to={sub.path} className="dropdown-link dropdown-link-parent">
                        <span>{sub.label}</span>
                        <ChevronRight size={16} aria-hidden="true" />
                      </NavLink>
                      <div className="nested-dropdown-menu">
                        {sub.children.map((nestedItem) => (
                            <NavLink
                                key={nestedItem.path}
                                to={nestedItem.path}
                                className="nested-dropdown-link"
                            >
                              {nestedItem.label}
                            </NavLink>
                        ))}
                      </div>
                    </div>
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
                ) : sub.children?.length ? (
                    <div className="mobile-sublink-with-submenu" key={sub.path}>
                      <NavLink
                          to={sub.path}
                          className="mobile-sublink"
                          onClick={onNavigate}
                      >
                        {sub.label}
                      </NavLink>
                      <div className="mobile-nested-submenu">
                        {sub.children.map((nestedItem) => (
                            <NavLink
                                key={nestedItem.path}
                                to={nestedItem.path}
                                className="mobile-nested-sublink"
                                onClick={onNavigate}
                            >
                              {nestedItem.label}
                            </NavLink>
                        ))}
                      </div>
                    </div>
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
        'Dostrzegamy mocne strony, potrzeby i aspiracje każdego ucznia. Małe klasy i bliskie relacje z nauczycielami pozwalają nam wspierać młodych ludzi w odkrywaniu własnego potencjału i budowaniu własnej drogi.',
    hotspotClass: 'hotspot-individual',
    popupClass: 'popup-individual',
  },
  {
    id: 'quality',
    title: 'Nowoczesna edukacja',
    text:
        'Łączymy solidną wiedzę z rozwijaniem samodzielnego i krytycznego myślenia. Przygotowujemy uczniów do matury i dalszej edukacji, ale także do świadomego podejmowania decyzji i wyzwań zmieniającego się świata.',
    hotspotClass: 'hotspot-quality',
    popupClass: 'popup-quality',
  },
  {
    id: 'passion',
    title: 'Bezpieczeństwo',
    text:
        'Tworzymy bezpieczną szkołę opartą na szacunku, zaufaniu i dialogu. Jej siłą są nauczyciele z pasją, którzy inspirują, wspierają i budują dobre relacje. Kameralna atmosfera sprzyja nauce, rozwojowi i poczuciu przynależności do szkolnej wspólnoty.',
    hotspotClass: 'hotspot-passion',
    popupClass: 'popup-passion',
  },
];

const keepPolishShortWordsTogether = (text) =>
    text.replace(/(^|[\s([{"„])([AaIiOoUuWwZz]) (?=\S)/g, '$1$2\u00a0');

function HomePage() {
    const [activeValue, setActiveValue] = useState(null);
    return (
      <>
        <section className="hero">
          <div className="container hero-grid">
            <div>
            <section className="school-values-section school-values-building">
              <span className="eyebrow school-values-eyebrow">
                <span className="school-values-eyebrow-default">
              Wiedzieć więcej, rozumieć głębiej, wybierać odpowiedzialnie, działać dla innych.
                </span>
                <span className="school-values-eyebrow-hover">
                 Przesłanie patronki
                </span>
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
                            <p>{keepPolishShortWordsTogether(value.text)}</p>
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
                    <p>{keepPolishShortWordsTogether('Symbol mądrości, odpowiedzialności, odwagi i szacunku')}</p>
                  </div>
                </div>
              </div>
          </div>
          </section>

          <section className="section container home-media-layout">
            <section className="home-video-section home-video-section-inline">
              <div className="home-video-card home-video-card-inline">
                <span className="home-video-label">VPLO oczami uczniów</span>
                <video
                  className="home-video-player"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src={schoolFilmSrc} type="video/mp4" />
                  Twoja przeglądarka nie obsługuje odtwarzania wideo.
                </video>
              </div>
            </section>

            <HomeUpdatesStrip compact />
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

      <section className="section container home-links-section">
        <div className="home-links-heading">
          LINKI
        </div>

        <div className="home-links-grid">

          <a
              href="https://www.gov.pl/web/edukacja"
              target="_blank"
              rel="noopener noreferrer"
              className="home-link-item"
              aria-label="Ministerstwo Edukacji Narodowej"
          >
            <img
                src={`${import.meta.env.BASE_URL}men-logo.png`}
                alt="Ministerstwo Edukacji Narodowej"
            />
          </a>

          <a
              href="https://www.kuratorium.krakow.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="home-link-item"
              aria-label="Kuratorium Oświaty w Krakowie"
          >
            <img
                src={`${import.meta.env.BASE_URL}kuratorium-logo.jpg`}
                alt="Kuratorium Oświaty w Krakowie"
            />
          </a>

          <a
              href="TU_WSTAW_ADRES_BIP_LICEUM"
              target="_blank"
              rel="noopener noreferrer"
              className="home-link-item"
              aria-label="Biuletyn Informacji Publicznej liceum"
          >
            <img
                src={`${import.meta.env.BASE_URL}bip-logo.png`}
                alt="Biuletyn Informacji Publicznej"
            />
          </a>

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

function HomeUpdatesStrip({ compact = false }) {
    const latestNews = newsItems[0];

    return (
        <section
            className={`home-updates-strip${compact ? ' home-updates-strip-compact' : ''}`}
            aria-label="Aktualności i media społecznościowe"
        >
          <div className={`${compact ? 'home-updates-frame' : 'container'}${compact ? '' : ''}`}>
            <div className={`${compact ? 'home-updates-grid home-updates-grid-compact' : 'home-updates-grid'}`}>
            <Link
                to="/aktualnosci"
                className={`home-update-card home-update-card-news${compact ? ' home-update-card-compact' : ''}`}
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
                className={`home-update-card home-social-card home-instagram-card${compact ? ' home-update-card-compact' : ''}`}
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
                className={`home-update-card home-social-card home-tiktok-card${compact ? ' home-update-card-compact' : ''}`}
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
  const location = useLocation();
  const articlePage = page.layout === 'article';
  const showSectionIntroCard = /^(\/szkola|\/uczen|\/edukacja|\/kontakt)/.test(
      location.pathname
  );
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
  const formattedEducationPage = Array.isArray(page.formattedSections);

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
          }${page.title === 'Siedziba liceum' ? ' headquarters-page' : ''}`}
      >
      <div className={articlePage ? 'article-header-grid' : ''}>
        <div className="page-header">
          <h1>{page.title}</h1>
          {page.lead && (
              <p className={showSectionIntroCard ? 'section-intro-card' : undefined}>
                {page.lead}
              </p>
          )}
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
                page.variant === 'education-formatted'
                    ? 'education-formatted-page'
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
                ) : formattedEducationPage ? (
                    <div className="education-formatted-content">
                      {articleBlocks.map((paragraph, index) => (
                        <p key={`formatted-intro-${index}`}>{paragraph}</p>
                      ))}

                      {page.formattedSections.map((section, index) =>
                        section.type === 'list' ? (
                          <ul className="education-formatted-list" key={`formatted-list-${index}`}>
                            {section.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p key={`formatted-paragraph-${index}`}>{section.content}</p>
                        )
                      )}
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
                            <React.Fragment key={index}>
                              <p className={articlePage ? 'article-text' : ''}>
                                {paragraph}
                              </p>

                              {page.mainImage &&
                                  index ===
                                      ((page.mainImageAfterParagraph ||
                                          (page.mainImageAfterFirstParagraph && 1)) -
                                          1) && (
                                      <figure className="article-figure article-main-image">
                                        <img
                                            src={page.mainImage}
                                            alt={page.mainImageAlt || page.title}
                                        />

                                        {page.mainImageCaption && (
                                            <figcaption>
                                              {page.mainImageCaption}
                                            </figcaption>
                                        )}
                                      </figure>
                                  )}

                              {page.galleryImages &&
                                  page.galleryAfterFirstParagraph &&
                                  index === 0 && (
                                      <div className="article-image-grid">
                                        {page.galleryImages.map((image, imageIndex) => (
                                            <figure
                                                className="article-figure article-gallery-image"
                                                key={imageIndex}
                                            >
                                              <img
                                                  src={image.src}
                                                  alt={image.alt || page.title}
                                              />

                                              {image.caption && (
                                                  <figcaption>
                                                    {image.caption}
                                                  </figcaption>
                                              )}
                                            </figure>
                                        ))}
                                      </div>
                                  )}

                            </React.Fragment>
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

                {page.title === 'Lekcje i przerwy' && <LekcjeIPrzerwy />}

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
          <a
              href={schoolMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-location-link"
          >
            <MapPin size={18} aria-hidden="true" />
            <span>{school.address}</span>
          </a>
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
