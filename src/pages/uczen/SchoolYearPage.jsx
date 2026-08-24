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

const semesterAssessmentGroups = [
    {
        title: "Semestr I",
        assessments: [
            {
                name: "Wystawianie ocen za I semestr",
                description:
                    "W przypadku ocen z historii dla maturzystów należy wystawić zagrożenia i oceny proponowane najpóźniej do 30 listopada.",
                date: "14 grudnia 2026",
            },
            {
                name: "Rada Pedagogiczna",
                date: "17 grudnia 2026",
            },
        ],
    },
    {
        title: "Semestr II",
        classGroups: [
            {
                title: "Klasy I–III",
                assessments: [
                    ["Zagrożenia i oceny przewidywane", "31 maja 2027"],
                    ["Ostateczne", "18 czerwca 2027"],
                    ["Rada Pedagogiczna", "21 czerwca 2027"],
                ],
            },
            {
                title: "Klasy IV",
                assessments: [
                    ["Zagrożenia i oceny przewidywane", "2 kwietnia 2027"],
                    ["Ostateczne", "23 kwietnia 2027"],
                    ["Rada Pedagogiczna", "26 kwietnia 2027"],
                ],
            },
        ],
    },
];

const importantDateGroups = [
    {
        title: "Semestr I",
        dates: [
    {
        name: "Rozpoczęcie Roku Szkolnego",
        date: "1 września 2026 (wt)",
    },
    {
        name: "Narodowe Czytanie – „Dziady”",
        date: "4 września 2026 (pt)",
    },
    {
        name: "Dzień Edukacji Narodowej",
        description: "dzień dyrektorski",
        date: "14 października 2026 (śr)",
    },
    {
        name: "Dzień Patronki Szkoły",
        date: "16 października 2026 (pt)",
    },
    {
        name: "Dzień Niepodległości i przerwa jesienna",
        description: "dwa dni dyrektorskie",
        date: "11–15 listopada 2026 (śr–nd)",
    },
    {
        name: "65. Sesja Naukowa",
        date: "20 grudnia 2026",
    },
    {
        name: "Szkolne kolędowanie i wigilia klasowe",
        date: "18 grudnia 2026 (pt)",
    },
    {
        name: "Przerwa świąteczna",
        description: "poniedziałek i wtorek – dni dyrektorskie",
        date: "21 grudnia 2026 – 1 stycznia 2027",
    },
    {
        name: "Trzech Króli",
        description: "dzień wolny",
        date: "6 stycznia 2027 (śr)",
    },
        ],
    },
    {
        title: "Semestr II",
        dates: [
    {
        name: "Ferie zimowe",
        description: "województwo małopolskie",
        date: "15–28 lutego 2027",
    },
    {
        name: "Dzień Języka Angielskiego",
        date: "20 marca 2027",
    },
    {
        name: "Przerwa wielkanocna",
        date: "25–30 marca 2027",
    },
    {
        name: "Zakończenie Roku Maturzystów",
        date: "30 kwietnia 2027",
    },
    {
        name: "Konstytucja 3 maja",
        date: "3 maja 2027 (pon)",
    },
    {
        name: "Dni dyrektorskie na czas matur",
        date: "4–7 maja 2027 (wt–pt)",
    },
    {
        name: "Boże Ciało",
        description: "plus dzień dyrektorski",
        date: "27–28 maja 2027 (czw–pt)",
    },
    {
        name: "66. Sesja Naukowa",
        date: "20 czerwca 2027",
    },
    {
        name: "Zakończenie Roku Szkolnego",
        date: "25 czerwca 2027",
    },
    {
        name: "Ferie letnie",
        date: "26 czerwca – 31 sierpnia 2027",
    },
        ],
    },
];

const parentMeetings = [
    {
        name: "Zebranie z rodzicami klas I–IV",
        date: "7–11 września 2026 (wybrany dzień)",
    },
    {
        name: "Zebranie z rodzicami klas I–IV",
        date: "11–15 stycznia 2027 (wybrany dzień)",
    },
    {
        name: "Konsultacje z rodzicami maturzystów",
        date: "1–3 kwietnia 2027 (wybrany dzień)",
    },
    {
        name: "Zebranie z rodzicami uczniów klas I–III",
        date: "31 maja – 4 czerwca 2027 (wybrany dzień)",
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

                <p className="section-intro-card">
                    Najważniejsze informacje dotyczące organizacji roku szkolnego
                    2026–2027.
                </p>

                <a
                    href={`${import.meta.env.BASE_URL}dokumenty/kalendarz-roku-szkolnego-2026-2027.pdf`}
                    download
                    className="document-download-button"
                >
                    Kalendarz roku szkolnego (PDF)
                </a>
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

                <div className="semester-groups">
                    {importantDateGroups.map((group) => (
                        <section className="semester-group" key={group.title}>
                            <h3>{group.title}</h3>

                            <div className="school-year-list">
                                {group.dates.map((item) => (
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
                    ))}
                </div>

                <div className="semester-assessment-groups">
                    {semesterAssessmentGroups.map((group) => (
                        <section className="semester-assessment-group" key={group.title}>
                            <h3>{group.title}</h3>

                            {group.assessments && (
                                <div className="school-year-list">
                                    {group.assessments.map((assessment) => (
                                        <div
                                            className="school-year-row"
                                            key={assessment.name}
                                        >
                                            <div className="school-year-label">
                                                <span>{assessment.name}</span>
                                                {assessment.description && (
                                                    <small>{assessment.description}</small>
                                                )}
                                            </div>

                                            <div className="school-year-date">
                                                {assessment.date}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {group.classGroups && (
                                <div className="semester-assessment-grid">
                                    {group.classGroups.map((classGroup) => (
                                        <section
                                            className="semester-assessment-class"
                                            key={classGroup.title}
                                        >
                                            <h4>{classGroup.title}</h4>
                                            <dl>
                                                {classGroup.assessments.map(
                                                    ([name, date]) => (
                                                        <div key={name}>
                                                            <dt>{name}</dt>
                                                            <dd>{date}</dd>
                                                        </div>
                                                    )
                                                )}
                                            </dl>
                                        </section>
                                    ))}
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            </section>

            <section
                className="school-year-card"
                aria-labelledby="parent-meetings-title"
            >
                <h2 id="parent-meetings-title">
                    Zebrania i konsultacje z rodzicami
                </h2>

                <div className="school-year-list">
                    {parentMeetings.map((meeting) => (
                        <div
                            className="school-year-row"
                            key={`${meeting.name}-${meeting.date}`}
                        >
                            <div className="school-year-label">
                                {meeting.name}
                            </div>

                            <div className="school-year-date">
                                {meeting.date}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
}

export default SchoolYearPage;
