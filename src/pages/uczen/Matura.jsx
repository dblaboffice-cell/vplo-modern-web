const faqGroups = [
    {
        title: 'Organizacja matury',
        questions: [
            [
                'Gdzie, kiedy i w jaki sposób zapisać się na maturę oraz do kiedy można zadeklarować przedmioty?',
                <>
                    Deklarację maturalną składa się elektronicznie w systemie{' '}
                    <a href="https://ziu.gov.pl/login" target="_blank" rel="noreferrer">ZIU-SIOEO</a>.
                    {' '}Terminy składania i ewentualnej zmiany deklaracji określa{' '}
                    <a href="https://cke.gov.pl/" target="_blank" rel="noreferrer">CKE</a>{' '}
                    dla danej sesji egzaminacyjnej.
                </>,
            ],
            [
                'Kiedy odbędą się egzaminy maturalne?',
                <>
                    Egzaminy pisemne i ustne odbywają się w terminach określonych w oficjalnym harmonogramie{' '}
                    <a
                        href="https://cke.gov.pl/egzamin-maturalny/egzamin-maturalny-w-formule-2023/harmonogram-komunikaty-i-informacje/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        CKE
                    </a>.
                </>,
            ],
            ['Jakie egzaminy są obowiązkowe na maturze?', 'Obowiązkowe są egzaminy pisemne z języka polskiego, matematyki i języka obcego nowożytnego, egzaminy ustne z języka polskiego i języka obcego oraz przystąpienie do egzaminu z co najmniej jednego przedmiotu dodatkowego na poziomie rozszerzonym.'],
            ['Jakie i ile przedmiotów można zdawać na poziomie rozszerzonym?', 'Można zdawać przedmioty dodatkowe na poziomie rozszerzonym, wybierając je spośród przedmiotów wskazanych przez CKE. Można przystąpić maksymalnie do sześciu przedmiotów dodatkowych.'],
            ['Czy warto zdawać więcej przedmiotów na poziomie rozszerzonym?', 'Nie zawsze. Większa liczba rozszerzeń ma sens przede wszystkim wtedy, gdy są one przydatne w rekrutacji na wybrane kierunki studiów. Wybór mniejszej liczby przedmiotów pozwala lepiej się do nich przygotować i zwiększyć szansę na wysoki wynik. Zbyt duża liczba rozszerzeń może natomiast oznaczać ryzyko uzyskania przeciętnych wyników.'],
            ['Czy można zmienić deklarację maturalną?', 'Tak, ale tylko w określonych przypadkach i terminach. Zmiany należy zgłosić zgodnie z procedurą obowiązującą w danym roku.'],
        ],
    },
    {
        title: 'Przebieg egzaminów',
        questions: [
            ['Co trzeba, a czego nie można zabrać ze sobą na maturę?', 'Na maturę należy zabrać dokument tożsamości, np. dowód osobisty. Ponadto można mieć wyłącznie dozwolone przybory i materiały wskazane w komunikacie CKE. Niedozwolone jest m.in. korzystanie z telefonów i innych urządzeń telekomunikacyjnych.'],
            ['Co się stanie, jeśli spóźnię się na egzamin lub źle się podczas niego poczuję?', 'W przypadku spóźnienia możliwość przystąpienia do egzaminu zależy od sytuacji i decyzji przewodniczącego zespołu egzaminacyjnego. W razie złego samopoczucia należy niezwłocznie poinformować członka zespołu egzaminacyjnego.'],
            ['Ile trwają poszczególne egzaminy maturalne?', 'Czas trwania zależy od przedmiotu i poziomu egzaminu. Dokładne informacje określają komunikaty i informatory CKE.'],
        ],
    },
    {
        title: 'Egzaminy ustne',
        questions: [
            ['Jakie egzaminy ustne są obowiązkowe?', 'Obowiązkowe są egzaminy ustne z języka polskiego i języka obcego nowożytnego.'],
            ['Jak wygląda egzamin ustny z języka polskiego i języka obcego?', 'Egzamin z języka polskiego obejmuje odpowiedź na jedno pytanie jawne oraz jedno pytanie niejawne, wymagające literackiej lub językoznawczej analizy fragmentu tekstu literackiego lub użytkowego albo analizy obrazu, a następnie rozmowę z komisją. Egzamin z języka obcego obejmuje m.in. wypowiedź, rozmowę oraz zadania sprawdzające rozumienie ze słuchu.'],
            ['Ile trwa egzamin ustny i ile punktów trzeba zdobyć, żeby go zdać?', 'Czas trwania zależy od rodzaju egzaminu. Aby zdać, należy uzyskać co najmniej 30% punktów z każdego obowiązkowego egzaminu ustnego.'],
            ['Co się stanie, jeśli nie zdam egzaminu ustnego?', 'Nieuzyskanie wymaganego wyniku oznacza niezdanie matury. Egzamin można ponownie zdawać na zasadach określonych przez CKE.'],
        ],
    },
    {
        title: 'Wyniki i zdawalność',
        questions: [
            ['Ile punktów trzeba zdobyć, żeby zdać maturę?', 'Należy uzyskać co najmniej 30% punktów z każdego obowiązkowego egzaminu pisemnego i ustnego oraz przystąpić do egzaminu z co najmniej jednego przedmiotu dodatkowego na poziomie rozszerzonym.'],
            ['Czy trzeba zdać egzamin na poziomie rozszerzonym, żeby zdać maturę?', 'Nie. W 2027 r. trzeba przystąpić do co najmniej jednego egzaminu na poziomie rozszerzonym, ale nie ma obowiązku uzyskania z niego określonego wyniku.'],
            ['Co się stanie, jeśli nie zdam jednego z obowiązkowych egzaminów?', 'Nie otrzymasz świadectwa dojrzałości. Jeśli spełnisz warunki określone przez CKE, możesz przystąpić do egzaminu w terminie poprawkowym lub ponownie zdawać go w kolejnej sesji.'],
            ['Co się stanie, jeśli nie zdam więcej niż jednego z obowiązkowych egzaminów?', 'Nie można wtedy skorzystać z terminu poprawkowego. Niezdane egzaminy można ponownie zdawać w kolejnych sesjach egzaminacyjnych.'],
            ['Kiedy i gdzie można sprawdzić wyniki matury?', 'Wyniki są publikowane w terminie określonym przez CKE i można je sprawdzić w systemie ZIU-SIOEO.'],
            ['W jaki sposób można odwołać się od wyniku matury?', 'Jeśli masz zastrzeżenia do wyniku, najpierw złóż do dyrektora właściwej OKE wniosek o wgląd do sprawdzonej i ocenionej pracy. Po wglądzie możesz złożyć wniosek o weryfikację sumy punktów, a w określonych przypadkach także odwołać się do Kolegium Arbitrażu Egzaminacyjnego.'],
        ],
    },
    {
        title: 'Poprawa matury',
        questions: [
            ['Kiedy i na jakich zasadach można poprawić maturę lub podwyższyć wynik?', 'Niezdany egzamin można poprawić w terminach określonych przez CKE. Do terminu poprawkowego można przystąpić, jeśli spełnia się określone warunki, m.in. nie zdało się tylko jednego z obowiązkowych egzaminów. Wybrane egzaminy można również ponownie zdawać w kolejnych latach w celu podwyższenia wyniku.'],
        ],
    },
    {
        title: 'Termin dodatkowy',
        questions: [
            ['Kiedy przysługuje dodatkowy termin matury w czerwcu?', 'Termin dodatkowy przysługuje osobom, które z ważnych, udokumentowanych przyczyn zdrowotnych lub losowych nie mogły przystąpić do egzaminu w terminie głównym. Należy poinformować szkołę i złożyć odpowiedni wniosek wraz z dokumentacją potwierdzającą przyczynę, zgodnie z procedurą CKE.'],
            ['Co zrobić, jeśli maturzysta zachoruje przed egzaminem?', 'Jeśli choroba uniemożliwia przystąpienie do egzaminu w terminie głównym, należy jak najszybciej poinformować szkołę i udokumentować przyczynę. W uzasadnionych przypadkach można ubiegać się o przystąpienie do egzaminu w terminie dodatkowym.'],
        ],
    },
    {
        title: 'Dostosowania warunków egzaminu',
        questions: [
            ['Kiedy przysługują dostosowania warunków egzaminu i wydłużony czas?', 'Dostosowania przysługują zdającym, którzy spełniają warunki określone przez CKE, m.in. ze względu na niepełnosprawność, stan zdrowia lub specyficzne trudności w uczeniu się. Zakres dostosowania zależy od podstawy uprawnienia.'],
            ['Co dają dostosowania warunków egzaminu i wydłużony czas oraz jak z nich skorzystać?', 'Dostosowania mogą obejmować m.in. wydłużenie czasu pracy, zmianę warunków przeprowadzania egzaminu czy korzystanie z określonych pomocy. Aby z nich skorzystać, należy dostarczyć do szkoły odpowiedni dokument potwierdzający uprawnienie, np. opinię poradni psychologiczno-pedagogicznej, orzeczenie lub zaświadczenie lekarskie, w terminie określonym przez CKE.'],
            ['Jak dysleksja, dyskalkulia, dysgrafia lub dysortografia wpływają na ocenianie matury?', 'Dostosowanie nie oznacza określonej liczby „dopuszczalnych” błędów. W przypadku niektórych trudności w uczeniu się CKE stosuje szczegółowe zasady oceniania, które uwzględniają specyfikę danego zaburzenia.'],
        ],
    },
    {
        title: 'Matura a studia',
        questions: [
            ['Jak wyniki matury wpływają na rekrutację na studia i co zrobić, jeśli wynik jest niższy od oczekiwanego?', 'Uczelnie samodzielnie określają zasady rekrutacji i sposób przeliczania wyników matury. Jeśli wynik jest niższy od oczekiwanego, warto sprawdzić wymagania innych kierunków lub uczelni oraz rozważyć poprawę matury w kolejnym roku.'],
            ['Co zrobić, jeśli maturzysta nie wie jeszcze, na jakie studia chce iść?', 'Nie trzeba podejmować decyzji od razu. Warto przeanalizować swoje zainteresowania, mocne strony i wymagania rekrutacyjne różnych kierunków oraz porównać kilka możliwości. Pomocna może być również rozmowa z doradcą zawodowym.'],
        ],
    },
    {
        title: 'Informacje dla rodziców',
        questions: [
            ['Jak rodzic może pomóc maturzyście przygotować się do matury?', 'Najlepszym wsparciem jest pomoc w organizacji nauki, zapewnienie odpowiednich warunków do pracy i odpoczynku oraz rozmowa o trudnościach i potrzebach maturzysty. Warto wspierać, ale nie wywierać nadmiernej presji.'],
            ['Gdzie szukać wiarygodnych i aktualnych informacji o maturze?', 'Najważniejsze informacje, komunikaty i harmonogramy dotyczące matury są publikowane na stronach Centralnej Komisji Egzaminacyjnej (CKE) oraz właściwej Okręgowej Komisji Egzaminacyjnej (OKE). Informacji dotyczących organizacji egzaminu w szkole udziela również szkoła.'],
            ['Co zrobić, jeśli maturzysta nie zda matury?', 'Przede wszystkim należy sprawdzić, którego egzaminu nie udało się zdać i czy przysługuje termin poprawkowy. Jeśli nie można z niego skorzystać, egzamin można ponownie zdawać w kolejnych sesjach egzaminacyjnych. Niezdana matura nie zamyka drogi do uzyskania świadectwa dojrzałości ani podjęcia studiów.'],
        ],
    },
];

function Matura() {
    let questionNumber = 0;

    return (
        <article className="student-page matura-page">
            <header>
                <h1>Matura</h1>
                <p className="section-intro-card">Informacje dla maturzystów</p>
            </header>

            <section className="matura-content" aria-labelledby="matura-faq-title">
                <div className="matura-content-heading">
                    <h2 id="matura-faq-title">Kompendium wiedzy o maturze</h2>
                    <a
                        className="matura-cke-button"
                        href="https://cke.gov.pl/egzamin-maturalny/egzamin-maturalny-w-formule-2023/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Egzamin maturalny CKE
                    </a>
                </div>

                <div className="matura-faq-groups">
                    {faqGroups.map((group) => (
                        <section className="matura-faq-group" key={group.title}>
                            <h3>{group.title}</h3>
                            {group.questions.map(([question, answer]) => {
                                questionNumber += 1;
                                return (
                                    <details className="matura-faq-item" key={question}>
                                        <summary>
                                            <span className="matura-question-number">{questionNumber}</span>
                                            <span>{question}</span>
                                        </summary>
                                        <p>{answer}</p>
                                    </details>
                                );
                            })}
                        </section>
                    ))}
                </div>
            </section>
        </article>
    );
}

export default Matura;
