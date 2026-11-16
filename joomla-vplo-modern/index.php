<?php
/** @license GNU General Public License version 2 or later */
defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\Uri\Uri;

$app = Factory::getApplication();
$wa = $this->getWebAssetManager();
$wa->registerAndUseStyle('tpl.vplo-modern', 'media/templates/site/tpl_vplo_modern/css/template.css');
$wa->registerAndUseScript('tpl.vplo-modern', 'media/templates/site/tpl_vplo_modern/js/template.js', [], ['defer' => true]);
$wa->registerAndUseStyle('tpl.vplo-modern-navigation', 'media/templates/site/tpl_vplo_modern/css/navigation-1.4.8.css');
$wa->registerAndUseScript('tpl.vplo-modern-navigation', 'media/templates/site/tpl_vplo_modern/js/navigation-1.4.0.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-navigation-fix', 'media/templates/site/tpl_vplo_modern/js/navigation-fix-1.4.1.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-navigation-school-group', 'media/templates/site/tpl_vplo_modern/js/navigation-school-group-1.0.19.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-navigation-mobile-fix', 'media/templates/site/tpl_vplo_modern/js/navigation-mobile-fix-1.4.5.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-navigation-icons', 'media/templates/site/tpl_vplo_modern/js/navigation-icons-1.4.5.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-navigation-destinations', 'media/templates/site/tpl_vplo_modern/js/navigation-destinations-1.0.0.js', [], ['defer' => true]);
$wa->registerAndUseStyle('tpl.vplo-modern-content-pages', 'media/templates/site/tpl_vplo_modern/css/content-pages-1.0.27.css');
$wa->registerAndUseStyle('tpl.vplo-modern-english-corner-managed', 'media/templates/site/tpl_vplo_modern/css/english-corner-managed-1.0.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-news', 'media/templates/site/tpl_vplo_modern/css/news-1.0.0.css?v=20261020b');
$wa->registerAndUseStyle('tpl.vplo-modern-students-medal', 'media/templates/site/tpl_vplo_modern/css/students-medal-1.0.3.css?v=20261027c');
$wa->registerAndUseStyle('tpl.vplo-modern-gallery', 'media/templates/site/tpl_vplo_modern/css/gallery-1.0.0.css?v=20261020b');
$wa->registerAndUseScript('tpl.vplo-modern-gallery', 'media/templates/site/tpl_vplo_modern/js/gallery-1.0.0.js', [], ['defer' => true]);
$wa->registerAndUseStyle('tpl.vplo-modern-recruitment', 'media/templates/site/tpl_vplo_modern/css/recruitment-1.0.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-recruitment-parity', 'media/templates/site/tpl_vplo_modern/css/recruitment-1.0.1.css');
$wa->registerAndUseStyle('tpl.vplo-modern-recruitment-process', 'media/templates/site/tpl_vplo_modern/css/recruitment-process-1.0.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-recruitment-followups', 'media/templates/site/tpl_vplo_modern/css/recruitment-followups-1.0.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-recruitment-tooltips', 'media/templates/site/tpl_vplo_modern/css/recruitment-tooltips-1.0.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-admission-form', 'media/templates/site/tpl_vplo_modern/css/admission-form-1.0.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-profile-planning', 'media/templates/site/tpl_vplo_modern/css/profile-planning-1.0.0.css');
$wa->registerAndUseScript('tpl.vplo-modern-content-pages-accordions', 'media/templates/site/tpl_vplo_modern/js/content-pages-accordions-1.0.1.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-content-pages-english-corner', 'media/templates/site/tpl_vplo_modern/js/content-pages-english-corner-1.0.3.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-extensions-path-builder', 'media/templates/site/tpl_vplo_modern/js/extensions-path-builder-1.0.1.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-profile-planning', 'media/templates/site/tpl_vplo_modern/js/profile-planning-1.0.0.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-recruitment-application', 'media/templates/site/tpl_vplo_modern/js/recruitment-application-1.0.1.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-recruitment-tooltips', 'media/templates/site/tpl_vplo_modern/js/recruitment-tooltips-1.0.0.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-admission-form', 'media/templates/site/tpl_vplo_modern/js/admission-form-1.0.0.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-textbooks-pdf', 'media/templates/site/tpl_vplo_modern/js/textbooks-pdf-1.0.0.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-school-year-pdf', 'media/templates/site/tpl_vplo_modern/js/school-year-pdf-1.0.0.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-matura-countdown', 'media/templates/site/tpl_vplo_modern/js/matura-countdown-1.0.0.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-matura-schedule-tabs', 'media/templates/site/tpl_vplo_modern/js/matura-schedule-tabs-1.0.0.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-content-lightbox', 'media/templates/site/tpl_vplo_modern/js/content-lightbox-1.0.0.js', [], ['defer' => true]);
$wa->registerAndUseStyle('tpl.vplo-modern-home', 'media/templates/site/tpl_vplo_modern/css/home-1.5.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-home-react', 'media/templates/site/tpl_vplo_modern/css/home-react-1.5.3.css');
$wa->registerAndUseStyle('tpl.vplo-modern-home-layout', 'media/templates/site/tpl_vplo_modern/css/home-layout-1.5.4.css');
$wa->registerAndUseStyle('tpl.vplo-modern-home-current', 'media/templates/site/tpl_vplo_modern/css/home-current-1.7.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-home-sections', 'media/templates/site/tpl_vplo_modern/css/home-sections-1.0.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-header-footer', 'media/templates/site/tpl_vplo_modern/css/header-footer-1.7.1.css');
$wa->registerAndUseStyle('tpl.vplo-modern-subpage-banners', 'media/templates/site/tpl_vplo_modern/css/subpage-banners-1.0.0.css?v=20261031a');
$wa->registerAndUseStyle('tpl.vplo-modern-teacher-resources', 'media/templates/site/tpl_vplo_modern/css/teacher-resources-1.0.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-secretariat-resources', 'media/templates/site/tpl_vplo_modern/css/secretariat-resources-1.0.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-navigation-hover', 'media/templates/site/tpl_vplo_modern/css/navigation-hover-1.0.1.css');
$wa->registerAndUseStyle('tpl.vplo-modern-navigation-destinations', 'media/templates/site/tpl_vplo_modern/css/navigation-destinations-1.0.0.css');
$wa->registerAndUseStyle('tpl.vplo-modern-visual-parity', 'media/templates/site/tpl_vplo_modern/css/visual-parity-1.7.63.css?v=2');
$wa->registerAndUseScript('tpl.vplo-modern-navigation-hover', 'media/templates/site/tpl_vplo_modern/js/navigation-hover-1.0.2.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-header-banner', 'media/templates/site/tpl_vplo_modern/js/header-banner-1.0.0.js?v=20261031a', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-home', 'media/templates/site/tpl_vplo_modern/js/home-values-1.1.2.js', [], ['defer' => true]);
$wa->registerAndUseScript('tpl.vplo-modern-home-sections', 'media/templates/site/tpl_vplo_modern/js/home-sections-1.0.3.js', [], ['defer' => true]);
$templateUri = Uri::root(true) . '/media/templates/site/tpl_vplo_modern';
$activeItem = $app->getMenu()->getActive();
$defaultItem = $app->getMenu()->getDefault();
$hasHeaderBanner = $this->countModules('header-banner') > 0;
$hasFooterContent = $this->countModules('footer-content') > 0;
$hasContactContent = $this->countModules('contact-content') > 0;
$isContact = $activeItem && $activeItem->alias === 'kontakt';
$requestPath = trim(Uri::getInstance()->getPath(), '/');
$siteBasePath = trim(Uri::root(true), '/');
if ($siteBasePath !== '' && str_starts_with($requestPath, $siteBasePath . '/')) {
    $requestPath = substr($requestPath, strlen($siteBasePath) + 1);
}
$requestPath = trim((string) preg_replace('~^index\.php/?~i', '', $requestPath), '/');
if ($requestPath === '' && $activeItem) {
    $requestPath = trim((string) ($activeItem->route ?? ''), '/');
}
$defaultRoute = trim((string) ($defaultItem->route ?? ''), '/');
$isHome = $activeItem && $defaultItem
    && (int) $activeItem->id === (int) $defaultItem->id
    && ($requestPath === '' || $requestPath === $defaultRoute);
if ($isHome) {
    $this->setTitle('V Prywatne Liceum Ogólnokształcące w Krakowie im. Królowej Jadwigi');
}
$isAdmissionForm = str_starts_with($requestPath, 'rekrutacja/formularz-przyjecia-ucznia');
$isTeacherResources = $requestPath === 'materialy-kadra';
$isSecretariatResources = $requestPath === 'sekretariat';
$teacherState = null;
if ($isTeacherResources) {
    require_once __DIR__ . '/teacher-resources.php';
    $teacherState = vploTeacherHandle($app, $this->params);
}
$secretariatState = null;
if ($isSecretariatResources) {
    require_once __DIR__ . '/secretariat-resources.php';
    $secretariatState = vploSecretariatHandle($app, $this->params);
}
$bannerGroup = 'school';
if (str_starts_with($requestPath, 'szkola/infrastruktura')) {
    $bannerGroup = 'spaces';
} elseif (str_starts_with($requestPath, 'edukacja')) {
    $bannerGroup = 'education';
} elseif (str_starts_with($requestPath, 'rekrutacja')) {
    $bannerGroup = 'recruitment';
} elseif (str_starts_with($requestPath, 'uczen')) {
    $bannerGroup = 'student';
} elseif (str_starts_with($requestPath, 'aktualnosci') || str_starts_with($requestPath, 'galeria')) {
    $bannerGroup = 'events';
}
$allSubpageSlides = require __DIR__ . '/banner-slides.php';
$subpageSlides = !$isHome && !$isAdmissionForm ? $allSubpageSlides[$bannerGroup] : [];
$banner = $this->params->get('banner_image', 'images/smolensk-siedziba.png');
if ($banner && !str_starts_with($banner, 'http') && !str_starts_with($banner, '/')) {
    $banner = $templateUri . '/' . ltrim($banner, '/');
}
?>
<!DOCTYPE html>
<html lang="<?= $this->language ?>" dir="<?= $this->direction ?>">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="<?= htmlspecialchars($templateUri, ENT_QUOTES, 'UTF-8') ?>/images/logo-vplo.png?v=1.7.59">
  <?php if ($isTeacherResources || $isSecretariatResources) : ?><meta name="robots" content="noindex, nofollow"><?php endif; ?>
  <jdoc:include type="head" />
</head>
<body class="site <?= htmlspecialchars($app->getInput()->getCmd('option', ''), ENT_QUOTES, 'UTF-8') ?>">
  <div class="app-shell">
    <header class="site-header<?= !$isHome ? ' site-header-subpage' : '' ?>">
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
        <?php if ($subpageSlides) : ?>
          <figure class="header-banner header-banner-subpage" data-vplo-header-banner data-interval="5000" aria-label="Zdjęcia z życia liceum">
            <?php foreach ($subpageSlides as $slideIndex => [$file, $alt, $position, $fit]) :
              $slideSrc = $templateUri . '/images/banery/' . rawurlencode($file);
              $slideStyle = '--banner-image: url("' . $slideSrc . '"); --banner-position: ' . $position . '; --banner-fit: ' . $fit . ';';
            ?>
              <div class="header-banner-slide<?= $slideIndex === 0 ? ' is-active' : '' ?>" style="<?= htmlspecialchars($slideStyle, ENT_QUOTES, 'UTF-8') ?>"<?= $slideIndex > 0 ? ' hidden' : '' ?>>
                <img src="<?= htmlspecialchars($slideSrc, ENT_QUOTES, 'UTF-8') ?>" alt="<?= htmlspecialchars($alt, ENT_QUOTES, 'UTF-8') ?>" loading="<?= $slideIndex < 2 ? 'eager' : 'lazy' ?>" decoding="async">
              </div>
            <?php endforeach; ?>
          </figure>
        <?php elseif (!$isAdmissionForm && $hasHeaderBanner) : ?>
          <jdoc:include type="modules" name="header-banner" style="none" />
        <?php elseif (!$isAdmissionForm) : ?>
          <figure class="header-banner">
            <img src="<?= htmlspecialchars($banner, ENT_QUOTES, 'UTF-8') ?>" alt="Siedziba V Prywatnego Liceum Ogólnokształcącego w Krakowie">
          </figure>
        <?php endif; ?>
        <div class="header-actions">
          <jdoc:include type="modules" name="header-actions" style="none" />
          <button class="menu-btn" type="button" aria-controls="mobile-navigation" aria-expanded="false" aria-label="Otwórz menu"><span></span><span></span><span></span></button>
        </div>
      </div>
      <nav class="container desktop-nav" aria-label="Główna nawigacja">
        <jdoc:include type="modules" name="main-menu" style="none" />
        <a class="vulcan-nav-link" href="https://uonetplus.vulcan.net.pl/krakow/" target="_blank" rel="noopener noreferrer" aria-label="Zaloguj się do Dziennika VULCAN"><img src="<?= $templateUri ?>/images/vulcan-logo.png" alt="Dziennik VULCAN" class="vulcan-nav-logo"></a>
      </nav>
      <nav id="mobile-navigation" class="mobile-panel" aria-label="Menu mobilne" hidden>
        <div class="container mobile-panel-inner"></div>
        <a class="container mobile-vulcan-link" href="https://uonetplus.vulcan.net.pl/krakow/" target="_blank" rel="noopener noreferrer" aria-label="Zaloguj się do Dziennika VULCAN"><img src="<?= $templateUri ?>/images/vulcan-logo.png" alt="Dziennik VULCAN" class="mobile-vulcan-logo"></a>
      </nav>
    </header>
    <main class="site-main"><?php if ($isHome) { require __DIR__ . '/home.php'; } elseif ($isTeacherResources) { vploTeacherRender($teacherState); } elseif ($isSecretariatResources) { vploSecretariatRender($secretariatState); } elseif ($isContact && $hasContactContent) { ?><jdoc:include type="message" /><jdoc:include type="modules" name="contact-content" style="none" /><?php } else { ?><jdoc:include type="message" /><jdoc:include type="component" /><?php } ?></main>
    <footer class="site-footer">
      <?php if ($hasFooterContent) : ?>
        <jdoc:include type="modules" name="footer-content" style="none" />
      <?php else : ?>
        <div class="container footer-grid">
          <div class="footer-school"><jdoc:include type="modules" name="footer-school" style="none" /></div>
          <div class="footer-contact"><jdoc:include type="modules" name="footer-contact" style="none" /></div>
          <div class="footer-navigation"><jdoc:include type="modules" name="footer-nav" style="none" /></div>
        </div>
        <div class="container footer-credit"><jdoc:include type="modules" name="footer-credit" style="none" /></div>
      <?php endif; ?>
    </footer>
  </div>
</body>
</html>
