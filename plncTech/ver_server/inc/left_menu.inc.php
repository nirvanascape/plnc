<?
include $_SERVER['DOCUMENT_ROOT'].'/inc/menuConfig.inc.php';

$mname = str_replace('left_', '', basename($_SERVER['PHP_SELF']));
$mname = str_replace('.html', '', $mname);
$arrChk = count(array_keys($menuArr[$mname]));

if($arrChk > 1){
	echo '<'.'?xml version="1.0" encoding="EUC-KR"?'.'>';
?>
	<menu>
<?
	$cnt=1;
	foreach($menuArr[$mname] as $k => $v){
		$target = $v[target];
		if($v[level] == '1'){
			if(eregi('\?', $v[url]))	$query_string = "&";
			else						$query_string = "?";
			
			$query_string .= "mname=".$mname."&m_num=".$v[m_num]."&subnum=".$v[subnum]; 
			if($cnt!=1){
?>
	</depth1>
<?
			}
?>
	<depth1 name="<?=$k?>" link="<?=$v[url].$query_string?>" target="<?=$target?$target:''?>" >
<?
			$cnt++;
		}
		elseif($v[level] == '2'){
			if(eregi('\?', $v[url]))	$query_string = "&";
			else						$query_string = "?";
			
			$query_string .= "mname=".$mname."&m_num=".$v[m_num]."&subnum=".$v[subnum]; 
?>
	<depth2 name="<?=$k?>" link="<?=$v[url].$query_string?>" target="<?=$target?$target:''?>" ></depth2>
<?
		}
	}	
?>
	</depth1>
	</menu>
<?
}
?>