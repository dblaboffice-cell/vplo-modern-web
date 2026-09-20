<?php
defined('_JEXEC') or die;

$e = static fn ($value): string => htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
$values = array_map(static fn ($value): array => (array) $value, array_values((array) $params->get('values', [])));
$contacts = array_map(static fn ($contact): array => (array) $contact, array_values((array) $params->get('contacts', [])));
$ids = ['one', 'two', 'three'];
if (!$params->get('image') || !$values) { return; }
$style = static function (array $value, string $prefix): string {
    $parts = [];
    foreach (['top', 'right', 'bottom', 'left'] as $edge) {
        $key = $prefix . '_' . $edge;
        if (isset($value[$key]) && $value[$key] !== '') { $parts[] = $edge . ':' . (float) $value[$key] . '%'; }
    }
    return implode(';', $parts);
};
?>
<section class="school-values-section school-values-building"><span class="eyebrow school-values-eyebrow"><span class="school-values-eyebrow-default"><?= $e($params->get('heading')) ?></span><span class="school-values-eyebrow-hover"><?= $e($params->get('caption')) ?></span></span><div class="school-values-graphic-wrapper"><div class="school-values-graphic"><img class="school-values-image" src="<?= $e($params->get('image')) ?>" alt="<?= $e($params->get('image_alt')) ?>"><?php foreach ($values as $index => $value) : $id = $ids[$index] ?? ('value-' . $index); $classes = ['hotspot-individual','hotspot-quality','hotspot-passion']; $popups = ['popup-individual','popup-quality','popup-passion']; ?><button type="button" class="school-value-hotspot <?= $classes[$index] ?? '' ?>" data-value="<?= $e($id) ?>" aria-expanded="false"><span class="school-value-hotspot-icon" aria-hidden="true">●</span><span class="school-value-hotspot-copy"><span class="school-value-hotspot-title"><?= $e($value['title'] ?? '') ?></span><span class="school-value-hotspot-hint"><?= $e($value['more_label'] ?? '') ?></span></span></button><div class="school-value-popup <?= $popups[$index] ?? '' ?>" data-popup="<?= $e($id) ?>"><p><?= $e($value['description'] ?? '') ?></p></div><?php endforeach; ?></div></div><?php if ($contacts) : ?><div class="hero-contact-grid"><?php foreach ($contacts as $contact) : ?><a class="info-badge info-badge-link" href="<?= $e($contact['url'] ?? '') ?>"><span><?= $e($contact['icon'] ?? '') ?></span><span><?= $e($contact['label'] ?? '') ?></span></a><?php endforeach; ?></div><?php endif; ?></section>
