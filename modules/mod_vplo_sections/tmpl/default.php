<?php
defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\Router\Route;

$e = static fn ($value): string => htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
$items = array_map(static fn ($item): array => (array) $item, array_values((array) $params->get('items', [])));
if (!$items) { return; }

$icon = static function (string $name): string {
    $paths = ['calendar'=>'<path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>','school'=>'<path d="m4 6 8-4 8 4-8 4Z"/><path d="M6 10v7c3 2 9 2 12 0v-7"/><path d="M4 6v10"/>','student'=>'<path d="M22 10v6M6 12.5V16c3.5 2.5 8.5 2.5 12 0v-3.5"/><path d="m2 10 10-5 10 5-10 5Z"/>','education'=>'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>','recruitment'=>'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>','gallery'=>'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>','contact'=>'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>','file'=>'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/>'];
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' . ($paths[$name] ?? $paths['school']) . '</svg>';
};

$menuItems = Factory::getApplication()->getMenu('site')->getItems('menutype', 'mainmenu') ?: [];
$children = [];
foreach ($menuItems as $menuItem) { if ((int) $menuItem->published === 1) { $children[(int) $menuItem->parent_id][] = $menuItem; } }
$collectLinks = static function (int $parentId, int $depth = 0) use (&$collectLinks, $children): array { $links = []; foreach ($children[$parentId] ?? [] as $child) { $grandchildren = $children[(int) $child->id] ?? []; if ($grandchildren) { if ($depth > 0) { $links[] = $child; } $links = array_merge($links, $collectLinks((int) $child->id, $depth + 1)); } else { $links[] = $child; } } return $links; };
$menuByTitle = []; foreach ($menuItems as $menuItem) { $menuByTitle[(string) $menuItem->title] = $menuItem; }
?>
<section class="section container home-tabs-section"><span class="eyebrow home-tabs-eyebrow"><?= $e($params->get('eyebrow')) ?></span><div class="cards-grid home-tabs-grid">
<?php foreach ($items as $item) : ?>
  <?php $title=(string)($item['title']??''); $menuItem=$menuByTitle[$title]??null; $sectionLinks=$menuItem?$collectLinks((int)$menuItem->id):[]; $hasChildren=count($sectionLinks)>0; $href=(string)($item['url']??''); $iconName=$title === 'Dziennik VULCAN' ? 'file' : (string)($item['icon']??'school'); ?>
  <?php if ($hasChildren) : ?><div class="home-section-card"><a class="feature-card home-section-desktop-link" href="<?= $e($href) ?>"><div class="feature-icon" aria-hidden="true"><?= $icon($iconName) ?></div><h3><?= $e($title) ?></h3></a><button type="button" class="feature-card home-section-toggle" aria-expanded="false"><div class="feature-icon" aria-hidden="true"><?= $icon($iconName) ?></div><h3><?= $e($title) ?></h3><svg class="home-section-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button><div class="home-section-links"><?php foreach ($sectionLinks as $link) : ?><a href="<?= $e(Route::_('index.php?Itemid=' . (int) $link->id)) ?>"><?= $e($link->title) ?></a><?php endforeach; ?></div></div><?php else : ?><a class="feature-card" href="<?= $e($href) ?>"><div class="feature-icon" aria-hidden="true"><?= $icon($iconName) ?></div><h3><?= $e($title) ?></h3></a><?php endif; ?>
<?php endforeach; ?>
</div></section>
