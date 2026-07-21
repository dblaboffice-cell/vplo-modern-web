const requiredDocuments = [
    'podanie do Dyrektora Liceum,',
    'oryginał świadectwa ukończenia klasy VIII szkoły podstawowej,',
    'wyciąg z ocen za semestr zimowy klasy VIII szkoły podstawowej,',
    'jedno zdjęcie w formacie legitymacyjnym.',
];

export default function WymaganeDokumenty() {
    return (
        <section className="page-wrap container article-page recruitment-page documents-page">
            <div className="article-header-grid">
                <div className="page-header">
                    <h1>Wymagane dokumenty</h1>

                    <p className="recruitment-intro-card">
                        Rekrutacja prowadzona jest do momentu wyczerpania limitu miejsc, a każdy etap naboru odzwierciedla indywidualne podejście naszej szkoły do przyszłych uczniów.
                    </p>
                </div>

                <aside className="article-highlights">
                    <h2>Proces rekrutacji</h2>

                    <ul>
                        <li>Złożenie dokumentów</li>
                        <li>Rozmowa kwalifikacyjna</li>
                        <li>Uzupełnienie świadectwa</li>
                    </ul>
                </aside>
            </div>

            <div className="article-layout">
                <article className="page-main-card">
                    <p className="article-text">
                        Kandydaci ubiegający się o przyjęcie do klasy pierwszej
                        w V Prywatnym Liceum Ogólnokształcącym w Krakowie im. Królowej Jadwigi dostarczają:
                    </p>

                    <ul className="recruitment-reasons documents-list">
                        {requiredDocuments.map((document) => (
                            <li key={document}>{document}</li>
                        ))}
                    </ul>

                    <section className="documents-june-card">
                        <h2>Dodatkowo w czerwcu</h2>

                        <p>Świadectwo ukończenia szkoły podstawowej.</p>
                    </section>

                    <section className="documents-note">
                        <h2>Rozmowa kwalifikacyjna</h2>

                        <p>
                            Przedstawiciel szkoły, po wcześniejszym ustaleniu terminu
                            spotkania — osobiście lub telefonicznie — zaprasza kandydatów
                            na rozmowę kwalifikacyjną.
                        </p>
                    </section>
                </article>
            </div>
        </section>
    );
}