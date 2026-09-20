<?php
defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\Router\Route;
use Joomla\Component\Content\Site\Helper\RouteHelper;
use Joomla\Database\DatabaseInterface;

final class ModVploUpdatesHelper
{
    public static function getItems($params): array
    {
        $categoryId = (int) $params->get('category_id');

        if (!$categoryId) {
            return [];
        }

        $app = Factory::getApplication();
        $user = $app->getIdentity();
        $db = Factory::getContainer()->get(DatabaseInterface::class);
        $query = $db->getQuery(true)
            ->select($db->quoteName(['a.id', 'a.title', 'a.alias', 'a.catid', 'a.language', 'a.images', 'a.publish_up']))
            ->from($db->quoteName('#__content', 'a'))
            ->where($db->quoteName('a.state') . ' = 1')
            ->where($db->quoteName('a.catid') . ' = :categoryId')
            ->whereIn($db->quoteName('a.access'), $user->getAuthorisedViewLevels())
            ->whereIn($db->quoteName('a.language'), ['*', $app->getLanguage()->getTag()])
            ->order($db->quoteName('a.publish_up') . ' DESC');
        $query->bind(':categoryId', $categoryId, \Joomla\Database\ParameterType::INTEGER);
        $db->setQuery($query, 0, max(1, (int) $params->get('count', 1)));
        $items = $db->loadObjectList() ?: [];

        foreach ($items as $item) {
            $item->link = Route::_(RouteHelper::getArticleRoute($item->id, $item->catid, $item->language));
            $item->images = json_decode($item->images ?: '{}', true) ?: [];
        }

        return $items;
    }
}
