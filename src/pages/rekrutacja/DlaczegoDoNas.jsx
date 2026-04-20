const reasons = [
  'eliminujemy stres,',
  'kształtujemy systematyczność,',
  'usuwamy braki i zaległości,',
  'umacniamy indywidualne zdolności i pasje,',
  'kształcimy umiejętność komunikacji społecznej,',
  'uczymy praktycznych zasad wystąpień publicznych,',
  'współtworzymy z każdym uczniem jego dalszą przyszłość edukacyjną.',
];

export default function DlaczegoDoNas() {
  return (
    <section className="page-wrap container">
      <div className="page-header">
        <span className="pill soft">Rekrutacja</span>
        <h1>Dlaczego do nas?</h1>
        <p>
          Bo doskonale wiemy, jaka ma być współczesna szkoła i jakiej szkoły oczekują uczniowie,
          rodzice oraz instytucje, w których nasi absolwenci będą realizować swoje dalsze plany.
        </p>
      </div>

      <div className="page-layout">
        <article className="page-main-card">
          <p>
            Przede wszystkim pomagamy w osiąganiu osobistych zamierzeń naszych uczniów, które
            szczególnie, w pozytywnym tego słowa znaczeniu, uwydatniają się przy podejmowaniu nauki
            w nowym środowisku.
          </p>

          <h2>Aby decyzje w tej mierze okazały się skuteczne:</h2>
          <ul className="check-list compact-margin">
            {reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>

          <p>
            Zgłębiając nasze zasady kształcenia, zauważysz, że tylko z nami można odnaleźć radość
            zdobywania wiedzy oraz odzyskać albo umocnić poczucie własnej wartości.
          </p>

          <p>
            Nasze doświadczenie w nauczaniu dowodzi, że nie ma uczniów słabych, są jedynie źle
            prowadzeni, niemotywowani i pozostawiani sami sobie z trudnościami oraz bezradnością.
            W naszym liceum wystarczy Twoja dobra wola, a do nas należy wspieranie Cię nawet w
            najbardziej wymagających sytuacjach. Właśnie w tym widzimy nasz sukces, a Twoja radość
            jest również naszą radością.
          </p>

          <p>
            To podejście odróżnia nas od innych szkół i sprawia, że warto wykorzystać szansę na
            naukę w miejscu, które naprawdę towarzyszy uczniowi w rozwoju.
          </p>
        </article>

        <aside className="page-sidebar">
          <div className="sidebar-card">
            <h3>Co nas wyróżnia</h3>
            <ul>
              <li>Indywidualne podejście do ucznia</li>
              <li>Wsparcie w nauce i rozwoju</li>
              <li>Budowanie pewności siebie</li>
            </ul>
          </div>

          <div className="sidebar-card">
            <h3>Dane szkoły</h3>
            <p>V Prywatne Liceum Ogólnokształcące w Krakowie</p>
            <p>ul. Smoleńsk 14, 31-112 Kraków</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
