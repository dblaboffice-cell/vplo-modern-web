import { useState } from 'react';

const infographic = `${import.meta.env.BASE_URL}grupy-klasowe-infografika.png`;

export default function GrupyKlasowe() {
  const [timelineOpen, setTimelineOpen] = useState(false);

  return (
    <section className="page-wrap container">
      <div className="page-header">
        <h1>Grupy klasowe</h1>
        <p className="section-intro-card">Organizacja grup w liceum</p>
      </div>
      <div className="page-layout article-layout-with-timeline">
        <article className="page-main-card">
          <div className="class-groups-content">
            <p className="class-groups-lead">Liczebność klas w naszym liceum jest statutowo ograniczona do 24 uczniów, jednak w praktyce zespoły klasowe mają obecnie charakter kameralny i liczą zaledwie kilkanaście osób. W przypadku lektoratów z języka angielskiego, niemieckiego i hiszpańskiego oraz zajęć warsztatowych grupy są jeszcze mniejsze — często kilkuosobowe — tworzące warunki zbliżone do pracy indywidualnej.</p>
            <div className="class-groups-highlight"><p>Tak zorganizowane środowisko nauki sprzyja bliskiemu kontaktowi ucznia z profesorem, tworząc przestrzeń do bezpośredniego dialogu, aktywnego udziału w zajęciach oraz szybszego przyswajania treści programowych. Kameralne grupy i indywidualne podejście stanowią jeden z kluczowych wyróżników naszej szkoły, realnie wpływając na jakość i efektywność kształcenia.</p></div>
          </div>
        </article>
        <aside className="article-timeline">
          <button type="button" className="timeline-zoom-button" onClick={() => setTimelineOpen(true)} aria-label="Powiększ infografikę grup klasowych">
            <img src={infographic} alt="Infografika przedstawiająca organizację grup klasowych w liceum" />
            <span className="timeline-zoom-hint">Powiększenie</span>
          </button>
        </aside>
      </div>
      {timelineOpen && <div className="timeline-lightbox" role="dialog" aria-modal="true" aria-label="Powiększona infografika" onClick={() => setTimelineOpen(false)}><button type="button" className="timeline-lightbox-close" onClick={() => setTimelineOpen(false)} aria-label="Zamknij">×</button><div className="timeline-lightbox-content" onClick={(event) => event.stopPropagation()}><img src={infographic} alt="Infografika przedstawiająca organizację grup klasowych w liceum" /></div></div>}
    </section>
  );
}
