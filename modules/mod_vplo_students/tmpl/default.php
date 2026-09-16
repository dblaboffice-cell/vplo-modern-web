<?php
defined('_JEXEC') or die;

$e = static fn ($value): string => htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
$videos = array_map(static fn ($video): array => (array) $video, array_values((array) $params->get('videos', [])));
$videos = array_values(array_filter($videos, static fn (array $video): bool => !empty($video['video_file']) || !empty($video['video_url'])));
if (!$videos) { return; }
?>
<section class="home-video-section home-video-section-inline">
  <div class="home-video-card home-video-card-inline">
    <?php if ($params->get('heading')) : ?><span class="home-video-label"><?= $e($params->get('heading')) ?></span><?php endif; ?>
    <?php if ($params->get('intro')) : ?><p><?= nl2br($e($params->get('intro'))) ?></p><?php endif; ?>
    <div class="home-video-players"><?php foreach ($videos as $video) : $source = $video['video_file'] ?: $video['video_url']; ?>
      <video class="home-video-player" controls preload="metadata" playsinline<?= !empty($video['poster']) ? ' poster="' . $e($video['poster']) . '"' : '' ?><?= !empty($video['alt']) ? ' aria-label="' . $e($video['alt']) . '"' : '' ?><?= !empty($video['title']) ? ' title="' . $e($video['title']) . '"' : '' ?>><source src="<?= $e($source) ?>" type="video/mp4"></video>
    <?php endforeach; ?></div>
  </div>
</section>
