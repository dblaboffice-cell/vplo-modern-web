import React from "react";
import "./SchoolYearPage.css";

const semesterGroups = [
    {
        title: "Klasy I–III",
        semesters: [
            {
                name: "Semestr I",
                date: "1 września 2026 – 31 stycznia 2027",
            },
            {
                name: "Semestr II",
                date: "1 lutego 2027 – 25 czerwca 2027",
            },
        ],
    },
    {
        title: "Klasa IV",
        semesters: [
            {
                name: "Semestr I",
                date: "1 września 2026 – 31 grudnia 2026",
            },
            {
                name: "Semestr II",
                date: "1 stycznia 2027 – 30 kwietnia 2027",
            },
        ],
    },
];

const importantDates = [
    {
        name: "Rozpoczęcie roku szkolnego",
        date: "1 września 2026",
    },
    {
        name: "Zimowa przerwa świąteczna",
        date: "23–31 grudnia 2026",
    },
    {
        name: "Ferie zimowe",
        description: "województwo małopolskie",
        date: "15–28 lutego 2027",
    },
    {
        name: "Wiosenna przerwa świąteczna",
        date: "25–30 marca 2027",
    },
    {
        name: "Zakończenie zajęć w klasie IV",
        date: "30 kwietnia 2027",
    },
    {
        name: "Zakończenie zajęć w klasach I–III",
        date: "25 czerwca 2027",
    },
    {
        name: "Ferie letnie",
        date: "26 czerwca – 31 sierpnia 2027",
    },
];

function SchoolYearPage() {
    return (
        <article className="school-year-page">
            <header className="school-year-header">
        <span className="school-year-eyebrow">
          Organizacja nauki
        </span>

                <h1>Rok szkolny 2026–2027</h1>

                <p>
                    Najważniejsze informacje dotyczące organizacji roku szkolnego
                    2026–2027.
                </p>
            </header>

            <section
                className="school-year-card"
                aria-labelledby="semester-division-title"
            >
                <h2 id="semester-division-title">
                    Semestralny podział roku szkolnego
                </h2>

                <div className="semester-groups">
                    {semesterGroups.map((group) => (
                        <div className="semester-group" key={group.title}>
                            <h3>{group.title}</h3>

                            <div className="school-year-list">
                                {group.semesters.map((semester) => (
                                    <div
                                        className="school-year-row"
                                        key={`${group.title}-${semester.name}`}
                                    >
                                        <div className="school-year-label">
                                            {semester.name}
                                        </div>

                                        <div className="school-year-date">
                                            {semester.date}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section
                className="school-year-card"
                aria-labelledby="important-dates-title"
            >
                <h2 id="important-dates-title">
                    Najważniejsze terminy
                </h2>

                <div className="school-year-list">
                    {importantDates.map((item) => (
                        <div
                            className="school-year-row"
                            key={`${item.name}-${item.date}`}
                        >
                            <div className="school-year-label">
                                <span>{item.name}</span>

                                {item.description && (
                                    <small>{item.description}</small>
                                )}
                            </div>

                            <div className="school-year-date">
                                {item.date}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
}

export default SchoolYearPage;