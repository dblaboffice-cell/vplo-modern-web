const PrzeslanieDyrektoraPage = () => {
    return (
        <section className="page-wrap container director-message-page">

            <div className="page-header">
        <span className="director-message-eyebrow">
          Od Dyrektora
        </span>

                <h1>Przesłanie Dyrektora</h1>
            </div>

            <div className="director-message-content">

                <figure className="director-message-photo">
                    <img
                        src={`${import.meta.env.BASE_URL}jerzy-andrzej-bialkiewicz.jpg`}
                        alt="Jerzy Andrzej Białkiewicz – Dyrektor Liceum"
                    />

                    <figcaption>
                        <strong>Jerzy Andrzej Białkiewicz</strong>
                        <span>Dyrektor Liceum</span>
                    </figcaption>
                </figure>

                <div className="director-message-text">

                    <p>
                        Szkoła wspiera uczniów na drodze ich rozwoju osobistego,
                        w związku z tym patrzymy na każdego ucznia przez pryzmat jego
                        wyjątkowości, której szukamy wspólnie z uczniem, rodzicami
                        i nauczycielami, a po jej odkryciu wzmacniamy ją wszelkimi
                        możliwymi sposobami.
                    </p>

                    <p>
                        Promujemy kierowanie się w życiu, a w szczególności w szkole –
                        pasją. Takie podejście umożliwia ponadprzeciętne rozwijanie się
                        ucznia w wybranym przez siebie kierunku przy jednoczesnym
                        zarządzaniu pozostałymi wymaganiami, które wyznacza podstawa
                        programowa liceum ogólnokształcącego.
                    </p>

                    <p>
                        Nie oczekujemy od uczniów, że będą dobrzy ze wszystkiego.
                        Chcemy, żeby byli najlepsi w wybranej przez siebie dziedzinie,
                        a w pozostałych radzili sobie.
                    </p>

                    <p>
                        Z drugiej strony dla szkoły bardzo ważny jest tzw.
                        warsztat ucznia, na który składają się
                        postawy takie jak:
                    </p>

                    <ul className="director-message-values">
                        <li>pracowitość,</li>
                        <li>rzetelność,</li>
                        <li>prawdomówność,</li>
                        <li>
                            umiejętność wyciągania wniosków zarówno z sukcesów,
                            jak i porażek.
                        </li>
                    </ul>

                </div>

            </div>

        </section>
    );
};

export default PrzeslanieDyrektoraPage;