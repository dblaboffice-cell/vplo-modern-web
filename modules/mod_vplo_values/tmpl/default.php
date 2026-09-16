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
<div class="home-values"><div class="values-title"><?= $e($params->get('heading')) ?><i><?= $e($params->get('caption')) ?></i></div>
  <div class="values-graphic"><img src="<?= $e($params->get('image')) ?>" alt="<?= $e($params->get('image_alt')) ?>">
    <?php foreach ($values as $index => $value) : $id = $ids[$index] ?? ('value-' . $index); ?>
      <button data-value="<?= $e($id) ?>" style="<?= $e($style($value, 'button')) ?>"><?= $e($value['title'] ?? '') ?><small><?= $e($value['more_label'] ?? '') ?></small></button>
      <p data-popup="<?= $e($id) ?>" style="<?= $e($style($value, 'popup')) ?>"><?= $e($value['description'] ?? '') ?></p>
    <?php endforeach; ?>
  </div>
  <?php if ($contacts) : ?><div class="home-contact"><?php foreach ($contacts as $contact) : ?><a href="<?= $e($contact['url'] ?? '') ?>"><?= $e(($contact['icon'] ?? '') . ' ' . ($contact['label'] ?? '')) ?></a><?php endforeach; ?></div><?php endif; ?></div>
