import { useState } from 'react';
import { ArrowRight, BookOpen, Dna, FlaskConical, Globe2, Landmark, Languages, Scale, Sigma, Sparkles, Zap } from 'lucide-react';
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
    forWhom: 'Dla osób ciekawych świata, które myślą o studiowaniu za granicą, planują kierunki filologiczne, lingwistyczne, międzynarodowe lub humanistyczne albo chcą swobodnie korzystać z angielskiego w życiu prywatnym i zawodowym.',
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
    learn: ['6 godzin języka polskiego w całym cyklu kształcenia', 'historia i teoria literatury', 'analiza oraz interpretacja tekstów', 'historia sztuki, teatru i kina', 'krytyka literacka i antropologia kultury', 'wypowiedzi argumentacyjne oraz świadoma dyskusja'],
    teaching: 'Dyskutujemy o najważniejszych pozycjach polskiego i powszechnego kanonu literackiego objętego podstawą programową na poziomie rozszerzonym. Z pomocą nauczyciela uczniowie pogłębiają także tematy związane z lekturami uzupełniającymi i tekstami teoretycznoliterackimi. Zajęcia są miejscem rozmowy o bieżących wydarzeniach w świecie literackim i artystycznym, a także rozwijania własnego, dobrze uargumentowanego głosu.',
    forWhom: 'Dla osób, które lubią książki, kulturę i rozmowę, chcą rozwijać własny sposób myślenia oraz świadomie interpretować teksty i zjawiska artystyczne.',
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
    lead: 'Poznawanie procesów, które tworzą materię — poprzez analizę, doświadczenie i logiczne wnioskowanie.',
    why: 'Chemia rozszerzona to propozycja dla osób ciekawych świata, które chcą rozumieć i badać prawa rządzące otaczającą nas rzeczywistością. Program, realizowany przez 3 godziny tygodniowo w klasie drugiej, trzeciej i czwartej, przygotowuje do matury rozszerzonej i rozwija pasję naukową, samodzielność oraz analityczne myślenie. To dobry wybór dla osób, które lubią sprawdzać w praktyce, jak działają zjawiska i substancje.',
    learn: ['3 godziny chemii tygodniowo w klasie 2., 3. i 4.', 'planowanie oraz bezpieczne prowadzenie eksperymentów', 'analiza i interpretacja wyników doświadczeń', 'zależności między budową a właściwościami substancji', 'projekty badawcze i prezentację wniosków', 'elementy chemii sądowej: ślady i identyfikację substancji'],
    teaching: 'W nowo otwartej, profesjonalnie wyposażonej pracowni chemicznej regularnie prowadzimy doświadczenia i projekty badawcze. Łączymy teorię z praktyką: uczniowie planują eksperymenty, realizują je zgodnie z zasadami bezpieczeństwa, a następnie analizują oraz interpretują wyniki. Organizujemy także lekcje wyjazdowe, warsztaty laboratoryjne i pokazy chemiczne we współpracy z krakowskimi uczelniami, podczas których można spotkać naukowców i poznać ich pracę badawczą.',
    forWhom: 'Dla osób ciekawych eksperymentów, analizy i naukowego wyjaśniania zjawisk, które chcą rozwijać samodzielność badawczą.',
    future: 'farmacja, chemia, analityka, biotechnologia, inżynieria materiałowa, kierunki przyrodnicze i medyczne. Aktywni uczniowie mogą również rozwijać indywidualne projekty badawcze oraz przygotowywać się do konkursów i olimpiad.',
  },
  {
    id: 'biologia',
    name: 'Biologia',
    shortName: 'Biologia',
    icon: Dna,
    accent: 'green',
    tagline: 'Poznawanie mechanizmów życia',
    keywords: 'człowiek • genetyka • przyroda',
    lead: 'Od komórki po całe ekosystemy — poznawanie życia w jego fascynującej różnorodności.',
    why: 'Celem kształcenia jest przede wszystkim rozumienie procesów biologicznych i dostrzeganie powiązań między nimi. Poznajesz budowę oraz funkcjonowanie różnych organizmów, ich procesy fizjologiczne i miejsce w przyrodzie. Równie ważne jest świadome posługiwanie się terminologią biologiczną oraz umiejętność wyciągania wniosków na podstawie danych.',
    learn: ['budowa i funkcjonowanie organizmów', 'procesy fizjologiczne i zależności w przyrodzie', 'genetyka, ewolucja i ekologia', 'analiza tekstów, wykresów i ilustracji', 'terminologia biologiczna w praktyce', 'strategie pracy z zadaniami maturalnymi'],
    teaching: 'Pracujemy na materiałach źródłowych — tekstach opisujących problemy biologiczne, wykresach i ilustracjach — ponieważ ich analiza jest kluczowa zarówno w nauce, jak i na maturze. Łączymy ją z poznawaniem najważniejszych treści programowych, stawiając na rozumienie zamiast zapamiętywania nadmiaru szczegółów. Ogólną orientację w procesach biologicznych rozwijamy także podczas wizyt w muzeach i instytucjach edukacyjnych, m.in. w Ogrodzie Botanicznym Uniwersytetu Jagiellońskiego, oraz na wycieczkach terenowych.',
    forWhom: 'Dla osób zainteresowanych człowiekiem, przyrodą, zdrowiem i pracą badawczą, które lubią obserwować zależności, analizować dane i rozumieć mechanizmy życia.',
    future: 'medycyna, biologia, biotechnologia, fizjoterapia, dietetyka, ochrona środowiska i nauki przyrodnicze.',
  },
  {
    id: 'geografia', name: 'Geografia', shortName: 'Geografia', icon: Globe2, accent: 'turquoise', tagline: 'Zrozumieć świat i jego zależności', keywords: 'środowisko • społeczeństwo • dane',
    lead: 'Poznawanie świata przez pryzmat ludzi, miejsc, procesów i danych.',
    why: 'Geografia rozszerzona pomaga rozumieć współczesny świat — od procesów zachodzących w środowisku po gospodarkę, społeczeństwo i globalne powiązania. Rozwija umiejętność analizy danych, map i zjawisk, które wpływają na codzienne życie.',
    learn: ['czytanie map, wykresów i danych statystycznych', 'procesy przyrodnicze i ich konsekwencje', 'geografię społeczno-ekonomiczną', 'globalne współzależności i zrównoważony rozwój'],
    forWhom: 'Dla osób ciekawych świata, podróży, środowiska i tego, jak funkcjonują społeczeństwa oraz gospodarki.',
    future: 'geografia, gospodarka przestrzenna, turystyka, stosunki międzynarodowe, logistyka, analityka i kierunki środowiskowe.',
  },
  {
    id: 'historia', name: 'Historia', shortName: 'Historia', icon: Landmark, accent: 'burgundy', tagline: 'Rozumieć przeszłość, widzieć konteksty', keywords: 'źródła • interpretacja • kultura',
    lead: 'Odkrywanie procesów, decyzji i idei, które ukształtowały współczesny świat.',
    why: 'Historia rozszerzona rozwija umiejętność rozumienia zjawisk w szerokim kontekście. Uczy krytycznego czytania źródeł, dostrzegania związków przyczynowo-skutkowych i budowania własnej, opartej na faktach interpretacji.',
    learn: ['analiza źródeł historycznych', 'procesy polityczne, społeczne i kulturowe', 'porządkowanie wydarzeń w czasie', 'tworzenie argumentacji historycznej'],
    forWhom: 'Dla osób, które lubią opowieści o ludziach i ideach, a zarazem chcą rozumieć mechanizmy zmian.',
    future: 'historia, prawo, stosunki międzynarodowe, politologia, archeologia, muzealnictwo, media i kierunki społeczne.',
  },
  {
    id: 'biz', name: 'Biznes i zarządzanie', shortName: 'BiZ', icon: Scale, accent: 'green', tagline: 'Pomysły, decyzje, odpowiedzialność', keywords: 'przedsiębiorczość • projekty • strategia',
    lead: 'Świadome podejmowanie decyzji i zamiana pomysłów w dobrze zaplanowane działania.',
    why: 'Biznes i zarządzanie to rozszerzenie dla osób, które chcą rozumieć świat organizacji, finansów i przedsiębiorczości. Rozwija inicjatywę, odpowiedzialność oraz umiejętność pracy nad projektem — od pomysłu po prezentację efektów.',
    learn: ['podstawy przedsiębiorczości i zarządzania', 'planowanie projektów oraz pracę zespołową', 'podejmowanie decyzji i analizę ryzyka', 'komunikacja, negocjacje i prezentacja pomysłów'],
    forWhom: 'Dla osób przedsiębiorczych, ciekawych działania w zespole i zainteresowanych tym, jak powstają dobre decyzje.',
    future: 'zarządzanie, ekonomia, finanse, marketing, prawo, przedsiębiorczość społeczna i kierunki biznesowe.',
  },
  {
    id: 'matematyka', name: 'Matematyka', shortName: 'Matematyka', icon: Sigma, accent: 'blue', tagline: 'Myślenie, które daje przewagę', keywords: 'logika • modele • rozwiązywanie problemów',
    lead: 'Budowanie precyzjnego myślenia i pewności w rozwiązywaniu złożonych problemów.',
    why: 'Matematyka rozszerzona rozwija logiczne, systematyczne myślenie oraz umiejętność pracy z modelami i zależnościami. To nie tylko przygotowanie do matury, ale również uniwersalny język przydatny w nauce, technologii i analizie danych.',
    learn: ['algebra, funkcje i geometria analityczna', 'dowodzenie i logiczne rozumowanie', 'kombinatoryka, prawdopodobieństwo i statystyka', 'strategie rozwiązywania zadań maturalnych'],
    forWhom: 'Dla osób, które lubią szukać rozwiązań, dostrzegać reguły i pracować krok po kroku.',
    future: 'matematyka, informatyka, ekonomia, finanse, inżynieria, analiza danych i kierunki techniczne.',
  },
  {
    id: 'fizyka', name: 'Fizyka', shortName: 'Fizyka', icon: Zap, accent: 'turquoise', tagline: 'Prawa, które opisują rzeczywistość', keywords: 'doświadczenie • modele • technologia',
    lead: 'Odkrywanie, jak działają ruch, energia, materia i technologie współczesnego świata.',
    why: 'Fizyka rozszerzona pozwala opisywać rzeczywistość za pomocą modeli, doświadczeń i matematycznych zależności. Rozwija dociekliwość, precyzję oraz umiejętność łączenia obserwacji z logicznym wyjaśnieniem.',
    learn: ['mechanika, energia i ruch', 'elektryczność, magnetyzm i fale', 'analiza doświadczeń oraz wyników pomiarów', 'tworzenie modeli i rozwiązywanie problemów'],
    forWhom: 'Osoby ciekawe technologii, eksperymentów i pytań o to, jak działa świat.',
    future: 'fizyka, inżynieria, automatyka, energetyka, astronomia, informatyka i kierunki techniczne.',
  },
  {
    id: 'wos', name: 'Wiedza o społeczeństwie', shortName: 'WOS', icon: Scale, accent: 'burgundy', tagline: 'Społeczeństwo, państwo, obywatel', keywords: 'prawo • debata • współczesność',
    lead: 'Rozumienie współczesnego społeczeństwa i świadomie uczestniczenie w życiu publicznym.',
    why: 'WOS rozszerzony pomaga zrozumieć mechanizmy państwa, prawa, społeczeństwa i relacji międzynarodowych. Uczy analizowania aktualnych wydarzeń, prowadzenia rzeczowej debaty oraz dostrzegania perspektyw różnych uczestników życia publicznego.',
    learn: ['ustrój państwa i podstawy prawa', 'prawa człowieka oraz rolę obywatela', 'współczesne procesy społeczne i polityczne', 'analizę źródeł, debatę i argumentację'],
    forWhom: 'Osoby zainteresowane prawem, polityką, społeczeństwem i rozmową o współczesnym świecie.',
    future: 'prawo, politologia, stosunki międzynarodowe, administracja, dziennikarstwo, socjologia i kierunki społeczne.',
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

const subjectInterests = {
  angielski: ['języki', 'komunikacja', 'studia międzynarodowe', 'media'],
  biologia: ['medycyna', 'biotechnologia', 'nauki przyrodnicze', 'zdrowie'],
  biz: ['zarządzanie', 'ekonomia', 'przedsiębiorczość', 'marketing'],
  chemia: ['farmacja', 'analityka', 'technologie', 'nauki medyczne'],
  fizyka: ['inżynieria', 'technologie', 'energetyka', 'badania'],
  geografia: ['gospodarka przestrzenna', 'środowisko', 'logistyka', 'turystyka'],
  historia: ['prawo', 'stosunki międzynarodowe', 'kultura', 'muzealnictwo'],
  matematyka: ['informatyka', 'analiza danych', 'finanse', 'inżynieria'],
  polski: ['media', 'kultura', 'filologie', 'komunikacja'],
  wos: ['prawo', 'politologia', 'administracja', 'stosunki międzynarodowe'],
};

const subjectPath = (id) => `/edukacja/przedmioty-rozszerzone/${id}`;
const alphabeticalSubjects = [...subjects].sort((first, second) =>
  first.name.localeCompare(second.name, 'pl')
);
const pathBuilderSubjects = alphabeticalSubjects;

function SubjectIcon({ subject, size = 24 }) {
  const Icon = subject.icon;
  return <Icon size={size} aria-hidden="true" />;
}

export function PrzedmiotyRozszerzone() {
  const [selected, setSelected] = useState([]);
  const key = [...selected].sort().join('+');
  const suggestion = selected.length === 2
    ? paths[key] ?? [...new Set(selected.flatMap((id) => subjectInterests[id] ?? []))].slice(0, 5).join(' • ')
    : null;

  const toggleSubject = (id) => {
    setSelected((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      return current.length === 2 ? [current[1], id] : [...current, id];
    });
  };

  return (
    <section className="extensions-page container">
      <header className="extensions-header">
        <span className="extensions-eyebrow">Indywidualny dobór profilu</span>
        <h1>Przedmioty rozszerzone</h1>
        <div className="extensions-intro">
          <strong>Ukierunkowanie procesu rozwojowego na zagadnienia wynikające z indywidualnych preferencji poznawczych.</strong>
          <p>W V Prywatnym Liceum Ogólnokształcącym uczeń może budować własną ścieżkę edukacyjną, wybierając przedmioty rozszerzone zgodnie ze swoimi zainteresowaniami i planami na przyszłość.</p>
        </div>
      </header>

      <section className="extensions-subject-grid" aria-label="Przedmioty rozszerzone">
        {alphabeticalSubjects.map((subject) => (
          <Link className={`extension-subject-card extension-${subject.accent}`} to={subjectPath(subject.id)} key={subject.id}>
            <div className="extension-card-title"><SubjectIcon subject={subject} /><span>{subject.name}</span></div>
            <h2>{subject.tagline}</h2>
            <p>{subject.keywords}</p>
            <span className="extension-card-link">Rozszerzenie <ArrowRight size={17} /></span>
          </Link>
        ))}
      </section>

      <section className="path-builder" aria-labelledby="path-builder-title">
        <div className="path-builder-top">
          <span className="extensions-eyebrow">Decyzja</span>
          <h2 id="path-builder-title">Przykładowe ścieżki rozwoju</h2>
          <p>Wybór dwóch przedmiotów umożliwia zapoznanie się z przykładowymi obszarami powiązanymi z rozwojem zainteresowań.</p>
          <div className="path-builder-options">
            {pathBuilderSubjects.map((subject) => (
              <>
                {subject.id === 'historia' && <span className="path-builder-row-break" aria-hidden="true" />}
                <button type="button" key={subject.id} className={selected.includes(subject.id) ? `is-selected extension-${subject.accent}` : ''} onClick={() => toggleSubject(subject.id)} aria-pressed={selected.includes(subject.id)}>
                  <SubjectIcon subject={subject} size={19} /> {subject.shortName}
                </button>
              </>
            ))}
          </div>
        </div>
        <div className="path-builder-result" aria-live="polite">
          {suggestion ? <><strong>Wybrane rozszerzenia mogą prowadzić w stronę:</strong><span>{suggestion}</span></> : <><strong>Zaznaczenie dwóch rozszerzeń wyświetla powiązane propozycje.</strong><span>Połączenie przedmiotów pełni funkcję inspiracyjną w procesie dalszego planowania.</span></>}
        </div>
      </section>
    </section>
  );
}[]

export function PrzedmiotRozszerzony({ subjectId }) {
  const subject = subjects.find((item) => item.id === subjectId) ?? subjects[0];
  const related = alphabeticalSubjects.filter((item) => item.id !== subject.id);

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
        <section><h2>Zakres działań dydaktycznych</h2><div className="extension-learn-grid">{subject.learn.map((item) => <div key={item}><Sparkles size={18} />{item}</div>)}</div></section>
        <section><h2>Jak uczymy?</h2><p>{subject.teaching ?? 'Pracujemy w kameralnych grupach, w których jest miejsce na pytania, dyskusję i własne tempo pracy. Łączymy wyjaśnianie zagadnień z analizą przykładów, projektami, prezentacjami i zadaniami rozwijającymi samodzielność. Nauczyciel towarzyszy uczniowi w budowaniu jego własnej ścieżki.'}</p></section>
        <section><h2>Dla kogo?</h2><p>{subject.forWhom}</p></section>
        <section><h2>Co dalej?</h2><p>Wiedza i umiejętności rozwijane na tych zajęciach mogą być inspiracją przy wyborze takich obszarów jak: {subject.future}</p></section>
      </div>

      <aside className="extension-combine">
        <div><span className="extensions-eyebrow">Kierunek</span><h2>Połączenie z innymi rozszerzeniami</h2><p>W VPLO można tworzyć indywidualną kombinację przedmiotów zgodną z planami ucznia.</p></div>
        <div className="extension-related-grid">{related.map((item) => <Link to={subjectPath(item.id)} key={item.id}><SubjectIcon subject={item} /><span>{item.shortName}</span><ArrowRight size={16} /></Link>)}</div>
      </aside>
    </section>
  );
}
