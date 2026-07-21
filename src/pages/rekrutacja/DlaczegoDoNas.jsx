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
      <section className="page-wrap container article-page recruitment-page">
        <div className="article-header-grid">
          <div className="page-header">
            <h1>Dlaczego do nas?</h1>

            <p className="recruitment-intro-card">
              Bo doskonale wiemy, jaka ma być współczesna szkoła i jakiej szkoły
              oczekują uczniowie, rodzice oraz instytucje, w których nasi absolwenci
              będą realizować swoje dalsze plany.
            </p>
          </div>

          <aside className="article-highlights">
            <h2>Co nas wyróżnia</h2>

            <ul>
              <li>Indywidualne podejście do ucznia</li>
              <li>Wsparcie w nauce i rozwoju</li>
              <li>Budowanie pewności siebie</li>
            </ul>
          </aside>
        </div>

        <div className="article-layout">
          <article className="page-main-card">
            <p className="article-text">
              Przede wszystkim pomagamy w osiąganiu osobistych zamierzeń naszych
              uczniów, które szczególnie, w pozytywnym tego słowa znaczeniu,
              uwydatniają się przy podejmowaniu nauki w nowym środowisku.
            </p>

            <h2 className="article-section-title">
              Aby decyzje w tej mierze okazały się skuteczne:
            </h2>

            <ul className="recruitment-reasons">
              {reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
              ))}
            </ul>

            <p className="article-text">
              Zgłębiając nasze zasady kształcenia, zauważysz, że tylko z nami można
              odnaleźć radość zdobywania wiedzy oraz odzyskać albo umocnić poczucie
              własnej wartości.
            </p>

            <p className="article-text">
              Nasze doświadczenie w nauczaniu dowodzi, że nie ma uczniów słabych,
              są jedynie źle prowadzeni, niemotywowani i pozostawiani sami sobie
              z trudnościami oraz bezradnością. W naszym liceum wystarczy Twoja
              dobra wola, a do nas należy wspieranie Cię nawet w najbardziej
              wymagających sytuacjach. Właśnie w tym widzimy nasz sukces,
              a Twoja radość jest również naszą radością.
            </p>

            <p className="article-text">
              To podejście odróżnia nas od innych szkół i sprawia, że warto
              wykorzystać szansę na naukę w miejscu, które naprawdę towarzyszy
              uczniowi w rozwoju.
            </p>

          </article>
        </div>
      </section>
  );
}