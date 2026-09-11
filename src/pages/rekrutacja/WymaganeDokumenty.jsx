import { Link } from 'react-router-dom';

const requiredDocuments = [
    'podanie do Dyrektora o przyjęcieLiceum,',
    'jedno zdjęcie w formacie legitymacyjnym.',
];

export default function WymaganeDokumenty() {
    return (
        <section className="page-wrap container article-page recruitment-page documents-page">
            <div className="article-header-grid">
                <div className="page-header">
                    <h1>Wymagane dokumenty</h1>

                </div>

            </div>

            <div className="article-layout">
                <article className="page-main-card">
                    <p className="article-text">
                        Kandydaci, którzy pozytywnie przeszli proces rekrutacji do klasy pierwszej
                        w V Prywatnym Liceum Ogólnokształcącym w Krakowie im.&nbsp;Królowej Jadwigi dostarczają:
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

                    <section className="documents-finalization-card">
                        <div>
                            <h2>Finalizacja przyjęcia ucznia</h2>
                            <p>Dokumenty końcowe</p>
                        </div>

                        <Link
                            to="/rekrutacja/formularz-przyjecia-ucznia"
                            className="documents-finalization-link"
                            data-tooltip="Formularz jest przeznaczony dla rodziców lub opiekunów kandydatów przyjętych do szkoły."
                        >
                            Formularz danych ucznia
                        </Link>
                    </section>
                </article>
            </div>
        </section>
    );
}
