<?
include_once $_SERVER['DOCUMENT_ROOT'].'/common/config.inc.php';
include $_SERVER['DOCUMENT_ROOT'].'/inc/menuTemplate.inc.php';

foreach($templateArr as $k => $v){
	$tmp_val = ereg_replace('\]{1}[ ]*\[{1}', '][', $v);
	$tmp_val = eregi_replace('^\[', '', $tmp_val);
	$tmp_val = eregi_replace('\]$', '', $tmp_val);
	$v2 = explode('][', $tmp_val);

	
	$menuArr[$v2[0]][$v2[1]][level] = $v2[2];	
	$menuArr[$v2[0]][$v2[1]][subnum] = $v2[3];
	$menuArr[$v2[0]][$v2[1]][url] = $v2[4];
	$menuArr[$v2[0]][$v2[1]][target] = $v2[5];

	if($menuArr[$v2[0]][$v2[1]][level] == 1)	$parent_subnum = $menuArr[$v2[0]][$v2[1]][subnum];

	if($menuArr[$v2[0]][$v2[1]][level] == 2)	$menuArr[$v2[0]][$v2[1]][m_num] = $parent_subnum;	
	else										$menuArr[$v2[0]][$v2[1]][m_num] = 0;
}
//print_r($menuArr);
?>