import { useParams } from 'react-router-dom';
import { PrzedmiotyRozszerzone, PrzedmiotRozszerzony } from './PrzedmiotyRozszerzone';
import ZajeciaSportoweWf from './ZajeciaSportoweWf';
import JezykHiszpanski from './JezykHiszpanski';
import GrupyKlasowe from './GrupyKlasowe';

function ExtendedSubjectRoute() {
  const { subjectId } = useParams();
  return <PrzedmiotRozszerzony subjectId={subjectId} />;
}

export const educationRoutes = [
  { path: '/edukacja/grupy-klasowe', element: <GrupyKlasowe /> },
  { path: '/edukacja/zajecia-sportowe-wf', element: <ZajeciaSportoweWf /> },
  { path: '/edukacja/jezyk-hiszpanski', element: <JezykHiszpanski /> },
  { path: '/edukacja/przedmioty-rozszerzone', element: <PrzedmiotyRozszerzone /> },
  { path: '/edukacja/przedmioty-rozszerzone/:subjectId', element: <ExtendedSubjectRoute /> },
];
