import { Compass, Globe2, Languages, Sparkles, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JezykHiszpanski() {
  return <section className="spanish-page container">
    <header className="spanish-hero">
      <div><span className="spanish-eyebrow">Język hiszpański</span><h1>Język, który <em>otwiera świat</em></h1><p>Hiszpański jest drugim po angielskim językiem najczęściej używanym w komunikacji międzynarodowej. Posługuje się nim ponad 400 milionów ludzi na wszystkich kontynentach świata.Dla 332 milionów ludzi jest językiem ojczystym, a w 21 krajach — językiem oficjalnym.</p></div>
      <div className="spanish-hero-art" aria-hidden="true"><Languages size={76} /><i /><b /></div>
    </header>

    <section className="spanish-intro-grid">
      <aside><UsersRound size={30} /><strong>Prestiż i możliwości</strong><p>Popularność języka oraz jego siła przebicia otwierają możliwości podejmowania aktywności kulturalnej, ekonomicznej i politycznej. Nie bez znaczenia pozostaje jego melodyjność i łatwość przyswajania.</p></aside>
    </section>

    <section className="spanish-global-reach">
      <div className="spanish-section-heading"><span className="spanish-eyebrow">Globalny zasięg</span><h2>Język obecny na całym świecie</h2></div>
      <div className="spanish-global-grid">
        <article><h3>Stany Zjednoczone</h3><p>USA jest piątym krajem na świecie pod względem liczby mieszkańców hiszpańskojęzycznych. Posługuje się nim 41 milionów osób, czyli 14% populacji kraju. Hiszpańskiego uczy się 750 tys. studentów, a jest on wykładany w 80% szkół podstawowych i 90% ponadpodstawowych.</p><p>Według prognoz Amerykańskiego Urzędu Statystycznego w 2050 roku językiem tym będzie się posługiwać 105 milionów Amerykanów — 25% populacji USA.</p></article>
        <article><h3>Europa i Polska</h3><p>We Francji hiszpańskiego uczy się 65% uczniów szkół ponadpodstawowych. Hiszpania jest drugim po Francji krajem odwiedzanym przez największą liczbę studentów w ramach stypendium Socrates-Erasmus.</p><p>W Wielkiej Brytanii i w Polsce rośnie zapotrzebowanie na naukę języka hiszpańskiego. W Polsce zainteresowanie jego nauką wzrosło w ciągu dwóch ostatnich lat aż o 21%.</p></article>
      </div>
    </section>

    <section className="spanish-learning spanish-learning-intro">
      <div className="spanish-section-heading"><span className="spanish-eyebrow">Nauka od pierwszej lekcji</span><h2 className="spanish-title-nowrap">Nie mamy wyboru — uczymy się języka hiszpańskiego</h2><p>Hiszpański u nas staje się pasją już po pierwszych lekcjach. Jest fonetycznie łatwy — zdecydowanie prostszy niż angielski. Z łatwością opanowujemy wymowę, nie mamy problemów z pisownią i szybko nabieramy umiejętności w mowie i piśmie.</p></div>
    </section>

    <section className="spanish-values">
      <article><Compass size={31} /><h2>Innowacyjna nauka</h2><p>Własną energię i pozytywne myślenie przekładamy na innowacyjność w prowadzeniu zajęć. Odchodzimy od stereotypów, różnicujemy formy nauczania i egzekwujemy nabytą wiedzę w sposób zindywidualizowany — z wykorzystaniem oryginalnych tekstów, gier językowych, zadań projektowych, muzyki, dowcipu, inscenizacji i konkursów.</p></article>
      <article><Globe2 size={31} /><h2>Kultura w praktyce</h2><p>Naturalną kontynuacją zajęć w niewielkich grupach językowych są prezentacje filmowe, wizyty w muzeach, wirtualne podróże oraz lektura ważnych dzieł literatury hiszpańskojęzycznej. Działania te realizują założenia naszej koncepcji <Link to="/edukacja/edukacja-kulturalna">edukacji kulturalnej</Link>.</p></article>
    </section>

    <section className="spanish-day-card"><Sparkles size={30} /><div><span className="spanish-eyebrow">27 września</span><h2>Europejski Dzień Języków</h2><p>Co roku organizujemy Europejski Dzień Języków z ekspozycją języka i kultury hiszpańskiej. Uczniowie prezentują swoje umiejętności, biorą udział w konkursach i skeczach, oglądają filmy oraz prezentacje multimedialne, a także zapraszają do degustacji przygotowanych przez siebie dań hiszpańskich — są kreatywnymi organizatorami idei tego dnia.</p></div></section>

    <section className="spanish-closing"><Sparkles size={25} /><div><h2>Hablar, comprender, descubrir</h2><p>Język hiszpański jest tu narzędziem komunikacji, rozwoju i poznawania kultury hiszpańskojęzycznej.</p></div></section>
  </section>;
}
