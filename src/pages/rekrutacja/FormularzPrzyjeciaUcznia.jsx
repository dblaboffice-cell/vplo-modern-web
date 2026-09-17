import { useEffect, useRef, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, LockKeyhole } from 'lucide-react';

const STEPS = ['Dane ucznia', 'Rodzice', 'Edukacja', 'Dodatkowe', 'Zgody', 'Sprawdzenie'];
const SUBJECTS = ['Biologia', 'Chemia', 'Fizyka', 'Geografia', 'Historia', 'Matematyka', 'WOS', 'Biznes i Zarządzanie', 'Język polski'];
const LANGUAGES = ['Język angielski', 'Język niemiecki', 'Język hiszpański', 'Język francuski', 'Inny'];

const initialData = {
  firstName: '', lastName: '', pesel: '', phone: '', email: '', birthPlace: '',
  street: '', houseNumber: '', apartmentNumber: '', postalCode: '', city: '', classProfile: '',
  guardian1Name: '', guardian1Phone: '', guardian1Email: '', guardian2Name: '', guardian2Phone: '', guardian2Email: '',
  noSecondGuardian: false, language1: 'Język angielski', language2: '', subjects: [],
  optionalSubjects: [], pe: 'uczestniczy', athlete: 'nie', sport: '', achievements: '', independentTravel: true,
  opinion: 'nie', opinionDetails: '', informationClause: false, imageConsent: false, imageConsentWebsite: false, imageConsentSocial: false, imageConsentMaterials: false, declaration: false,
};

const sampleData = {
  ...initialData,
  firstName: 'Anna', lastName: 'Kowalska', pesel: '12345678901', phone: '+48 500 123 456', email: 'anna.kowalska@example.com', birthPlace: 'Kraków',
  street: 'ul. Słoneczna', houseNumber: '12', apartmentNumber: '4', postalCode: '31-112', city: 'Kraków', classProfile: '1',
  guardian1Name: 'Jan Kowalski', guardian1Phone: '+48 501 234 567', guardian1Email: 'jan.kowalski@example.com', guardian2Name: 'Maria Kowalska', guardian2Phone: '+48 502 345 678', guardian2Email: 'maria.kowalska@example.com',
  language1: 'Język angielski', language2: 'Język niemiecki', subjects: ['Biologia', 'Chemia'], optionalSubjects: ['Etyka'], athlete: 'tak', sport: 'pływanie', opinion: 'nie', independentTravel: true,
};

function Field({ label, name, data, onChange, required = false, type = 'text', ...props }) {
  const customValidationMessage = name === 'pesel' ? 'Należy podać wartość w formacie zgodnym z numerem PESEL.' : '';

  return <label className="admission-field">{label}{required && <em> *</em>}
    <input name={name} type={type} value={data[name]} onChange={onChange} required={required}
      onInvalid={(event) => customValidationMessage && event.currentTarget.setCustomValidity(customValidationMessage)}
      onInput={(event) => customValidationMessage && event.currentTarget.setCustomValidity('')}
      {...props} />
  </label>;
}

function SelectField({ label, name, data, onChange, children, required = false }) {
  return <label className="admission-field">{label}{required && <em> *</em>}
    <select name={name} value={data[name]} onChange={onChange} required={required}>
      <option value="">Wybór</option>{children}
    </select>
  </label>;
}

function CardValue({ children }) {
  return <span className={children ? '' : 'is-empty'}>{children || '—'}</span>;
}

function StudentInformationCard({ data }) {
  const address = [data.street, data.houseNumber && `nr ${data.houseNumber}`, data.apartmentNumber && `lok. ${data.apartmentNumber}`].filter(Boolean).join(' ');
  const languages = [data.language1, data.language2].filter(Boolean);

  return <article className="admission-print-card" aria-label="Podgląd karty informacyjnej ucznia">
    <header><p>V Prywatne Liceum Ogólnokształcące w Krakowie im. Królowej Jadwigi</p><h2>KARTA INFORMACYJNA UCZNIA</h2><small>Wygenerowano na podstawie formularza przyjęcia ucznia</small></header>
    <section><h3>I. DANE UCZNIA</h3><dl className="admission-card-grid"><div><dt>Imię i nazwisko</dt><dd><CardValue>{[data.firstName, data.lastName].filter(Boolean).join(' ')}</CardValue></dd></div><div><dt>PESEL</dt><dd><CardValue>{data.pesel}</CardValue></dd></div><div><dt>Telefon</dt><dd><CardValue>{data.phone}</CardValue></dd></div><div><dt>E-mail</dt><dd><CardValue>{data.email}</CardValue></dd></div><div><dt>Miejsce urodzenia</dt><dd><CardValue>{data.birthPlace}</CardValue></dd></div><div><dt>Klasa</dt><dd><CardValue>{data.classProfile}</CardValue></dd></div><div className="admission-card-full"><dt>Adres zamieszkania / zameldowania</dt><dd><CardValue>{[address, [data.postalCode, data.city].filter(Boolean).join(' ')].filter(Boolean).join(', ')}</CardValue></dd></div></dl></section>
    <section><h3>II. DANE RODZICÓW / OPIEKUNÓW</h3><div className="admission-card-guardians"><dl><div><dt>Rodzic / opiekun 1</dt><dd><CardValue>{data.guardian1Name}</CardValue></dd></div><div><dt>Telefon</dt><dd><CardValue>{data.guardian1Phone}</CardValue></dd></div><div><dt>E-mail</dt><dd><CardValue>{data.guardian1Email}</CardValue></dd></div></dl><dl><div><dt>Rodzic / opiekun 2</dt><dd><CardValue>{data.noSecondGuardian ? 'Nie dotyczy' : data.guardian2Name}</CardValue></dd></div><div><dt>Telefon</dt><dd><CardValue>{data.noSecondGuardian ? 'Nie dotyczy' : data.guardian2Phone}</CardValue></dd></div><div><dt>E-mail</dt><dd><CardValue>{data.noSecondGuardian ? 'Nie dotyczy' : data.guardian2Email}</CardValue></dd></div></dl></div></section>
    <section><h3>III. EDUKACJA</h3><dl className="admission-card-grid"><div><dt>Języki obce</dt><dd><CardValue>{languages.join(' / ')}</CardValue></dd></div><div><dt>Przedmioty rozszerzone</dt><dd><CardValue>{data.subjects.join(', ')}</CardValue></dd></div><div><dt>Przedmioty nieobowiązkowe</dt><dd><CardValue>{data.optionalSubjects.join(', ')}</CardValue></dd></div><div><dt>Wychowanie fizyczne</dt><dd><CardValue>{data.pe === 'zwolnienie' ? 'Zwolnienie lekarskie' : 'Uczestniczy w zajęciach WF'}</CardValue></dd></div></dl></section>
    <section><h3>IV. INFORMACJE DODATKOWE</h3><dl className="admission-card-grid"><div><dt>Zawodnik sportowy</dt><dd><CardValue>{data.athlete === 'tak' ? `Tak${data.sport ? ` · ${data.sport}` : ''}` : 'Nie'}</CardValue></dd></div><div><dt>Opinie / orzeczenia</dt><dd><CardValue>{data.opinion === 'tak' ? data.opinionDetails || 'Tak' : 'Nie'}</CardValue></dd></div><div className="admission-card-full"><dt>Najważniejsze osiągnięcia sportowe</dt><dd><CardValue>{data.athlete === 'tak' ? data.achievements : 'Nie dotyczy'}</CardValue></dd></div><div className="admission-card-full"><dt>Samodzielny dojazd do GKS</dt><dd><CardValue>{data.independentTravel ? 'Tak' : 'Nie'}</CardValue></dd></div></dl></section>
    <section><h3>V. OŚWIADCZENIA</h3><dl className="admission-card-grid"><div><dt>Zapoznanie z klauzulą informacyjną</dt><dd><CardValue>{data.informationClause ? 'Potwierdzono' : 'Nie potwierdzono'}</CardValue></dd></div><div><dt>Zgoda na publikację wizerunku</dt><dd><CardValue>{data.imageConsent ? 'Wyrażono zgodę' : 'Nie wyrażono zgody'}</CardValue></dd></div><div><dt>Wizerunek: strona internetowa VPLO</dt><dd><CardValue>{data.imageConsentWebsite ? 'Wyrażono zgodę' : 'Brak zgody'}</CardValue></dd></div><div><dt>Wizerunek: media społecznościowe VPLO</dt><dd><CardValue>{data.imageConsentSocial ? 'Wyrażono zgodę' : 'Brak zgody'}</CardValue></dd></div><div><dt>Wizerunek: materiały drukowane i elektroniczne</dt><dd><CardValue>{data.imageConsentMaterials ? 'Wyrażono zgodę' : 'Brak zgody'}</CardValue></dd></div><div><dt>Prawidłowość podanych danych</dt><dd><CardValue>{data.declaration ? 'Potwierdzono' : 'Nie potwierdzono'}</CardValue></dd></div></dl></section>
    <footer><span>Data wygenerowania: {new Date().toLocaleDateString('pl-PL')}</span><span>Podpis rodzica / opiekuna: ____________________________</span></footer>
  </article>;
}

export default function FormularzPrzyjeciaUcznia() {
  const [unlocked, setUnlocked] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [accessError, setAccessError] = useState('');
  const [showSample, setShowSample] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialData);
  const [dataChecked, setDataChecked] = useState(false);
  const [showSendConfirmation, setShowSendConfirmation] = useState(false);
  const [validationError, setValidationError] = useState('');
  const formRef = useRef(null);
  useEffect(() => {
    if (unlocked) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step, unlocked]);
  const update = (event) => {
    const { name, value, type, checked } = event.target;
    setDataChecked(false);
    setData((current) => {
      if (name === 'imageConsent') {
        return {
          ...current,
          imageConsent: checked,
          imageConsentWebsite: checked,
          imageConsentSocial: checked,
          imageConsentMaterials: checked,
        };
      }

      return { ...current, [name]: type === 'checkbox' ? checked : value };
    });
  };
  const toggleList = (name, value) => setData((current) => ({ ...current, [name]: current[name].includes(value) ? current[name].filter((item) => item !== value) : [...current[name], value] }));
  const unlock = (event) => {
    event.preventDefault();
    if (accessCode.trim().toUpperCase() === 'UMOWA') { setUnlocked(true); setAccessError(''); }
    else setAccessError('Kod dostępu jest nieprawidłowy.');
  };
  const setRequiredValidationMessage = (event) => {
    if (event.target.validity?.valueMissing) event.target.setCustomValidity('Konieczne wypełnienie pola.');
  };
  const clearValidationMessage = (event) => event.target.setCustomValidity?.('');
  const validateCurrentStep = () => {
    if (step === 2 && data.subjects.length === 0) {
      setValidationError('Konieczny wybór przynajmniej jednego przedmiotu realizowanego w zakresie rozszerzonym.');
      return false;
    }
    if (step === 3 && !data.independentTravel) {
      setValidationError('Konieczne wypełnienie pola zgody na samodzielny dojazd do GKS.');
      return false;
    }
    const fields = formRef.current?.querySelectorAll(`[data-admission-step="${step}"] [required]`) || [];
    for (const field of fields) if (!field.disabled && !field.checkValidity()) { field.reportValidity(); return false; }
    setValidationError('');
    return true;
  };
  const next = () => {
    if (!validateCurrentStep()) return;
    setStep((current) => Math.min(current + 1, STEPS.length - 1));
  };
  const maskedPesel = data.pesel ? `${'•'.repeat(Math.max(0, data.pesel.length - 2))}${data.pesel.slice(-2)}` : '—';
  if (!unlocked) return <section className="admission-page container">
    <div className="admission-access-card">
      <span className="admission-icon"><LockKeyhole size={23} /></span>
      <p className="admission-eyebrow">Rekrutacja · przyjęty kandydat</p>
      <h1>Formularz danych ucznia</h1>
      <p>Formularz jest przeznaczony dla rodziców lub opiekunów kandydatów przyjętych do szkoły. Hasło do wypełnienia formularza udostępnia sekretariat w momencie podpisania umowy.</p>
      <form onSubmit={unlock} onInvalid={setRequiredValidationMessage} onInput={clearValidationMessage} className="admission-access-form">
        <label htmlFor="admission-code">Kod dostępu</label>
        <input id="admission-code" value={accessCode} onChange={(event) => setAccessCode(event.target.value)} autoComplete="off" required />
        {accessError && <p className="admission-error" role="alert">{accessError}</p>}
        <button className="admission-primary" type="submit">Otwarcie formularza <ChevronRight size={18} /></button>
      </form>
      <button className="admission-text-button" type="button" onClick={() => setShowSample((current) => !current)}>{showSample ? 'Ukryj wzór karty' : 'Wzór generowanej karty'}</button>
    </div>
    {showSample && <div className="admission-sample"><div className="admission-card-preview-title"><div><p className="admission-eyebrow">Wzór dokumentu</p><h3>Karta informacyjna ucznia</h3><p>Przykładowe dane pokazują układ karty generowanej z formularza.</p></div></div><StudentInformationCard data={sampleData} /></div>}
  </section>;

  if (showSendConfirmation) return <section className="admission-page container"><div className="admission-access-card admission-success">
    <span className="admission-icon"><Check size={26} /></span><p className="admission-eyebrow">Formularz gotowy</p>
    <h1>Dane zostały wysłane</h1>
    <button type="button" className="admission-secondary" onClick={() => setShowSendConfirmation(false)}>Powrót do podsumowania</button>
  </div></section>;

  return <section className="admission-page container">
    <header className="admission-header"><p className="admission-eyebrow">Rekrutacja · dokumenty dla przyjętego kandydata</p><h1>Formularz danych ucznia</h1><p>Pola oznaczone gwiazdką są wymagane.</p></header>
    <ol className="admission-progress" aria-label="Postęp formularza">{STEPS.map((item, index) => <li key={item} className={index === step ? 'is-current' : index < step ? 'is-complete' : ''}><span>{index < step ? <Check size={15} /> : index + 1}</span><b>{item}</b></li>)}</ol>
    <form ref={formRef} onInvalid={setRequiredValidationMessage} onInput={clearValidationMessage} className="admission-form">
      {step === 0 && <section data-admission-step="0" className="admission-section"><h2>1. Dane ucznia</h2><div className="admission-grid">
        <Field label="Imię" name="firstName" data={data} onChange={update} required autoComplete="given-name" /><Field label="Nazwisko" name="lastName" data={data} onChange={update} required autoComplete="family-name" />
        <Field label="PESEL" name="pesel" data={data} onChange={update} required inputMode="numeric" pattern="[0-9]{11}" minLength="11" maxLength="11" /><Field label="Miejsce urodzenia" name="birthPlace" data={data} onChange={update} required />
        <Field label="Telefon ucznia" name="phone" data={data} onChange={update} type="tel" required autoComplete="tel" /><Field label="E-mail ucznia" name="email" data={data} onChange={update} type="email" required autoComplete="email" />
        <Field label="Ulica" name="street" data={data} onChange={update} required /><Field label="Nr domu" name="houseNumber" data={data} onChange={update} required /><Field label="Nr lokalu" name="apartmentNumber" data={data} onChange={update} /><Field label="Kod pocztowy" name="postalCode" data={data} onChange={update} required pattern="[0-9]{2}-[0-9]{3}" placeholder="00-000" /><Field label="Miejscowość" name="city" data={data} onChange={update} required /><SelectField label="Klasa" name="classProfile" data={data} onChange={update} required><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></SelectField>
      </div></section>}
      {step === 1 && <section data-admission-step="1" className="admission-section"><h2>2. Rodzice / opiekunowie</h2><p className="admission-section-lead">Dane kontaktowe osób odpowiedzialnych za ucznia.</p><div className="admission-guardian-grid"><fieldset><legend>Rodzic / opiekun 1</legend><Field label="Imię i nazwisko" name="guardian1Name" data={data} onChange={update} required /><Field label="Telefon" name="guardian1Phone" data={data} onChange={update} type="tel" required /><Field label="E-mail" name="guardian1Email" data={data} onChange={update} type="email" required /></fieldset><fieldset className={data.noSecondGuardian ? 'is-disabled' : ''}><legend>Rodzic / opiekun 2</legend><Field label="Imię i nazwisko" name="guardian2Name" data={data} onChange={update} required={!data.noSecondGuardian} disabled={data.noSecondGuardian} /><Field label="Telefon" name="guardian2Phone" data={data} onChange={update} type="tel" required={!data.noSecondGuardian} disabled={data.noSecondGuardian} /><Field label="E-mail" name="guardian2Email" data={data} onChange={update} type="email" required={!data.noSecondGuardian} disabled={data.noSecondGuardian} /><label className="admission-check"><input name="noSecondGuardian" type="checkbox" checked={data.noSecondGuardian} onChange={update} /> Drugi rodzic/opiekun nie dotyczy</label></fieldset></div></section>}
      {step === 2 && <section data-admission-step="2" className="admission-section"><h2>3. Informacje edukacyjne</h2><div className="admission-grid"><div className="admission-fixed-language"><span>Język obcy 1</span><strong>Język angielski</strong></div><SelectField label="Język obcy 2" name="language2" data={data} onChange={update}>{LANGUAGES.filter((item) => item !== 'Język angielski').map((item) => <option key={item}>{item}</option>)}</SelectField></div><fieldset className="admission-choice-group"><legend>Przedmioty realizowane w zakresie rozszerzonym <em>*</em></legend><p>Wybór przedmiotów zgodnie z ustalonym profilem.</p><div className="admission-options">{SUBJECTS.map((item) => <label key={item} className={data.subjects.includes(item) ? 'is-selected' : ''}><input type="checkbox" checked={data.subjects.includes(item)} onChange={() => { toggleList('subjects', item); setValidationError(''); }} />{item}</label>)}</div>{validationError && <p className="admission-error" role="alert">{validationError}</p>}</fieldset></section>}
      {step === 3 && <section data-admission-step="3" className="admission-section"><h2>4. Informacje dodatkowe</h2><fieldset className="admission-choice-group"><legend>Przedmioty nieobowiązkowe</legend><div className="admission-options">{['Religia', 'Etyka'].map((item) => <label key={item} className={data.optionalSubjects.includes(item) ? 'is-selected' : ''}><input type="checkbox" checked={data.optionalSubjects.includes(item)} onChange={() => toggleList('optionalSubjects', item)} />{item}</label>)}</div></fieldset><fieldset className="admission-radio"><legend>Wychowanie fizyczne <em>*</em></legend><label><input type="radio" name="pe" value="uczestniczy" checked={data.pe === 'uczestniczy'} onChange={update} /> Uczeń uczestniczy w zajęciach WF</label><label><input type="radio" name="pe" value="zwolnienie" checked={data.pe === 'zwolnienie'} onChange={update} /> Zwolnienie lekarskie</label></fieldset><fieldset className="admission-radio"><legend>Czy uczeń jest zawodnikiem sportowym? <em>*</em></legend><label><input type="radio" name="athlete" value="tak" checked={data.athlete === 'tak'} onChange={update} /> Tak</label><label><input type="radio" name="athlete" value="nie" checked={data.athlete === 'nie'} onChange={update} /> Nie</label></fieldset>{data.athlete === 'tak' && <div className="admission-grid"><Field label="Dyscyplina sportowa" name="sport" data={data} onChange={update} required /><label className="admission-field">Najważniejsze osiągnięcia<textarea name="achievements" value={data.achievements} onChange={update} rows="3" /></label></div>}<label className="admission-check"><input name="independentTravel" type="checkbox" checked={data.independentTravel} onChange={update} /> Wyrażam zgodę na samodzielny dojazd ucznia do Grzegórzeckiego Klubu Sportowego na zajęcia WF.</label><fieldset className="admission-radio"><legend>Czy uczeń posiada opinię lub orzeczenie, które powinno zostać przekazane szkole? <em>*</em></legend><label><input type="radio" name="opinion" value="nie" checked={data.opinion === 'nie'} onChange={update} /> Nie</label><label><input type="radio" name="opinion" value="tak" checked={data.opinion === 'tak'} onChange={update} /> Tak</label></fieldset>{data.opinion === 'tak' && <label className="admission-field">Rodzaj dokumentu / informacja dla szkoły<textarea name="opinionDetails" value={data.opinionDetails} onChange={update} required rows="4" /></label>}</section>}
      {step === 4 && <section data-admission-step="4" className="admission-section"><h2>5. Zgody i oświadczenia</h2><div className="admission-notice"><h3>Klauzula RODO</h3><p>Administratorem danych osobowych jest V Prywatne Liceum Ogólnokształcące w Krakowie im. Królowej Jadwigi. Dane osobowe ucznia będą przetwarzane w celu realizacji procesu kształcenia w V Prywatnym Liceum Ogólnokształcącym w Krakowie im. Królowej Jadwigi, w szczególności w związku z organizacją i dokumentowaniem przebiegu nauczania, realizacją obowiązków dydaktycznych, wychowawczych i opiekuńczych, zapewnieniem bezpieczeństwa ucznia, komunikacją z uczniem oraz jego rodzicami lub opiekunami prawnymi, a także wykonywaniem obowiązków wynikających z przepisów prawa oświatowego. Osobie, której dane dotyczą, przysługuje prawo dostępu do danych, ich sprostowania, ograniczenia przetwarzania oraz wniesienia skargi do Prezesa UODO.</p></div><label className="admission-check"><input name="informationClause" type="checkbox" checked={data.informationClause} onChange={update} required /> Potwierdzam, że zapoznałem/am się z klauzulą informacyjną. <em>*</em></label><div className="admission-image-consent"><h3>Zgoda na publikację wizerunku</h3><p>Wyrażam dobrowolną zgodę na nieodpłatne utrwalanie oraz wykorzystywanie i rozpowszechnianie wizerunku ucznia przez V Prywatne Liceum Ogólnokształcące w Krakowie im. Królowej Jadwigi w celach informacyjnych, edukacyjnych, dokumentacyjnych i promocyjnych związanych z działalnością Szkoły.</p><p>Zgoda obejmuje publikację fotografii oraz materiałów audiowizualnych przedstawiających ucznia, wykonanych w związku z jego udziałem w życiu Szkoły, w szczególności podczas zajęć, uroczystości szkolnych, wydarzeń, projektów edukacyjnych, konkursów, wycieczek, zawodów sportowych i innych przedsięwzięć organizowanych lub współorganizowanych przez Szkołę.</p><p>Wizerunek może być publikowany na oficjalnej stronie internetowej Szkoły, w oficjalnych profilach Szkoły w mediach społecznościowych oraz w materiałach informacyjnych i promocyjnych Szkoły w formie elektronicznej i drukowanej.</p><p>Zostałem/am poinformowany/a, że udzielenie zgody jest dobrowolne, a jej niewyrażenie nie ma wpływu na przyjęcie ucznia do Szkoły, przebieg jego edukacji ani możliwość udziału w zajęciach i wydarzeniach szkolnych. Zgoda może zostać wycofana w każdym czasie poprzez kontakt ze Szkołą. Cofnięcie zgody nie wpływa na zgodność z prawem wykorzystania wizerunku dokonanego przed jej wycofaniem.</p><label className="admission-check"><input name="imageConsent" type="checkbox" checked={data.imageConsent} onChange={update} /> Wyrażam zgodę na publikację wizerunku ucznia.</label><div className="admission-image-consent-options"><label className="admission-check"><input name="imageConsentWebsite" type="checkbox" checked={data.imageConsentWebsite} onChange={update} disabled={!data.imageConsent} /> Strona internetowa VPLO</label><label className="admission-check"><input name="imageConsentSocial" type="checkbox" checked={data.imageConsentSocial} onChange={update} disabled={!data.imageConsent} /> Oficjalne profile VPLO w mediach społecznościowych: Instagram, Facebook, TikTok</label><label className="admission-check"><input name="imageConsentMaterials" type="checkbox" checked={data.imageConsentMaterials} onChange={update} disabled={!data.imageConsent} /> Materiały drukowane i elektroniczne szkoły, np. foldery, plakaty, prezentacje i materiały promocyjne</label></div></div><label className="admission-check"><input name="declaration" type="checkbox" checked={data.declaration} onChange={update} required /> Oświadczam, że podane dane są prawidłowe. <em>*</em></label></section>}
      {step === 5 && <section data-admission-step="5" className="admission-section"><h2>6. Sprawdzenie danych</h2><p className="admission-section-lead">Sprawdzenie danych przed przekazaniem formularza do szkoły.</p><dl className="admission-summary"><div><dt>Uczeń</dt><dd>{data.firstName} {data.lastName}</dd></div><div><dt>PESEL</dt><dd>{maskedPesel}</dd></div><div><dt>Kontakt</dt><dd>{data.phone}<br />{data.email}</dd></div><div><dt>Rodzic / opiekun 1</dt><dd>{data.guardian1Name}<br />{data.guardian1Phone}</dd></div><div><dt>Języki</dt><dd>{data.language1}<br />{data.language2 || '—'}</dd></div><div><dt>Rozszerzenia</dt><dd>{data.subjects.join(', ') || 'Nie wybrano'}</dd></div></dl><div className="admission-card-preview-title"><div><p className="admission-eyebrow">Dokument wynikowy</p><h3>Podgląd karty informacyjnej</h3><p>Karta utworzona na podstawie wpisanych danych.</p></div><div className="admission-preview-actions"><button className="admission-secondary" type="button" onClick={() => { setDataChecked(false); setStep(0); }}>Edycja</button><button className="admission-secondary" type="button" onClick={() => window.print()}>Zapis karty jako PDF</button><button className="admission-secondary" type="button" onClick={() => window.print()}>Wydruk karty</button></div></div><StudentInformationCard data={data} /></section>}
      <div className="admission-actions">{step > 0 && <button type="button" className="admission-secondary" onClick={() => setStep((current) => current - 1)}><ChevronLeft size={18} /> Powrót</button>}{step < STEPS.length - 1 ? <button type="button" className="admission-primary" onClick={next}>{step === 4 ? 'Wypełniona karta' : 'Dalej'} <ChevronRight size={18} /></button> : <div className="admission-final-actions"><button type="button" className="admission-secondary" onClick={() => setDataChecked(true)} disabled={dataChecked}>{dataChecked ? 'Dane zostały potwierdzone' : 'Potwierdzam sprawdzenie danych'} <Check size={18} /></button>{/* Docelowo: wywołanie zabezpieczonego API wysyłającego dane do rekrutacja@vo-lo.krakow.pl. */}<button type="button" className="admission-primary" disabled>Potwierdzenie i wysłanie formularza</button></div>}</div>
    </form>
  </section>;
}
