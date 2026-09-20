<?php
defined('_JEXEC') or die;

use Joomla\CMS\Helper\ModuleHelper;

require_once __DIR__ . '/helper.php';

$items = ModVploUpdatesHelper::getItems($params);

require ModuleHelper::getLayoutPath('mod_vplo_updates', $params->get('layout', 'default'));
