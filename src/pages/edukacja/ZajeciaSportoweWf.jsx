import { Activity, Award, Dumbbell, HeartPulse, ShieldCheck, Sparkles, Target, Waves } from 'lucide-react';

const activities = [
  { icon: Activity, title: 'Sprawność ogólna', text: 'Ćwiczenia rozwijające koordynację, siłę, wytrzymałość i swobodę ruchu.' },
  { icon: Award, title: 'Gry zespołowe', text: 'Koszykówka i siatkówka — współpraca, dynamika i sportowa odpowiedzialność.' },
  { icon: Target, title: 'Tenis i kręgielnia', text: 'Dyscypliny, które rozwijają koncentrację, technikę oraz strategiczne myślenie.' },
  { icon: Dumbbell, title: 'Trening siłowy', text: 'Świadoma praca nad formą, prowadzona z troską o technikę i bezpieczeństwo.' },
];

export default function ZajeciaSportoweWf() {
  return (
    <section className="sports-wf-page container">
      <header className="sports-wf-hero">
        <div>
          <span className="sports-wf-eyebrow">Zajęcia sportowe · WF</span>
          <h1>Ruch, który buduje <em>dobrą energię</em></h1>
          <p>Wychowanie fizyczne w naszym liceum łączy najwyższe standardy edukacyjne z dostępem do profesjonalnej infrastruktury sportowej. Stawiamy na kulturę ruchu opartą na komforcie, bezpieczeństwie i indywidualnym podejściu do każdego ucznia.</p>
        </div>
        <div className="sports-wf-hero-art" aria-hidden="true"><Activity size={78} /><i /><b /></div>
      </header>

      <section className="sports-wf-intro-grid">
        <article><span>Profesjonalne obiekty</span><h2>Sport w przestrzeniach KSOS</h2><p>Dzięki współpracy z obiektami KSOS prowadzimy zajęcia w miejscach, które na co dzień służą sportowcom i pasjonatom aktywności fizycznej. To daje uczniom dostęp do różnorodnych form ruchu w warunkach sprzyjających bezpiecznemu rozwojowi.</p></article>
        <aside><ShieldCheck size={30} /><strong>Komfort i bezpieczeństwo</strong><p>Każdy uczeń rozwija się w swoim tempie, z uwzględnieniem własnych możliwości i potrzeb.</p></aside>
      </section>

      <section className="sports-wf-activities">
        <div className="sports-wf-section-heading"><span className="sports-wf-eyebrow">Wiele możliwości</span><h2>Ruch dla każdego</h2><p>Od ćwiczeń ogólnorozwojowych po dyscypliny, które pozwalają odkrywać własne predyspozycje i budować pewność siebie.</p></div>
        <div className="sports-wf-card-grid">{activities.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={27} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="sports-wf-values">
        <article><HeartPulse size={31} /><h2>Zdrowie, energia, równowaga</h2><p>Pokazujemy, że ruch to nie tylko obowiązek szkolny, lecz ważny element stylu życia — wspierający zdrowie, energię i dobre samopoczucie.</p></article>
        <article><Waves size={31} /><h2>Regeneracja ma znaczenie</h2><p>Dbamy również o kondycję psychiczną młodzieży. Wprowadzamy elementy relaksacji i regeneracji, korzystając m.in. z groty solnej, która wspiera wyciszenie, koncentrację i równowagę emocjonalną.</p></article>
      </section>

      <section className="sports-wf-closing"><Sparkles size={25} /><div><h2>Świadomie i nowocześnie</h2><p>W naszej szkole ruch staje się naturalną częścią stylu życia, a wychowanie fizyczne — przestrzenią, w której młodzi ludzie uczą się dbać o siebie.</p></div></section>
    </section>
  );
}
