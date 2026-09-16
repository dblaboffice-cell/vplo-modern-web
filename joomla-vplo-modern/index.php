<?php
/** @license GNU General Public License version 2 or later */
defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\Uri\Uri;

$app = Factory::getApplication();
$wa = $this->getWebAssetManager();
$wa->registerAndUseStyle('tpl.vplo-modern', 'media/templates/site/tpl_vplo_modern/css/template.css');
$wa->registerAndUseScript('tpl.vplo-modern', 'media/templates/site/tpl_vplo_modern/js/template.js', [], ['defer' => true]);
$wa->registerAndUseStyle('tpl.vplo-modern-navigation', 'media/templates/site/tpl_vplo_modern/css/navigation-1.4.0.css');
$wa->registerAndUseScript('tpl.vplo-modern-navigation', 'media/templates/site/tpl_vplo_modern/js/navigation-1.4.0.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-navigation-fix', 'media/templates/site/tpl_vplo_modern/js/navigation-fix-1.4.1.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-navigation-mobile-fix', 'media/templates/site/tpl_vplo_modern/js/navigation-mobile-fix-1.4.2.js', [], ['defer' => true]);
$wa->registerAndUseStyle('tpl.vplo-modern-home', 'media/templates/site/tpl_vplo_modern/css/home-1.5.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-home-react', 'media/templates/site/tpl_vplo_modern/css/home-react-1.5.3.css');
$wa->registerAndUseStyle('tpl.vplo-modern-home-layout', 'media/templates/site/tpl_vplo_modern/css/home-layout-1.5.4.css');
$wa->registerAndUseScript('tpl.vplo-modern-home', 'media/templates/site/tpl_vplo_modern/js/home-1.5.0.js', [], ['defer' => true]);
$templateUri = Uri::root(true) . '/media/templates/site/tpl_vplo_modern';
$activeItem = $app->getMenu()->getActive();
$defaultItem = $app->getMenu()->getDefault();
$isHome = $activeItem && $defaultItem && (int) $activeItem->id === (int) $defaultItem->id;
$banner = $this->params->get('banner_image', 'images/smolensk-siedziba.png');
if ($banner && !str_starts_with($banner, 'http') && !str_starts_with($banner, '/')) {
    $banner = $templateUri . '/' . ltrim($banner, '/');
}
?>
<!DOCTYPE html>
<html lang="<?= $this->language ?>" dir="<?= $this->direction ?>">
<head>
  <jdoc:include type="head" />
</head>
<body class="site <?= htmlspecialchars($app->getInput()->getCmd('option', ''), ENT_QUOTES, 'UTF-8') ?>">
  <div class="app-shell">
    <header class="site-header">
      <div class="container topbar">
        <a href="<?= Uri::root() ?>" class="brand" aria-label="Strona główna V Prywatnego Liceum Ogólnokształcącego">
          <div class="brand-badge brand-badge-logo">
            <img src="<?= $templateUri ?>/images/logo-vplo.png" alt="Logo VP-LO Kraków" class="brand-logo">
          </div>
          <div class="brand-copy">
            <div class="brand-title"><span class="brand-title-school">V Prywatne Liceum Ogólnokształcące w&nbsp;Krakowie</span> <span class="brand-title-patron">im.&nbsp;Królowej Jadwigi</span></div>
            <div class="brand-subtitle">Szkoła z tradycją, kameralną atmosferą i&nbsp;nowoczesnym podejściem do edukacji</div>
            <div class="brand-meta">Rok założenia 1992</div>
          </div>
        </a>
        <figure class="header-banner">
          <img src="<?= htmlspecialchars($banner, ENT_QUOTES, 'UTF-8') ?>" alt="Siedziba V Prywatnego Liceum Ogólnokształcącego w Krakowie">
        </figure>
        <div class="header-actions">
          <jdoc:include type="modules" name="header-actions" style="none" />
          <button class="menu-btn" type="button" aria-controls="mobile-navigation" aria-expanded="false" aria-label="Otwórz menu"><span></span><span></span><span></span></button>
        </div>
      </div>
      <nav class="container desktop-nav" aria-label="Główna nawigacja">
        <jdoc:include type="modules" name="main-menu" style="none" />
        <a class="vulcan-nav-link" href="https://uonetplus.vulcan.net.pl/krakow/" target="_blank" rel="noopener noreferrer" aria-label="Zaloguj się do Dziennika VULCAN"><img src="<?= $templateUri ?>/images/vulcan-logo.png" alt="Dziennik VULCAN" class="vulcan-nav-logo"></a>
      </nav>
      <nav id="mobile-navigation" class="mobile-panel" aria-label="Menu mobilne" hidden><div class="container mobile-panel-inner"></div></nav>
    </header>
    <main class="site-main"><?php if ($isHome) { require __DIR__ . '/home.php'; } else { ?><jdoc:include type="message" /><jdoc:include type="component" /><?php } ?></main>
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-school"><jdoc:include type="modules" name="footer-school" style="none" /></div>
        <div class="footer-contact"><jdoc:include type="modules" name="footer-contact" style="none" /></div>
        <div class="footer-navigation"><jdoc:include type="modules" name="footer-nav" style="none" /></div>
      </div>
      <div class="container footer-credit"><jdoc:include type="modules" name="footer-credit" style="none" /></div>
    </footer>
  </div>
</body>
</html>
