<?php
defined('_JEXEC') or die;

use Joomla\CMS\HTML\HTMLHelper;

$e = static fn ($value): string => htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
$hasSocial = $params->get('instagram_url') || $params->get('tiktok_url');

if (!$items && !$hasSocial) {
    return;
}
?>
<section class="home-updates-strip home-updates-strip-compact" aria-label="Aktualności i media społecznościowe">
  <div class="home-updates-frame">
    <div class="home-updates-grid home-updates-grid-compact">
    <?php foreach ($items as $item) : ?>
      <?php $image = $item->images['image_intro'] ?? ''; $alt = $item->images['image_intro_alt'] ?? $item->title; ?>
      <a class="home-update-card home-update-card-news home-update-card-compact" href="<?= $e($item->link) ?>">
        <?php if ($image) : ?><img class="home-update-news-image" src="<?= $e($image) ?>" alt="<?= $e($alt) ?>"><?php endif; ?>
        <div class="home-update-news-overlay"><span class="home-update-label"><?= $e($params->get('news_label')) ?></span><h2><?= $e($item->title) ?></h2><p><?= $e(HTMLHelper::_('date', $item->publish_up, 'd MMMM Y')) ?><?= $params->get('news_meta_suffix') ? ' · ' . $e($params->get('news_meta_suffix')) : '' ?></p><strong><?= $e($params->get('news_link_label')) ?></strong></div>
      </a>
    <?php endforeach; ?>
    <?php if ($params->get('instagram_url')) : ?>
      <a class="home-update-card home-social-card home-instagram-card home-update-card-compact" href="<?= $e($params->get('instagram_url')) ?>" target="_blank" rel="noopener"><div class="home-social-content"><span class="home-update-label"><?= $e($params->get('instagram_label')) ?></span><h2><?= $e($params->get('instagram_handle')) ?></h2><p><?= $e($params->get('instagram_text')) ?></p><strong><?= $e($params->get('instagram_link_label')) ?></strong></div></a>
    <?php endif; ?>
    <?php if ($params->get('tiktok_url')) : ?>
      <a class="home-update-card home-social-card home-tiktok-card home-update-card-compact" href="<?= $e($params->get('tiktok_url')) ?>" target="_blank" rel="noopener"><div class="home-social-content"><span class="home-update-label"><?= $e($params->get('tiktok_label')) ?></span><h2><?= $e($params->get('tiktok_handle')) ?></h2><p><?= $e($params->get('tiktok_text')) ?></p><strong><?= $e($params->get('tiktok_link_label')) ?></strong></div></a>
    <?php endif; ?>
    </div>
  </div>
</section>
