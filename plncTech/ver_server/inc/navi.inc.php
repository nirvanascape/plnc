<?
include $_SERVER['DOCUMENT_ROOT'].'/inc/menuConfig.inc.php';
if($menuArr[$mname]){
	foreach($menuArr[$mname] as $k => $v){
		if($v[level]==0){
			$ltitle = $k;
		}
		if($v[level]==1 && ((!$m_num && $v[subnum]==$subnum) || ($m_num && $v[subnum]==$m_num))){
			$mtitle = $k;
		}
		if($v[level]==2 && $v[m_num]==$m_num && $v[subnum]==$subnum){
			$stitle = $k;
		}
	}
}
//print_r($menuArr[$mname]);
?>
<SCRIPT LANGUAGE="JavaScript">
	var arr_navi	= new Array(
<?=$ltitle?"'".$ltitle."'":""?>
<?=$mtitle?",'".$mtitle."'":""?>
<?=$stitle?",'".$stitle."'":""?>
<?=$gtitle?",'".$gtitle."'":""?>
	);
</SCRIPT>