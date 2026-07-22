const testimonials = [
    {
        name: 'Aleksandra Gubernat',
        description:
            'mgr, absolwentka Liceum w 2003 roku, a następnie Wydziału Prawa Uniwersytetu Jagiellońskiego',
        paragraphs: [
            'Szkołę wspominam bardzo pozytywnie. To świetne liceum dla osób, które chcą się uczyć i są zainteresowane podjęciem najlepszych kierunków studiów, a także dla tych, którzy chcą brać udział w olimpiadach.',
            'W szkole trzeba się sporo uczyć, ale jest to liceum, które naprawdę odkryje w Tobie talent do nauki. Jeśli nie chcesz go odkrywać, to ono i tak zrobi to za Ciebie. To szkoła dla ludzi z pasją i wyobraźnią, która wciąż się rozwija, a jej społeczność ma coraz lepsze pomysły. Kształcenie w liceum ukierunkowane jest na indywidualne uzdolnienia i osobowość uczniów.',
            'Wykwalifikowana kadra pedagogiczna jest po to, żeby wyjaśniać, uczyć, pomagać, rozwijać indywidualne pasje oraz zachęcać do zainteresowania przedmiotem. Dzięki temu nauka jest przyjazna, a materiał przyswajany w przystępny sposób. Klasówki były jak najbardziej oczekiwane, ponieważ dzięki nim wiadomo było, co i w jakim zakresie zostało przyswojone, a co należy jeszcze dopracować.',
            'Dodatkowym atutem szkoły jest duży nacisk położony na naukę języków obcych. Pamiętam, że miałam sześć godzin tygodniowo języka angielskiego, dwie godziny języka niemieckiego oraz koło języka włoskiego w wymiarze jednej godziny tygodniowo. Ważne miejsce zajmowały również wychowanie fizyczne, sport i rekreacja, co w praktyce oznaczało naukę tańca towarzyskiego i tenisa.',
            'Jeśli chcecie szkoły, którą będziecie wspominać z sentymentem przez całe życie, to tylko V Prywatne Liceum Ogólnokształcące przy ulicy Smoleńsk w Krakowie.',
        ],
    },
    {
        name: 'Anna Dobrowolska',
        description:
            'inż. arch., absolwentka Liceum w 2009 roku, studentka studiów magisterskich na Wydziale Architektury Politechniki Krakowskiej',
        paragraphs: [
            'Większość z nas z przerażeniem wspomina swój pierwszy dzień w nowej szkole — w przeciwieństwie do mnie. W VP-LO już od pierwszego dnia wyczuwalna jest miła i rodzinna atmosfera, którą tworzy wykwalifikowana i sympatyczna kadra nauczycielska.',
            'Bardzo pozytywnie wspominam trzy lata wspólnej nauki, które doprowadziły mnie do zdania matury z wynikami gwarantującymi indeks na studiach dziennych na Wydziale Architektury Politechniki Krakowskiej.',
        ],
    },
    {
        name: 'Ala Moskal',
        description:
            'absolwentka Liceum w 2013 roku, studentka Akademii Wychowania Fizycznego w Krakowie',
        paragraphs: [
            'Nieliczne klasy sprawiały, że lekcje prowadzone były sprawnie i produktywnie. Indywidualne podejście nauczycieli do każdego ucznia umożliwiło mi zawodnicze trenowanie snowboardu bez powstawania zaległości.',
            'Przyjazna atmosfera w szkole oraz bezstresowe nauczanie sprawiły, że mój trzyletni pobyt w V Prywatnym Liceum Ogólnokształcącym wspominam bardzo miło.',
        ],
    },
    {
        name: 'Wojciech Paniak',
        description: 'uczeń klasy III w roku szkolnym 2013/2014',
        paragraphs: [
            'VP-LO mogę polecić każdemu. Cenię tę szkołę przede wszystkim za rodzinną atmosferę. Każdy, kto do niej uczęszcza, czuje się wyjątkowo, co zawdzięczamy świetnej kadrze profesorskiej.',
            'Jedynym minusem jest to, że czas mija tak szybko. Za chwilę będę absolwentem, a wydaje mi się, że dopiero wczoraj przyszedłem tutaj pierwszy raz.',
        ],
    },
    {
        name: 'Angelika Taboła',
        description: 'maturzystka w roku szkolnym 2013/2014',
        paragraphs: [
            'Warto uczęszczać do tej szkoły, ponieważ jest tu wspaniałe grono pedagogiczne, które zawsze pomoże, wytłumaczy i porozmawia z uczniami na każdy temat.',
            'Uczniowie uczestniczą w różnych konkursach, wyjściach do teatru, na wystawy i do muzeów. Z tych wyjść wyniosłam bardzo dużo. Nauczyłam się ogromnego szacunku do patriotyzmu, szczególnie po wizycie w Muzeum Powstania Warszawskiego.',
            'Pani Dyrektor jest osobą wspaniałą. Zawsze opiekuje się pierwszą klasą, pomaga uczniom odnaleźć się w szkole oraz poświęca każdemu z nich dużo czasu.',
            'Organizuje zajęcia dodatkowe dla uczniów potrzebujących wsparcia, aby mieli możliwość poprawienia wyników w nauce, a dla uczniów wybitnie uzdolnionych organizuje fakultety obejmujące ponadprogramowy zakres materiału.',
            'Zajęcia dodatkowe to również warsztaty filmowe organizowane przez nauczycielkę języka polskiego, która starannie dobiera najwybitniejsze dzieła filmowe. Uczniowie bardzo chętnie uczestniczą w tych spotkaniach.',
            'Dwa razy w semestrze odbywają się sesje naukowe pomocne w przygotowaniach do matury ustnej. Po wystąpieniu podczas sesji uczniowie stają się bardziej pewni siebie, co jest szczególnie ważne przed przystąpieniem do egzaminu maturalnego.',
            'Zajęcia wychowania fizycznego są wyjątkowe: gramy w tenisa, jeździmy na łyżwach, a dziewczęta uczestniczą w dodatkowych zajęciach z gimnastyki.',
            'Dzięki tej szkole stałam się pewniejsza siebie, potrafię lepiej przyswajać wiedzę i — co najważniejsze — nie obawiam się egzaminów maturalnych.',
        ],
    },
];

export default function AbsolwenciONas() {
    return (
        <section className="page-wrap container article-page recruitment-page graduates-page">
            <div className="article-header-grid">
                <div className="page-header">
                    <h1>Absolwenci o nas</h1>

                    <p className="recruitment-intro-card">
                        Wspomnienia absolwentów i uczniów pokazują szkołę widzianą
                        z perspektywy osób, które tworzyły jej społeczność.
                    </p>
                </div>

                <aside className="article-highlights">
                    <h2>Najczęściej podkreślają</h2>

                    <ul>
                        <li>Rodzinną atmosferę</li>
                        <li>Indywidualne podejście</li>
                        <li>Solidne przygotowanie do matury</li>
                    </ul>
                </aside>
            </div>

            <div className="article-layout">
                <article className="page-main-card">
                    <div className="graduates-introduction">
                        <h2>Głosy naszej społeczności</h2>

                        <p>
                            Każda historia jest inna, lecz w wypowiedziach powtarzają się
                            podobne doświadczenia: kameralność, zaangażowanie nauczycieli,
                            możliwość rozwijania zainteresowań oraz dobre przygotowanie
                            do dalszej edukacji.
                        </p>
                    </div>

                    <div className="graduates-testimonials">
                        {testimonials.map((testimonial, index) => (
                            <article
                                className="graduate-testimonial"
                                key={testimonial.name}
                            >
                                <header className="graduate-testimonial-header">
                                    <div
                                        className="graduate-testimonial-initial"
                                        aria-hidden="true"
                                    >
                                        {testimonial.name.charAt(0)}
                                    </div>

                                    <div>
                                        <h2>{testimonial.name}</h2>
                                        <p>{testimonial.description}</p>
                                    </div>
                                </header>

                                <blockquote>
                                    {testimonial.paragraphs.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </blockquote>
                            </article>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
}