const textbookCards = [
    {
        title: 'Wykaz podręczników',
        subtitle: 'Klasa 1',
        subjects: [
            {
                name: 'Język polski',
                books: [
                    'Dąbrowska D., Kapela-Bagińska B., Prylińska E., 2019. Sztuka wyrazu 1.1, 1.2. Podręcznik dla liceum i technikum. Zakresy podstawowy i rozszerzony. Gdańsk: Gdańskie Wydawnictwo Oświatowe.',
                ],
            },
            {
                name: 'Matematyka',
                books: [
                    'Kurczab E., Kurczab M., Świda E., 2019. Podręcznik dla liceów i techników. Klasa 1. Zakres podstawowy. Warszawa: Oficyna Edukacyjna Krzysztof Pazdro.',
                    'Zbiór zadań dla klasy 1 wyżej wymienionego wydawnictwa.',
                ],
            },
            {
                name: 'Chemia — klasa 1/2',
                levels: [
                    {
                        name: 'Zakres podstawowy',
                        books: [
                            'Hassa R., Mrzigod A., Mrzigod J., 2019. To jest chemia 1. Chemia ogólna i nieorganiczna. Zakres podstawowy. Warszawa: Nowa Era.',
                        ],
                    },
                    {
                        name: 'Zakres rozszerzony',
                        books: [
                            'Litwin M., Styka-Wlazło Sz., Szymońska J., 2019. To jest chemia 1. Chemia ogólna i nieorganiczna. Zakres rozszerzony. Warszawa: Nowa Era.',
                            'Kaznowski K., Pazdro K., 2019. Chemia, część 1. Podręcznik do liceów i techników, zakres rozszerzony. Warszawa: Oficyna Edukacyjna Krzysztof Pazdro.',
                        ],
                    },
                ],
            },
            {
                name: 'Biologia',
                levels: [
                    {
                        name: 'Zakres podstawowy',
                        books: [
                            'Helmin A., Holaczek J., 2019. Biologia na czasie 1. Zakres podstawowy. Warszawa: Nowa Era.',
                        ],
                    },
                    {
                        name: 'Zakres rozszerzony',
                        books: [
                            'Guzik M., Kozik R., Matuszewska R., 2019. Biologia na czasie 1. Zakres rozszerzony. Warszawa: Nowa Era.',
                        ],
                    },
                ],
            },
            {
                name: 'Język niemiecki',
                note: 'Podręcznik i zeszyt ćwiczeń',
                books: [
                    'Kryczyńska-Pham A., 2022. Effekt neu 1. Warszawa: WSiP.',
                ],
            },
        ],
    },
    {
        title: 'Języki obce',
        text: 'Podręczniki do języków obcych zostaną wskazane przez nauczycieli po ustaleniu poziomu zaawansowania uczniów.',
    },
    {
        title: 'Pozostałe przedmioty',
        text: 'Informacje dotyczące podręczników do pozostałych przedmiotów będą aktualizowane zgodnie z zaleceniami nauczycieli.',
    },
];

const textbookNote =
    'Przed zakupem podręczników prosimy o sprawdzenie aktualnego wykazu opublikowanego przez szkołę.';

function Podreczniki() {
    return (
        <article className="student-page textbooks-page-layout">
            <div className="textbooks-layout">
                <div className="textbooks-intro">
                    <span>Informacje dla uczniów</span>

                    <h2>Podręczniki na rok szkolny</h2>

                    <p>
                        Informacje dotyczące podręczników obowiązujących
                        w bieżącym roku szkolnym.
                    </p>
                </div>

                <div className="textbooks-grid">
                    {textbookCards.map((card) => (
                        <div className="textbook-card" key={card.title}>
                            <h3>{card.title}</h3>

                            {card.subtitle && (
                                <div className="textbook-class-label">
                                    {card.subtitle}
                                </div>
                            )}

                            {card.subjects ? (
                                <div className="textbook-subjects">
                                    {card.subjects.map((subject) => (
                                        <section
                                            className="textbook-subject"
                                            key={subject.name}
                                        >
                                            <h4>{subject.name}</h4>

                                            {subject.note && (
                                                <p className="textbook-subject-note">
                                                    {subject.note}
                                                </p>
                                            )}

                                            {subject.books && (
                                                <ul>
                                                    {subject.books.map((book) => (
                                                        <li key={book}>{book}</li>
                                                    ))}
                                                </ul>
                                            )}

                                            {subject.levels?.map((level) => (
                                                <div
                                                    className="textbook-level"
                                                    key={level.name}
                                                >
                                                    <h5>{level.name}</h5>

                                                    <ul>
                                                        {level.books.map((book) => (
                                                            <li key={book}>{book}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </section>
                                    ))}
                                </div>
                            ) : (
                                <p>{card.text}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="textbooks-note">
                    <strong>Ważna informacja</strong>
                    <p>{textbookNote}</p>
                </div>
            </div>
        </article>
    );
}

export default Podreczniki;