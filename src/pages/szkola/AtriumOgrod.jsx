const atriumOgrodPage = {
    title: 'Kawiarenka, ATRIUM i ogród',
    lead: 'Wspólna przestrzeń',
    body: [
        'Kawiarenka, ATRIUM oraz ogród w czasie przerw, przed i po zajęciach lekcyjnych kształtują przyjazną infrastrukturę liceum. Tworzą przy tym bezstresowy klimat rozmów z profesorami, czasem warunki przyjacielskich spotkań skutecznie zastępując klasyczną formę konsultacji.',
        'Nagłośnienie muzyczne pomieszczeń komunikacyjnych w czasie przerw sprzyja znakomicie tej funkcji.',
    ],
    highlights: ['Atmosfera', 'Galeria wnętrz', 'Budowanie wizerunku'],

    layout: 'article',
    firstBlockHeading: false,

    galleryImages: [
        {
            src: `${import.meta.env.BASE_URL}atrium.png`,
            alt: 'Kawiarenka i atrium V Prywatnego Liceum Ogólnokształcącego w Krakowie',
            caption: 'Kawiarenka i atrium',
        },
        {
            src: `${import.meta.env.BASE_URL}ogrod-szkolny.png`,
            alt: 'Ogród V Prywatnego Liceum Ogólnokształcącego w Krakowie',
            caption: 'Ogród szkolny',
        },
    ],

    galleryAfterFirstParagraph: true,
};
export default atriumOgrodPage;