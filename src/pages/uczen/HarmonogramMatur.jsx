import { useState } from 'react';
import { Link } from 'react-router-dom';

const writtenExams = [
  ['4 maja', '09:00', 'Język polski', 'PP'],
  ['5 maja', '09:00', 'Matematyka', 'PP'],
  ['6 maja', '09:00', 'Język angielski', 'PP'],
  ['7 maja', '09:00', 'Język angielski', 'PR / DJ'],
  ['8 maja', '09:00', 'Biologia', 'PR'],
];

const oralExams = [
  ['13 maja', '09:15', 'Język polski', '208'],
  ['14 maja', '09:00', 'Język polski', '208'],
  ['20 maja', '13:00', 'Język angielski', '205'],
];

export default function HarmonogramMatur() {
  const [activeTab, setActiveTab] = useState('written');
  const isWritten = activeTab === 'written';
  const exams = isWritten ? writtenExams : oralExams;

  return (
      <article className="student-page matura-schedule-page">
        <Link className="matura-schedule-back" to="/uczen/matura">← Powrót do matury</Link>
        <header>
          <span className="matura-schedule-eyebrow">Harmonogram matur</span>
          <h1>Matura 2027</h1>
          <p>Harmonogram egzaminów maturalnych</p>
        </header>

        <section className="matura-schedule-card" aria-labelledby="matura-schedule-tabs">
          <div className="matura-schedule-tabs" id="matura-schedule-tabs" role="tablist" aria-label="Rodzaj egzaminów">
            <button type="button" role="tab" aria-selected={isWritten} className={isWritten ? 'is-active' : ''} onClick={() => setActiveTab('written')}>Egzaminy pisemne</button>
            <button type="button" role="tab" aria-selected={!isWritten} className={!isWritten ? 'is-active' : ''} onClick={() => setActiveTab('oral')}>Egzaminy ustne</button>
          </div>

          <div className="matura-schedule-table-wrap">
            <table className="matura-schedule-table">
              <thead><tr><th>Data</th><th>Godzina</th><th>Przedmiot</th><th>{isWritten ? 'Poziom' : 'Sala'}</th></tr></thead>
              <tbody>{exams.map(([date, time, subject, detail]) => <tr key={`${date}-${time}-${subject}`}><td>{date}</td><td>{time}</td><td>{subject}</td><td><strong>{detail}</strong></td></tr>)}</tbody>
            </table>
          </div>

          {isWritten && <p className="matura-schedule-legend"><strong>PP</strong> — poziom podstawowy <strong>PR</strong> — poziom rozszerzony <strong>DJ</strong> — poziom dwujęzyczny</p>}
        </section>
      </article>
  );
}
