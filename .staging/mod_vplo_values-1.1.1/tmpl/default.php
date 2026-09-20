<?php
defined('_JEXEC') or die;

$e = static fn ($value): string => htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
$values = array_map(static fn ($value): array => (array) $value, array_values((array) $params->get('values', [])));
$contacts = array_map(static fn ($contact): array => (array) $contact, array_values((array) $params->get('contacts', [])));
$ids = ['individual', 'quality', 'passion'];
$classes = ['hotspot-individual', 'hotspot-quality', 'hotspot-passion'];
$popups = ['popup-individual', 'popup-quality', 'popup-passion'];
$icons = [
    'individual' => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    'quality' => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 4h1.5a2.5 2.5 0 0 1 0 5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C8.42 18.5 8 19.13 8 20h8c0-.87-.42-1.5-1.03-1.79-.5-.23-.97-.66-.97-1.21v-2.34"/><path d="M18 2H6v7a6 6 0 0 0 12 0Z"/></svg>',
    'passion' => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 11.5 2-2a2 2 0 0 1 3 0"/><path d="m15 9.5 1-1a2 2 0 0 1 3 0l2 2"/><path d="M3 12h18"/><path d="M5 12v6a3 3 0 0 0 3 3h1l3-3 3 3h1a3 3 0 0 0 3-3v-6"/><path d="M12 18v-6"/></svg>',
];

if (!$params->get('image') || !$values) { return; }
?>
<section class="school-values-section school-values-building">
  <span class="eyebrow school-values-eyebrow"><span class="school-values-eyebrow-default"><?= $e($params->get('heading')) ?></span><span class="school-values-eyebrow-hover"><?= $e($params->get('caption')) ?></span></span>
  <div class="school-values-graphic-wrapper"><div class="school-values-graphic">
    <img class="school-values-image" src="<?= $e($params->get('image')) ?>" alt="<?= $e($params->get('image_alt')) ?>">
    <?php foreach ($values as $index => $value) : $id = $ids[$index] ?? ('value-' . $index); ?>
      <button type="button" class="school-value-hotspot <?= $classes[$index] ?? '' ?>" data-value="<?= $e($id) ?>" aria-expanded="false" aria-label="<?= $e('Pokaż opis: ' . ($value['title'] ?? '')) ?>"><span class="school-value-hotspot-icon" aria-hidden="true"><?= $icons[$id] ?? '' ?></span><span class="school-value-hotspot-copy"><span class="school-value-hotspot-title"><?= $e($value['title'] ?? '') ?></span><span class="school-value-hotspot-hint"><?= $e($value['more_label'] ?? '') ?></span></span></button>
      <div class="school-value-popup <?= $popups[$index] ?? '' ?>" data-popup="<?= $e($id) ?>" hidden><p><?= $e($value['description'] ?? '') ?></p></div>
    <?php endforeach; ?>
  </div></div>
  <?php if ($contacts) : ?><div class="hero-contact-grid"><?php foreach ($contacts as $contact) : ?><a class="info-badge info-badge-link" href="<?= $e($contact['url'] ?? '') ?>"><span><?= $e($contact['icon'] ?? '') ?></span><span><?= $e($contact['label'] ?? '') ?></span></a><?php endforeach; ?></div><?php endif; ?>
</section>
