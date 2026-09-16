<?php
defined('_JEXEC') or die;

use Joomla\CMS\Helper\ModuleHelper;

$homePositions = ['home-updates', 'home-values', 'home-patron', 'home-students', 'home-links'];
$useHomeModules = true;

foreach ($homePositions as $homePosition) {
    if (!ModuleHelper::getModules($homePosition)) {
        $useHomeModules = false;
        break;
    }
}
?>
<?php if ($useHomeModules) : ?>
<section class="hero">
  <div class="container home-hero">
    <jdoc:include type="modules" name="home-values" style="none" />
    <jdoc:include type="modules" name="home-patron" style="none" />
  </div>
</section>
<section class="section container home-media-layout">
  <jdoc:include type="modules" name="home-students" style="none" />
  <jdoc:include type="modules" name="home-updates" style="none" />
</section>
<jdoc:include type="modules" name="home-links" style="none" />
<?php else : ?>
<section class="home-updates"><div class="container home-updates-grid">
<a class="home-card news" href="#"><img src="<?= $templateUri ?>/images/narodowe-czytanie-2026.png" alt=""><span><b>Aktualności</b><strong>Narodowe Czytanie 2026</strong><small>5 września 2026 · Kraków</small><em>Aktualności →</em></span></a>
<a class="home-card instagram" href="https://www.instagram.com/vplo.krk/" target="_blank" rel="noopener"><b>Instagram</b><h2>@vplo.krk</h2><p>Zdjęcia, wydarzenia i codzienność naszej szkoły.</p><strong>Najnowsze posty →</strong></a>
<a class="home-card tiktok" href="https://www.tiktok.com/@vplo.krakow" target="_blank" rel="noopener"><b>TikTok</b><h2>@vplo.krakow</h2><p>Krótkie filmy i najnowsze wiadomości z życia liceum.</p><strong>TikTok →</strong></a>
</div></section>
<section class="container home-hero"><div class="home-values"><div class="values-title">Wiedzieć więcej, rozumieć głębiej, wybierać odpowiedzialnie, działać dla innych.<i>Przesłanie patronki</i></div><div class="values-graphic"><img src="<?= $templateUri ?>/images/wartosci-szkoly-vplo.png" alt="Wartości szkoły na tle siedziby liceum"><button data-value="one">Indywidualne podejście<small>Więcej</small></button><button data-value="two">Nowoczesna edukacja<small>Więcej</small></button><button data-value="three">Dobra atmosfera<small>Więcej</small></button><p data-popup="one">Dostrzegamy mocne strony, potrzeby i aspiracje każdego ucznia. Bliskie relacje z nauczycielami pomagają odkrywać własny potencjał.</p><p data-popup="two">Łączymy solidną wiedzę z rozwijaniem samodzielnego i krytycznego myślenia.</p><p data-popup="three">Tworzymy bezpieczną szkołę opartą na szacunku, zaufaniu i dialogu.</p></div><div class="home-contact"><a href="https://www.google.com/maps?q=Smole%C5%84sk+14,+Krak%C3%B3w">⌖ ul. Smoleńsk 14, 31-112 Kraków</a><a href="tel:+48124229202">☎ +48 12 422 92 02</a><a href="mailto:dyrektor@vp-lo.krakow.pl">✉ dyrektor@vp-lo.krakow.pl</a></div></div>
<aside class="home-patron"><h2>V Prywatne Liceum Ogólnokształcące<span>w Krakowie im. Królowej Jadwigi</span></h2><div><img src="<?= $templateUri ?>/images/jadwiga-bacciarelli.jpg" alt="Królowa Jadwiga"><p><b>Patronka szkoły</b><strong>Królowa Jadwiga</strong>Symbol mądrości,<br>odpowiedzialności,<br>odwagi i szacunku</p></div></aside></section>
<section class="container home-media"><b>VPLO oczami uczniów</b><video controls preload="metadata"><source src="<?= $templateUri ?>/images/vplo-film.mp4" type="video/mp4"></video><video controls preload="metadata"><source src="<?= $templateUri ?>/images/vplo-film-2.mp4" type="video/mp4"></video></section>
<section class="container home-links"><b>LINKI</b><a href="https://www.gov.pl/web/edukacja"><img src="<?= $templateUri ?>/images/men-logo.png" alt="Ministerstwo Edukacji"></a><a href="https://www.kuratorium.krakow.pl/"><img src="<?= $templateUri ?>/images/kuratorium-logo.jpg" alt="Kuratorium Oświaty"></a><a href="#"><img src="<?= $templateUri ?>/images/bip-logo.png" alt="BIP"></a></section>
<?php endif; ?>
