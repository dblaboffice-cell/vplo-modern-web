<?php
defined('_JEXEC') or die;

$e = static fn ($value): string => htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
if (!$params->get('heading') && !$params->get('image') && !$params->get('text')) { return; }
?>
<div class="hero-card hero-card-patron"><h2 class="hero-school-name"><?= $e($params->get('heading')) ?><span><?= $e($params->get('heading_accent')) ?></span></h2><div class="hero-portrait-wrap"><div class="hero-portrait-frame"><?php if ($params->get('image')) : ?><img class="hero-portrait" src="<?= $e($params->get('image')) ?>" alt="<?= $e($params->get('image_alt')) ?>"><?php endif; ?></div><div class="hero-portrait-copy"><span class="eyebrow"><?= $e($params->get('eyebrow')) ?></span><h3><?= $e($params->get('name')) ?></h3><p class="hero-portrait-caption"><?= nl2br($e($params->get('text'))) ?></p></div></div></div>
