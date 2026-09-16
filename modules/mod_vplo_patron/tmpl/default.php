<?php
defined('_JEXEC') or die;

$e = static fn ($value): string => htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
if (!$params->get('heading') && !$params->get('image') && !$params->get('text')) { return; }
?>
<aside class="home-patron"><h2><?= $e($params->get('heading')) ?><span><?= $e($params->get('heading_accent')) ?></span></h2><div>
  <?php if ($params->get('image')) : ?><img src="<?= $e($params->get('image')) ?>" alt="<?= $e($params->get('image_alt')) ?>"><?php endif; ?>
  <p><b><?= $e($params->get('eyebrow')) ?></b><strong><?= $e($params->get('name')) ?></strong><?= nl2br($e($params->get('text'))) ?></p>
</div></aside>
