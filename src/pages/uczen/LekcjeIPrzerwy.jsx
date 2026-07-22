const lessons = [
    ['1', '8:00 – 8:45', '5 min'],
    ['2', '8:50 – 9:35', '10 min'],
    ['3', '9:45 – 10:30', '10 min'],
    ['4', '10:40 – 11:25', '10 min'],
    ['5', '11:35 – 12:20', '25 min'],
    ['6', '12:45 – 13:30', '10 min'],
    ['7', '13:40 – 14:25', '10 min'],
    ['8', '14:35 – 15:20', '5 min'],
    ['9', '15:25 – 16:10', '—'],
];

function LekcjeIPrzerwy() {
    return (
        <article className="student-page">
            <header>
                <h1>Lekcje i przerwy</h1>

                <p>
                    Czytelna tabela godzin lekcyjnych i długości przerw.
                </p>
            </header>

            <div className="table-card compact-margin">
                <table>
                    <thead>
                    <tr>
                        <th scope="col">Lekcja</th>
                        <th scope="col">Godziny</th>
                        <th scope="col">Przerwa</th>
                    </tr>
                    </thead>

                    <tbody>
                    {lessons.map((lesson) => (
                        <tr key={lesson[0]}>
                            <td>{lesson[0]}</td>
                            <td>{lesson[1]}</td>
                            <td>{lesson[2]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </article>
    );
}

export default LekcjeIPrzerwy;