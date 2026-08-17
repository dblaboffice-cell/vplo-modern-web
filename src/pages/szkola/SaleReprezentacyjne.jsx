import { ChevronRight, Landmark, Presentation, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const rooms = [
  {
    title: 'Aula',
    description: 'Amfiteatralna sala do wspólnego przeżywania kultury i szkolnych wydarzeń.',
    path: '/szkola/infrastruktura/sale-reprezentacyjne/aula',
    icon: Presentation,
  },
  {
    title: 'Collegium Maximum',
    description: 'Największa przestrzeń wspólnego spotkania całej społeczności szkolnej.',
    path: '/szkola/infrastruktura/sale-reprezentacyjne/collegium-maximum',
    icon: UsersRound,
  },
  {
    title: 'Sala Senacka',
    description: 'Kameralna i reprezentacyjna przestrzeń rozmowy oraz współpracy.',
    path: '/szkola/infrastruktura/sale-reprezentacyjne/sala-senacka',
    icon: Landmark,
  },
];

export default function SaleReprezentacyjne() {
  return (
    <section className="page-wrap container laboratories-page representative-rooms-page">
      <header className="page-header">
        <h1>Sale reprezentacyjne</h1>
        <p className="section-intro-card">
          W liceum funkcjonują trzy sale o szczególnym znaczeniu dla organizacji życia szkolnego, stanowiące kluczowe zaplecze dla wydarzeń dydaktycznych, uroczystych i wspólnotowych. Każda z nich pełni odrębną, komplementarną funkcję, umożliwiając realizację zarówno dużych zgromadzeń, jak i spotkań o charakterze roboczym czy konsultacyjnym. Razem tworzą spójny zespół przestrzeni, który zapewnia odpowiednie warunki do prowadzenia działalności edukacyjnej, organizacyjnej i reprezentacyjnej szkoły, podkreślając jej profesjonalny i nowoczesny charakter.
        </p>
      </header>

      <div className="laboratories-grid">
        {rooms.map(({ title, description, path, icon: Icon }) => (
          <Link className="laboratory-card" to={path} key={path}>
            <span className="laboratory-card-icon"><Icon size={28} aria-hidden="true" /></span>
            <h2>{title}</h2>
            <p>{description}</p>
            <span className="laboratory-card-action">Zobacz salę <ChevronRight size={18} aria-hidden="true" /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
