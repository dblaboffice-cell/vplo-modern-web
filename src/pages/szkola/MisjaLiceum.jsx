const MisjaLiceumPage = () => {
    return (
        <section className="page-wrap container mission-page">

            <div className="page-header">
                <h1>Misja i Wizja Liceum</h1>
            </div>

            <div className="mission-page-content">

                <div className="hero-statement-card mission-statement-card">
                    <h2>Misja szkoły</h2>

                    <p>
                        Wykorzystując kompetencje edukacyjne i organizacyjne pomagamy
                        naszym uczniom przygotować się do wyzwań współczesnego świata
                        przez wsparcie ich rozwoju osobistego.
                    </p>
                </div>

                <section className="mission-director-section">
                    <div className="mission-director-heading">
                        <span>O misji szkoły</span>
                    </div>

                    <blockquote className="mission-director-quote">
                        „Ta misja pokazuje kilka wymiarów. Po pierwsze odwołuje się
                        do długiej historii szkoły, podczas której zostały zgromadzone
                        bardzo wysokie kompetencje edukacyjne i organizacyjne.
                        Po drugie wskazuje te kompetencje jako warunek sine qua non
                        dobrej edukacji. Po trzecie łączy działalność edukacyjną
                        z wymogami współczesnego świata. Finalnie traktuje każdego
                        ucznia jako wyjątkową jednostkę, którą chce wspierać na drodze
                        jego rozwoju osobistego.”
                    </blockquote>

                    <p className="mission-director-signature">
                        <span className="mission-director-name">Jerzy Andrzej Białkiewicz</span>
                        <span className="mission-director-role">Dyrektor liceum</span>
                    </p>
                </section>
                <section className="vision-section">

                    <div className="hero-statement-card mission-statement-card">
                        <h2>Wizja szkoły</h2>

                        <p>
                            V Prywatne Liceum Ogólnokształcące im. Królowej Jadwigi —
                            wysokiej klasy szkoła ogólnokształcąca położona w Krakowie,
                            mieście królów Polski.
                        </p>
                    </div>

                    <section className="mission-director-section">
                        <div className="mission-director-heading">
                            <span>O wizji szkoły</span>
                        </div>

                        <blockquote className="mission-director-quote">
                            „W tej wizji mieszczą się dwa nadrzędne kierunki. Pierwszym jest
                            aspirowanie do bycia najlepszą, jedyną w swoim rodzaju szkołą
                            ogólnokształcącą. Drugim kierunkiem jest świadome zauważenie
                            lokalizacji szkoły w mieście o ogromnym potencjale edukacyjnym.
                            Mam na myśli zasoby historyczne i kulturowe, którymi można wspierać
                            procesy edukacyjne.”
                        </blockquote>

                        <p className="mission-director-signature">
                            <span className="mission-director-name">Jerzy Andrzej Białkiewicz</span>
                            <span className="mission-director-role">Dyrektor liceum</span>
                        </p>
                    </section>

                </section>

            </div>

        </section>
    );
};

export default MisjaLiceumPage;
