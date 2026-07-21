import robertKubicaImage from '../../assets/robert-kubica.jpg';

const sportsDisciplines = [
    'Formuła 1 i WRC, wyścigi samochodowe i gokartowe',
    'sporty motorowe',
    'jazda konna',
    'gimnastyka',
    'tenis',
    'snowboard',
    'pływanie',
    'piłka nożna',
    'sporty walki',
    'kajakarstwo górskie',
];

export default function KandydaciSportowcy() {
    return (
        <section className="page-wrap container article-page recruitment-page sports-page">
            <div className="article-header-grid">
                <div className="page-header">
                    <h1>Kandydaci – sportowcy</h1>

                    <p className="recruitment-intro-card">
                        Nauka na najwyższym poziomie może iść w parze z wyczynowym
                        uprawianiem sportu.
                    </p>
                </div>

                <aside className="article-highlights">
                    <h2>Wsparcie sportowca</h2>

                    <ul>
                        <li>Indywidualna organizacja nauki</li>
                        <li>Stały kontakt z wychowawcą</li>
                        <li>Nauczanie także podczas wyjazdów</li>
                    </ul>
                </aside>
            </div>

            <div className="article-layout">
                <article className="page-main-card">
                    <p className="article-text">
                        Doświadczenia naszego liceum upoważniają do stwierdzenia, że naukę
                        na najwyższym poziomie potrafimy łączyć z wyczynowym uprawianiem
                        sportu przez uczniów, którzy czynnie uczestniczą w profesjonalnych
                        zajęciach treningowych i zawodach — i to w każdej z dyscyplin
                        sportowych.
                    </p>

                    <section className="sports-success-section">
                        <div className="sports-success-content">
                            <h2 className="sports-section-title">
                                Sportowe sukcesy naszych uczniów
                            </h2>

                            <p className="article-text">
                                Nasi uczniowie, a także absolwenci, odnosili bądź nadal odnoszą
                                sukcesy w każdej skali: lokalnej, ogólnopolskiej i międzynarodowej,
                                między innymi w Formule 1 i WRC — Robert Kubica — oraz w wielu
                                innych dyscyplinach.
                            </p>
                        </div>

                        <figure className="kubica-photo-card">
                            <img
                                src={robertKubicaImage}
                                alt="Robert Kubica"
                            />

                            <figcaption>
                                Robert Kubica — Formuła 1 i WRC
                            </figcaption>
                        </figure>
                    </section>

                    <ul className="sports-disciplines">
                        {sportsDisciplines.map((sport) => (
                            <li key={sport}>{sport}</li>
                        ))}
                    </ul>

                    <p className="article-text">
                        Praktycznie żadna z dyscyplin sportowych nie stoi w sprzeczności
                        z naszą koncepcją kształcenia. O sukces końcowy dbamy w rzetelnym
                        porozumieniu z uczniami — czynnymi sportowcami.
                    </p>

                    <section className="sports-learning-card">
                        <h2>Organizacja nauki</h2>

                        <p>
                            Program nauczania licealnego jest realizowany w korelacji
                            z harmonogramem zajęć sportowych — wyjazdów, zgrupowań,
                            treningów oraz udziału w zawodach.
                        </p>

                        <p>
                            Funkcję koordynatora pełni wychowawca klasy, pozostający w stałym
                            kontakcie telefonicznym i mailowym z uczniem-sportowcem.
                        </p>

                        <p>
                            W ramach tego kontaktu wykorzystywane są wszystkie formy
                            dydaktyczne distance learning, które w przyjaznej,
                            indywidualnej formie wypełniają czas wolny od zajęć sportowych
                            podczas wyjazdów i pobytu poza szkołą.
                        </p>
                    </section>

                    <section className="sports-invitation-card">
                        <h2>Oddzielne zaproszenie dla sportowców</h2>

                        <p>
                            Uczniowie czynnie uprawiający sport mogą liczyć na nasze wsparcie
                            w osiąganiu sukcesu sportowego bez rezygnowania z dbałości
                            o własny rozwój edukacyjny.
                        </p>

                        <p>
                            Wiemy, jak połączyć te dwa cele — stąd nasze oddzielne zaproszenie.
                        </p>
                    </section>
                </article>
            </div>
        </section>
    );
}