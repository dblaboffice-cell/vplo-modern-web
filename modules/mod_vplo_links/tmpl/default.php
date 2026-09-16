<?php
defined('_JEXEC') or die;

$e = static fn ($value): string => htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
$links = array_map(static fn ($link): array => (array) $link, array_values((array) $params->get('links', [])));
if (!$links) { return; }
?>
<section class="container home-links"><b><?= $e($params->get('heading')) ?></b>
  <?php foreach ($links as $link) : ?>
    <a href="<?= $e($link['url'] ?? '') ?>" aria-label="<?= $e($link['label'] ?? '') ?>"><?php if (!empty($link['image'])) : ?><img src="<?= $e($link['image']) ?>" alt="<?= $e($link['image_alt'] ?? '') ?>"><?php else : ?><?= $e($link['label'] ?? '') ?><?php endif; ?></a>
  <?php endforeach; ?>
</section>
