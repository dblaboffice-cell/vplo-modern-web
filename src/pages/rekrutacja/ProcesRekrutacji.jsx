import { Link } from 'react-router-dom';
import { CalendarCheck, ClipboardList, FileCheck2, PenLine } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Zgłoszenie',
    text: 'Wypełnienie zgłoszenia online albo kontakt telefoniczny lub mailowy z sekretariatem liceum.',
    actions: [
      { label: 'Zgłoszenie online', to: '/rekrutacja/formularz-zgloszeniowy' },
      { label: 'Kontakt z sekretariatem', to: '/kontakt', secondary: true },
    ],
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Spotkanie rekrutacyjne',
    text: 'Przedstawiciel szkoły, po wcześniejszym ustaleniu terminu spotkania — osobiście lub telefonicznie — zaprasza kandydatów na rozmowę kwalifikacyjną.',
    documents: [
      'wyciąg ocen za semestr zimowy klasy VIII szkoły podstawowej,',
      'oryginał świadectwa ukończenia klasy VII szkoły podstawowej.',
    ],
  },
  {
    number: '03',
    icon: FileCheck2,
    title: 'Uzupełnienie dokumentacji',
    text: 'Po pozytywnym przejściu procesu rekrutacyjnego należy uzupełnić dokumentację.',
    documents: [
      'podanie do Dyrektora o przyjęcie do Liceum,',
      'jedno zdjęcie w formacie legitymacyjnym,',
      'w czerwcu — świadectwo ukończenia szkoły podstawowej,',
      'w lipcu — zaświadczenie o szczegółowych wynikach egzaminu ósmoklasisty',
      'formularz danych ucznia.',
    ],
    actions: [{ label: 'Wymagane dokumenty', to: '/rekrutacja/wymagane-dokumenty' }],
  },
  {
    number: '04',
    icon: PenLine,
    title: 'Podpisanie umowy',
    text: 'Ostatnim etapem jest podpisanie umowy z liceum.',
  },
];

export default function ProcesRekrutacji() {
  return <section className="recruitment-process-page container">
    <div className="article-header-grid">
      <header className="recruitment-process-header">
        <span>Rekrutacja</span>
        <h1>Proces rekrutacji</h1>
        <p className="section-intro-card">Rekrutacja prowadzona jest do momentu wyczerpania limitu miejsc, a każdy etap naboru odzwierciedla indywidualne podejście naszej szkoły do przyszłych uczniów. Poniżej opisane są kolejne etapy przyjęcia do liceum.</p>
      </header>

      <aside className="article-highlights">
        <h2>Etapy rekrutacji</h2>
        <ul>
          <li>Kontakt z Liceum</li>
          <li>Rozmowa kwalifikacyjna</li>
          <li>Uzupełnienie dokumentacji</li>
        </ul>
      </aside>
    </div>

    <ol className="recruitment-process-steps">
      {steps.map(({ number, icon: Icon, title, text, documents, actions }) => <li key={number}>
        <div className="recruitment-process-number">{number}</div>
        <article>
          <Icon size={27} aria-hidden="true" />
          <h2>{title}</h2>
          <p>{text}</p>
          {documents && <div className="recruitment-process-documents"><strong>{number === '02' ? 'Dokumenty wymagane na pierwsze spotkanie:' : 'Dokumenty do uzupełnienia:'}</strong><ul>{documents.map((document) => <li key={document}>{document}</li>)}</ul></div>}
          {actions && <div className="recruitment-process-actions">{actions.map(({ label, to, secondary }) => <Link key={label} to={to} className={secondary ? 'recruitment-process-link is-secondary' : 'recruitment-process-link'}>{label}</Link>)}</div>}
        </article>
      </li>)}
    </ol>
  </section>;
}
