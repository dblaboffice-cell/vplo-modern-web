import { useState } from 'react';
import { ArrowDownToLine, BookOpen, CalendarDays, FileText, MessageCircle, Sparkles } from 'lucide-react';

const articles = [
  {
    id: 'multiculturalism-british-literature-art',
    title: 'MULTICULTURALISM OF BRITISH LITERATURE AND ART',
    cover: <>Multiculturalism<br />in British<br />Art</>,
    category: 'Literature & art',
    month: 'Listopad 2026',
    authors: 'Borys Borysiewicz (4A), Patrycja Renke (4C), Edward Oczko (4C), Lena Regulska (4D), Jeremi Kowalski (4D),',
    pdf: `${import.meta.env.BASE_URL}english-corner/multiculturalism-british-literature-art.pdf`,
    intro: <>Jak kultura, migracje i różnorodne doświadczenia kształtują współczesną Wielką Brytanię? Uczniowie przyglądają się ich śladom w literaturze, sztuce i architekturze.</>,
    paragraphs: [
      'Multiculturalism plays an important role in modern British society. Over the centuries, England and later the United Kingdom have been influenced by people from different countries and cultures.',
      'It began in 43 AD with the Roman conquest, which brought soldiers and traders from North Africa and Syria. Later, waves of Angles, Saxons, Vikings, and Normans shaped the medieval culture. The British Empire further connected the island to the world, but the defining transformation came after World War II. The subsequent migration from South Asia and North Africa helped rebuild the nation.',
      'Today, the very core of this diversity can be seen in British literature and art, as well as food, music and everyday life. Although multiculturalism brings many benefits, it also creates challenges related to integration, racism and national identity.',
      'There are many artists who have reshaped and profoundly influenced the traditional English culture, thus creating new perspectives and various distinctive voices.',
      'One of the most remarkable writers who redefined the British literary landscape is Zadie Smith. She focuses on cultural differences, immigrant families and generational conflicts. The novelist has been hailed as the voice of the generation, a modern-day Charles Dickens and a great chronicler of modern times.',
      'Ben Okri approaches multiculturalism as the space in which he combines African traditions, spirituality and modern literary styles, highlighting the importance of cultural heritage.',
      'Andrea Levy explores racism, prejudice and the difficulties faced by Caribbean immigrants in Britain.',
      'Moniza Alvi focuses on cultural identity and belonging, showing the challenges of living between British and Pakistani cultures.',
      'British contemporary art also explores the themes of migration, diaspora and multinationalism. From among most prominent artists conveying such notions one should mention Lubaina Himid. She explores African identity, history, and the experiences of Black people in her paintings. Her work draws attention to racism and the exclusion of African cultures from art history.',
      'Another remarkable artist was Zaha Hadid, an architect from Iraq who combined Arab cultural influences with modern, futuristic architectural forms. She expanded the realm of possibilities in architecture, and her achievements were recognised in 2004 when she was awarded the Pritzker Architecture Prize (considered to be the Nobel Prize of architecture).',
      'Multiculturalism is also the root of the unique language of visual art created by Anish Kapoor. The sculptor was born in India but is based in London. He marries the geometric rigour of minimalism of the West with the spiritual depth of India. His characteristic use of intense, raw pigment is directly associated with Hindu rituals and the colourful spice markets of India but is also related to the abstract colour-field painters of the West. He does not use folklore but rather universal, frequently biomorphic, forms which are used to explore the concept of the “void” in relation to Eastern philosophies and European phenomenology. His art is thus of a truly transnational nature and of profound significance.',
    ],
    glossary: [
      ['multiculturalism', 'współistnienie wielu kultur w jednym społeczeństwie'],
      ['diaspora', 'społeczność żyjąca poza swoją pierwotną ojczyzną'],
      ['cultural heritage', 'dziedzictwo kulturowe przekazywane między pokoleniami'],
      ['rigour', 'precyzja i dyscyplina w podejściu do pracy lub sztuki'],
      ['phenomenology', 'nurt filozoficzny badający ludzkie doświadczenie'],
    ],
  },
  {
    id: 'teenager-slang-usa-england',
    title: 'Teenager Slang in the USA and England',
    cover: <>Teenager<br />Slang</>,
    category: 'Language & culture',
    month: 'Październik 2026',
    authors: 'Mikołaj Kowalski (4D) i Wiktor Leśniak (4D)',
    intro: <>Dlaczego słowa takie jak <b>no cap</b>, <b>slay</b>, <b>innit</b> czy <b>peng</b> tak szybko trafiają z mediów społecznościowych do codziennych rozmów? Autorzy przyglądają się językowi młodych ludzi po obu stronach Atlantyku.</>,
    pdf: `${import.meta.env.BASE_URL}english-corner/teenager-slang-usa-england.pdf`,
    paragraphs: [
      'Do you understand English lessons but get confused by comments online? You are not alone! Young people often use slang: informal words and phrases that you might not find in your school textbook. Slang is especially popular among teenagers, who use it to communicate with friends, make jokes and express their feelings in a more relaxed way.',
      'In the USA, “no cap” means “seriously” or “I’m not lying”. For example, “This game is amazing, no cap” means someone really likes a game. Another popular word is “slay”. People use it to say that someone looks great or has done something very well. You can also hear words such as “bro”, “sus” or “vibe” in conversations and online posts. Some of these expressions become popular because of American music, films, YouTubers and social media.',
      'In England, you might hear “innit”. It comes from “isn’t it” and is often added at the end of a sentence. There is also “peng”, which can describe something great or an attractive person. British teenagers also use expressions such as “mate” when talking to their friends. However, not every teenager uses these words. It depends on where they live, their age and who their friends are. Slang can be very different between different parts of the UK.',
      'Social media has had a huge influence on the way teenagers use language. Thanks to TikTok, Instagram, YouTube and other platforms, slang travels very quickly between countries. American and British teenagers can use the same expressions, even when they live far apart. A word can become popular all over the world within just a few weeks. Music, TV series, video games and celebrities also help new expressions become part of everyday language.',
      'Slang can even influence people who do not usually use it. Teenagers sometimes start using certain words without thinking about where they came from. Some expressions become so popular that adults begin to use them too. On the other hand, slang changes very quickly. A word that sounds cool today might sound strange or old-fashioned to teenagers in a few years. This is one of the reasons why language is constantly changing.',
      'Learning slang is fun because it helps us understand jokes, videos, songs and everyday conversations. It can also make communication feel more natural and friendly. Still, we should not use slang everywhere. It is fine when chatting with friends or writing informal messages, but in school, formal emails or important situations, standard English is usually a better choice.',
      'In the end, slang is more than just a collection of strange words. It shows how young people communicate and how quickly language can change. If you understand some common slang, it is easier to understand what teenagers in English-speaking countries are really saying, both online and in real life.',
    ],
    glossary: [
      ['no cap', 'serio; nie kłamię'], ['slay', 'zrobić coś świetnie; wyglądać świetnie'], ['innit', 'prawda? (od „isn’t it?”)'], ['peng', 'świetny; atrakcyjny'], ['mate', 'kolega; kumpel'],
    ],
  },
];

function ArticleCard({ article, isLatest, onRead }) {
  return <article className="english-corner-featured">
    <div className={`english-corner-cover${isLatest ? ' english-corner-cover-multiculturalism' : ''}`} aria-hidden="true">
      <span className="english-corner-cover-label">English Corner</span>
      <strong>{article.cover}</strong>
      <div className="english-corner-stickers"><i>{isLatest ? 'voices' : 'no cap'}</i><i>{isLatest ? 'culture' : 'innit?'}</i><i>{isLatest ? 'art' : 'slay!'}</i></div>
      <small>{isLatest ? 'Many stories × one Britain' : 'USA × England'}</small>
    </div>
    <div className="english-corner-featured-copy">
      <div className="english-corner-meta"><span>{article.category}</span><time><CalendarDays size={15} /> {article.month}</time></div>
      <h3>{article.title}</h3>
      <p>{article.intro}</p>
      <p className="english-corner-byline">By {article.authors}</p>
      <div className="english-corner-actions">
        <button type="button" onClick={onRead}><FileText size={18} /> Artykuł</button>
        {article.pdf && <a href={article.pdf} target="_blank" rel="noreferrer"><ArrowDownToLine size={18} /> PDF</a>}
      </div>
    </div>
  </article>;
}

function ReadingArticle({ article, onClose }) {
  return <article className="english-corner-reading" aria-label={`Artykuł: ${article.title}`}>
    <header><span><MessageCircle size={16} /> Read in English</span><h2>{article.title}</h2><p>By {article.authors}</p></header>
    <div className="english-corner-reading-grid">
      <div className="english-corner-text">{article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <aside className="english-corner-glossary"><span>Quick glossary</span><h3>Words to explore</h3><dl>{article.glossary.map(([word, meaning]) => <div key={word}><dt>{word}</dt><dd>{meaning}</dd></div>)}</dl><small>Explore these words while reading the article.</small></aside>
    </div>
    <footer><button type="button" onClick={onClose}><FileText size={17} /> Powrót do artykułów</button>{article.pdf && <a href={article.pdf} target="_blank" rel="noreferrer"><FileText size={17} /> Artykuł w PDF</a>}</footer>
  </article>;
}

export default function EnglishCorner() {
  const [openArticleId, setOpenArticleId] = useState(null);
  const openArticle = articles.find(({ id }) => id === openArticleId);
  const [latestArticle, octoberArticle] = articles;

  return <section className="english-corner-page page-wrap container">
    <header className="english-corner-hero">
      <div>
        <span className="english-corner-kicker"><Sparkles size={15} /> English Corner</span>
        <h1>Words that travel<br /><em>Stories that stay</em></h1>
        <p>Zapraszamy do lektury tekstów tworzonych przez uczniów: o języku, kulturze i świecie widzianym po angielsku.</p>
      </div>
      <aside className="english-corner-hero-aside">
        <img className="english-corner-hero-visual" src={`${import.meta.env.BASE_URL}english-corner/english-corner-london.png`} alt="English Corner - nauka języka angielskiego z motywami Londynu" />
        <div className="english-corner-hero-note"><BookOpen size={25} /><strong>Nowy artykuł co miesiąc</strong></div>
      </aside>
    </header>

    <div className="english-corner-heading"><div><span>Issue 02</span><h2>Najnowszy artykuł</h2></div></div>
    <ArticleCard article={latestArticle} isLatest onRead={() => setOpenArticleId(latestArticle.id)} />
    {openArticle?.id === latestArticle.id && <ReadingArticle article={openArticle} onClose={() => setOpenArticleId(null)} />}

    <div className="english-corner-heading english-corner-archive-heading"><div><span>Issue 01</span><h2>Poprzedni artykuł</h2></div></div>
    <ArticleCard article={octoberArticle} onRead={() => setOpenArticleId(octoberArticle.id)} />
    {openArticle?.id === octoberArticle.id && <ReadingArticle article={openArticle} onClose={() => setOpenArticleId(null)} />}
  </section>;
}
