<?php
/** @license GNU General Public License version 2 or later */
defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\Uri\Uri;

$wa = Factory::getApplication()->getDocument()->getWebAssetManager();
$wa->registerAndUseStyle('mod.vplo-contact', 'media/mod_vplo_contact/css/contact-1.0.0.css');
$e = static fn ($value): string => htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
$svg = [
    'map' => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    'phone' => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.01 9.71a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z"/></svg>',
    'mail' => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    'route' => '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
];
$phoneHref = static fn (string $phone): string => 'tel:' . preg_replace('/\s+/', '', $phone);
$qrUrl = static fn (string $filename): string => Uri::root(true) . '/media/mod_vplo_contact/images/' . rawurlencode(basename($filename));
$mapEmbedUrl = trim((string) $params->get('map_embed_url'));
?>
<section class="container vplo-contact-page" aria-labelledby="vplo-contact-title">
  <header class="vplo-contact-header">
    <h1 id="vplo-contact-title"><?= $e($params->get('page_title', 'Kontakt')) ?></h1>
    <p><?= $e($params->get('lead')) ?></p>
  </header>
  <div class="contact-page-layout">
    <section class="contact-office-section">
      <div class="contact-hours-card"><span class="contact-card-label"><?= $e($params->get('office_label')) ?></span><h2><?= $e($params->get('hours_title')) ?></h2><p><?= $e($params->get('hours')) ?></p></div>
      <div class="contact-notice-card"><strong><?= $e($params->get('notice_title')) ?></strong><p><?= $e($params->get('notice')) ?></p></div>
    </section>
    <div class="contact-details">
      <section class="contact-details-group contact-details-group-location"><h2>Adres</h2><a class="info-badge" href="<?= $e($params->get('map_url')) ?>" target="_blank" rel="noopener noreferrer"><?= $svg['map'] ?><span><?= $e($params->get('address')) ?></span></a></section>
      <section class="contact-details-group"><h2>Telefony</h2><div class="contact-details-group-items"><?php foreach (['phone_one', 'phone_two'] as $name) : $phone = trim((string) $params->get($name)); if ($phone !== '') : ?><a class="info-badge" href="<?= $e($phoneHref($phone)) ?>"><?= $svg['phone'] ?><span><?= $e($phone) ?></span></a><?php endif; endforeach; ?></div></section>
      <section class="contact-details-group"><h2>E-mail</h2><div class="contact-details-group-items"><?php foreach (['email_one', 'email_two'] as $name) : $email = trim((string) $params->get($name)); if ($email !== '') : ?><a class="info-badge" href="mailto:<?= $e($email) ?>"><?= $svg['mail'] ?><span><?= $e($email) ?></span></a><?php endif; endforeach; ?></div></section>
    </div>
    <section class="social-qr-section"><h2>Liceum w mediach społecznościowych</h2><div class="social-qr-grid">
      <a class="social-qr-card" href="<?= $e($params->get('instagram_url')) ?>" target="_blank" rel="noopener noreferrer" aria-label="Otwórz profil szkoły na Instagramie"><img src="<?= $e($qrUrl((string) $params->get('instagram_qr'))) ?>" alt="<?= $e($params->get('instagram_alt')) ?>"><span class="social-qr-copy"><strong>Instagram</strong><span>Profil szkoły</span></span></a>
      <a class="social-qr-card" href="<?= $e($params->get('tiktok_url')) ?>" target="_blank" rel="noopener noreferrer" aria-label="Otwórz profil szkoły na TikToku"><img src="<?= $e($qrUrl((string) $params->get('tiktok_qr'))) ?>" alt="<?= $e($params->get('tiktok_alt')) ?>"><span class="social-qr-copy"><strong>TikTok</strong><span>Profil szkoły</span></span></a>
    </div></section>
    <div class="contact-location-description"><p><?= $e($params->get('location_description')) ?></p></div>
    <div class="contact-map-card">
      <?php if (str_starts_with($mapEmbedUrl, 'https://www.google.com/maps/embed?')) : ?><iframe class="contact-map-frame" src="<?= $e($mapEmbedUrl) ?>" title="<?= $e($params->get('map_title')) ?>" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe><?php endif; ?>
      <a class="route-button" href="<?= $e($params->get('directions_url')) ?>" target="_blank" rel="noopener noreferrer"><?= $svg['route'] ?><span>Trasa do szkoły</span></a>
    </div>
  </div>
</section>
