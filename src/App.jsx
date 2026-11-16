import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {
  CalendarDays,
  CircleCheckBig,
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
  ShieldCheck,
  Trophy,
  Users,
  X,
} from 'lucide-react';
import DlaczegoDoNas from './pages/rekrutacja/DlaczegoDoNas';
import DniOtwarte from './pages/rekrutacja/DniOtwarte';
import WymaganeDokumenty from './pages/rekrutacja/WymaganeDokumenty';
import ProcesRekrutacji from './pages/rekrutacja/ProcesRekrutacji';
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
import MaterialyDlaKadry from './pages/szkola/MaterialyDlaKadry';
import Sekretariat from './pages/szkola/Sekretariat';
import educationPages, { educationMenuItem } from './pages/edukacja';
import { educationRoutes } from './pages/edukacja/routes';
import Aktualnosci from './Aktualnosci/Aktualnosci';
import { aktualnosci as newsItems } from './Aktualnosci/aktualnosciData';
import { ArchiwalnaAktualnosc, ArchiwumRokuSzkolnego } from './Aktualnosci/ArchiwumAktualnosci';

import './pages/szkola/szkola.css';

const school = {
  name: 'V Prywatne Liceum Ogólnokształcące w Krakowie im. Królowej Jadwigi',
  short: 'Liceum',
  address: 'ul. Smoleńsk 14, 31-112 Kraków',
  phone: '+48 12 422 92 02',
  extraPhone: '+48 881 009 790',
  email: 'dyrektor@vp-lo.krakow.pl',
  recruitmentEmail: 'rekrutacja@vp-lo.krakow.pl',
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
const schoolFilmSecondSrc = `${import.meta.env.BASE_URL}vplo-film-2.mp4`;
const headerBannerSlides = [
  { src: `${import.meta.env.BASE_URL}smolensk-siedziba.png`, alt: 'Siedziba V Prywatnego Liceum Ogólnokształcącego w Krakowie', position: 'center 40%'},
  { src: `${import.meta.env.BASE_URL}krakow-rynek.jpeg`, alt: 'Rynek Główny w Krakowie', position: 'center 55%' },
  { src: `${import.meta.env.BASE_URL}krakow-rynek-noc.jpeg`, alt: 'Rynek Główny w Krakowie nocą', position: 'center 45%' },
  { src: `${import.meta.env.BASE_URL}krakow-wawel.jpeg`, alt: 'Wawel nad Wisłą', position: 'center 30%' },
  { src: `${import.meta.env.BASE_URL}krakow-wisla.jpeg`, alt: 'Panorama Wawelu i Wisły', position: 'center 30%' },
];
const subpageBannerSlides = {
  school: [
    { src: `${import.meta.env.BASE_URL}banery/szkola.png`, alt: 'Budynek V Prywatnego Liceum Ogólnokształcącego', position: 'center 48%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/zalozyciel.png`, alt: 'Wydarzenie w liceum', position: 'center 12%' },
    { src: `${import.meta.env.BASE_URL}banery/ogrod.png`, alt: 'Spotkanie społeczności liceum w ogrodzie', position: 'center 45%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/collegium2.png`, alt: 'Collegium Maximum w liceum', position: 'center 55%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/aula.png`, alt: 'Aula liceum', position: 'center 57%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/collegium.png`, alt: 'Wejście do Collegium Maximum', position: 'center 54%', fit: 'cover' },
  ],
  spaces: [
    { src: `${import.meta.env.BASE_URL}banery/aula.png`, alt: 'Aula liceum', position: 'center 57%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/collegium.png`, alt: 'Wejście do Collegium Maximum', position: 'center 54%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/sala-302.png`, alt: 'Sala lekcyjna w liceum', position: 'center 55%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/komputerowa.png`, alt: 'Pracownia komputerowa', position: 'center 53%', fit: 'cover' },
  ],
  education: [
    { src: `${import.meta.env.BASE_URL}banery/sesja.png`, alt: 'Prezentacja uczniowska podczas sesji naukowej', position: 'center 28%' },
    { src: `${import.meta.env.BASE_URL}banery/uczniowie.png`, alt: 'Uczniowie liceum', position: 'center 25%' },
    { src: `${import.meta.env.BASE_URL}banery/komputerowa.png`, alt: 'Pracownia komputerowa', position: 'center 53%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/sala-302.png`, alt: 'Sala lekcyjna w liceum', position: 'center 55%', fit: 'cover' },
  ],
  recruitment: [
    { src: `${import.meta.env.BASE_URL}banery/slubowanie.png`, alt: 'Ślubowanie uczniowskie', position: 'center 50%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/studniowka.png`, alt: 'Studniówka liceum', position: 'center 25%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/zakonczenie-roku.png`, alt: 'Uczniowie podczas zakończenia roku', position: 'center 20%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/uczniowie.png`, alt: 'Uczniowie liceum', position: 'center 25%' },
  ],
  student: [
    { src: `${import.meta.env.BASE_URL}banery/uczniowie.png`, alt: 'Uczniowie liceum', position: 'center 25%' },
    { src: `${import.meta.env.BASE_URL}banery/sesja.png`, alt: 'Prezentacja uczniowska podczas sesji naukowej', position: 'center 28%' },
    { src: `${import.meta.env.BASE_URL}banery/zakonczenie.png`, alt: 'Poczet sztandarowy liceum', position: 'center 24%' },
    { src: `${import.meta.env.BASE_URL}banery/slubowanie.png`, alt: 'Ślubowanie uczniowskie', position: 'center 50%', fit: 'cover' },
  ],
  events: [
    { src: `${import.meta.env.BASE_URL}banery/studniowka.png`, alt: 'Studniówka liceum', position: 'center 25%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/sztandar.png`, alt: 'Uroczystość z pocztem sztandarowym', position: 'center 24%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/kolendowanie.png`, alt: 'Kolędowanie w liceum', position: 'center 25%', fit: 'cover' },
    { src: `${import.meta.env.BASE_URL}banery/zakonczenie-roku.png`, alt: 'Uczniowie podczas zakończenia roku', position: 'center 20%', fit: 'cover' },
  ],
};

function getSubpageBannerSlides(pathname) {
  if (pathname.startsWith('/szkola/infrastruktura')) return subpageBannerSlides.spaces;
  if (pathname.startsWith('/szkola')) return subpageBannerSlides.school;
  if (pathname.startsWith('/edukacja')) return subpageBannerSlides.education;
  if (pathname.startsWith('/rekrutacja')) return subpageBannerSlides.recruitment;
  if (pathname.startsWith('/uczen')) return subpageBannerSlides.student;
  if (pathname.startsWith('/aktualnosci') || pathname.startsWith('/galeria')) return subpageBannerSlides.events;
  return subpageBannerSlides.school;
}
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
          { label: 'Proces rekrutacji', path: '/rekrutacja/proces-rekrutacji' },
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
    showHighlightsTitle: false,
  },
};

// Zmień na false, aby natychmiast wyłączyć tryb żałoby po ponownym opublikowaniu strony.
const NATIONAL_MOURNING_ENABLED = true;
// Tryb jest aktywny od razu, do końca 11 listopada 2026 według czasu polskiego.
const NATIONAL_MOURNING_END = new Date('2026-11-12T00:00:00+01:00').getTime();
const isNationalMourningTime = () => Date.now() < NATIONAL_MOURNING_END;

function App() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMourningTime, setIsMourningTime] = useState(isNationalMourningTime);
  const showMourningOverlay = NATIONAL_MOURNING_ENABLED && location.pathname === '/' && isMourningTime;

  useEffect(() => {
    if (!NATIONAL_MOURNING_ENABLED) return;

    const updateMourningTime = () => setIsMourningTime(isNationalMourningTime());
    updateMourningTime();
    const endTimeoutId = window.setTimeout(updateMourningTime, Math.max(0, NATIONAL_MOURNING_END - Date.now()));
    document.addEventListener('visibilitychange', updateMourningTime);

    return () => {
      window.clearTimeout(endTimeoutId);
      document.removeEventListener('visibilitychange', updateMourningTime);
    };
  }, []);

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
        <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} pathname={location.pathname} />
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
              path="/materialy-kadra"
              element={<MaterialyDlaKadry />}
          />

          <Route path="/sekretariat" element={<Sekretariat />} />

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
              path="/rekrutacja/proces-rekrutacji"
              element={<ProcesRekrutacji />}
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

          <Route path="/aktualnosci" element={<Aktualnosci />} />

          <Route path="/aktualnosci/archiwum/:schoolYearPath" element={<ArchiwumRokuSzkolnego />} />

          <Route path="/aktualnosci/archiwalna/:slug" element={<ArchiwalnaAktualnosc />} />

          <Route
              path="/aktualnosci/spacer-edukacyjny-szlakiem-krakowskiej-secesji"
              element={<KrakowArtNouveauWalkArticle />}
          />

          <Route
              path="/aktualnosci/wyjscie-na-wystawe-andy-warhola"
              element={<AndyWarholExhibitionArticle />}
          />

          <Route
              path="/aktualnosci/wymiana-miedzynarodowa-z-holenderska-szkola-z-laren"
              element={<NetherlandsExchangeArticle />}
          />

          <Route
              path="/aktualnosci/english-corner-nowa-zakladka"
              element={<EnglishCornerNewsArticle />}
          />

          <Route
              path="/aktualnosci/nowy-artykul-w-english-corner"
              element={<EnglishCornerMulticulturalismArticle />}
          />

          <Route
              path="/aktualnosci/zaloba-narodowa-po-tragicznych-wydarzeniach-w-krakowie"
              element={<NationalMourningKrakowArticle />}
          />

          <Route
              path="/aktualnosci/konferencja-dyrektorow-2026"
              element={<PrincipalsConferenceArticle />}
          />

          <Route
              path="/aktualnosci/szkola-do-hymnu-2026"
              element={<SchoolAnthemArticle />}
          />

          <Route
              path="/aktualnosci/relacja-z-obchodow-dnia-niepodleglosci-2026"
              element={<IndependenceDay2026Article />}
          />

          <Route
              path="/aktualnosci/lekcja-z-krolowa-jadwiga-i-ai"
              element={<QueenJadwigaAiLessonArticle />}
          />

          <Route
              path="/aktualnosci/wycieczka-integracyjna-nad-jezioro-czorsztynskie"
              element={<CzorsztynIntegrationTripArticle />}
          />

          <Route
              path="/aktualnosci/olimpiady-przedmiotowe-2026"
              element={<SubjectOlympiadsArticle />}
          />

          <Route
              path="/aktualnosci/probna-ewakuacja-szkoly-2026"
              element={<SchoolEvacuationArticle />}
          />

          <Route
              path="/aktualnosci/auschwitz-birkenau-lekcja-historii-i-czlowieczenstwa"
              element={<AuschwitzBirkenauArticle />}
          />

          <Route
              path="/aktualnosci/praga-pelna-odkryc-2026"
              element={<PragueMaturaTripArticle />}
          />

          <Route
              path="/aktualnosci/wspomnienie-roku-2025-2026"
              element={<SchoolYearMemoriesArticle />}
          />

          <Route
              path="/aktualnosci/narodowe-czytanie-2026"
              element={<NationalReading2026Article />}
          />

          <Route
              path="/aktualnosci/inauguracja-roku-szkolnego-2026-2027"
              element={<SchoolYearInaugurationArticle />}
          />

          <Route
              path="/aktualnosci/zakonczenie-roku-2025-2026"
              element={<EndOfSchoolYearArticle />}
          />

          <Route
              path="/aktualnosci/zakonczenie-roku-2024-2025"
              element={<EndOfSchoolYear2025Article />}
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
              path="/galeria/spacer-krakowska-secesja-2026"
              element={<GalleryPage initialAlbum="spacer-krakowska-secesja-2026" />}
          />

          <Route
              path="/galeria/inauguracja-roku-szkolnego-2026-2027"
              element={<GalleryPage initialAlbum="inauguracja-roku-szkolnego-2026-2027" />}
          />

          <Route
              path="/galeria/wymiana-holandia-2026"
              element={<GalleryPage initialAlbum="wymiana-holandia-2026" />}
          />

          <Route
              path="/galeria/wycieczka-integracyjna-czorsztyn-2026"
              element={<GalleryPage initialAlbum="wycieczka-integracyjna-czorsztyn-2026" />}
          />

          <Route
              path="/galeria/wycieczka-praga-2026"
              element={<GalleryPage initialAlbum="wycieczka-praga-2026" />}
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
      {showMourningOverlay && <div className="national-mourning-overlay" aria-hidden="true" />}
    </div>
  );
}

function Header({ mobileOpen, setMobileOpen, pathname }) {
  const isHomePage = pathname === '/';
  const isAdmissionForm = pathname.startsWith('/rekrutacja/formularz-przyjecia-ucznia');
  const [isSubpageScrolled, setIsSubpageScrolled] = useState(false);
  const subpageScrollState = useRef(false);
  const bannerSlides = isHomePage
    ? headerBannerSlides
    : getSubpageBannerSlides(pathname);

  useEffect(() => {
    if (isHomePage) {
      subpageScrollState.current = false;
      setIsSubpageScrolled(false);
      return undefined;
    }

    let animationFrameId = null;
    const updateHeaderState = () => {
      if (animationFrameId !== null) return;

      animationFrameId = window.requestAnimationFrame(() => {
        const nextState = window.scrollY > 0;

        if (nextState !== subpageScrollState.current) {
          subpageScrollState.current = nextState;
          setIsSubpageScrolled(nextState);
        }

        animationFrameId = null;
      });
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      if (animationFrameId !== null) window.cancelAnimationFrame(animationFrameId);
    };
  }, [isHomePage, pathname]);

  return (
    <header className={`site-header ${isSubpageScrolled || isAdmissionForm ? 'is-subpage-scrolled' : ''} ${isAdmissionForm ? 'site-header-admission-form' : ''}`}>
      <div className={`container topbar ${isHomePage ? 'topbar-home' : ''}`}>
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
              Szkoła z tradycją, kameralną atmosferą i&nbsp;nowoczesnym podejściem do edukacji
            </div>

            <div className="brand-meta">
              {school.founded}
            </div>
          </div>
        </Link>
        {!isAdmissionForm && <HeaderBanner
          key={isHomePage ? 'home' : pathname.split('/')[1]}
          slides={bannerSlides}
          isSubpage={!isHomePage}
        />}
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

function HeaderBanner({ slides, isSubpage }) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((index) => (index + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [slides]);

  const slide = slides[slideIndex];

  return (
    <figure
      className={`header-banner ${isSubpage ? 'header-banner-subpage' : ''}`}
      style={isSubpage ? { '--banner-image': `url("${slide.src}")` } : undefined}
    >
      <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          style={{
            objectPosition: slide.position || 'center',
            objectFit: slide.fit || (isSubpage ? 'contain' : 'cover')
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
    const [expandedSection, setExpandedSection] = useState(null);
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
                  <InfoBadge
                      icon={<Mail size={16} />}
                      text={school.email}
                      href={`mailto:${school.email}`}
                  />
                  <InfoBadge
                      icon={<Mail size={16} />}
                      text={school.recruitmentEmail}
                      href={`mailto:${school.recruitmentEmail}`}
                  />
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
                <div className="home-video-players">
                  <video
                    className="home-video-player"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src={schoolFilmSrc} type="video/mp4" />
                    Twoja przeglądarka nie obsługuje odtwarzania wideo.
                  </video>
                  <video
                    className="home-video-player"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src={schoolFilmSecondSrc} type="video/mp4" />
                    Twoja przeglądarka nie obsługuje odtwarzania wideo.
                  </video>
                </div>
              </div>
            </section>

            <HomeUpdatesStrip compact />
          </section>
  
          <section className="section container home-tabs-section">
        <span className="eyebrow home-tabs-eyebrow">Sekcje</span>
        <div className="cards-grid home-tabs-grid">
          {menu.map((item) => {
            const Icon = item.icon;
            const hasChildren = item.children?.length > 0;
            const sectionLinks = item.children?.flatMap(({ items }) =>
              items.flatMap((link) => link.children ? [link, ...link.children] : link)
            ) ?? [];
            const isExpanded = expandedSection === item.label;

            if (hasChildren) {
              return (
                <div
                  key={item.label}
                  className={`home-section-card${isExpanded ? ' is-open' : ''}`}
                >
                  <Link to={item.path} className="feature-card home-section-desktop-link">
                    <div className="feature-icon">
                      <Icon size={18} />
                    </div>
                    <h3>{item.label}</h3>
                  </Link>
                  <button
                    type="button"
                    className="feature-card home-section-toggle"
                    aria-expanded={isExpanded}
                    aria-controls={`home-section-links-${item.label}`}
                    onClick={() => setExpandedSection((section) => section === item.label ? null : item.label)}
                  >
                    <div className="feature-icon">
                      <Icon size={18} />
                    </div>
                    <h3>{item.label}</h3>
                    <ChevronDown className="home-section-chevron" size={16} aria-hidden="true" />
                  </button>
                  <div id={`home-section-links-${item.label}`} className="home-section-links">
                    {sectionLinks.map((link) => (
                      link.external ? (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      ) : (
                        <Link key={link.path} to={link.path} onClick={() => setExpandedSection(null)}>
                          {link.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              );
            }

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

const krakowArtNouveauWalkPhotos = [
  '01.jpg',
  'spacer-sesja-2026-001.jpg',
  'spacer-sesja-2026-002.jpg',
  'spacer-sesja-2026-004.jpg',
  'spacer-sesja-2026-005.jpg',
  'spacer-sesja-2026-006.jpg',
  'spacer-sesja-2026-007.jpg',
].map((filename, index) => ({
  src: `${import.meta.env.BASE_URL}galeria/spacer-krakowska-secesja-2026/${filename}`,
  alt: `Spacer edukacyjny szlakiem krakowskiej secesji – zdjęcie ${index + 1}`,
}));

const schoolYearInauguration2026Photos = Array.from({ length: 11 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');

  return {
    src: `${import.meta.env.BASE_URL}galeria/inauguracja-roku-szkolnego-2026-2027/Image${number}.jpg`,
    alt: `Inauguracja roku szkolnego 2026/2027 – zdjęcie ${index + 1}`,
  };
});

const netherlandsExchangePhotos = [
  ...Array.from(
      { length: 38 },
      (_, index) => `Wymiana X 2026 ${String(index + 1).padStart(2, '0')}.jpg`
  ),
].map((filename, index) => ({
  src: `${import.meta.env.BASE_URL}galeria/wymiana-holandia-2026/${filename}`,
  alt: `Wymiana międzynarodowa z holenderską szkołą z Laren – zdjęcie ${index + 1}`,
}));

const czorsztynIntegrationTripPhotos = Array.from({ length: 51 }, (_, index) => index + 1)
  .filter((number) => ![33, 38].includes(number))
  .map((photoNumber) => {
  const number = String(photoNumber).padStart(2, '0');

  return {
    src: `${import.meta.env.BASE_URL}galeria/wycieczka-integracyjna-czorsztyn-2026/Wycieczka_integracyjna_19-20_października_2026_${number}.jpg`,
    alt: `Wycieczka integracyjna nad Jezioro Czorsztyńskie – zdjęcie ${photoNumber}`,
  };
});

const pragueMaturaTripPhotos = Array.from({ length: 39 }, (_, index) => index + 1)
  .filter((number) => number !== 25)
  .map((photoNumber) => {
  const number = String(photoNumber).padStart(2, '0');

  return {
    src: `${import.meta.env.BASE_URL}galeria/wycieczka-praga-2026/Praga_wycieczka_21-22X2026_${number}.jpg`,
    alt: `Praga pełna odkryć – zdjęcie ${photoNumber}`,
  };
});

function GalleryPage({ initialAlbum = null }) {
  const navigate = useNavigate();
  const isScientificAlbum = initialAlbum === '64-sesja-naukowa-2026';
  const isGraduatesFarewellAlbum = initialAlbum === 'pozegnanie-maturzystow-2026';
  const isEnglishDayAlbum = initialAlbum === 'dzien-jezyka-angielskiego-2026';
  const isNetherlandsExchangeAlbum = initialAlbum === 'wymiana-holandia-2026';
  const isStudniowkaAlbum = initialAlbum === 'studniowka-2026';
  const isSchoolYearOpeningAlbum = initialAlbum === 'rozpoczecie-roku-szkolnego-2025-2026';
  const [activeCategory, setActiveCategory] = useState(
      isScientificAlbum
          ? 'Projekty edukacyjne'
          : isEnglishDayAlbum
              ? 'Projekty edukacyjne'
          : isNetherlandsExchangeAlbum
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
  const activeAlbumIsKrakowArtNouveauWalk = albumOpen === 'spacer-krakowska-secesja-2026';
  const activeAlbumIsSchoolYearInauguration2026 = albumOpen === 'inauguracja-roku-szkolnego-2026-2027';
  const activeAlbumIsNetherlandsExchange = albumOpen === 'wymiana-holandia-2026';
  const activeAlbumIsCzorsztynIntegrationTrip = albumOpen === 'wycieczka-integracyjna-czorsztyn-2026';
  const activeAlbumIsPragueMaturaTrip = albumOpen === 'wycieczka-praga-2026';
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
              : activeAlbumIsKrakowArtNouveauWalk
                  ? krakowArtNouveauWalkPhotos
                  : activeAlbumIsSchoolYearInauguration2026
                      ? schoolYearInauguration2026Photos
                      : activeAlbumIsNetherlandsExchange
                          ? netherlandsExchangePhotos
                          : activeAlbumIsCzorsztynIntegrationTrip
                              ? czorsztynIntegrationTripPhotos
                              : activeAlbumIsPragueMaturaTrip
                                  ? pragueMaturaTripPhotos
          : endOfSchoolYearPhotos;
  const activeAlbumCategory = activeAlbumIsScientific
      ? 'Projekty edukacyjne'
      : activeAlbumIsEnglishDay
          ? 'Projekty edukacyjne'
      : activeAlbumIsNetherlandsExchange
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
              : activeAlbumIsKrakowArtNouveauWalk
                  ? 'Spacer edukacyjny szlakiem krakowskiej secesji'
                  : activeAlbumIsSchoolYearInauguration2026
                      ? 'Inauguracja roku szkolnego 2026/2027'
                      : activeAlbumIsNetherlandsExchange
                          ? 'Wymiana międzynarodowa z holenderską szkołą z Laren'
                          : activeAlbumIsCzorsztynIntegrationTrip
                              ? 'Wycieczka integracyjna nad Jezioro Czorsztyńskie'
                              : activeAlbumIsPragueMaturaTrip
                                  ? 'Praga pełna odkryć – trzy dni maturzystów w Czechach'
          : 'Zakończenie roku szkolnego 2025/2026';
  const activeAlbumNewsPath = activeAlbumIsSchoolYearInauguration2026
      ? '/aktualnosci/inauguracja-roku-szkolnego-2026-2027'
      : activeAlbumIsCzorsztynIntegrationTrip
          ? '/aktualnosci/wycieczka-integracyjna-nad-jezioro-czorsztynskie'
          : activeAlbumIsPragueMaturaTrip
              ? '/aktualnosci/praga-pelna-odkryc-2026'
              : null;

  useEffect(() => {
    setActiveCategory(
        initialAlbum === '64-sesja-naukowa-2026'
            ? 'Projekty edukacyjne'
            : initialAlbum === 'dzien-jezyka-angielskiego-2026'
                ? 'Projekty edukacyjne'
            : initialAlbum === 'wymiana-holandia-2026'
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
                          onClick={() => navigate('/galeria/wycieczka-praga-2026')}
                      >
                        <img
                            src={pragueMaturaTripPhotos[2].src}
                            alt="Okładka albumu Praga pełna odkryć"
                        />

                        <div className="school-album-copy">
                          <span>Życie szkoły</span>
                          <h3>Praga pełna odkryć – trzy dni maturzystów w Czechach</h3>
                          <p>{pragueMaturaTripPhotos.length} zdjęć</p>
                        </div>
                      </button>

                      <button
                          type="button"
                          className="school-album-card"
                          onClick={() => navigate('/galeria/wycieczka-integracyjna-czorsztyn-2026')}
                      >
                        <img
                            src={`${import.meta.env.BASE_URL}galeria/wycieczka-integracyjna-czorsztyn-2026/Wycieczka_integracyjna_19-20_października_2026_04.jpg`}
                            alt="Okładka albumu Wycieczka integracyjna nad Jezioro Czorsztyńskie"
                        />

                        <div className="school-album-copy">
                          <span>Życie szkoły</span>
                          <h3>Wycieczka integracyjna nad Jezioro Czorsztyńskie</h3>
                          <p>{czorsztynIntegrationTripPhotos.length} zdjęć</p>
                        </div>
                      </button>

                      <button
                          type="button"
                          className="school-album-card"
                          onClick={() => navigate('/galeria/spacer-krakowska-secesja-2026')}
                      >
                        <img
                            src={krakowArtNouveauWalkPhotos[0].src}
                            alt="Okładka albumu Spacer edukacyjny szlakiem krakowskiej secesji"
                        />

                        <div className="school-album-copy">
                          <span>Życie szkoły</span>
                          <h3>Spacer edukacyjny szlakiem krakowskiej secesji</h3>
                          <p>{krakowArtNouveauWalkPhotos.length} zdjęć</p>
                        </div>
                      </button>

                      <button
                          type="button"
                          className="school-album-card"
                          onClick={() => navigate('/galeria/inauguracja-roku-szkolnego-2026-2027')}
                      >
                        <img
                            src={schoolYearInauguration2026Photos[0].src}
                            alt="Okładka albumu Inauguracja roku szkolnego 2026/2027"
                        />

                        <div className="school-album-copy">
                          <span>Życie szkoły</span>
                          <h3>Inauguracja roku szkolnego 2026/2027</h3>
                          <p>{schoolYearInauguration2026Photos.length} zdjęć</p>
                        </div>
                      </button>

                      <button
                          type="button"
                          className="school-album-card"
                          onClick={() => navigate('/galeria/zakonczenie-roku-szkolnego-2025-2026')}
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
                          onClick={() => navigate('/galeria/rozpoczecie-roku-szkolnego-2025-2026')}
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
                          onClick={() => navigate('/galeria/wymiana-holandia-2026')}
                      >
                        <img
                            src={`${import.meta.env.BASE_URL}galeria/wymiana-holandia-2026/Wymiana X 2026 17.jpg`}
                            alt="Okładka albumu Wymiana międzynarodowa z holenderską szkołą z Laren"
                        />

                        <div className="school-album-copy">
                          <span>Projekty edukacyjne</span>
                          <h3>Wymiana międzynarodowa z holenderską szkołą z Laren</h3>
                          <p>{netherlandsExchangePhotos.length} zdjęć</p>
                        </div>
                      </button>

                      <button
                          type="button"
                          className="school-album-card"
                          onClick={() => navigate('/galeria/64-sesja-naukowa-2026')}
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
                          onClick={() => navigate('/galeria/dzien-jezyka-angielskiego-2026')}
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
                          onClick={() => navigate('/galeria/pozegnanie-maturzystow-2026')}
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
                          onClick={() => navigate('/galeria/studniowka-2026')}
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
                    onClick={() => navigate('/galeria')}
                >
                  ← Powrót do albumów
                </button>

                <div className="school-album-heading">
                  <span>{activeAlbumCategory}</span>
                  <h2>{activeAlbumTitle}</h2>
                  <p>{activeAlbumPhotos.length} zdjęć</p>
                  {activeAlbumNewsPath && (
                      <Link to={activeAlbumNewsPath} className="album-news-link">
                        ← Powrót do aktualności
                      </Link>
                  )}
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
            {latestNews.image ? (
                <img
                    src={latestNews.image}
                    alt=""
                    className="home-update-news-image"
                />
            ) : (
                <div className="home-update-news-placeholder" aria-hidden="true"><School size={54} /></div>
            )}

            <div className="home-update-news-overlay">
            <span className="home-update-label">
              Aktualności
            </span>

              <h2>{latestNews.title}</h2>

              <p>
                {latestNews.displayDate} · {latestNews.place}
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

function SchoolYearInaugurationArticle() {
  const galleryPath = `${import.meta.env.BASE_URL}galeria/inauguracja-roku-szkolnego-2026-2027`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Inauguracja roku szkolnego 2026/2027</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-09-01">1 września 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <div className="news-article-body">
            <p>
              We wtorek, 1 września, odbyła się uroczysta inauguracja nowego roku
              szkolnego. Podczas wydarzenia szczególnym momentem było ślubowanie uczniów
              klas pierwszych, którzy oficjalnie dołączyli do społeczności naszej szkoły.
            </p>
            <p>
              Uczestnicy uroczystości wysłuchali również interesującego wykładu poświęconego
              patronce szkoły — Królowej Jadwidze. Spotkanie było okazją do wspólnego
              rozpoczęcia kolejnego roku nauki i pracy.
            </p>

            <div className="news-article-image-pair">
              <img
                  src={`${galleryPath}/Image11.jpg`}
                  alt="Inauguracja roku szkolnego 2026/2027 – wystąpienie w auli"
              />
              <img
                  src={`${galleryPath}/Image02.jpg`}
                  alt="Inauguracja roku szkolnego 2026/2027 – uroczystość w kościele"
              />
            </div>

            <Link to="/galeria/inauguracja-roku-szkolnego-2026-2027" className="news-gallery-link">
              Galeria zdjęć
            </Link>
          </div>
        </div>
      </article>
  );
}

function SchoolYearMemoriesArticle() {
  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Wspomnienie roku 2025/2026</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-09-03">3 września 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <div className="news-article-body">
            <p>
              <strong>Nowy rok szkolny startuje, ale zanim zanurzymy się w świeże plany i pomysły,
              wracamy na chwilę do tego, co działo się wcześniej.</strong>
            </p>
            <p>
              A działo się sporo: projekty, wyjazdy, konkursy, małe i duże sukcesy, codzienne
              szkolne historie, które tworzyły wyjątkową atmosferę naszej szkoły.
            </p>
            <div className="news-film-frame">
              <span className="news-film-frame-label">Wspomnienie roku 2025/2026</span>
              <video controls preload="metadata" className="news-film-frame-video">
                <source
                    src={`${import.meta.env.BASE_URL}wideo/wspomnienie-roku-2025-2026.mp4`}
                    type="video/mp4"
                />
                Twoja przeglądarka nie obsługuje odtwarzania filmu.
              </video>
            </div>
            <p>
              Dziś przypominamy sobie te momenty — bo to one pokazują, jaką drogę już
              przeszliśmy i jak wiele możemy osiągnąć w kolejnych miesiącach.
              <strong> Zaczynamy nowy rok z energią, doświadczeniem i dobrymi wspomnieniami
              w kieszeni.</strong>
            </p>
          </div>
        </div>
      </article>
  );
}

function CzorsztynIntegrationTripArticle() {
  const galleryPath = `${import.meta.env.BASE_URL}galeria/wycieczka-integracyjna-czorsztyn-2026`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Wycieczka integracyjna nad Jezioro Czorsztyńskie</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-10-21">19–21 października 2026</time></span>
              <span><MapPin size={18} />Jezioro Czorsztyńskie</span>
            </div>
          </header>

          <p className="czorsztyn-article-subtitle">Jesienna integracja nad Jeziorem Czorsztyńskim</p>

          <img
              className="news-article-cover"
              src={`${galleryPath}/Wycieczka_integracyjna_19-20_października_2026_04.jpg`}
              alt="Wycieczka integracyjna nad Jezioro Czorsztyńskie"
          />

          <div className="news-article-body">
            <p>
              W dniach 19–21 października uczniowie klas pierwszych i drugich uczestniczyli
              w wycieczce integracyjnej nad Jezioro Czorsztyńskie. Wspólne zabawy i ognisko
              sprzyjały budowaniu relacji i lepszemu poznawaniu się. Uczniowie mieli również
              okazję podziwiać piękno jesiennej przyrody podczas spacerów nad jeziorem oraz
              wędrówki szlakiem na Kudowski Wierch.
            </p>

            <div className="czorsztyn-article-photo-strip">
              <img
                  src={`${galleryPath}/Wycieczka_integracyjna_19-20_października_2026_47.jpg`}
                  alt="Uczniowie podczas wycieczki integracyjnej – zdjęcie 47"
              />
              <img
                  src={`${galleryPath}/Wycieczka_integracyjna_19-20_października_2026_51.jpg`}
                  alt="Uczniowie podczas wycieczki integracyjnej – zdjęcie 51"
              />
              <img
                  src={`${galleryPath}/Wycieczka_integracyjna_19-20_października_2026_02.jpg`}
                  alt="Uczniowie podczas wycieczki integracyjnej – zdjęcie 2"
              />
            </div>

            <div className="news-film-frame czorsztyn-article-video">
              <span className="news-film-frame-label">Jak było nad Jeziorem Czorsztyńskim?</span>
              <video controls preload="metadata" className="news-film-frame-video">
                <source src={`${galleryPath}/wycieczka-integracyjna-czorsztyn-2026.mp4`} type="video/mp4" />
                Twoja przeglądarka nie obsługuje odtwarzania filmu.
              </video>
            </div>

            <Link to="/galeria/wycieczka-integracyjna-czorsztyn-2026" className="news-gallery-link">
              Galeria zdjęć
            </Link>
          </div>
        </div>
      </article>
  );
}

function PragueMaturaTripArticle() {
  const galleryPath = `${import.meta.env.BASE_URL}galeria/wycieczka-praga-2026`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Praga pełna odkryć – trzy dni maturzystów w Czechach</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-10-23">21–23 października 2026</time></span>
              <span><MapPin size={18} />Praga, Czechy</span>
            </div>
          </header>

          <div className="prague-article-hero-pair">
            <img
                src={`${galleryPath}/Praga_wycieczka_21-22X2026_03.jpg`}
                alt="Maturzyści podczas wycieczki do Pragi – zdjęcie 3"
            />
            <img
                src={`${galleryPath}/Praga_wycieczka_21-22X2026_17.jpg`}
                alt="Maturzyści podczas wycieczki do Pragi – zdjęcie 17"
            />
          </div>

          <div className="news-article-body">
            <p>
              W dniach 21-23.10 odbyła się wycieczka klas maturalnych do Pragi. Program obfitował
              w elementy rekreacyjne i edukacyjne. Pierwszego dnia po drodze do stolicy Czech
              uczniowie spacerowali po krainie Morawski Kras, gdzie zobaczyli przepaść Macochę oraz
              jaskinię Punkevni. Popołudnie to spacer po praskiej starówce i podziwianie zegara Orloj.
            </p>
            <p>
              W kolejnych intensywnych dniach zwiedzono Hradczany wraz z Katedrą św. Wita, Złotą
              uliczką, szeregiem kościołów i wnętrz wystawowych. Nie zabrakło spotkań ze sztuką
              nowoczesną czy klasyczną. Przypomniano postaci takie jak Franz Kafka czy Alfons Mucha.
              Wieczory uprzyjemniała gra na gitarze i wspólne śpiewanie.
            </p>

            <div className="prague-article-photo-strip">
              {[20, 19, 34].map((number) => (
                  <img
                      key={number}
                      src={`${galleryPath}/Praga_wycieczka_21-22X2026_${String(number).padStart(2, '0')}.jpg`}
                      alt={`Maturzyści podczas wycieczki do Pragi – zdjęcie ${number}`}
                  />
              ))}
            </div>

            <div className="news-film-frame prague-article-video">
              <span className="news-film-frame-label">Jak było w Pradze</span>
              <video controls preload="metadata" className="news-film-frame-video">
                <source src={`${galleryPath}/wycieczka-praga-2026.mp4`} type="video/mp4" />
                Twoja przeglądarka nie obsługuje odtwarzania filmu.
              </video>
            </div>

            <Link to="/galeria/wycieczka-praga-2026" className="news-gallery-link">
              Galeria zdjęć
            </Link>
          </div>
        </div>
      </article>
  );
}

function SubjectOlympiadsArticle() {
  const articleImage = `${import.meta.env.BASE_URL}aktualnosci/olimpiady-przedmiotowe-2026.png`;
  const olympiadLink = 'https://kuratorium.krakow.pl/vi-edycja-ogolnopolskiej-olimpiady-wiedzy-o-procesie-inwestycyjno-budowlanym/';

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Olimpiady przedmiotowe</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-10-27">27 października 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img
              className="news-article-cover"
              src={articleImage}
              alt="VI Ogólnopolska Olimpiada Wiedzy o Procesie Inwestycyjno-Budowlanym"
          />

          <div className="news-article-body">
            <p>
              W ostatnich dniach nasi uczniowie sprawdzali swoją wiedzę i umiejętności, biorąc
              udział w różnych olimpiadach przedmiotowych. Podejmowali wyzwania m.in. z języka
              polskiego, angielskiego i hiszpańskiego, a także 26 października uczestniczyli w VI
              Ogólnopolskiej Olimpiadzie Wiedzy o Procesie Inwestycyjno-Budowlanym.
            </p>
            <p>
              Wszystkim uczestnikom życzymy powodzenia i z całych sił trzymamy za nich kciuki!
            </p>
            <a className="news-gallery-link" href={olympiadLink} target="_blank" rel="noreferrer">
              Szczegóły VI Ogólnopolskiej Olimpiady Wiedzy o Procesie Inwestycyjno-Budowlanym
            </a>
          </div>
        </div>
      </article>
  );
}

function SchoolEvacuationArticle() {
  const exitImage = `${import.meta.env.BASE_URL}aktualnosci/probna-ewakuacja-szkoly-wyjscie.png`;
  const meetingPointImage = `${import.meta.env.BASE_URL}aktualnosci/probna-ewakuacja-szkoly-zbiorka.png`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Próbna ewakuacja szkoły</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-10-26">26 października 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <div className="evacuation-signs">
            <img className="evacuation-article-cover" src={exitImage} alt="Znak wyjścia ewakuacyjnego" />
            <img className="evacuation-meeting-point" src={meetingPointImage} alt="Znak miejsca zbiórki do ewakuacji" />
          </div>

          <div className="news-article-body evacuation-article-body">
            <p>
              26 października w naszej szkole odbyła się próbna ewakuacja, której celem było
              sprawdzenie znajomości procedur bezpieczeństwa oraz przygotowania do sytuacji
              zagrożenia. Bezpieczeństwo uczniów i pracowników jest dla nas priorytetem, dlatego
              regularnie podejmujemy działania, które pomagają nam odpowiednio reagować w
              sytuacjach kryzysowych.
            </p>
            <p>
              Ewakuacja przebiegła sprawnie i pomyślnie, a cała społeczność szkolna wykazała się
              odpowiedzialnością i zdyscyplinowaniem.
            </p>

            <div className="evacuation-values" aria-label="Najważniejsze wartości podczas ewakuacji">
              <div className="evacuation-value"><ShieldCheck size={25} /><span>Bezpieczeństwo</span></div>
              <div className="evacuation-value"><Users size={25} /><span>Współpraca</span></div>
              <div className="evacuation-value"><CircleCheckBig size={25} /><span>Odpowiedzialność</span></div>
            </div>
          </div>
        </div>
      </article>
  );
}

function AuschwitzBirkenauArticle() {
  const imagePath = `${import.meta.env.BASE_URL}aktualnosci`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Auschwitz-Birkenau – lekcja historii i człowieczeństwa</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-10-30">30 października 2026</time></span>
              <span><MapPin size={18} />Oświęcim</span>
            </div>
          </header>

          <blockquote className="article-quote auschwitz-article-quote">
            „Kto nie pamięta historii, skazany jest na jej ponowne przeżycie”
            <small>George Santayana</small>
          </blockquote>

          <img
              className="news-article-cover"
              src={`${imagePath}/auschwitz-birkenau-2026-04.jpg`}
              alt="Uczniowie podczas wizyty w Miejscu Pamięci Auschwitz-Birkenau"
          />

          <div className="news-article-body auschwitz-article-body">
            <p>
              Tegoroczni abiturienci w ramach podsumowania bloku literatury wojennej udali się do miejsca pamięci Auschwitz - Birkenau. To ważna wizyta, nie tylko w kontekście przygotowań do matury, ale przede wszystkim w kwestii moralnej.
            </p>
            <p>
              Dyskomfort, smutek, przerażenie to nieprzyjemne, acz konieczne uczucia, z którymi
              należy się zmierzyć, by zawsze pamiętać słowa Mariana Turskiego o tym, że
              <strong>„Auschwitz nie spadło z nieba”</strong>, i że nic poza rzetelną nauką historii i
              człowieczeństwa nie uchroni nas przed innymi klęskami humanizmu.
            </p>

            <div className="auschwitz-photo-grid" aria-label="Zdjęcia z wizyty w Auschwitz-Birkenau">
              {[1, 2, 3, 5].map((number) => (
                  <img
                      key={number}
                      src={`${imagePath}/auschwitz-birkenau-2026-0${number}.jpg`}
                      alt={`Wizyta uczniów w Auschwitz-Birkenau – zdjęcie ${number}`}
                  />
              ))}
            </div>
          </div>
        </div>
      </article>
  );
}

function QueenJadwigaAiLessonArticle() {
  const articleImage = `${import.meta.env.BASE_URL}aktualnosci/lekcja-z-krolowa-jadwiga-i-ai.png`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Święto Patronki Szkoły – lekcja z Królową Jadwigą i AI</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-10-16">16 października 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img
              className="news-article-cover"
              src={articleImage}
              alt="Lekcja o Królowej Jadwidze i sztucznej inteligencji"
          />

          <div className="news-article-body jadwiga-ai-article-body">
            <p className="jadwiga-ai-introduction">
              W dniu 16 X obchodzimy święto Patronki naszej szkoły świętej królowej Jadwigi
              Andegaweńskiej, na pamiątkę jej koronacji na króla Polski w 1384 roku.
            </p>

            <div className="jadwiga-ai-learning-grid">
              <section>
                <span>Klasy 1–3</span>
                <p>
                  Z tej okazji uczniowie kl. 1-3 na lekcjach historii obejrzą film p.t. Jak żyła
                  Jadwiga Andegaweńska? Rok 1399. Przed projekcją filmu uczniowie otrzymają karty
                  pracy do wypełnienia zawierające pytania i zadania.
                </p>
              </section>

              <section>
                <span>AI i krytyczne myślenie</span>
                <p>
                  Ponieważ film został wygenerowany przy udziale sztucznej inteligencji (AI), to
                  ćwiczenie będzie miało szczególny walor. Nie tylko zapoznania się z informacjami
                  i szczegółami z życia Patronki Szkoły, ale także zrozumienia i uzmysłowienia
                  sobie jak treści stworzone przez AI mogą odbiegać od faktów i pokazywać
                  rzeczywistość zupełnie nieprawdziwą.
                </p>
              </section>

              <section>
                <span>Klasy 4</span>
                <p>
                  Uczniowie kl. 4, ze względu na minimalną liczbę lekcji historii otrzymają karty
                  pracy i link do filmu do domu.
                </p>
              </section>
            </div>

            <p className="jadwiga-ai-closing">
              Życzymy udanej podróży w czternastowieczny świat królowej Jadwigi i krytycznej
              oceny skutków korzystania ze sztucznej inteligencji.
            </p>
          </div>
        </div>
      </article>
  );
}

function EnglishCornerNewsArticle() {
  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>English Corner – nowa zakładka</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-10-04">4 października 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <div className="news-article-body english-corner-news-body">
            <p>
              Na naszej stronie internetowej pojawiła się nowa zakładka{' '}
              <Link to="/edukacja/english-corner" className="english-corner-news-inline-link">
                <strong>English Corner</strong>
              </Link>, przygotowana w ramach realizowanych w szkole projektów edukacyjnych.
              To przestrzeń, w której prezentujemy uczniowskie artykuły powstające podczas zajęć
              i działań projektowych. Publikowane treści odzwierciedlają rozwój kompetencji
              językowych uczniów, ich zaangażowanie oraz twórcze podejście do pracy z językiem.
            </p>
            <p>
              Zachęcamy do odwiedzenia English Corner i zapoznania się z najnowszymi
              publikacjami, które będą pojawiały się co miesiąc.
            </p>

            <img
                className="english-corner-news-image"
                src={`${import.meta.env.BASE_URL}aktualnosci/english-corner.png`}
                alt="English Corner by VPLO students"
            />

            <Link to="/edukacja/english-corner" className="news-gallery-link">
              English Corner
            </Link>
          </div>
        </div>
      </article>
  );
}

function EnglishCornerMulticulturalismArticle() {
  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Nowy artykuł w English Corner</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-11-04">4 listopada 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <div className="news-article-body english-corner-news-body">
            <div className="english-corner-multiculturalism-layout">
              <div className="english-corner-multiculturalism-copy">
                <p>
                  W zakładce{' '}
                  <Link to="/edukacja/english-corner" className="english-corner-news-inline-link">
                    <strong>English Corner</strong>
                  </Link>{' '}
                  pojawił się nowy artykuł pt.{' '}
                  <strong>„MULTICULTURALISM OF BRITISH LITERATURE AND ART”</strong>, przygotowany
                  przez uczniów klas czwartych w ramach projektu edukacyjnego rozwijającego kompetencje językowe
                  i kulturowe.
                </p>
                <p>
                  Autorzy: <strong>Borys Borysiewicz (4A), Patrycja Renke (4C), Edward Oczko (4C),
                  Lena Regulska (4D) oraz Jeremi Kowalski (4D)</strong> podejmują temat
                  wielokulturowości współczesnej Wielkiej Brytanii, analizując, w jaki sposób kultura,
                  migracje oraz różnorodne doświadczenia społeczne znajdują odzwierciedlenie w
                  literaturze, sztuce i architekturze.
                </p>
                <p>
                  Zachęcamy do lektury najnowszej publikacji oraz regularnego odwiedzania zakładki{' '}
                  <Link to="/edukacja/english-corner" className="english-corner-news-inline-link">
                    <strong>English Corner</strong>
                  </Link>, gdzie co miesiąc pojawiają się nowe artykuły przygotowywane przez naszych
                  uczniów.
                </p>
              </div>

              <img
                  className="english-corner-news-image english-corner-multiculturalism-image"
                  src={`${import.meta.env.BASE_URL}aktualnosci/english-corner-multiculturalism.png`}
                  alt="Multiculturalism in British Art — grafika English Corner"
              />
            </div>

            <Link to="/edukacja/english-corner" className="news-gallery-link">
              English Corner
            </Link>
          </div>
        </div>
      </article>
  );
}

function NationalMourningKrakowArticle() {
  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Żałoba narodowa po tragicznych wydarzeniach w Krakowie</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-11-08">8 listopada 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <div className="news-article-body national-mourning-body">
            <div className="national-mourning-copy">
              <p>
                W związku z tragicznymi wydarzeniami, do których doszło 7 listopada 2026 roku
                w centrum Krakowa, społeczność naszego Liceum łączy się w żałobie narodowej,
                oddając hołd ofiarom tragedii.
              </p>
              <p>
                Składamy wyrazy najgłębszego współczucia rodzinom i bliskim osób, które straciły
                życie, a także wszystkim dotkniętym tym dramatycznym wydarzeniem.
              </p>
              <p>
                W tych bolesnych chwilach pozostajemy solidarni z rodzinami ofiar, osobami
                poszkodowanymi oraz całą społecznością Krakowa.
              </p>
            </div>

            <img
                className="national-mourning-image"
                src={`${import.meta.env.BASE_URL}aktualnosci/zaloba-narodowa-krakow-2026.png`}
                alt="Pamięć przy świecy pod Wawelem"
            />
          </div>
        </div>
      </article>
  );
}

function PrincipalsConferenceArticle() {
  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>V Prywatne Liceum Ogólnokształcące gospodarzem konferencji dyrektorów</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-11-06">6 listopada 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img
              className="news-article-cover news-article-cover-contain principals-conference-image"
              src={`${import.meta.env.BASE_URL}aktualnosci/konferencja-dyrektorow-2026.png`}
              alt="Konferencja Dyrektorów w V Prywatnym Liceum Ogólnokształcącym w Krakowie"
          />

          <div className="news-article-body">
            <p>
              W dniu <strong>6 listopada 2026 roku</strong> w{' '}
              <strong>V Prywatnym Liceum Ogólnokształcącym w Krakowie im. Królowej Jadwigi</strong>{' '}
              odbyła się <strong>Konferencja Dyrektorów</strong> zorganizowana pod patronatem{' '}
              <strong>Kuratorium Oświaty w Krakowie</strong>.
            </p>
            <p>
              Spotkanie zgromadziło dyrektorów szkół, stwarzając przestrzeń do wymiany doświadczeń,
              dyskusji na temat aktualnych wyzwań stojących przed edukacją oraz prezentacji dobrych
              praktyk w zakresie zarządzania placówkami oświatowymi.
            </p>
            <p>
              Jesteśmy zaszczyceni, że nasza szkoła mogła pełnić rolę gospodarza tego wydarzenia.
              Dziękujemy wszystkim uczestnikom za obecność, aktywny udział w spotkaniu oraz
              inspirujące rozmowy, które przyczyniają się do rozwoju i podnoszenia jakości polskiej
              edukacji.
            </p>
          </div>
        </div>
      </article>
  );
}

function SchoolAnthemArticle() {
  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Szkoła do Hymnu 2026</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-11-10">10 listopada 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img
              className="news-article-cover news-article-cover-contain school-anthem-image"
              src={`${import.meta.env.BASE_URL}aktualnosci/szkola-do-hymnu-2026.png`}
              alt="Szkoła do Hymnu 2026 — grafika z polskimi flagami"
          />

          <div className="news-article-body">
            <p>
              Społeczność <strong>V Prywatnego Liceum Ogólnokształcącego w Krakowie im. Królowej Jadwigi
              </strong> po raz kolejny włączy się w ogólnopolską akcję{' '}
              <strong>„Szkoła do Hymnu”</strong>, organizowaną przez Ministerstwo Edukacji
              Narodowej w związku z obchodami Narodowego Święta Niepodległości.
            </p>
            <p>
              We wtorek, <strong>10 listopada o godz. 11:11</strong>, uczniowie, nauczyciele
              i pracownicy szkoły wspólnie odśpiewają <strong>„Mazurka Dąbrowskiego”</strong>,
              oddając hołd wszystkim, którzy przyczynili się do odzyskania i utrzymania
              niepodległości Polski.
            </p>
            <p>
              Udział w akcji jest dla naszej społeczności nie tylko wyrazem szacunku dla historii
              i tradycji narodowych, ale także okazją do budowania poczucia wspólnoty oraz
              kształtowania postaw obywatelskich wśród młodzieży.
            </p>
            <p>
              Z dumą dołączamy do tysięcy szkół w Polsce i za granicą, które wspólnym śpiewem
              hymnu narodowego uczczą zbliżające się <strong>Narodowe Święto Niepodległości</strong>{' '}
              <span role="img" aria-label="Flaga Polski"></span>
            </p>
            <p className="school-anthem-quote"><em>„Jeszcze Polska nie zginęła” zabrzmi w naszej
              szkole punktualnie o godzinie 11:11</em></p>
          </div>
        </div>
      </article>
  );
}

function IndependenceDay2026Article() {
  const imagePath = `${import.meta.env.BASE_URL}aktualnosci/dzien-niepodleglosci-2026`;
  const speechAudioPath = `${imagePath}/przemowienie-11-listopada-2026.m4a`;
  const [isSpeechGraphicOpen, setIsSpeechGraphicOpen] = useState(false);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isAudioLoaded) {
      audioRef.current?.play().catch(() => {});
    }
  }, [isAudioLoaded]);

  const startSpeechAudio = () => {
    if (isAudioLoaded) {
      audioRef.current?.play().catch(() => {});
      return;
    }

    setIsAudioLoaded(true);
  };

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Relacja z obchodów Dnia Niepodległości</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-11-16">16 listopada 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <div className="independence-top-gallery">
            <img
                src={`${imagePath}/Dzien_niepodleglosci_02.jpg`}
                alt="Obchody Dnia Niepodległości w V Prywatnym Liceum Ogólnokształcącym w Krakowie"
            />
            <img
                src={`${imagePath}/Dzien_niepodleglosci_06.jpg`}
                alt="Uczniowie i goście podczas obchodów Dnia Niepodległości"
            />
          </div>

          <div className="news-article-body independence-day-body">
            <p>
              V Prywatne Liceum Ogólnokształcące w Krakowie im. Królowej Jadwigi przystąpiło do
              ministerialnego projektu Szkoła do hymnu. 10 listopada o 11:11 cała społeczność
              szkolna zaśpiewała hymn państwowy.
            </p>
            <p>
              Ten uroczysty moment poprzedziło przemówienie Pana Dyrektora Jerzego Białkiewicza,
              w którym zaprosił uczniów do refleksji nad znaczeniem wolności i niepodległości oraz
              nad tym, czy potrafimy docenić ich wartość. Podkreślił, że prawdziwe zrozumienie
              wolności wymaga dojrzałości, szacunku do innych i odpowiedzialności za dobro wspólne.
            </p>

            <figure className="independence-speech-figure">
              <button
                  type="button"
                  className="independence-speech-zoom-trigger"
                  onClick={() => setIsSpeechGraphicOpen(true)}
                  aria-label="Powiększ grafikę z przemówieniem"
              >
                <img
                    src={`${imagePath}/przemowienie-11-listopada-2026.png`}
                    alt="Tekst przemówienia Dyrektora Jerzego Białkiewicza"
                />
              </button>
            </figure>

            <div className="independence-audio-panel">
              <button type="button" className="independence-audio-play" onClick={startSpeechAudio}>
                <span aria-hidden="true">▶</span> Przemówienie
              </button>
              {isAudioLoaded && (
                  <audio ref={audioRef} controls preload="none">
                    <source src={speechAudioPath} />
                    Twoja przeglądarka nie obsługuje odtwarzacza audio.
                  </audio>
              )}
            </div>

            <p>
              Podczas apelu zrezygnowano z pieśni patriotycznych (te wybrzmią za tydzień) na rzecz
              wybranych wierszy i fragmentów prozy pomagających wyrazić zadumę nad minionymi
              wydarzeniami.
            </p>

            <p>
              Na spotkaniu minutą ciszy uczczono pamięć wszystkich, którzy w czasie II wojny
              światowej oraz w innych tragicznych momentach historii Polski oddali życie w walce
              o wolność, godność i niepodległość Ojczyzny, a także pamięć ofiar tragicznych
              wydarzeń z 7 listopada na krakowskim Rynku Głównym.
            </p>

            <section className="independence-poetry-section" aria-label="Wiersze interpretowane przez uczniów">
              <h2>Wiersze interpretowane przez uczniów klas czwartych</h2>
              <div className="independence-poetry-gallery">
                <img src={`${imagePath}/Dzien_niepodleglosci_05.jpg`} alt="Adam Zagajewski — Spróbuj opiewać okaleczony świat" />
                <img src={`${imagePath}/Dzien_niepodleglosci_08.jpg`} alt="Albert Camus — Dżuma, fragmenty" />
                <img src={`${imagePath}/Dzien_niepodleglosci_09.jpg`} alt="Stanisław Barańczak — Jeżeli porcelana to wyłącznie taka" />
              </div>
            </section>

          </div>
        </div>
        {isSpeechGraphicOpen && (
            <div
                className="independence-lightbox"
                role="dialog"
                aria-modal="true"
                aria-label="Powiększona grafika z przemówieniem"
                onClick={() => setIsSpeechGraphicOpen(false)}
            >
              <button
                  type="button"
                  className="independence-lightbox-close"
                  aria-label="Zamknij powiększenie"
                  onClick={() => setIsSpeechGraphicOpen(false)}
              >
                <X size={24} />
              </button>
              <img
                  src={`${imagePath}/przemowienie-11-listopada-2026.png`}
                  alt="Tekst przemówienia Dyrektora Jerzego Białkiewicza"
                  onClick={(event) => event.stopPropagation()}
              />
            </div>
        )}
      </article>
  );
}

function NetherlandsExchangeArticle() {
  const imagePath = `${import.meta.env.BASE_URL}galeria/wymiana-holandia-2026`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Wymiana międzynarodowa z holenderską szkołą z Laren</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-10-05">5–8 października 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img
              className="news-article-cover"
              src={`${imagePath}/Wymiana X 2026 17.jpg`}
              alt="Uczniowie podczas międzynarodowej wymiany z holenderską szkołą z Laren"
          />

          <div className="news-article-body exchange-article-body">
            <div className="exchange-flag" role="img" aria-label="Flaga Polski">
              <span className="country-flag country-flag-pl" />
            </div>

            <div className="exchange-article-copy">
              <p className="exchange-article-lead">
                Za nami niesamowity czas! Właśnie zakończyliśmy krakowską część naszej
                międzynarodowej wymiany, goszcząc uczniów ze szkoły Laar &amp; Berg z Laren!
              </p>
              <p>Nasz wspólny tydzień był wypełniony po brzegi fantastycznymi aktywnościami:</p>

              <div className="exchange-activity-list">
                <p><span aria-hidden="true">💃</span> Zaczęliśmy od gier i zabaw integracyjnych, dzięki którym szybko staliśmy się zgraną grupą. Co więcej, nauczyliśmy Holendrów naszych polskich tańców narodowych - Poloneza i Krakowiaka</p>
                <p><span aria-hidden="true">📚</span> Uczniowie stworzyli świetne miniprojekty! Wspólnie analizowali i porównywali polskie oraz holenderskie realia edukacyjne, codzienne życie, a nawet królujące u nas style muzyczne.</p>
                <p><span aria-hidden="true">👨‍🏫</span> Nasi goście z Holandii dołączyli do nas na zajęciach, by na własne oczy przekonać się, jak wyglądają lekcje w polskiej szkole i jak pracujemy na co dzień.</p>
                <p><span aria-hidden="true">🏰</span> Zorganizowaliśmy emocjonującą grę miejską po Rynku Głównym i okolicach. Wybraliśmy się również na długi spacer obejmujący Wawel, Bulwary Wiślane, Kazimierz i Podgórze. Co najważniejsze, podczas zwiedzania to polscy uczniowie wcielili się w rolę przewodników, z pasją opowiadając o najważniejszych miejscach na mapie naszego miasta!</p>
              </div>

              <div className="exchange-article-photo-strip">
                <img src={`${imagePath}/Wymiana X 2026 09.jpg`} alt="Uczniowie podczas zajęć laboratoryjnych" />
                <img src={`${imagePath}/Wymiana X 2026 02.jpg`} alt="Uczniowie podczas zwiedzania Krakowa" />
                <img src={`${imagePath}/Wymiana X 2026 32.jpg`} alt="Prezentacja uczniowska podczas wymiany" />
              </div>

              <p>
                To był tydzień pełen nauki, świetnej zabawy i budowania relacji, które zostaną
                z nami na długo. Dziękujemy wszystkim za ogromne zaangażowanie w organizację
                tego czasu.
              </p>
              <p className="exchange-article-closing">
                Do zobaczenia w kwietniu, kiedy to my odwiedzimy Was w Holandii! ✈️🌷
              </p>

              <Link to="/galeria/wymiana-holandia-2026" className="news-gallery-link">
                Galeria zdjęć
              </Link>
            </div>

            <div className="exchange-flag" role="img" aria-label="Flaga Holandii">
              <span className="country-flag country-flag-nl" />
            </div>
          </div>
        </div>
      </article>
  );
}

function AndyWarholExhibitionArticle() {
  const imagePath = `${import.meta.env.BASE_URL}aktualnosci`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Wyjście na wystawę Andy Warhola</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-09-11">11 września 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img
              className="news-article-cover"
              src={`${imagePath}/wystawa-andy-warhola-01.jpeg`}
              alt="Uczniowie klasy 3a na wystawie Andy Warhola"
          />

          <div className="news-article-body">
            <p>
              W dniu 11.09 klasa 3a pod opieką Pań Profesor Igi Zdanikowskiej i Ewy Żądło
              miała okazję odwiedzić wystawę w Pałacu Sztuki zatytułowaną
              <i> „Andy Warhol. Od linii do legendy”.</i> Ekspozycja obejmowała zarówno
              najwcześniejsze prace ilustratorskie i rysunkowe tego wybitnego artysty XX wieku,
              jak i jego późniejsze osiągnięcia podnoszące go do rangi ikony popkultury.
            </p>
            <p>
              Wśród licznych obiektów związanych z twórczością artysty uczniowie mogli zobaczyć
              oryginalne rysunki, sitodruki, fotografie typu Polaroid, projekty okładek płyt
              winylowych i książek, a także stroje i tkaniny z lat 60. XX wieku. Wystawa,
              będąca ważnym głosem w kontekście roli wizerunku w przekazie medialnym, spotkała
              się z żywym odbiorem uczniów.
            </p>

            <div className="news-article-image-pair">
              <img
                  src={`${imagePath}/wystawa-andy-warhola-02.jpeg`}
                  alt="Uczennice klasy 3a przy pracach Andy Warhola"
              />
              <img
                  src={`${imagePath}/wystawa-andy-warhola-03.jpeg`}
                  alt="Interaktywna rozmowa telefoniczna z Andy Warholem symulowana przez AI"
              />
            </div>

            <p>
              Jedną z interaktywnych atrakcji była także możliwość przeprowadzenia rozmowy
              telefonicznej z postacią samego Andy Warhola, symulowaną przez AI.
            </p>
          </div>
        </div>
      </article>
  );
}

function KrakowArtNouveauWalkArticle() {
  const articleImage = `${import.meta.env.BASE_URL}galeria/spacer-krakowska-secesja-2026/01.jpg`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Spacer edukacyjny szlakiem krakowskiej secesji</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-09-09">9 września 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img
              className="news-article-cover"
              src={articleImage}
              alt="Uczniowie podczas spaceru edukacyjnego szlakiem krakowskiej secesji"
          />

          <div className="news-article-body">
            <p>
              Uczniowie klas trzecich wzięli udział w spacerze edukacyjnym szlakiem
              krakowskiej secesji. Podczas lekcji plenerowej mogli podziwiać dzieła Teodora
              Talowskiego, Stanisława Wyspiańskiego i Franciszka Mączyńskiego — na ich podstawie
              poznali cechy głównego nurtu architektury końca XIX w. Zwieńczeniem ich nauki była
              karta pracy.
            </p>

            <Link to="/galeria/spacer-krakowska-secesja-2026" className="news-gallery-link">
              Galeria zdjęć
            </Link>
          </div>
        </div>
      </article>
  );
}

function NationalReading2026Article() {
  const articleImage = `${import.meta.env.BASE_URL}aktualnosci/narodowe-czytanie-2026.png`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Narodowe Czytanie</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2026-09-04">4 września 2026</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <div className="news-article-body news-article-body-split">
            <div>
              <p>
                W piątek, 4 września, w naszej szkole odbyła się akcja Narodowe Czytanie.
                W tym roku para prezydencka wybrała do wspólnej lektury <i>„Dziady”</i>
                Adama Mickiewicza.
              </p>
              <p>
                Uczniowie klas pierwszych i drugich czytali z podziałem na role <i>„Dziady”</i>
                cz. II, natomiast starsi uczniowie prezentowali fragmenty części III i IV.
                Wydarzenie pozwoliło uczestnikom lepiej poznać jedno z najważniejszych dzieł
                polskiej literatury.
              </p>
            </div>

            <img
                className="news-article-cover news-article-cover-contain book-cover"
                src={articleImage}
                alt="Dziady Adama Mickiewicza"
            />
          </div>
        </div>
      </article>
  );
}

function EndOfSchoolYear2025Article() {
  const articleImage = `${import.meta.env.BASE_URL}aktualnosci/zakonczenie-roku-2024-2025-sokol.png`;

  return (
      <article className="news-article-page">
        <div className="container news-article-container">
          <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>

          <header className="news-article-header">
            <span>Aktualności</span>
            <h1>Zakończenie roku szkolnego 2024/2025</h1>
            <div className="news-meta news-article-meta">
              <span><CalendarDays size={18} /><time dateTime="2025-06-27">27 czerwca 2025</time></span>
              <span><MapPin size={18} />Kraków</span>
            </div>
          </header>

          <img className="news-article-cover" src={articleImage} alt="Uroczystość zakończenia roku szkolnego w Towarzystwie Gimnastycznym Sokół" />

          <div className="news-article-body">
            <p>Dnia 27 czerwca nasza szkoła gościła w zabytkowym budynku Towarzystwa Gimnastycznego „Sokół”, gdzie miała miejsce uroczystość zakończenia roku szkolnego 2024/2025. Motywem przewodnim wydarzenia był Kraków.</p>
            <p>Część oficjalną uświetniły wykłady naszego historyka — profesora Kamila Świderskiego o dziejach Towarzystwa „Sokół” oraz ucznia klasy pierwszej — Piotra Bieli, który mówił o twórczości krakowskiego architekta Teodora Talowskiego.</p>
            <p>W części artystycznej odbyły się między innymi pokazy tradycyjnych tańców ludowych, w tym krakowiaka, występ chóru pierwszoklasistów, który odśpiewał „Dni, których jeszcze nie znamy” Marka Grechuty, oraz prezentacja twórczości wybranych pisarzy i poetów związanych z Krakowem, między innymi Wisławy Szymborskiej, Stanisława Wyspiańskiego i Marii Pawlikowskiej-Jasnorzewskiej.</p>
            <p>W tej cudownej atmosferze nasi uczniowie mogli odebrać swoje świadectwa oraz nagrody za wysokie wyniki w nauce i wzorowe zachowanie.</p>
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
                                      <figure className={`article-figure article-main-image ${page.mainImageClass || ''}`}>
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
                  <section className="contact-details-group contact-details-group-location">
                    <h2>Adres</h2>
                    <InfoBadge
                        icon={<MapPin size={18} />}
                        text={school.address}
                        href={schoolMapUrl}
                        external
                    />
                  </section>

                  <section className="contact-details-group">
                    <h2>Telefony</h2>
                    <div className="contact-details-group-items">
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
                    </div>
                  </section>

                  <section className="contact-details-group">
                    <h2>E-mail</h2>
                    <div className="contact-details-group-items">
                      <InfoBadge
                          icon={<Mail size={18} />}
                          text={school.email}
                          href={`mailto:${school.email}`}
                      />
                      <InfoBadge
                          icon={<Mail size={18} />}
                          text={school.recruitmentEmail}
                          href={`mailto:${school.recruitmentEmail}`}
                      />
                    </div>
                  </section>
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
                href={`tel:${school.extraPhone.replace(/\s+/g, '')}`}
            >
              <Phone size={18} aria-hidden="true" />
              <span>{school.extraPhone}</span>
            </a>

            <a
                className="footer-contact-item"
                href={`mailto:${school.email}`}
            >
              <Mail size={18} aria-hidden="true" />
              <span>{school.email}</span>
            </a>

            <a
                className="footer-contact-item"
                href={`mailto:${school.recruitmentEmail}`}
            >
              <Mail size={18} aria-hidden="true" />
              <span>{school.recruitmentEmail}</span>
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
        {/*© 2026 V Prywatne Liceum Ogólnokształcące w Krakowie · DBLab*/}
      </div>
    </footer>
  );
}

export default App;
