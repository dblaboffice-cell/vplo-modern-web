<?php
/** @license GNU General Public License version 2 or later */
defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\Router\Route;

$e = static fn ($value): string => htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
$contacts = array_values(array_filter(array_map(static fn ($contact): array => (array) $contact, (array) $params->get('contacts', [])), static fn (array $contact): bool => !empty($contact['label'])));
$menuType = (string) $params->get('menutype', 'mainmenu');
$limit = max(1, (int) $params->get('menu_limit', 5));
$menu = Factory::getApplication()->getMenu();
$items = array_values(array_filter($menu->getItems('menutype', $menuType) ?: [], static fn ($item): bool => (int) $item->parent_id === 1 && (int) $item->published === 1));
usort($items, static fn ($left, $right): int => ((int) $left->lft) <=> ((int) $right->lft));
$items = array_slice($items, 0, $limit);
$icons = [
    'phone' => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.01 9.71a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z"/></svg>',
    'mail' => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
];
$mapIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
?>
<div class="container footer-grid">
  <div>
    <div class="footer-title"><?= $e($params->get('school_short')) ?></div>
    <p><?= $e($params->get('school_name')) ?></p>
    <a href="<?= $e($params->get('map_url')) ?>" target="_blank" rel="noopener noreferrer" class="footer-location-link"><?= $mapIcon ?><span><?= $e($params->get('address')) ?></span></a>
  </div>
  <div>
    <div class="footer-title">Kontakt</div>
    <div class="footer-contact">
      <?php foreach ($contacts as $contact) : ?>
        <a class="footer-contact-item" href="<?= $e($contact['url'] ?? '') ?>"><?= $icons[$contact['type'] ?? 'mail'] ?? $icons['mail'] ?><span><?= $e($contact['label']) ?></span></a>
      <?php endforeach; ?>
    </div>
  </div>
  <div>
    <div class="footer-title">Nawigacja</div>
    <div class="footer-links">
      <?php foreach ($items as $item) :
          $link = trim((string) ($item->flink ?? $item->link ?? ''));
          $href = $link !== '' ? Route::_($link . (str_contains($link, 'Itemid=') ? '' : (str_contains($link, '?') ? '&' : '?') . 'Itemid=' . (int) $item->id)) : '#';
      ?>
        <a href="<?= $e($href) ?>"><?= $e($item->title) ?></a>
      <?php endforeach; ?>
    </div>
  </div>
</div>
<?php if (trim((string) $params->get('credit')) !== '') : ?><div class="container footer-credit"><?= $e($params->get('credit')) ?></div><?php endif; ?>
