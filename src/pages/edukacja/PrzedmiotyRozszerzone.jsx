import { useState } from 'react';
import { ArrowRight, BookOpen, Dna, FlaskConical, Languages, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const subjects = [
  {
    id: 'angielski',
    name: 'Język angielski',
    shortName: 'Angielski',
    icon: Languages,
    accent: 'blue',
    tagline: 'Język, który otwiera świat',
    keywords: 'komunikacja • matura • studia',
    lead: 'Nie tylko przygotowanie do matury. Swoboda komunikacji i narzędzie przyszłych studiów.',
    why: 'Znajomość języka angielskiego na wysokim poziomie jest dziś naturalnym narzędziem dalszej nauki, pracy i kontaktu ze światem. Rozszerzenie to nie tylko przygotowanie do matury, ale również budowanie pewności siebie w komunikacji — szczególnie w środowisku międzynarodowym. Płynne posługiwanie się językiem otwiera szerokie możliwości rozwoju osobistego i zawodowego.',
    learn: ['6 godzin języka angielskiego tygodniowo', 'pisanie, mówienie, czytanie i słuchanie', 'autentyczne materiały: prasa, podcasty, filmy i książki', 'wypowiedzi argumentacyjne i słownictwo akademickie', 'projekty kulturowe, prezentacje i konwersacje', 'warsztaty maturalne w grupach językowych'],
    teaching: 'Intensywna praca językowa odbywa się w kameralnych grupach, w których jest miejsce na rozmowę i aktywne używanie angielskiego. Łączymy pracę z autentycznymi artykułami, podcastami, filmami i fragmentami książek z projektami kulturowymi, prezentacjami oraz konwersacjami. Regularne warsztaty maturalne pomagają świadomie rozwijać strategie egzaminacyjne.',
    forWhom: 'dla osób ciekawych świata, które myślą o studiowaniu za granicą, planują kierunki filologiczne, lingwistyczne, międzynarodowe lub humanistyczne albo chcą swobodnie korzystać z angielskiego w życiu prywatnym i zawodowym.',
    future: 'filologie, lingwistyka, stosunki międzynarodowe, media, komunikacja, turystyka, kierunki humanistyczne oraz studia prowadzone po angielsku — w Polsce i za granicą.',
  },
  {
    id: 'polski',
    name: 'Język polski',
    shortName: 'Polski',
    icon: BookOpen,
    accent: 'burgundy',
    tagline: 'Literatura, kultura, argumentacja',
    keywords: 'interpretacja • dyskusja • świadome pisanie',
    lead: 'Uważne czytanie, własny głos i rozumienie kultury — od tekstu do trafnej argumentacji.',
    why: 'Zajęcia z języka polskiego na poziomie rozszerzonym są realizowane w wymiarze sześciu godzin w całym cyklu kształcenia. Ich głównym zadaniem jest przygotowanie do matury rozszerzonej z języka ojczystego, ale także poszerzanie wiedzy o literaturze i sztuce. To przestrzeń dla osób, które chcą czytać głębiej, świadomie budować argumenty i rozumieć język kultury.',
    learn: ['sześć godzin języka polskiego w całym cyklu kształcenia', 'historię i teorię literatury', 'analizę oraz interpretację tekstów', 'historię sztuki, teatr i kino', 'krytykę literacką i antropologię kultury', 'wypowiedzi argumentacyjne oraz świadomą dyskusję'],
    teaching: 'Dyskutujemy o najważniejszych pozycjach polskiego i powszechnego kanonu literackiego objętego podstawą programową na poziomie rozszerzonym. Z pomocą nauczyciela uczniowie pogłębiają także tematy związane z lekturami uzupełniającymi i tekstami teoretycznoliterackimi. Zajęcia są miejscem rozmowy o bieżących wydarzeniach w świecie literackim i artystycznym, a także rozwijania własnego, dobrze uargumentowanego głosu.',
    forWhom: 'dla osób, które lubią książki, kulturę i rozmowę, chcą rozwijać własny sposób myślenia oraz świadomie interpretować teksty i zjawiska artystyczne.',
    future: 'filologie, prawo, media, komunikacja, kulturoznawstwo, dziennikarstwo, teatrologia, filmoznawstwo i kierunki społeczne.',
  },
  {
    id: 'chemia',
    name: 'Chemia',
    shortName: 'Chemia',
    icon: FlaskConical,
    accent: 'turquoise',
    tagline: 'Od teorii do doświadczenia',
    keywords: 'eksperyment • analiza • kierunki medyczne',
    lead: 'Poznawaj procesy, które tworzą materię — poprzez analizę, doświadczenie i logiczne wnioskowanie.',
    why: 'Chemia rozszerzona to propozycja dla osób ciekawych świata, które chcą rozumieć i badać prawa rządzące otaczającą nas rzeczywistością. Program, realizowany przez 3 godziny tygodniowo w klasie drugiej, trzeciej i czwartej, przygotowuje do matury rozszerzonej i rozwija pasję naukową, samodzielność oraz analityczne myślenie. To dobry wybór dla osób, które lubią sprawdzać w praktyce, jak działają zjawiska i substancje.',
    learn: ['3 godziny chemii tygodniowo w klasie 2., 3. i 4.', 'planowanie oraz bezpieczne prowadzenie eksperymentów', 'analizę i interpretację wyników doświadczeń', 'zależności między budową a właściwościami substancji', 'projekty badawcze i prezentację wniosków', 'elementy chemii sądowej: ślady i identyfikację substancji'],
    teaching: 'W nowo otwartej, profesjonalnie wyposażonej pracowni chemicznej regularnie prowadzimy doświadczenia i projekty badawcze. Łączymy teorię z praktyką: uczniowie planują eksperymenty, realizują je zgodnie z zasadami bezpieczeństwa, a następnie analizują oraz interpretują wyniki. Organizujemy także lekcje wyjazdowe, warsztaty laboratoryjne i pokazy chemiczne we współpracy z krakowskimi uczelniami, podczas których można spotkać naukowców i poznać ich pracę badawczą.',
    forWhom: 'dla osób ciekawych eksperymentów, analizy i naukowego wyjaśniania zjawisk, które chcą rozwijać samodzielność badawczą.',
    future: 'farmacja, chemia, analityka, biotechnologia, inżynieria materiałowa, kierunki przyrodnicze i medyczne. Aktywni uczniowie mogą również rozwijać indywidualne projekty badawcze oraz przygotowywać się do konkursów i olimpiad.',
  },
  {
    id: 'biologia',
    name: 'Biologia',
    shortName: 'Biologia',
    icon: Dna,
    accent: 'green',
    tagline: 'Poznaj mechanizmy życia',
    keywords: 'człowiek • genetyka • przyroda',
    lead: 'Od komórki po całe ekosystemy — poznawaj życie w jego fascynującej różnorodności.',
    why: 'Celem kształcenia jest przede wszystkim rozumienie procesów biologicznych i dostrzeganie powiązań między nimi. Poznajesz budowę oraz funkcjonowanie różnych organizmów, ich procesy fizjologiczne i miejsce w przyrodzie. Równie ważne jest świadome posługiwanie się terminologią biologiczną oraz umiejętność wyciągania wniosków na podstawie danych.',
    learn: ['budowę i funkcjonowanie organizmów', 'procesy fizjologiczne i zależności w przyrodzie', 'genetykę, ewolucję i ekologię', 'analizę tekstów, wykresów i ilustracji', 'terminologię biologiczną w praktyce', 'strategie pracy z zadaniami maturalnymi'],
    teaching: 'Pracujemy na materiałach źródłowych — tekstach opisujących problemy biologiczne, wykresach i ilustracjach — ponieważ ich analiza jest kluczowa zarówno w nauce, jak i na maturze. Łączymy ją z poznawaniem najważniejszych treści programowych, stawiając na rozumienie zamiast zapamiętywania nadmiaru szczegółów. Ogólną orientację w procesach biologicznych rozwijamy także podczas wizyt w muzeach i instytucjach edukacyjnych, m.in. w Ogrodzie Botanicznym Uniwersytetu Jagiellońskiego, oraz na wycieczkach terenowych.',
    forWhom: 'dla osób zainteresowanych człowiekiem, przyrodą, zdrowiem i pracą badawczą, które lubią obserwować zależności, analizować dane i rozumieć mechanizmy życia.',
    future: 'medycyna, biologia, biotechnologia, fizjoterapia, dietetyka, ochrona środowiska i nauki przyrodnicze.',
  },
];

const paths = {
  'angielski+polski': 'języki • filologie • media • komunikacja • kultura',
  'biologia+chemia': 'medycyna • farmacja • biotechnologia • nauki przyrodnicze',
  'angielski+biologia': 'nauki o zdrowiu • biotechnologia • komunikacja naukowa • studia międzynarodowe',
  'angielski+chemia': 'nauki ścisłe • technologie • studia międzynarodowe • analityka',
  'biologia+polski': 'psychologia • nauki społeczne • edukacja • komunikacja zdrowotna',
  'chemia+polski': 'prawo • komunikacja naukowa • media • kierunki interdyscyplinarne',
};

const subjectPath = (id) => `/edukacja/przedmioty-rozszerzone/${id}`;

function SubjectIcon({ subject, size = 24 }) {
  const Icon = subject.icon;
  return <Icon size={size} aria-hidden="true" />;
}

export function PrzedmiotyRozszerzone() {
  const [selected, setSelected] = useState([]);
  const key = [...selected].sort().join('+');
  const suggestion = selected.length === 2 ? paths[key] : null;

  const toggleSubject = (id) => {
    setSelected((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      return current.length === 2 ? [current[1], id] : [...current, id];
    });
  };

  return (
    <section className="extensions-page container">
      <header className="extensions-header">
        <span className="extensions-eyebrow">Indywidualny dobór rozszerzeń</span>
        <h1>Przedmioty rozszerzone</h1>
        <div className="extensions-intro">
          <strong>Rozwijaj to, co naprawdę Cię interesuje.</strong>
          <p>W VPLO możesz budować własną ścieżkę edukacyjną, wybierając przedmioty rozszerzone zgodnie ze swoimi zainteresowaniami i planami na przyszłość.</p>
        </div>
      </header>

      <section className="extensions-subject-grid" aria-label="Przedmioty rozszerzone">
        {subjects.map((subject) => (
          <Link className={`extension-subject-card extension-${subject.accent}`} to={subjectPath(subject.id)} key={subject.id}>
            <div className="extension-card-title"><SubjectIcon subject={subject} /><span>{subject.name}</span></div>
            <h2>{subject.tagline}</h2>
            <p>{subject.keywords}</p>
            <span className="extension-card-link">Poznaj rozszerzenie <ArrowRight size={17} /></span>
          </Link>
        ))}
      </section>

      <section className="path-builder" aria-labelledby="path-builder-title">
        <span className="extensions-eyebrow">Twoja decyzja</span>
        <h2 id="path-builder-title">Zbuduj swoją ścieżkę</h2>
        <p>Wybierz dwa przedmioty i zobacz przykładowe obszary, które mogą rozwijać Twoje zainteresowania.</p>
        <div className="path-builder-options">
          {subjects.map((subject) => (
            <button type="button" key={subject.id} className={selected.includes(subject.id) ? `is-selected extension-${subject.accent}` : ''} onClick={() => toggleSubject(subject.id)} aria-pressed={selected.includes(subject.id)}>
              <SubjectIcon subject={subject} size={19} /> {subject.shortName}
            </button>
          ))}
        </div>
        <div className="path-builder-result" aria-live="polite">
          {suggestion ? <><strong>Twoje zainteresowania mogą prowadzić w stronę:</strong><span>{suggestion}</span></> : <><strong>Wybierz dwa rozszerzenia.</strong><span>Połączenie przedmiotów potraktuj jako inspirację do dalszego planowania.</span></>}
        </div>
      </section>
    </section>
  );
}

export function PrzedmiotRozszerzony({ subjectId }) {
  const subject = subjects.find((item) => item.id === subjectId) ?? subjects[0];
  const related = subjects.filter((item) => item.id !== subject.id);

  return (
    <section className={`extension-detail-page container extension-${subject.accent}`}>
      <Link className="extension-back-link" to="/edukacja/przedmioty-rozszerzone">← Przedmioty rozszerzone</Link>
      <header className="extension-detail-hero">
        <div>
          <span className="extensions-eyebrow">Indywidualny dobór rozszerzeń</span>
          <h1>{subject.name} <span>— poziom rozszerzony</span></h1>
          <p>{subject.lead}</p>
        </div>
        <div className="extension-hero-art" aria-hidden="true"><SubjectIcon subject={subject} size={78} /><i /><b /></div>
      </header>

      <div className="extension-detail-sections">
        <section><h2>Dlaczego warto wybrać to rozszerzenie?</h2><p>{subject.why}</p></section>
        <section><h2>Czego będziesz się uczyć?</h2><div className="extension-learn-grid">{subject.learn.map((item) => <div key={item}><Sparkles size={18} />{item}</div>)}</div></section>
        <section><h2>Jak uczymy?</h2><p>{subject.teaching ?? 'Pracujemy w kameralnych grupach, w których jest miejsce na pytania, dyskusję i własne tempo pracy. Łączymy wyjaśnianie zagadnień z analizą przykładów, projektami, prezentacjami i zadaniami rozwijającymi samodzielność. Nauczyciel towarzyszy uczniowi w budowaniu jego własnej ścieżki.'}</p></section>
        <section><h2>Dla kogo?</h2><p>To rozszerzenie może być dla Ciebie, jeśli {subject.forWhom}</p></section>
        <section><h2>Co dalej?</h2><p>Wiedza i umiejętności rozwijane na tych zajęciach mogą być inspiracją przy wyborze takich obszarów jak: {subject.future}</p></section>
      </div>

      <aside className="extension-combine">
        <div><span className="extensions-eyebrow">Twój kierunek</span><h2>Połącz je z innym rozszerzeniem</h2><p>W VPLO możesz tworzyć indywidualną kombinację przedmiotów zgodną z własnymi planami.</p></div>
        <div className="extension-related-grid">{related.map((item) => <Link to={subjectPath(item.id)} key={item.id}><SubjectIcon subject={item} /><span>{item.shortName}</span><ArrowRight size={16} /></Link>)}</div>
      </aside>
    </section>
  );
}
