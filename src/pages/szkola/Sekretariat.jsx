import { useState } from 'react';
import { ChevronRight, Download, FileText, LockKeyhole } from 'lucide-react';

const previewUrl = `${import.meta.env.BASE_URL}materialy-kadra/podglady/papier-firmowy-naglowek-stopka.svg`;
const letterheadFiles = [
  { name: 'Papier firmowy VPLO — nagłówek i stopka (Word)', file: 'papier-firmowy-vplo-naglowek-stopka.docx' },
  { name: 'Papier firmowy VPLO — nagłówek i stopka (OpenOffice)', file: 'papier-firmowy-vplo-naglowek-stopka.odt' },
];
const applicationFiles = [
  { name: 'Podanie o przyjęcie ucznia do VPLO (Word)', file: 'podanie-o-przyjecie-ucznia-vplo.docx', preview: `${import.meta.env.BASE_URL}materialy-kadra/podglady/podanie-o-przyjecie-ucznia-word.svg` },
  { name: 'Podanie o przyjęcie ucznia do VPLO (OpenOffice)', file: 'podanie-o-przyjecie-ucznia-vplo-openoffice.odt', preview: `${import.meta.env.BASE_URL}materialy-kadra/podglady/podanie-o-przyjecie-ucznia-openoffice.png` },
  { name: 'Podanie o przyjęcie ucznia do VPLO (PDF)', file: 'podanie-o-przyjecie-ucznia-vplo.pdf', preview: `${import.meta.env.BASE_URL}materialy-kadra/podglady/podanie-o-przyjecie-ucznia-pdf-1.png` },
];
const letterTemplateFiles = [
  { name: 'Wzór pisma VPLO (Word)', file: 'wzor-pisma-vplo.docx' },
  { name: 'Wzór pisma VPLO (OpenOffice)', file: 'wzor-pisma-vplo-openoffice.odt' },
];
const letterTemplatePreviewUrl = `${import.meta.env.BASE_URL}materialy-kadra/podglady/wzor-pisma-vplo.svg`;

export default function Sekretariat() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('vplo-secretariat-access') === 'granted');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const unlock = (event) => {
    event.preventDefault();
    if (password.trim().toLowerCase() === 'dyrektor') {
      sessionStorage.setItem('vplo-secretariat-access', 'granted');
      setUnlocked(true);
      setError('');
      return;
    }
    setError('Podane hasło jest nieprawidłowe.');
  };

  if (!unlocked) return <section className="teacher-resources-page container"><div className="teacher-access-card">
    <span className="teacher-access-icon"><LockKeyhole size={25} /></span>
    <p className="teacher-eyebrow">Strefa wewnętrzna</p>
    <h1>Sekretariat</h1>
    <p>Ta zakładka jest dostępna wyłącznie dla osób posiadających link i hasło dostępu.</p>
    <form className="teacher-access-form" onSubmit={unlock}>
      <label htmlFor="secretariat-password">Hasło dostępu</label>
      <input id="secretariat-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required />
      {error && <p className="teacher-access-error" role="alert">{error}</p>}
      <button className="teacher-access-button" type="submit">Otwórz materiały <ChevronRight size={18} /></button>
    </form>
  </div></section>;

  return <section className="teacher-resources-page container">
    <header className="teacher-resources-header">
      <p className="teacher-eyebrow">Strefa wewnętrzna</p>
      <h1>Sekretariat</h1>
    </header>
    <div className="secretariat-files">
      <article className="teacher-resource-card secretariat-file-card">
        <span className="teacher-resource-icon"><FileText size={22} /></span>
        <h2>Papier firmowy</h2>
        <ul className="teacher-file-list">
          {letterheadFiles.map(({ name, file }) => <li key={file} className="teacher-file-item">
            <img className="teacher-file-preview" src={previewUrl} alt="Podgląd papieru firmowego VPLO z nagłówkiem i stopką" />
            <a href={`${import.meta.env.BASE_URL}materialy-kadra/${file}`} download aria-label={`Pobierz ${name}`} title={`Pobierz ${name}`}>
              <span>{name}</span><Download size={16} aria-hidden="true" />
            </a>
          </li>)}
        </ul>
      </article>
      <article className="teacher-resource-card secretariat-file-card">
        <span className="teacher-resource-icon"><FileText size={22} /></span>
        <h2>Podanie o przyjęcie ucznia</h2>
        <ul className="teacher-file-list">
          {applicationFiles.map(({ name, file, preview }) => <li key={file} className="teacher-file-item">
            <img className="teacher-file-preview" src={preview} alt={`Podgląd: ${name}`} />
            <a href={`${import.meta.env.BASE_URL}materialy-kadra/${file}`} download aria-label={`Pobierz ${name}`} title={`Pobierz ${name}`}>
              <span>{name}</span><Download size={16} aria-hidden="true" />
            </a>
          </li>)}
        </ul>
      </article>
      <article className="teacher-resource-card secretariat-file-card">
        <span className="teacher-resource-icon"><FileText size={22} /></span>
        <h2>Wzór pisma VPLO</h2>
        <ul className="teacher-file-list">
          {letterTemplateFiles.map(({ name, file }) => <li key={file} className="teacher-file-item">
            <img className="teacher-file-preview" src={letterTemplatePreviewUrl} alt={`Podgląd: ${name}`} />
            <a href={`${import.meta.env.BASE_URL}materialy-kadra/${file}`} download aria-label={`Pobierz ${name}`} title={`Pobierz ${name}`}>
              <span>{name}</span><Download size={16} aria-hidden="true" />
            </a>
          </li>)}
        </ul>
      </article>
    </div>
  </section>;
}
