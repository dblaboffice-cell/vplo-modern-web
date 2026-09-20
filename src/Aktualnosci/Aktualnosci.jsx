import React from 'react';
import { CalendarDays, MapPin, School } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aktualnosciWedlugRokuSzkolnego, getCurrentSchoolYear } from './aktualnosciData';
import ArchiwumAktualnosci from './ArchiwumAktualnosci';

export function NewsList({ items }) {
  return (
    <div className="news-list">
      {items.map((news) => (
        <article className="news-card" key={news.slug}>
          <Link to={news.content ? `/aktualnosci/archiwalna/${news.slug}` : `/aktualnosci/${news.slug}`} className="news-card-image-link" aria-label={`Czytaj artykuł: ${news.title}`}>
            {news.image ? <img src={news.image} alt={news.title} /> : (
              <div className="news-card-placeholder" aria-hidden="true"><School size={44} /><span>Aktualność</span></div>
            )}
          </Link>
          <div className="news-card-copy">
            <div className="news-meta">
              <span><CalendarDays size={17} /><time dateTime={news.date}>{news.displayDate}</time></span>
              {news.place && <span><MapPin size={17} />{news.place}</span>}
            </div>
            <h2><Link to={news.content ? `/aktualnosci/archiwalna/${news.slug}` : `/aktualnosci/${news.slug}`}>{news.title}</Link></h2>
            {news.excerpt && <p>{news.excerpt}</p>}
            <Link to={news.content ? `/aktualnosci/archiwalna/${news.slug}` : `/aktualnosci/${news.slug}`} className="news-read-more">więcej</Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Aktualnosci() {
  const currentSchoolYear = getCurrentSchoolYear();
  const currentNews = aktualnosciWedlugRokuSzkolnego(currentSchoolYear);

  return (
    <section className="news-page">
      <div className="container">
        <header className="news-page-header">
          <span>Aktualności</span>
          <h1>Najnowsze wydarzenia z życia szkoły</h1>
        </header>
        <NewsList items={currentNews} />
        <ArchiwumAktualnosci currentSchoolYear={currentSchoolYear} />
      </div>
    </section>
  );
}
