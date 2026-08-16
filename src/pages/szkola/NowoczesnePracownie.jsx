import { Link } from 'react-router-dom';
import { Atom, ChevronRight, Monitor, Microscope } from 'lucide-react';

const laboratories = [
  {
    title: 'Pracownia biologiczna',
    description:
      'Miejsce stworzone do poznawania świata poprzez obserwację i doświadczenie.',
    path: '/szkola/infrastruktura/nowoczesne-pracownie/pracownia-biologiczna',
    icon: Microscope,
  },
  {
    title: 'Pracownia chemiczna',
    description:
      'Profesjonalnie zaprojektowana przestrzeń do nauki poprzez eksperymentowanie.',
    path: '/szkola/infrastruktura/nowoczesne-pracownie/pracownia-chemiczna',
    icon: Atom,
  },
  {
    title: 'Pracownia komputerowa',
    description:
      'Środowisko rozwijania kompetencji cyfrowych, z dostępem do nowoczesnej technologii.',
    path: '/szkola/infrastruktura/nowoczesne-pracownie/pracownia-komputerowa',
    icon: Monitor,
  },
];

export default function NowoczesnePracownie() {
  return (
    <section className="page-wrap container laboratories-page">
      <header className="page-header">
        <h1>Nowoczesne pracownie</h1>
        <p className="section-intro-card">Wierzymy, że najlepiej uczymy się wtedy, gdy wiedza spotyka się z doświadczeniem. Dlatego tworzymy nowoczesne pracownie, które pozwalają uczniom eksperymentować, obserwować, odkrywać i wykorzystywać zdobytą wiedzę w praktyce.</p>
      </header>

      <div className="laboratories-grid">
        {laboratories.map(({ title, description, path, icon: Icon }) => (
          <Link className="laboratory-card" to={path} key={path}>
            <span className="laboratory-card-icon"><Icon size={28} aria-hidden="true" /></span>
            <h2>{title}</h2>
            <p>{description}</p>
            <span className="laboratory-card-action">Zobacz pracownię <ChevronRight size={18} aria-hidden="true" /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
