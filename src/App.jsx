import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
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
import DniOtwarte from './pages/rekrutacja/DniOtwarte';
import WymaganeDokumenty from './pages/rekrutacja/WymaganeDokumenty';
import KandydaciSportowcy from './pages/rekrutacja/KandydaciSportowcy';
import FormularzZgloszeniowy from './pages/rekrutacja/FormularzZgloszeniowy';
import FormularzPrzyjeciaUcznia from './pages/rekrutacja/FormularzPrzyjeciaUcznia';
import AbsolwenciONas from './pages/rekrutacja/AbsolwenciONas';
import PlanowanieProfilu from './pages/rekrutacja/PlanowanieProfilu';
import LekcjeIPrzerwy from './pages/uczen/LekcjeIPrzerwy';
import Podreczniki from './pages/uczen/Podreczniki';
import RokSzkolny from './pages/uczen/RokSzkolny';
import Matura from './pages/uczen/Matura';
import HarmonogramMatur from './pages/uczen/HarmonogramMatur';
import ListaSesjiNaukowych from './pages/edukacja/ListaSesjiNaukowych';

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
import educationPages, { educationMenuItem } from './pages/edukacja';
import { educationRoutes } from './pages/edukacja/routes';

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
  educationMenuItem,

  {
    label: 'Rekrutacja',
    path: '/rekrutacja/dlaczego-do-nas',
    icon: Users,
    children: [
      {
        group: 'Dla kandydatów',
        items: [
          { label: 'Dlaczego do nas?', path: '/rekrutacja/dlaczego-do-nas' },
          { label: 'Dni otwarte', path: '/rekrutacja/dni-otwarte' },
          { label: 'Kandydaci sportowcy', path: '/rekrutacja/kandydaci-sportowcy' },
          { label: 'Planowanie profilu', path: '/rekrutacja/planowanie-profilu' },
          { label: 'Wymagane dokumenty', path: '/rekrutacja/wymagane-dokumenty' },
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
              path="/rekrutacja/dni-otwarte"
              element={<DniOtwarte />}
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
              path="/rekrutacja/planowanie-profilu"
              element={<PlanowanieProfilu />}
          />

          <Route
              path="/rekrutacja/formularz-zgloszeniowy"
              element={<FormularzZgloszeniowy />}
          />

          <Route
              path="/rekrutacja/formularz-przyjecia-ucznia"
              element={<FormularzPrzyjeciaUcznia />}
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
              element={<RokSzkolny />}
          />

          <Route
              path="/uczen/matura"
              element={<Matura />}
          />

          <Route
              path="/uczen/matura/harmonogram-2027"
              element={<HarmonogramMatur />}
          />

          <Route
              path="/edukacja/sesje-naukowe/archiwum"
              element={<ListaSesjiNaukowych />}
          />

          <Route path="/aktualnosci" element={<NewsPage />} />

          <Route
              path="/aktualnosci/zakonczenie-roku-2025-2026"
              element={<EndOfSchoolYearArticle />}
          />

          <Route
              path="/aktualnosci/64-sesja-naukowa-2026"
              element={<ScientificSessionArticle />}
          />

          <Route
              path="/aktualnosci/pozegnanie-maturzystow-2026"
              element={<GraduatesFarewellArticle />}
          />

          <Route
              path="/aktualnosci/wymiana-z-holenderska-szkola-w-laren"
              element={<LarenExchangeArticle />}
          />

          <Route
              path="/aktualnosci/dzien-jezyka-angielskiego-2026"
              element={<EnglishDayArticle />}
          />

          <Route
              path="/aktualnosci/studniowka-2026"
              element={<StudniowkaArticle />}
          />

          <Route
              path="/aktualnosci/ferie-naukowe-2026"
              element={<FerieNaukoweArticle />}
          />

          <Route
              path="/aktualnosci/warsztaty-teatralne-2026"
              element={<TheatreWorkshopsArticle />}
          />

          <Route
              path="/aktualnosci/wyjscie-do-teatru-2025"
              element={<TheatreVisitArticle />}
          />

          <Route
              path="/aktualnosci/dzien-niepodleglosci-2025"
              element={<IndependenceDayArticle />}
          />

          <Route
              path="/aktualnosci/wymiana-miedzynarodowa-2025"
              element={<InternationalExchangeArticle />}
          />

          <Route
              path="/aktualnosci/narodowe-czytanie-2025"
              element={<NationalReadingArticle />}
          />

          <Route
              path="/aktualnosci/rozpoczecie-roku-szkolnego-2025-2026"
              element={<SchoolYearOpeningArticle />}
          />

          <Route path="/galeria" element={<GalleryPage />} />

          {educationRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
          ))}

          <Route
              path="/galeria/zakonczenie-roku-szkolnego-2025-2026"
              element={<GalleryPage initialAlbum="zakonczenie-roku-2025-2026" />}
          />

          <Route
              path="/galeria/64-sesja-naukowa-2026"
              element={<GalleryPage initialAlbum="64-sesja-naukowa-2026" />}
          />

          <Route
              path="/galeria/pozegnanie-maturzystow-2026"
              element={<GalleryPage initialAlbum="pozegnanie-maturzystow-2026" />}
          />

          <Route
              path="/galeria/dzien-jezyka-angielskiego-2026"
              element={<GalleryPage initialAlbum="dzien-jezyka-angielskiego-2026" />}
          />

          <Route
              path="/galeria/studniowka-2026"
              element={<GalleryPage initialAlbum="studniowka-2026" />}
          />

          <Route
              path="/galeria/rozpoczecie-roku-szkolnego-2025-2026"
              element={<GalleryPage initialAlbum="rozpoczecie-roku-szkolnego-2025-2026" />}
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
                        className={`dropdown-link ${sub.className ?? ''}`}
                    >
                      {sub.prefix && <span className="extensions-nav-prefix">{sub.prefix}</span>}
                      <span className="extensions-nav-label">{sub.label}</span>
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
                        className={`mobile-sublink ${sub.className ?? ''}`}
                        onClick={onNavigate}
                    >
                      {sub.prefix && <span className="extensions-nav-prefix">{sub.prefix}</span>}
                      <span className="extensions-nav-label">{sub.label}</span>
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
    title: 'Indywidualne podejście do każdego ucznia',
    text:
        'Dostrzegamy mocne strony, potrzeby i aspiracje każdego ucznia. Organizacja nauki sprzyjająca indywidualnej pracy oraz bliskie relacje z nauczycielami pozwalają nam wspierać młodych ludzi w odkrywaniu własnego potencjału i budowaniu własnej drogi.',
    hotspotClass: 'hotspot-individual',
    popupClass: 'popup-individual',
    icon: Users,
  },
  {
    id: 'quality',
    title: 'Nowoczesna edukacja i dobre przygotowanie do przyszłości',
    text:
        'Łączymy solidną wiedzę z rozwijaniem samodzielnego i krytycznego myślenia. Przygotowujemy uczniów do matury i dalszej edukacji, ale także do świadomego podejmowania decyzji i wyzwań zmieniającego się świata.',
    hotspotClass: 'hotspot-quality',
    popupClass: 'popup-quality',
    icon: Trophy,
  },
  {
    id: 'passion',
    title: 'Bezpieczeństwo, dobra atmosfera i partnerskie relacje',
    text:
        'Tworzymy bezpieczną szkołę opartą na szacunku, zaufaniu i dialogu. Jej siłą są nauczyciele z pasją, którzy inspirują, wspierają i budują dobre relacje. Przyjazna atmosfera sprzyja nauce, rozwojowi i poczuciu przynależności do szkolnej wspólnoty.',
    hotspotClass: 'hotspot-passion',
    popupClass: 'popup-passion',
    icon: School,
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
                    const Icon = value.icon;

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
                        >
                          <span className="school-value-hotspot-icon" aria-hidden="true"><Icon size={18} /></span>
                          <span className="school-value-hotspot-copy">
                            <span className="school-value-hotspot-title">{value.title}</span>
                            <span className="school-value-hotspot-hint">Więcej</span>
                          </span>
                        </button>
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
                    <p className="hero-portrait-caption">
                      Symbol mądrości,
                      <br />
                      odpowiedzialności,
                      <br />
                      odwagi i szacunku
                    </p>
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
  
          <section className="section container home-tabs-section">
        <span className="eyebrow home-tabs-eyebrow">Sekcje</span>
        <div className="cards-grid home-tabs-grid">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <Link to={item.path} key={item.label} className="feature-card">
                <div className="feature-icon">
                  <Icon size={18} />
                </div>
                <h3>{item.label}</h3>
              </Link>
            );
          })}
          <a
            href="https://uonetplus.vulcan.net.pl/krakow/"
            target="_blank"
            rel="noopener noreferrer"
            className="feature-card"
            aria-label="Przejdź do Dziennika VULCAN"
          >
            <div className="feature-icon">
              <FileText size={18} />
            </div>
            <h3>Dziennik VULCAN</h3>
          </a>
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
    text: 'Uroczystości, wydarzenia, wycieczki, czyli codzienność naszej społeczności szkolnej.',
  },
  {
    title: 'Projekty edukacyjne',
    text: 'Warsztaty, konkursy, zajęcia projektowe oraz inicjatywy rozwijające zainteresowania uczniów.',
  },
  {
    title: 'Roczniki',
    text: 'Zdjęcia klasowe, studniówki oraz wspomnienia uczniów z kolejnych lat szkolnych.',
  },
];

const endOfSchoolYearPhotos = Array.from({ length: 13 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');

  return {
    src: `${import.meta.env.BASE_URL}galeria/zakonczenie-roku-szkolnego-2025-2026/${number}.webp`,
    alt: `Zakończenie roku szkolnego 2025/2026 – zdjęcie ${index + 1}`,
  };
});

const scientificSessionPhotos = Array.from({ length: 16 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');

  return {
    src: `${import.meta.env.BASE_URL}galeria/64-sesja-naukowa-2026/${number}.jpg`,
    alt: `64. Sesja Naukowa – zdjęcie ${index + 1}`,
  };
});

const graduatesFarewellPhotos = Array.from({ length: 9 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');

  return {
    src: `${import.meta.env.BASE_URL}galeria/pozegnanie-maturzystow-2026/${number}.jpg`,
    alt: `Pożegnanie maturzystów 2026 – zdjęcie ${index + 1}`,
  };
});

const englishDayPhotos = [
  '10d42439-50c7-41c4-9c0e-0dd32965410d.jpg',
  '41a352ed-9e7b-4056-a732-7fd813bd5958.jpg',
  '918aa89a-614a-4f26-9ec0-e3e84dee0739.jpeg',
  'c5651ec3-d711-450b-96a6-f4b6db17022e.jpeg',
  'e67e0bd8-68ad-47d5-a07e-339039310361.jpg',
  'IMG_4488_edited.jpg',
  'IMG_4494_edited.jpg',
  'IMG_4508_edited.jpg',
  'IMG_4511_edited.jpg',
  'IMG_4518_edited.jpg',
  'IMG_4521_edited.jpg',
].map((filename, index) => ({
  src: `${import.meta.env.BASE_URL}galeria/dzien-jezyka-angielskiego-2026/${filename}`,
  alt: `Dzień Języka Angielskiego 2026 – zdjęcie ${index + 1}`,
}));

const studniowkaPhotos = [
  'Studniowka_2026{Counter}_5.webp',
  'Studniowka_2026{Counter}.webp',
  'Studniowka_2026{Counter}_1.webp',
  'Studniowka_2026{Counter}_2.webp',
  'Studniowka_2026{Counter}_3.webp',
  'Studniowka_2026{Counter}_4.webp',
  'Studniowka_2026{Counter}_6.webp',
  'Studniowka_2026{Counter}_7.webp',
  'Studniowka_2026{Counter}_8.webp',
].map((filename, index) => ({
  src: `${import.meta.env.BASE_URL}galeria/studniowka-2026/${filename}`,
  alt: `Studniówka 2026 – zdjęcie ${index + 1}`,
}));

const schoolYearOpeningPhotos = [
  {
    src: `${import.meta.env.BASE_URL}galeria/rozpoczecie-roku-szkolnego-2025-2026/01.jpg`,
    alt: 'Rozpoczęcie roku szkolnego 2025/2026 – poczet sztandarowy',
  },
];

function GalleryPage({ initialAlbum = null }) {
  const isScientificAlbum = initialAlbum === '64-sesja-naukowa-2026';
  const isGraduatesFarewellAlbum = initialAlbum === 'pozegnanie-maturzystow-2026';
  const isEnglishDayAlbum = initialAlbum === 'dzien-jezyka-angielskiego-2026';
  const isStudniowkaAlbum = initialAlbum === 'studniowka-2026';
  const isSchoolYearOpeningAlbum = initialAlbum === 'rozpoczecie-roku-szkolnego-2025-2026';
  const [activeCategory, setActiveCategory] = useState(
      isScientificAlbum
          ? 'Projekty edukacyjne'
          : isEnglishDayAlbum
              ? 'Projekty edukacyjne'
          : isStudniowkaAlbum
              ? 'Roczniki'
          : isGraduatesFarewellAlbum
              ? 'Roczniki'
              : 'Życie szkoły'
  );
  const [albumOpen, setAlbumOpen] = useState(initialAlbum);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const activeAlbumIsScientific = albumOpen === '64-sesja-naukowa-2026';
  const activeAlbumIsGraduatesFarewell = albumOpen === 'pozegnanie-maturzystow-2026';
  const activeAlbumIsEnglishDay = albumOpen === 'dzien-jezyka-angielskiego-2026';
  const activeAlbumIsStudniowka = albumOpen === 'studniowka-2026';
  const activeAlbumIsSchoolYearOpening = albumOpen === 'rozpoczecie-roku-szkolnego-2025-2026';
  const activeAlbumPhotos = activeAlbumIsScientific
      ? scientificSessionPhotos
      : activeAlbumIsEnglishDay
          ? englishDayPhotos
      : activeAlbumIsStudniowka
          ? studniowkaPhotos
      : activeAlbumIsGraduatesFarewell
          ? graduatesFarewellPhotos
          : activeAlbumIsSchoolYearOpening
              ? schoolYearOpeningPhotos
          : endOfSchoolYearPhotos;
  const activeAlbumCategory = activeAlbumIsScientific
      ? 'Projekty edukacyjne'
      : activeAlbumIsEnglishDay
          ? 'Projekty edukacyjne'
      : activeAlbumIsStudniowka
          ? 'Roczniki'
      : activeAlbumIsGraduatesFarewell
          ? 'Roczniki'
          : activeAlbumIsSchoolYearOpening
              ? 'Życie szkoły'
          : 'Życie szkoły';
  const activeAlbumTitle = activeAlbumIsScientific
      ? '64. Sesja Naukowa'
      : activeAlbumIsEnglishDay
          ? 'Dzień Języka Angielskiego 2026'
      : activeAlbumIsStudniowka
          ? 'Studniówka 2026'
      : activeAlbumIsGraduatesFarewell
          ? 'Pożegnanie maturzystów 2026'
          : activeAlbumIsSchoolYearOpening
              ? 'Rozpoczęcie roku szkolnego 2025/2026'
          : 'Zakończenie roku szkolnego 2025/2026';

  useEffect(() => {
    setActiveCategory(
        initialAlbum === '64-sesja-naukowa-2026'
            ? 'Projekty edukacyjne'
            : initialAlbum === 'dzien-jezyka-angielskiego-2026'
                ? 'Projekty edukacyjne'
            : initialAlbum === 'studniowka-2026'
                ? 'Roczniki'
            : initialAlbum === 'pozegnanie-maturzystow-2026'
                ? 'Roczniki'
                : 'Życie szkoły'
    );
    setAlbumOpen(initialAlbum);
    setSelectedPhoto(null);
  }, [initialAlbum]);

  const selectedPhotoIndex = selectedPhoto
      ? activeAlbumPhotos.findIndex((photo) => photo.src === selectedPhoto.src)
      : -1;

  const changeSelectedPhoto = (direction) => {
    setSelectedPhoto((currentPhoto) => {
      const currentIndex = activeAlbumPhotos.findIndex(
          (photo) => photo.src === currentPhoto?.src
      );
      const nextIndex =
          (currentIndex + direction + activeAlbumPhotos.length) % activeAlbumPhotos.length;

      return activeAlbumPhotos[nextIndex];
    });
  };

  useEffect(() => {
    if (!selectedPhoto) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') changeSelectedPhoto(-1);
      if (event.key === 'ArrowRight') changeSelectedPhoto(1);
      if (event.key === 'Escape') setSelectedPhoto(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, activeAlbumPhotos]);

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
                          onClick={() => setAlbumOpen('zakonczenie-roku-2025-2026')}
                      >
                        <img
                            src={endOfSchoolYearPhotos[0].src}
                            alt="Okładka albumu Zakończenie roku szkolnego 2025/2026"
                        />

                        <div className="school-album-copy">
                          <span>Życie szkoły</span>
                          <h3>Zakończenie roku szkolnego 2025/2026</h3>
                          <p>{endOfSchoolYearPhotos.length} zdjęć</p>
                        </div>
                      </button>

                      <button
                          type="button"
                          className="school-album-card"
                          onClick={() => setAlbumOpen('rozpoczecie-roku-szkolnego-2025-2026')}
                      >
                        <img
                            src={schoolYearOpeningPhotos[0].src}
                            alt="Okładka albumu Rozpoczęcie roku szkolnego 2025/2026"
                        />

                        <div className="school-album-copy">
                          <span>Życie szkoły</span>
                          <h3>Rozpoczęcie roku szkolnego 2025/2026</h3>
                          <p>{schoolYearOpeningPhotos.length} zdjęcie</p>
                        </div>
                      </button>
                    </div>
                ) : activeCategory === 'Projekty edukacyjne' ? (
                    <div className="gallery-albums-section">
                      <h2>Albumy</h2>

                      <button
                          type="button"
                          className="school-album-card"
                          onClick={() => setAlbumOpen('64-sesja-naukowa-2026')}
                      >
                        <img
                            src={scientificSessionPhotos[0].src}
                            alt="Okładka albumu 64. Sesja Naukowa"
                        />

                        <div className="school-album-copy">
                          <span>Projekty edukacyjne</span>
                          <h3>64. Sesja Naukowa</h3>
                          <p>16 zdjęć</p>
                        </div>
                      </button>

                      <button
                          type="button"
                          className="school-album-card"
                          onClick={() => setAlbumOpen('dzien-jezyka-angielskiego-2026')}
                      >
                        <img
                            src={englishDayPhotos[0].src}
                            alt="Okładka albumu Dzień Języka Angielskiego 2026"
                        />

                        <div className="school-album-copy">
                          <span>Projekty edukacyjne</span>
                          <h3>Dzień Języka Angielskiego 2026</h3>
                          <p>{englishDayPhotos.length} zdjęć</p>
                        </div>
                      </button>
                    </div>
                ) : activeCategory === 'Roczniki' ? (
                    <div className="gallery-albums-section">
                      <h2>Rocznik 2026</h2>

                      <button
                          type="button"
                          className="school-album-card"
                          onClick={() => setAlbumOpen('pozegnanie-maturzystow-2026')}
                      >
                        <img
                            src={graduatesFarewellPhotos[0].src}
                            alt="Okładka albumu Pożegnanie maturzystów 2026"
                        />

                        <div className="school-album-copy">
                          <span>Rocznik 2026</span>
                          <h3>Pożegnanie maturzystów 2026</h3>
                          <p>{graduatesFarewellPhotos.length} zdjęć</p>
                        </div>
                      </button>

                      <button
                          type="button"
                          className="school-album-card"
                          onClick={() => setAlbumOpen('studniowka-2026')}
                      >
                        <img src={studniowkaPhotos[0].src} alt="Okładka albumu Studniówka 2026" />

                        <div className="school-album-copy">
                          <span>Rocznik 2026</span>
                          <h3>Studniówka 2026</h3>
                          <p>{studniowkaPhotos.length} zdjęć</p>
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
                    onClick={() => setAlbumOpen(null)}
                >
                  ← Powrót do albumów
                </button>

                <div className="school-album-heading">
                  <span>{activeAlbumCategory}</span>
                  <h2>{activeAlbumTitle}</h2>
                  <p>{activeAlbumPhotos.length} zdjęć</p>
                </div>

                <div className="school-photo-grid">
                  {activeAlbumPhotos.map((photo) => (
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

                <button
                    type="button"
                    className="gallery-lightbox-nav gallery-lightbox-prev"
                    onClick={(event) => {
                      event.stopPropagation();
                      changeSelectedPhoto(-1);
                    }}
                    aria-label="Poprzednie zdjęcie"
                >
                  <ChevronLeft size={30} />
                </button>

                <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    onClick={(event) => event.stopPropagation()}
                />

                <button
                    type="button"
                    className="gallery-lightbox-nav gallery-lightbox-next"
                    onClick={(event) => {
                      event.stopPropagation();
                      changeSelectedPhoto(1);
                    }}
                    aria-label="Następne zdjęcie"
                >
                  <ChevronRight size={30} />
                </button>

                <span className="gallery-lightbox-counter" aria-live="polite">
                  {selectedPhotoIndex + 1} / {activeAlbumPhotos.length}
                </span>
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
    dateTime: '2026-06-26',
    place: 'Kraków',
    excerpt:
        '26 czerwca odbyło się uroczyste zakończenie roku szkolnego.',
    image: `${import.meta.env.BASE_URL}galeria/zakonczenie-roku-szkolnego-2025-2026/01.webp`,
  },
  {
    slug: '64-sesja-naukowa-2026',
    title: 'Sprawozdanie z 64. Sesji Naukowej',
    date: '10 czerwca 2026',
    dateTime: '2026-06-10',
    place: 'Kraków',
    excerpt:
        'Kolejna Sesja Naukowa zgromadziła uczniów prezentujących referaty z nauk humanistycznych, przyrodniczych i ścisłych.',
    image: `${import.meta.env.BASE_URL}aktualnosci/64-sesja-naukowa-2026.jpg`,
  },
  {
    slug: 'pozegnanie-maturzystow-2026',
    title: 'Pożegnanie maturzystów 2026',
    date: '24 kwietnia 2026',
    dateTime: '2026-04-24',
    place: 'Kraków',
    excerpt:
        'Uroczyste zakończenie roku szkolnego klas maturalnych oraz podsumowanie wspólnych lat nauki i sukcesów tegorocznych absolwentów.',
    image: `${import.meta.env.BASE_URL}galeria/pozegnanie-maturzystow-2026/01.jpg`,
  },
  {
    slug: 'wymiana-z-holenderska-szkola-w-laren',
    title: 'Wymiana z holenderską szkołą w Laren',
    date: '13–17 kwietnia 2026',
    dateTime: '2026-04-13',
    place: 'Laren, Niderlandy',
    excerpt: 'Międzynarodowa wymiana, wspólne lekcje, Bruksela, Amsterdam i nowe przyjaźnie.',
    image: `${import.meta.env.BASE_URL}krakow-rynek.jpeg`,
  },
  {
    slug: 'dzien-jezyka-angielskiego-2026',
    title: 'Dzień Języka Angielskiego 2026',
    date: '17–18 marca 2026',
    dateTime: '2026-03-17',
    place: 'Kraków',
    excerpt: 'Konkurs, prezentacje uczniów i debata o nowoczesnej technologii podczas dwóch dni poświęconych językowi angielskiemu.',
    image: `${import.meta.env.BASE_URL}aktualnosci/dzien-jezyka-angielskiego-2026.jpg`,
  },
  {
    slug: 'ferie-naukowe-2026',
    title: 'Ferie Naukowe',
    date: '2–4 i 13 lutego 2026',
    dateTime: '2026-02-02',
    place: 'Kraków',
    excerpt: 'Dodatkowe zajęcia dla maturzystów z języka polskiego i matematyki przed zbliżającym się egzaminem maturalnym.',
    image: `${import.meta.env.BASE_URL}siedziba-vplo.jpg`,
  },
  {
    slug: 'warsztaty-teatralne-2026',
    title: 'Warsztaty teatralne',
    date: '15 stycznia 2026',
    dateTime: '2026-01-15',
    place: 'Kraków',
    excerpt:
        'Spotkanie wokół „Folwarku zwierzęcego” George’a Orwella, prowadzone przez redaktora Ireneusza Dańko.',
    image: `${import.meta.env.BASE_URL}aktualnosci/warsztaty-teatralne-2026.jpg`,
  },
  {
    slug: 'studniowka-2026',
    title: 'Studniówka 2026',
    date: '10 stycznia 2026',
    dateTime: '2026-01-10',
    place: 'Kraków',
    excerpt: 'Uroczysty wieczór maturzystów, pełen radości, wzruszeń i wspólnego świętowania zbliżającego się zakończenia nauki.',
    image: `${import.meta.env.BASE_URL}aktualnosci/studniowka-2026.webp`,
  },
  {
    slug: 'wyjscie-do-teatru-2025',
    title: 'Wyjście do teatru',
    date: '19 grudnia 2025',
    dateTime: '2025-12-19',
    place: 'Kraków',
    excerpt:
        'Uczniowie obejrzeli w Teatrze Ludowym spektakl „Folwark zwierzęcy” — wartościowe doświadczenie kulturalne i okazję do refleksji.',
    image: `${import.meta.env.BASE_URL}aktualnosci/wyjscie-do-teatru-2025.jpg`,
  },
  {
    slug: 'dzien-niepodleglosci-2025',
    title: 'Dzień Niepodległości',
    date: '12 listopada 2025',
    dateTime: '2025-11-12',
    place: 'Kraków',
    excerpt:
        'Uczniowie liceum uczcili Narodowe Święto Niepodległości pod pomnikiem Józefa Piłsudskiego.',
    image: `${import.meta.env.BASE_URL}aktualnosci/dzien-niepodleglosci-2025.jpg`,
  },
  {
    slug: 'wymiana-miedzynarodowa-2025',
    title: 'Wymiana międzynarodowa',
    date: '13–16 października 2025',
    dateTime: '2025-10-13',
    place: 'Kraków',
    excerpt:
        'Gościliśmy uczniów z holenderskiej szkoły w Laren podczas wspólnych zajęć, spotkań i wycieczek po Krakowie.',
    image: `${import.meta.env.BASE_URL}krakow-rynek.jpeg`,
  },
  {
    slug: 'narodowe-czytanie-2025',
    title: 'Narodowe Czytanie 2025',
    date: '5 września 2025',
    dateTime: '2025-09-05',
    place: 'Kraków',
    excerpt:
        'W ramach Narodowego Czytania uczniowie poznawali Pieśni, Fraszki i Treny Jana Kochanowskiego.',
    image: `${import.meta.env.BASE_URL}aktualnosci/narodowe-czytanie-2025.png`,
  },
  {
    slug: 'rozpoczecie-roku-szkolnego-2025-2026',
    title: 'Rozpoczęcie roku szkolnego 2025/2026',
    date: '1 września 2025',
    dateTime: '2025-09-01',
    place: 'Kraków',
    excerpt:
        'Uroczyste rozpoczęcie roku szkolnego, ślubowanie uczniów klas pierwszych i wykład inauguracyjny.',
    image: `${import.meta.env.BASE_URL}aktualnosci/rozpoczecie-roku-szkolnego-2025-2026.jpg`,
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
                    <time dateTime={news.dateTime}>{news.date}</time>
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
                      więcej
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

function ScientificSessionArticle() {
  const articleImage =
      `${import.meta.env.BASE_URL}aktualnosci/64-sesja-naukowa-2026.jpg`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">
            ← Powrót do aktualności
          </Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Sprawozdanie z 64. Sesji Naukowej w V Prywatnym L.O.</h1>

            <div className="news-meta news-article-meta">
              <span>
                <CalendarDays size={18} />
                <time dateTime="2026-06-10">10 czerwca 2026</time>
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
              alt="Uczniowie podczas 64. Sesji Naukowej"
          />

          <div className="news-article-body">
            <p>
              W dniu 10 czerwca 2026 roku odbyła się kolejna, już 64. Sesja
              Naukowa w V Prywatnym L.O. w Krakowie im. Królowej Jadwigi.
            </p>

            <p>
              Obrady rozpoczęło słowo wstępne Pana Dyrektora Jerzego Andrzeja
              Białkiewicza, wyjaśniające i przypominające uczniom doniosłość tego
              wydarzenia w naszym kalendarzu szkolnym. Następnie dr Patryk
              Wiśniewski wygłosił wykład wprowadzający pt. „Jak Polacy nazywali
              kolory? Historia kategoryzacji barw w polszczyźnie od korzeni
              praindoeuropejskich do współczesności”.
            </p>

            <p>
              Tym razem uczniowie przedstawiali swoje referaty ze wszystkich trzech
              sekcji przedmiotowych: nauk humanistycznych (język polski, języki
              obce, historia, WOS), nauk przyrodniczych (biologia, chemia,
              geografia) oraz nauk ścisłych (matematyka, fizyka, informatyka).
            </p>

            <p>
              Łącznie uczniowie zaprezentowali 10 referatów wyselekcjonowanych przez
              nauczycieli prowadzących. Wystąpienia były na najwyższym poziomie.
              Prelegenci otrzymali od Komisji Konkursowej oceny celujące, bardzo
              dobre i dobre, zaś wyróżnienia dodatkowo otrzymali Piotr Biela
              (kl. 2 A) za wystąpienie z historii oraz Julia Wikłacz (kl. 3 D) za
              referat z biologii.
            </p>

            <p>
              Sesję zamknęła prelekcja Marka Winiarskiego (kl. 3 D) „Niebieska
              szkoła – szkoła pod żaglami”, który podzielił się swoimi refleksjami i
              materiałem ikonograficzno-filmowym z rejsu po Atlantyku, odbytym
              wiosną bieżącego roku. Prezentację przyjętą z aplauzem uświetnił pokaz
              sprzętu ratunkowego żaglowca „Fryderyk Chopin”.
            </p>

            <p>
              Nowością sesji były karty pracy wypełniane przez wszystkich obecnych
              uczniów, co dało wymierny walor naukowy każdemu na widowni. Na
              szczególną uwagę zasługuje ożywiona dyskusja i liczne pytania zadawane
              na bieżąco przez uczniów i nauczycieli po każdym wystąpieniu.
            </p>

            <p>
              Wszystkim uczestnikom gratulujemy wystąpień na 64. Sesji Naukowej w V
              Prywatnym L.O. w Krakowie im. Królowej Jadwigi! Jednocześnie
              rozpoczynamy przygotowania do 65. Sesji Naukowej, która odbędzie się w
              grudniu 2026 roku.
            </p>

            <Link to="/galeria/64-sesja-naukowa-2026" className="news-gallery-link">
              Galeria 64. Sesji Naukowej
            </Link>
          </div>
        </div>
      </article>
  );
}

function LarenExchangeArticle() {
  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>
          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Wymiana z holenderską szkołą w Laren</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-04-13">13–17 kwietnia 2026</time></span>
              <span><MapPin size={18} />Laren, Niderlandy</span>
            </div>
          </header>
          <div className="news-article-body">
            <p>W dniach 13–17 kwietnia uczniowie naszej szkoły uczestniczyli w wymianie międzynarodowej z holenderską szkołą w Laren. Podczas pobytu brali udział w lekcjach razem z uczniami holenderskich klas, poznając tamtejszy system edukacji i codzienne życie szkoły.</p>
            <p>Program obejmował również wycieczki do Brukseli, gdzie młodzież odwiedziła Parlament Europejski i zwiedzała miasto, a także do Amsterdamu — uczestnicy odbyli rejs kanałami, odwiedzili Rijksmuseum oraz słynne ogrody tulipanów Keukenhof.</p>
            <p>Wyjazd był doskonałą okazją do rozwijania kompetencji językowych, poznawania nowych kultur i nawiązywania międzynarodowych przyjaźni.</p>
          </div>
        </div>
      </article>
  );
}

function EnglishDayArticle() {
  const articleImage =
      `${import.meta.env.BASE_URL}aktualnosci/dzien-jezyka-angielskiego-2026.jpg`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Dzień Języka Angielskiego 2026</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-03-17">17–18 marca 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img
              className="news-article-cover"
              src={articleImage}
              alt="Uczestnicy Dnia Języka Angielskiego 2026"
          />

          <div className="news-article-body">
            <p>
              Tegoroczne obchody Dnia Języka Angielskiego w V Prywatnym Liceum rozpoczęliśmy 17 marca. Z okazji Dnia Świętego Patryka Panie Profesor Agnieszka Smoleń oraz Iga Zdanikowska zorganizowały konkurs na temat postaci patrona. Uczestnicy podzieleni na grupy rywalizowali między sobą w formule gry Jeopardy. Zwycięska drużyna, w której skład wchodzili Adam Sydor, Jakub Stadnicki i Filip Staniewski, otrzymała dyplomy oraz oceny celujące.
            </p>

            <p>
              W dniu 18 marca młodzież klas 1–3 w pięciu grupach uczestniczyła w prezentacjach poświęconych kluczowym postaciom brytyjskiej i amerykańskiej nauki, sztuki i literatury. Każdy uczeń naszej szkoły przygotował projekt na temat wynalazców, naukowców, artystów i pisarzy, którzy znacząco wzbogacili naukową i duchową spuściznę Wielkiej Brytanii oraz Stanów Zjednoczonych.
            </p>

            <p>
              W drugiej części dnia wszyscy uczniowie mieli okazję wziąć udział w gorącej debacie na temat korzyści i zagrożeń płynących z nowoczesnej technologii, ze szczególnym uwzględnieniem smartfonów (<em>The Advantages and Disadvantages of Modern Technology</em>). Debatę przygotował i poprowadził profesor Leszek Korzeniowski. Poprzedziła ją projekcja dwóch krótkich filmów edukacyjnych wprowadzających w omawianą tematykę.
            </p>

            <Link to="/galeria/dzien-jezyka-angielskiego-2026" className="news-gallery-link">
              Galeria zdjęć
            </Link>
          </div>
        </div>
      </article>
  );
}

function StudniowkaArticle() {
  const articleImage = `${import.meta.env.BASE_URL}aktualnosci/studniowka-2026.webp`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Studniówka 2026</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-01-10">10 stycznia 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img className="news-article-cover" src={articleImage} alt="Studniówka 2026" />

          <div className="news-article-body">
            <p>
              10 stycznia odbyła się uroczysta studniówka — jedno z najważniejszych wydarzeń w życiu naszych maturzystów. Bal, przygotowany z dbałością o każdy szczegół, przebiegał w podniosłej i eleganckiej atmosferze.
            </p>
            <p>
              Był to wieczór pełen wzruszeń, radości oraz wspólnego świętowania zbliżającego się zakończenia nauki w murach naszej szkoły, który na długo pozostanie w pamięci uczniów i nauczycieli.
            </p>

            <Link to="/galeria/studniowka-2026" className="news-gallery-link">
              Galeria zdjęć
            </Link>
          </div>
        </div>
      </article>
  );
}

function FerieNaukoweArticle() {
  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Ferie Naukowe</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-02-02">2–4 i 13 lutego 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <div className="news-article-body">
            <p>
              Podczas ferii zimowych w naszej szkole odbyły się dodatkowe zajęcia dla maturzystów. Uczniowie mieli okazję utrwalić i poszerzyć swoją wiedzę z języka polskiego oraz matematyki, zarówno na poziomie podstawowym, jak i rozszerzonym.
            </p>
            <p>
              Spotkania były doskonałą okazją do powtórzenia najważniejszych zagadnień przed zbliżającym się egzaminem maturalnym.
            </p>
          </div>
        </div>
      </article>
  );
}

function TheatreWorkshopsArticle() {
  const galleryPath = `${import.meta.env.BASE_URL}galeria/warsztaty-teatralne-2026`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Warsztaty teatralne</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-01-15">15 stycznia 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img
              className="news-article-cover"
              src={`${galleryPath}/01.jpg`}
              alt="Uczennice podczas warsztatów teatralnych"
          />

          <div className="news-article-body">
            <p>
              15 stycznia 2026 roku uczniowie naszej szkoły uczestniczyli w warsztatach
              zorganizowanych przez Teatr Ludowy w ramach spotkań wokół spektaklu muzycznego
              <i>„Folwark zwierzęcy”</i> w reżyserii Wojciecha Kościelniaka, który wcześniej
              mieli okazję obejrzeć.
            </p>
            <p>
              Warsztaty prowadził redaktor Ireneusz Dańko. W bardzo wnikliwy sposób
              przeanalizował genezę powstania utworu George’a Orwella, a wraz z uczniami
              porównał fikcyjnych bohaterów z ich historycznymi pierwowzorami.
            </p>
            <p>
              Analiza mechanizmów totalitaryzmu oraz wynikających z niego zagrożeń stała się
              tematem pogłębionej refleksji. Uczniowie mieli także okazję zobaczyć stare wydania
              <i>„Folwarku zwierzęcego”</i> oraz <i>„Esejów”</i> autorstwa George’a Orwella.
            </p>

            <div className="news-inline-gallery" aria-label="Zdjęcia z warsztatów teatralnych">
              <img src={`${galleryPath}/02.jpg`} alt="Ireneusz Dańko prowadzący warsztaty" />
              <img src={`${galleryPath}/03.jpg`} alt="Zabytkowe wydanie Folwarku zwierzęcego" />
            </div>
          </div>
        </div>
      </article>
  );
}

function TheatreVisitArticle() {
  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Wyjście do teatru</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2025-12-19">19 grudnia 2025</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <div className="news-article-body">
            <p>
              19 grudnia uczniowie, pod opieką prof. Żądło, prof. Maziarczyk-Suszko
              oraz prof. Wiśniewskiego, uczestniczyli w wyjściu do Teatru Ludowego na
              spektakl <i>„Folwark zwierzęcy”</i>.
            </p>
            <p>
              Przedstawienie wyróżniało się wysokim poziomem artystycznym oraz głębią
              przesłania, skłaniając do refleksji nad uniwersalnymi wartościami. Było to
              cenne doświadczenie kulturalne, które na długo pozostanie w pamięci uczestników.
            </p>
          </div>
        </div>
      </article>
  );
}

function IndependenceDayArticle() {
  const galleryPath = `${import.meta.env.BASE_URL}galeria/dzien-niepodleglosci-2025`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Dzień Niepodległości</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2025-11-12">12 listopada 2025</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <div className="news-article-body">
            <p>
              Uczniowie naszego liceum uczcili Narodowe Święto Niepodległości pod
              pomnikiem Józefa Piłsudskiego znajdującym się w bliskim sąsiedztwie szkoły.
              W krótkiej uroczystości przypomnieli znaczenie tego dnia i złożyli kwiaty,
              oddając hołd tym, którzy walczyli o wolność Polski.
            </p>
            <p>
              Była to chwila refleksji, ale też wspólnego poczucia dumy z bycia częścią
              historii naszego kraju.
            </p>

            <div className="news-inline-gallery independence-day-gallery" aria-label="Zdjęcia z obchodów Dnia Niepodległości">
              <img src={`${galleryPath}/01.jpg`} alt="Uczniowie przy pomniku Józefa Piłsudskiego" />
              <img src={`${galleryPath}/02.jpg`} alt="Pomnik Józefa Piłsudskiego i złożone kwiaty" />
            </div>
          </div>
        </div>
      </article>
  );
}

function InternationalExchangeArticle() {
  const articleImage = `${import.meta.env.BASE_URL}krakow-rynek.jpeg`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Wymiana międzynarodowa</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2025-10-13">13–16 października 2025</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img
              className="news-article-cover"
              src={articleImage}
              alt="Sukiennice na Rynku Głównym w Krakowie"
          />

          <div className="news-article-body">
            <p>
              W dniach 13–16 października nasza szkoła miała przyjemność gościć
              uczniów z holenderskiej szkoły w Laren. W ramach wymiany międzynarodowej
              nasi uczniowie, wspólnie z kolegami i koleżankami z XVIII Liceum
              Ogólnokształcącego w Krakowie, przyjęli gości z Holandii w swoich domach,
              oferując im serdeczne przyjęcie i możliwość poznania polskiej kultury z bliska.
            </p>
            <p>
              Podczas wspólnych zajęć uczestnicy wymiany brali udział w różnorodnych
              aktywnościach edukacyjnych i integracyjnych — m.in. w grze miejskiej,
              lekcji muzealnej w Galerii Sztuki Polskiej XIX wieku w Sukiennicach,
              zwiedzaniu muzeum w Auschwitz oraz w debacie poświęconej roli sztucznej
              inteligencji w edukacji.
            </p>
          </div>
        </div>
      </article>
  );
}

function NationalReadingArticle() {
  const articleImage = `${import.meta.env.BASE_URL}aktualnosci/narodowe-czytanie-2025.png`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Narodowe Czytanie 2025</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2025-09-05">5 września 2025</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <div className="news-article-body news-article-body-split">
            <div>
              <p>
                Narodowe Czytanie pod Patronatem Pary Prezydenckiej w naszym Liceum
                rozpoczęło się już w piątek, 5 września, i trwało przez cały następny tydzień.
                Tym razem czytaliśmy <i>Pieśni</i>, <i>Fraszki</i> i <i>Treny</i> Jana Kochanowskiego.
              </p>
              <p>
                Na lekcjach wychowawczych, języka polskiego oraz podczas spotkań z rodzicami,
                pięknie czytając utwory poety, ciągle przekonujemy się o ponadczasowej wartości
                jego twórczości.
              </p>
              <p>
                Już wiemy, że za rok czytać będziemy fragmenty <i>Dziadów</i> Adama Mickiewicza.
                Z Kancelarii Prezydenta otrzymaliśmy pamiątkową pieczątkę. Będziemy korzystać z niej
                w wielu momentach, przypieczętowując kolejny rok Narodowego Czytania.
              </p>
            </div>

            <img
                className="news-article-cover news-article-cover-contain national-reading-cover"
                src={articleImage}
                alt="Treny, Pieśni, Psalmy i Fraszki Jana Kochanowskiego"
            />
          </div>
        </div>
      </article>
  );
}

function SchoolYearOpeningArticle() {
  const articleImage =
      `${import.meta.env.BASE_URL}aktualnosci/rozpoczecie-roku-szkolnego-2025-2026.jpg`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Rozpoczęcie roku szkolnego 2025/2026</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2025-09-01">1 września 2025</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img
              className="news-article-cover news-article-cover-contain"
              src={articleImage}
              alt="Poczet sztandarowy podczas rozpoczęcia roku szkolnego"
          />

          <div className="news-article-body">
            <p>
              1 września z radością powitaliśmy nowy rok szkolny 2025/2026. Celebracje
              rozpoczęliśmy Mszą Świętą w kościele pw. Niepokalanego Serca Maryi. Po Mszy
              Świętej przeszliśmy do budynku przy ul. Smoleńsk 14, siedziby V Prywatnego
              Liceum Ogólnokształcącego im. Królowej Jadwigi w Krakowie, gdzie w Collegium
              Maximum uczniowie klas pierwszych złożyli uroczyste ślubowanie.
            </p>
            <p>
              Uczniom rozpoczynającym naukę w naszym Liceum życzymy samych dobrych chwil,
              sukcesów, radości ze zdobywanej wiedzy i przyjaciół wśród koleżanek i kolegów
              w szkole.
            </p>
            <p>
              Z wielkim zainteresowaniem spotkał się wykład inauguracyjny pt. <i>„Tysiąclecie
              podniesienia Korony Królestwa Polskiego”</i> prof. K. Świderskiego, nauczyciela
              historii. Dyrektor Szkoły, prof. Jerzy A. Białkiewicz, przywitał profesorów,
              uczniów i rodziców obecnych na uroczystości oraz przedstawił główne kierunki
              pracy dydaktycznej i wychowawczej obowiązujące w bieżącym roku szkolnym.
            </p>
            <p>
              Uroczystość zakończyło spotkanie z wychowawcami klas, którzy serdecznie
              przywitali uczniów, planując wspólną pracę, m.in. wycieczki, Narodowe Czytanie,
              Dzień Patronki szkoły i wiele innych wydarzeń.
            </p>

            <Link to="/galeria/rozpoczecie-roku-szkolnego-2025-2026" className="news-gallery-link">
              Galeria zdjęć
            </Link>
          </div>
        </div>
      </article>
  );
}

function GraduatesFarewellArticle() {
  const articleImage =
      `${import.meta.env.BASE_URL}galeria/pozegnanie-maturzystow-2026/01.jpg`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">
            ← Powrót do aktualności
          </Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Pożegnanie maturzystów 2026</h1>

            <div className="news-meta news-article-meta">
              <span>
                <CalendarDays size={18} />
                <time dateTime="2026-04-24">24 kwietnia 2026</time>
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
              alt="Pożegnanie maturzystów 2026"
          />

          <div className="news-article-body">
            <p>
              24 kwietnia odbyło się uroczyste zakończenie roku szkolnego klas
              maturalnych. Był to wyjątkowy moment podsumowania kilku lat nauki,
              wspólnych doświadczeń oraz sukcesów osiągniętych przez tegorocznych
              absolwentów. Podczas uroczystości wręczono świadectwa, nagrody i
              wyróżnienia dla uczniów szczególnie zaangażowanych w życie szkoły oraz
              osiągających wysokie wyniki w nauce.
            </p>

            <p>
              Wszystkim maturzystom życzymy realizacji dalszych planów i marzeń.
            </p>

            <Link to="/galeria/pozegnanie-maturzystow-2026" className="news-gallery-link">
              Galeria
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
          {page.lead && (scientificSessionsPage ? (
              <div className="scientific-sessions-header-row">
                <p className={showSectionIntroCard ? 'section-intro-card' : undefined}>
                  {page.lead}
                </p>
                <Link
                    className="matura-schedule-button scientific-sessions-archive-button"
                    to="/edukacja/sesje-naukowe/archiwum"
                >
                  Zagadnienia Sesji naukowych
                </Link>
              </div>
          ) : (
              <p className={showSectionIntroCard ? 'section-intro-card' : undefined}>
                {page.lead}
              </p>
          ))}
        </div>
        {articlePage && page.showHighlights && (
          <aside className="article-highlights">
            {page.showHighlightsTitle !== false && <h2>Najważniejsze elementy</h2>}
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
          ]
              .filter(Boolean)
              .join(' ')}
      >

        <article
            className={[
              'page-main-card',
              page.textbookCards ? 'textbooks-main-card' : '',
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
                        ) : section.type === 'heading' ? (
                          <h2 className="education-formatted-heading" key={`formatted-heading-${index}`}>
                            {section.content}
                          </h2>
                        ) : section.type === 'highlight' ? (
                          <p className="education-formatted-highlight" key={`formatted-highlight-${index}`}>
                            {section.content}
                          </p>
                        ) : section.type === 'paragraphWithLink' ? (
                          <p key={`formatted-link-${index}`}>
                            {section.before}
                            <a href={section.href} target="_blank" rel="noreferrer">
                              {section.linkLabel}
                            </a>
                            {section.after}
                          </p>
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
                      href={schoolMapUrl}
                      external
                  />

                  <InfoBadge
                      icon={<Phone size={18} />}
                      text={school.phone}
                      href={`tel:${school.phone.replace(/\s/g, '')}`}
                  />

                  <InfoBadge
                      icon={<Phone size={18} />}
                      text={school.extraPhone}
                      href={`tel:${school.extraPhone.replace(/\s/g, '')}`}
                  />

                  <InfoBadge
                      icon={<Mail size={18} />}
                      text={school.email}
                      href={`mailto:${school.email}`}
                  />
                </div>

                <section className="social-qr-section">
                  <h2>Liceum w mediach społecznościowych</h2>

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

function InfoBadge({ icon, text, href, external = false }) {
  const content = (
      <>
        {icon}
        <span>{text}</span>
      </>
  );

  if (href) {
    return (
        <a
            className="info-badge info-badge-link"
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
    );
  }

  return (
    <div className="info-badge">
      {content}
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
      <div className="container footer-credit">
        {/*© 2026 V Prywatne Liceum Ogólnokształcące w Krakowie · DBLaboffice*/}
      </div>
    </footer>
  );
}

export default App;
