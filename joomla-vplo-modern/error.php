<?php
defined('_JEXEC') or die;
http_response_code((int) $this->error->getCode() ?: 500);
require __DIR__ . '/index.php';
