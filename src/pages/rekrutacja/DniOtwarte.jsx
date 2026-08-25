import { Link } from 'react-router-dom';

export default function DniOtwarte() {
  return (
      <section className="page-wrap container article-page recruitment-page">
        <div className="page-header">
          <h1>Dni otwarte</h1>
        </div>

        <div className="article-layout">
          <article className="page-main-card">
            <p className="article-text open-days-lead">
              Nasze Dni Otwarte mają charakter personalizowany – każda edycja jest przygotowywana z myślą o uczniach jednej, konkretnej szkoły podstawowej.
              Dzięki temu możemy dostosować program spotkania do potrzeb i zainteresowań naszych gości,
              zapewniając im bardziej bezpośrednie poznanie liceum i jego oferty.
            </p>
            
            <p className="article-text">
              Dni Otwarte naszego liceum są doskonałą okazją, aby uczniowie klas
              ósmych mogli poznać szkołę od środka i przekonać się, jak wygląda
              codzienne życie naszej społeczności. Goście mogą zwiedzić zabytkowy
              budynek naszej szkoły, uczestniczyć w zajęciach oraz spotkać nauczycieli
              i uczniów, którzy z pasją tworzą wyjątkową atmosferę i dzielą się swoją
              wiedzą.
            </p>

            <p className="article-text">
              Przygotowane lekcje pokazują, że nauka może być ciekawa i pełna
              zaangażowania. Podczas zajęć z <strong>języka angielskiego </strong>
               ósmoklasiści biorą udział w interaktywnym quizie, sprawdzając swoją
              znajomość języka oraz wiedzę o krajach anglojęzycznych. <strong>Język
              polski</strong> staje się świetną okazją do utrwalenia najważniejszych
              lektur i zagadnień przed egzaminem ósmoklasisty.
            </p>

            <p className="article-text">
              Nie brakuje również efektownych doświadczeń. Na <strong>chemii </strong>
               uczestnicy wcielają się w rolę śledczych, poznając, jak analiza
              chemiczna pomaga w badaniu miejsca zbrodni. Z kolei <strong>biologia </strong>
               zachwyca wszystkich fascynującymi ciekawostkami o ludzkim ciele i jego
              niezwykłym funkcjonowaniu.
            </p>

            <p className="article-text">
              W czasie przerwy lunchowej odbywa się <strong>Speed Meeting</strong> –
              seria krótkich rozmów z uczniami naszego liceum, która jest doskonałą
              okazją do poznania szkoły z perspektywy jej uczniów oraz zadawania pytań
              o naukę, życie szkolne i codzienne funkcjonowanie naszej placówki.
            </p>

            <p className="article-text">
              Dziękujemy wszystkim ósmoklasistom za wspólnie spędzony czas i cieszymy
              się, że możemy zaprezentować nasze liceum w tak inspirujący sposób.
            </p>

            <section className="documents-note">
              <h2>Terminy</h2>
              <p>
                Dni otwarte organizowane są dla zainteresowanych szkół podstawowych.
                Terminy należy ustalać bezpośrednio z{' '}
                <Link className="open-days-contact-link" to="/kontakt">
                  sekretariatem liceum
                </Link>.
              </p>
            </section>
          </article>
        </div>
      </section>
  );
}
