<?php
/** @license GNU General Public License version 2 or later */
defined('_JEXEC') or die;

$e = static fn ($value): string => htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
$slides = array_values(array_filter(array_map(static fn ($slide): array => (array) $slide, (array) $params->get('slides', [])), static fn (array $slide): bool => !empty($slide['image'])));

if (!$slides) {
    return;
}

$interval = max(1000, (int) $params->get('interval', 5000));
?>
<figure class="header-banner" data-vplo-header-banner data-interval="<?= $e($interval) ?>">
  <?php foreach ($slides as $index => $slide) : ?>
    <img class="header-banner-slide<?= $index === 0 ? ' is-active' : '' ?>" src="<?= $e($slide['image']) ?>" alt="<?= $e($slide['alt'] ?? '') ?>" style="object-position: <?= $e($slide['position'] ?? 'center') ?>"<?= $index === 0 ? '' : ' hidden' ?>>
  <?php endforeach; ?>
</figure>
