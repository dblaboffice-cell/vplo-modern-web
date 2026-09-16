<?php
defined('_JEXEC') or die;
use Joomla\CMS\Factory; use Joomla\CMS\HTML\HTMLHelper; use Joomla\CMS\Router\Route; use Joomla\CMS\Session\Session; use Joomla\CMS\Toolbar\ToolbarHelper; use Joomla\Database\DatabaseInterface;
$app=Factory::getApplication(); if(!$app->getIdentity()->authorise('core.admin')) throw new RuntimeException('Dostęp wyłącznie dla Super Usera.',403); ToolbarHelper::title('Konfiguracja menu VPLO','wrench'); $db=Factory::getContainer()->get(DatabaseInterface::class); $type='mainmenu';
// Źródło: aktualne menu React; kolumny: poziom|tytuł|alias.
$spec=<<<'TREE'
1|Aktualności|aktualnosci
1|Szkoła|szkola
2|Szkoła|szkola
3|Przesłanie Dyrektora|przeslanie-dyrektora
3|Dziedzictwo założycieli|dziedzictwo-zalozycieli
3|Misja i Wizja|misja-i-wizja
2|Patron|patron
3|Studium Sylwetki Patrona|studium-sylwetki-patrona
3|Dlaczego Królowa Jadwiga?|dlaczego-krolowa-jadwiga
2|Infrastruktura|infrastruktura
3|Siedziba liceum|siedziba-liceum
3|Nowoczesne pracownie|nowoczesne-pracownie
4|Pracownia biologiczna|pracownia-biologiczna
4|Pracownia chemiczna|pracownia-chemiczna
4|Pracownia komputerowa|pracownia-komputerowa
3|Przestrzenie uczniowskie|przestrzenie-uczniowskie
4|Cafe Atrium|cafe-atrium
4|Odskocznia|odskocznia
4|Ogród|ogrod
4|Miejsce cichej pracy|miejsce-cichej-pracy
3|Sale reprezentacyjne|sale-reprezentacyjne
4|Aula|aula
4|Collegium Maximum|collegium-maximum
4|Sala Senacka|sala-senacka
2|Dokumenty|dokumenty
3|Statut|statut
3|Standardy Ochrony Małoletnich|standardy-ochrony-maloletnich
1|Uczeń|uczen
2|Informacje wewnętrzne|informacje-wewnetrzne
3|Lekcje i przerwy|lekcje-i-przerwy
3|Podręczniki|podreczniki
3|Rok szkolny|rok-szkolny
3|Zintegrowana Platforma Edukacyjna – ZPE|zpe
2|Egzaminy|egzaminy
3|Matura|matura
3|Zintegrowany Interfejs Użytkownika – ZIU|ziu
3|Okręgowa Komisja Egzaminacyjna w Krakowie|oke
3|Centralna Komisja Egzaminacyjna|cke
1|Edukacja|edukacja
2|Nauka i rozwój|nauka-i-rozwoj
3|Edukacja kulturalna|edukacja-kulturalna
3|Grupy klasowe|grupy-klasowe
3|Kreatywny uczeń|kreatywny-uczen
3|Zajęcia warsztatowe|zajecia-warsztatowe
2|Dydaktyka|dydaktyka
3|Planowanie ścieżki edukacyjnej|przedmioty-rozszerzone
3|Język hiszpański|jezyk-hiszpanski
3|Zajęcia sportowe – WF|zajecia-sportowe-wf
2|Projekty edukacyjne|projekty-edukacyjne
3|Dzień Języka Angielskiego|dzien-jezyka-angielskiego
3|Sesje Naukowe|sesje-naukowe
3|Szkolna Akademia Filmowa|akademia-filmowa
1|Rekrutacja|rekrutacja
2|Dla kandydatów|dla-kandydatow
3|Dlaczego do nas?|dlaczego-do-nas
3|Dni otwarte|dni-otwarte
3|Kandydaci sportowcy|kandydaci-sportowcy
3|Planowanie profilu|planowanie-profilu
3|Proces rekrutacji|proces-rekrutacji
3|Zgłoszenie online|formularz-zgloszeniowy
2|Opinie|opinie
3|Absolwenci o nas|absolwenci-o-nas
1|Galeria|galeria
1|Kontakt|kontakt
TREE;
$want=[];$parents=[0=>''];foreach(explode("\n",trim($spec)) as $line){[$level,$label,$alias]=explode('|',$line,3);$level=(int)$level;$path=trim($parents[$level-1].'/'.$alias,'/');$want[$path]=compact('level','label','alias','path');$parents[$level]=$path;}
$scan=function()use($db,$type,$want){$q=$db->getQuery(true)->select('*')->from('#__menu')->where('menutype='.$db->quote($type));$db->setQuery($q);$rows=$db->loadAssocList();$have=[];$byKey=[];foreach($rows as $r){$have[$r['path']]=$r;$byKey[(int)$r['parent_id'].'|'.$r['title']][]=$r;}$q=$db->getQuery(true)->select('*')->from('#__menu_types')->where('menutype='.$db->quote($type));$db->setQuery($q);$menu=$db->loadAssoc();$q=$db->getQuery(true)->select('*')->from('#__modules')->where('module='.$db->quote('mod_menu'))->where('title='.$db->quote('Menu główne PL'));$db->setQuery($q);$module=null;foreach($db->loadAssocList()as$m){$p=json_decode($m['params']??'{}',true)?:[];if(($p['menutype']??'')===$type){$module=$m;break;}}$errors=[];if(!$menu||$menu['title']!=='Menu główne PL')$errors[]='Brak istniejącego menu Menu główne PL / mainmenu.';if(!$module)$errors[]='Brak istniejącego modułu Menu główne PL.';if($module){$p=json_decode($module['params']??'{}',true)?:[];if((int)$module['published']!==1||(int)$module['showtitle']!==0||$module['position']!=='main-menu'||empty($p['showAllChildren']))$errors[]='Moduł nie spełnia wymaganych ustawień.';}$plan=[];$matched=[];foreach($want as $path=>$node){$parentPath=dirname($path);$parent=$parentPath==='.'?['id'=>1,'level'=>0]:($matched[$parentPath]??null);if(!$parent){$errors[]='Nie można ustalić rodzica ani w Joomla, ani w planie: '.$node['label'];continue;}if(empty($parent['id'])){$matched[$path]=['id'=>0,'level'=>(int)$node['level'],'planned'=>true];$plan[$path]='doda';continue;}$found=$byKey[(int)$parent['id'].'|'.$node['label']]??[];if(count($found)>1){$errors[]='Niejednoznaczna pozycja: '.$node['label'];continue;}if($found){$matched[$path]=$found[0];$plan[$path]='istnieje';}else{$matched[$path]=['id'=>0,'level'=>(int)$node['level'],'planned'=>true];$plan[$path]='doda';}}return compact('have','matched','errors','plan');};
$task=$app->input->post->getCmd('task');if(in_array($task,['preview','apply'],true)){Session::checkToken('post')or throw new RuntimeException('Nieprawidłowy token CSRF.',403);$state=$scan();if($task==='apply'&&!$state['errors']){$db->transactionStart();try{$count=0;foreach($state['plan']as$path=>$action){if($action!=='doda')continue;$node=$want[$path];$parentPath=dirname($path);$parent=$parentPath==='.'?['id'=>1,'level'=>0]:$state['have'][$parentPath];if(!$parent)throw new RuntimeException('Brak rodzica: '.$parentPath);$q=$db->getQuery(true)->select('rgt')->from('#__menu')->where('id='.(int)$parent['id']);$db->setQuery($q);$at=(int)$db->loadResult();$db->setQuery('UPDATE #__menu SET rgt=rgt+2 WHERE rgt>='.(int)$at)->execute();$db->setQuery('UPDATE #__menu SET lft=lft+2 WHERE lft>'.(int)$at)->execute();$row=(object)['menutype'=>$type,'title'=>$node['label'],'alias'=>$node['alias'],'note'=>'Tymczasowa pozycja — do powiązania z widokiem Joomla.','path'=>$path,'link'=>'','type'=>'heading','published'=>1,'parent_id'=>(int)$parent['id'],'level'=>(int)$parent['level']+1,'component_id'=>0,'checked_out'=>0,'checked_out_time'=>$db->getNullDate(),'browserNav'=>0,'access'=>1,'img'=>'','template_style_id'=>0,'params'=>'{"menu_show":1}','lft'=>$at,'rgt'=>$at+1,'home'=>0,'language'=>'*','client_id'=>0];$db->insertObject('#__menu',$row);$row->id=(int)$db->insertid();$state['have'][$path]=(array)$row;$count++;}$db->transactionCommit();$app->enqueueMessage("Dodano brakujące pozycje: $count.",'message');}catch(Throwable$e){$db->transactionRollback();$app->enqueueMessage('Nic nie zmieniono: '.$e->getMessage(),'error');}$app->redirect(Route::_('index.php?option=com_vplo_setup',false));}$app->setUserState('com_vplo_setup.preview',true);}$state=$scan();
?>
<div class="com-vplo-setup"><h1>Konfiguracja menu VPLO</h1><p>Źródłem jest pełna nawigacja React. Nie tworzy menu/modułu, nie zmienia Home, CSS ani szablonu.</p><?php if($state['errors']):?><div class="alert alert-danger"><ul><?php foreach($state['errors']as$e):?><li><?=htmlspecialchars($e,ENT_QUOTES,'UTF-8')?></li><?php endforeach?></ul></div><?php endif?><h2>Podgląd pełnego drzewa i zmian</h2><ul><?php foreach($want as$path=>$node):?><li><span class="badge bg-<?=$state['plan'][$path]==='doda'?'warning':'success'?>"><?=$state['plan'][$path]==='doda'?'doda':'istnieje'?></span> <?=str_repeat('— ',(int)$node['level']-1).htmlspecialchars($node['label'],ENT_QUOTES,'UTF-8')?></li><?php endforeach?></ul><form method="post" action="<?=Route::_('index.php?option=com_vplo_setup')?>"><button class="btn btn-secondary" name="task" value="preview">Podgląd zmian</button> <button class="btn btn-primary" name="task" value="apply" <?=$state['errors']?'disabled':''?> onclick="return confirm('Dodać wyłącznie brakujące pozycje?')">Zastosuj zmiany</button><?=HTMLHelper::_('form.token')?></form><?php if($app->getUserState('com_vplo_setup.preview',false)):?><div class="alert alert-info mt-3">Podgląd nie zapisuje danych.</div><?php endif?></div>
