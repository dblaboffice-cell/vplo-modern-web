import { Armchair, BookOpen, ChevronRight, Coffee, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const spaces = [
  {
    title: 'Ogród',
    description: 'Przestrzeń do odpoczynku na świeżym powietrzu w otoczeniu roślin.',
    path: '/szkola/infrastruktura/przestrzenie-uczniowskie/ogrod',
    icon: TreePine,
  },
  {
    title: 'Cafe Atrium',
    description: 'Szkolna kawiarenka pełna przyjemnych zapachów i swobodnej atmosfery.',
    path: '/szkola/infrastruktura/przestrzenie-uczniowskie/cafe-atrium',
    icon: Coffee,
  },
  {
    title: 'Odskocznia',
    description: 'Miejsce odpoczynku, spotkań, nauki i uczniowskiej kreatywności.',
    path: '/szkola/infrastruktura/przestrzenie-uczniowskie/odskocznia',
    icon: Armchair,
  },
  {
    title: 'Miejsce cichej pracy',
    description: 'Sala do koncentracji, samodzielnej nauki i spokojnej pracy.',
    path: '/szkola/infrastruktura/przestrzenie-uczniowskie/miejsce-cichej-pracy',
    icon: BookOpen,
  },
];

export default function PrzestrzenieUczniowskie() {
  return (
    <section className="page-wrap container laboratories-page student-spaces-page">
      <header className="page-header">
        <h1>Przestrzenie uczniowskie</h1>
        <p className="section-intro-card">
          Miejsca, w których uczniowie odpoczywają, spotykają się, uczą i rozwijają własne pomysły poza lekcjami.
        </p>
      </header>

      <div className="laboratories-grid student-spaces-grid">
        {spaces.map(({ title, description, path, icon: Icon }) => (
          <Link className="laboratory-card" to={path} key={path}>
            <span className="laboratory-card-icon"><Icon size={28} aria-hidden="true" /></span>
            <h2>{title}</h2>
            <p>{description}</p>
            <span className="laboratory-card-action">Zobacz przestrzeń <ChevronRight size={18} aria-hidden="true" /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
