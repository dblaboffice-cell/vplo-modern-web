import { useState } from 'react';
import { ChevronRight, Download, ExternalLink, FileText, FolderOpen, LockKeyhole } from 'lucide-react';

const resourcesBaseUrl = `${import.meta.env.BASE_URL}materialy-kadra/`;
const copyNote = 'Przed rozpoczęciem pracy należy utworzyć własną kopię projektu. Zmiany należy wprowadzać wyłącznie w skopiowanym pliku, aby wspólny wzór pozostał niezmieniony i dostępny dla wszystkich.';

const sections = [
  {
    title: 'Wzory dyplomów',
    files: [
      { name: 'Szablon dyplomu VPLO (OpenOffice Writer)', file: 'szablon-dyplomu-vplo.odt', preview: 'podglady/dyplom.png' },
      { name: 'Wzór dyplomu w Canvie', externalUrl: 'https://canva.link/5s6qqpalyijrw0s', note: copyNote },
    ],
  },
  {
    title: 'Szablon papieru firmowego',
    files: [
      { name: 'Szablon papieru firmowego VPLO (OpenOffice Writer)', file: 'szablon-papieru-firmowego-vplo.odt', preview: 'podglady/papier-firmowy.png' },
      { name: 'Szablon Word VPLO — tło i znak wodny', file: 'szablon-word-vplo-tlo-znak-wodny.dotx', preview: 'podglady/papier-firmowy.png' },
      { name: 'Papier firmowy VP-LO — biały (PDF)', file: 'papier-firmowy-vplo-bialy.pdf', preview: 'podglady/papier-firmowy-bialy-1.png' },
      { name: 'Papier firmowy VPLO z piórem w tle (PDF)', file: 'papier-firmowy-vplo-z-piorem.pdf', preview: 'podglady/papier-firmowy-z-piorem-1.png' },
      { name: 'Wzór papieru firmowego w Canvie', externalUrl: 'https://canva.link/yt5g1xzeqkgf6ai', note: copyNote },
    ],
  },
  {
    title: 'Szablon prezentacji',
    files: [
      { name: 'Szablon prezentacji VPLO (OpenDocument)', file: 'szablon-prezentacji-vplo.otp', preview: 'podglady/prezentacja-odf.png' },
      { name: 'Szablon prezentacji VPLO bez adresu (OpenDocument)', file: 'szablon-prezentacji-vplo-bez-adresu.otp', preview: 'podglady/prezentacja-odf-bez-adresu.png' },
      { name: 'Prezentacja VPLO (PowerPoint)', file: 'prezentacja-vplo.pptx', preview: 'podglady/prezentacja-powerpoint.jpeg' },
    ],
  },
  { title: 'Oficjalne logo VPLO', files: [{ name: 'Logo VPLO (PNG)', file: 'logo-vplo.png', preview: 'logo-vplo.png' }] },
  { title: 'Wzory dokumentów', files: [] },
  { title: 'Przydatne linki', files: [] },
];

export default function MaterialyDlaKadry() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('vplo-teacher-resources-access') === 'granted');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const unlock = (event) => {
    event.preventDefault();
    if (password.trim().toLowerCase() === 'szablony') {
      sessionStorage.setItem('vplo-teacher-resources-access', 'granted');
      setUnlocked(true);
      setError('');
      return;
    }
    setError('Podane hasło jest nieprawidłowe.');
  };

  if (!unlocked) return <section className="teacher-resources-page container"><div className="teacher-access-card">
    <span className="teacher-access-icon"><LockKeyhole size={25} /></span><p className="teacher-eyebrow">Strefa wewnętrzna</p>
    <h1>Materiały dla kadry nauczycielskiej</h1><p>Ta zakładka jest dostępna wyłącznie dla osób posiadających link i hasło dostępu.</p>
    <form className="teacher-access-form" onSubmit={unlock}>
      <label htmlFor="teacher-resources-password">Hasło dostępu</label>
      <input id="teacher-resources-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required />
      {error && <p className="teacher-access-error" role="alert">{error}</p>}
      <button className="teacher-access-button" type="submit">Otwórz materiały <ChevronRight size={18} /></button>
    </form>
  </div></section>;

  return <section className="teacher-resources-page container">
    <header className="teacher-resources-header"><p className="teacher-eyebrow">Strefa dla kadry nauczycielskiej</p><h1>Materiały dla kadry nauczycielskiej</h1></header>
    <article className="teacher-welcome-card">
      <p><strong>Szanowni Państwo Profesorowie,</strong></p>
      <p>Zakładka zawiera komplet materiałów wizerunkowych oraz dokumentów firmowych V Prywatnego Liceum Ogólnokształcącego w Krakowie im. Królowej Jadwigi. Zgromadzone tam zasoby mają ułatwić codzienną pracę, zapewnić spójność komunikacji oraz wspierać Państwa w działaniach dydaktycznych, wychowawczych i reprezentacyjnych.</p>
      <p>W sekcji znajdują się m.in. aktualne identyfikacje graficzne, wzory dokumentów, prezentacji, formularze oraz pliki przeznaczone do wykorzystania podczas wydarzeń szkolnych. Materiały są uporządkowane tematycznie, tak aby szybkie odnalezienie potrzebnych treści było jak najbardziej intuicyjne.</p>
      <p>Ewentualne potrzeby aktualizacyjne należy zgłaszać do sekretariatu, aby zakładka pozostawała praktycznym i nowoczesnym narzędziem wspierającym Państwa pracę.</p>
    </article>
    <div className="teacher-resources-grid" aria-label="Kategorie materiałów">
      {sections.map(({ title, files }) => <article key={title} className="teacher-resource-card">
        <span className="teacher-resource-icon">{title === 'Przydatne linki' ? <FolderOpen size={22} /> : <FileText size={22} />}</span><h2>{title}</h2>
        {files.length > 0 ? <ul className="teacher-file-list">{files.map(({ name, file, preview, externalUrl, note }) => <li key={file || externalUrl} className="teacher-file-item">
          {preview ? <img className="teacher-file-preview" src={`${resourcesBaseUrl}${preview}`} alt={`Podgląd: ${name}`} /> : <div className="teacher-canva-preview" aria-hidden="true">Canva</div>}
          <a href={externalUrl || `${resourcesBaseUrl}${file}`} download={externalUrl ? undefined : true} target={externalUrl ? '_blank' : undefined} rel={externalUrl ? 'noopener noreferrer' : undefined} aria-label={externalUrl ? `Otwórz ${name}` : `Pobierz ${name}`} title={externalUrl ? `Otwórz ${name}` : `Pobierz ${name}`}><span>{name}</span>{externalUrl ? <ExternalLink size={16} aria-hidden="true" /> : <Download size={16} aria-hidden="true" />}</a>
          {note && <p className="teacher-file-note">{note}</p>}
        </li>)}</ul> : <p>{title === 'Wzory dokumentów' ? 'W tej sekcji będą publikowane wzory oficjalnych pism.' : 'Materiały do uzupełnienia.'}</p>}
      </article>)}
    </div>
  </section>;
}
