import React from 'react';
import { CalendarDays } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { aktualnosci, aktualnosciWedlugRokuSzkolnego, getCurrentSchoolYear, getSchoolYear, lataSzkolne } from './aktualnosciData';
import { NewsList } from './Aktualnosci';

export default function ArchiwumAktualnosci({ currentSchoolYear: currentSchoolYearProp }) {
  const currentSchoolYear = currentSchoolYearProp || getCurrentSchoolYear();
  const archiveYears = lataSzkolne.filter((year) => year !== currentSchoolYear);

  return (
    <section className="news-archive-section" aria-labelledby="news-archive-title">
      <header className="news-archive-header">
        <span>Archiwum</span>
        <h2 id="news-archive-title">Archiwum aktualności</h2>
        <p>Wybór roku szkolnego otwiera opublikowane w nim aktualności.</p>
      </header>
      <div className="news-archive-years">
        {archiveYears.map((year) => (
          <Link key={year} to={`/aktualnosci/archiwum/${year.replace('/', '-')}`} className="news-archive-year">
            <span className="news-archive-year-heading">
              <CalendarDays size={24} aria-hidden="true" />
              <span>Rok szkolny</span>
            </span>
            <strong>{year}</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ArchiwumRokuSzkolnego() {
  const { schoolYearPath } = useParams();
  const schoolYear = schoolYearPath?.replace('-', '/');
  const items = schoolYear ? aktualnosciWedlugRokuSzkolnego(schoolYear) : [];

  return (
    <section className="news-page">
      <div className="container">
        <Link to="/aktualnosci" className="news-back-link">← Powrót do aktualności</Link>
        <header className="news-page-header">
          <span>Archiwum aktualności</span>
          <h1>Rok szkolny {schoolYear}</h1>
        </header>
        {items.length ? <NewsList items={items} /> : <p className="news-archive-empty">Nie znaleziono aktualności dla tego roku szkolnego.</p>}
      </div>
    </section>
  );
}

export function ArchiwalnaAktualnosc() {
  const { slug } = useParams();
  const article = aktualnosci.find((item) => item.slug === slug && item.content);

  if (!article) return null;

  return (
    <article className="news-article-page">
      <div className="container news-article-container">
        <Link to={`/aktualnosci/archiwum/${getSchoolYear(article.date).replace('/', '-')}`} className="news-back-link">← Powrót do archiwum</Link>
        <header className="news-article-header">
          <span>Archiwum aktualności</span>
          <h1>{article.title}</h1>
          <div className="news-meta news-article-meta"><span><CalendarDays size={18} /><time dateTime={article.date}>{article.displayDate}</time></span></div>
        </header>
        <div className={`news-article-body legacy-news-content${article.slug === 'wroclaw-klasy-2a-3c-i-3d' ? ' legacy-news-content-compact' : ''}`} dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </article>
  );
}
