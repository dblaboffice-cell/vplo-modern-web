import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const subjects = [
  ['angielski', 'Język angielski', 'komunikacja • matura • studia', 'blue'],
  ['polski', 'Język polski', 'interpretacja • dyskusja • kultura', 'burgundy'],
  ['chemia', 'Chemia', 'eksperyment • analiza • medycyna', 'turquoise'],
  ['biologia', 'Biologia', 'człowiek • genetyka • przyroda', 'green'],
  ['geografia', 'Geografia', 'środowisko • społeczeństwo • dane', 'turquoise'],
  ['historia', 'Historia', 'źródła • interpretacja • kultura', 'burgundy'],
  ['biz', 'Biznes i zarządzanie', 'przedsiębiorczość • projekty • strategia', 'green'],
  ['matematyka', 'Matematyka', 'logika • modele • problemy', 'blue'],
  ['fizyka', 'Fizyka', 'doświadczenie • modele • technologia', 'turquoise'],
  ['wos', 'Wiedza o społeczeństwie', 'prawo • debata • współczesność', 'burgundy'],
].map(([id, name, keywords, accent]) => ({ id, name, keywords, accent }));

const finderSteps = [
  ['Zainteresowania', 'Można wskazać wszystkie obszary, które są szczególnie bliskie.', [
    ['zdrowie', '🧬', 'Człowiek i zdrowie', { biologia: 3, chemia: 2 }], ['przyroda', '🌿', 'Przyroda i środowisko', { biologia: 3, geografia: 2 }], ['eksperymenty', '🔬', 'Eksperymenty i nauka', { chemia: 3, fizyka: 3 }], ['logika', '🧮', 'Liczby i logika', { matematyka: 3, fizyka: 2 }], ['technologie', '💻', 'Technologie', { matematyka: 3, fizyka: 3 }], ['swiat', '🌍', 'Świat i podróże', { geografia: 3, wos: 2, angielski: 1 }], ['kultura', '🏛', 'Historia i kultura', { historia: 3, polski: 2, wos: 1 }], ['prawo', '⚖️', 'Prawo i społeczeństwo', { wos: 3, historia: 2 }], ['biznes', '💼', 'Biznes i przedsiębiorczość', { biz: 3, matematyka: 2 }], ['dane', '📊', 'Ekonomia i analiza danych', { matematyka: 3, geografia: 2, biz: 2 }], ['psychologia', '🧠', 'Psychologia i człowiek', { biologia: 2, wos: 3, polski: 1 }], ['polityka', '📰', 'Polityka i sprawy społeczne', { wos: 3, historia: 2 }],
  ]],
  ['Preferowany sposób działania', 'Ten krok pomaga doprecyzować podpowiedzi.', [
    ['problemy', null, 'Rozwiązywanie problemów', { matematyka: 3, fizyka: 2 }], ['doswiadczenia', null, 'Prowadzenie doświadczeń', { chemia: 3, biologia: 2, fizyka: 2 }], ['dyskusje', null, 'Dyskusje', { wos: 3, historia: 2, polski: 2 }], ['analiza', null, 'Analiza danych', { matematyka: 3, geografia: 2, biz: 2 }], ['ludzie', null, 'Poznawanie ludzi', { wos: 3, angielski: 2 }], ['odkrywanie', null, 'Poznawanie świata', { geografia: 3, historia: 2, angielski: 1 }], ['interpretacja', null, 'Czytanie i interpretacja', { polski: 3, historia: 2 }], ['projekty', null, 'Tworzenie projektów', { biz: 3, fizyka: 1, angielski: 1 }], ['tech', null, 'Praca z technologią', { fizyka: 3, matematyka: 3 }],
  ]],
  ['Plany na przyszłość', 'Odpowiedź jest opcjonalna — dostępna jest także opcja „Jeszcze nie wiem”.', [
    ['medycyna', null, 'Medycyna i zdrowie', { biologia: 4, chemia: 4 }], ['inzynieria', null, 'Technologie i inżynieria', { matematyka: 4, fizyka: 4 }], ['prawnik', null, 'Prawo', { wos: 4, historia: 3, polski: 1 }], ['ekonomia', null, 'Biznes i ekonomia', { biz: 4, matematyka: 3, geografia: 1 }], ['spoleczne', null, 'Nauki społeczne', { wos: 4, historia: 2, polski: 2 }], ['przyrodnicze', null, 'Nauki przyrodnicze', { biologia: 4, chemia: 2, geografia: 2 }], ['nie-wiem', null, 'Jeszcze nie wiem', {}],
  ]],
];

export default function PlanowanieProfilu() {
  const [selected, setSelected] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const selectedOptions = finderSteps.flatMap(([, , options]) => options).filter(([id]) => selected.includes(id));
  const recommendations = useMemo(() => {
    const scores = Object.fromEntries(subjects.map(({ id }) => [id, 0]));
    selectedOptions.forEach(([, , , points]) => Object.entries(points).forEach(([id, value]) => { scores[id] += value; }));
    const highest = Math.max(...Object.values(scores), 0);
    return subjects.map((subject) => ({ ...subject, score: scores[subject.id], match: scores[subject.id] ? Math.round(58 + scores[subject.id] / highest * 38) : 0 }))
        .filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).slice(0, 3);
  }, [selectedOptions]);
  const toggle = (id) => { setSelected((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]); setShowResults(false); };

  return <section className="page-wrap container recruitment-page profile-planning-page">
    <header className="page-header"><h1>Planowanie profilu</h1><p className="recruitment-intro-card">Zestaw zainteresowań i preferencji pozwala sprawdzić, które rozszerzenia mogą najlepiej wspierać dalszą drogę edukacyjną.</p></header>
    <section className="interest-finder" aria-labelledby="interest-finder-title">
      <span className="interest-finder-label">Zainteresowania</span>
      <h2 id="interest-finder-title">Dobór rozszerzeń</h2>
      <p className="interest-finder-lead">Nie trzeba mieć jeszcze wybranego kierunku studiów. Wskazane zainteresowania pomagają określić rozszerzenia, które mogą odpowiadać indywidualnym preferencjom.</p>
      <div className="interest-finder-steps">{finderSteps.map(([title, hint, options], index) => <fieldset className="interest-finder-step" key={title}><legend><span>0{index + 1}</span>{title}</legend><p>{hint}</p><div className="interest-finder-options">{options.map(([id, icon, label]) => <button type="button" key={id} className={selected.includes(id) ? 'is-selected' : ''} onClick={() => toggle(id)} aria-pressed={selected.includes(id)}>{icon && <span>{icon}</span>}{label}</button>)}</div></fieldset>)}</div>
      <div className="interest-finder-actions"><button type="button" disabled={!selectedOptions.length} onClick={() => setShowResults(true)}>Dopasowane rozszerzenia <ArrowRight size={18} /></button>{selectedOptions.length > 0 && <span>Wybrano: {selectedOptions.length}</span>}</div>
      {showResults && <div className="interest-finder-results" aria-live="polite"><div><span className="extensions-eyebrow">Wynik</span><h3>Najlepiej dopasowane rozszerzenia</h3></div><div className="interest-result-list">{recommendations.map((subject, index) => <Link to={`/edukacja/przedmioty-rozszerzone/${subject.id}`} key={subject.id} className={`interest-result extension-${subject.accent}`}><span className="interest-result-rank">0{index + 1}</span><div><strong>{subject.name}</strong><small>{subject.keywords}</small><i><b style={{ width: `${subject.match}%` }} /></i></div><em>{subject.match}%</em><ArrowRight size={18} /></Link>)}</div><p>Wynik ma charakter inspiracyjny — szczegóły każdego rozszerzenia są dostępne po wybraniu przedmiotu.</p></div>}
    </section>
  </section>;
}
