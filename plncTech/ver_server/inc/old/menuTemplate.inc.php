<?
include_once $_SERVER['DOCUMENT_ROOT'].'/common/config.inc.php';
include $_SERVER["DOCUMENT_ROOT"]."/config/category.conf.php";


/*
$templateArr[] = "[mname(������)][menu(�޴���)][depth(��:0,��:1,��:2)][subnum(����޴�����)][url][target]";
*/

$templateArr[] = "[about][ȸ��Ұ�][0][1][/about/intro.html]";
	$templateArr[] = "[about][�λ縻][1][1][/about/intro.html]";
	$templateArr[] = "[about][ȸ�簳��][1][2][/about/company.html]";
	$templateArr[] = "[about][ã�ƿ��ô� ��][1][3][/about/map.html]";



$templateArr[] = "[business][�ֿ�������][0][1][/business/mobile.html]";
	$templateArr[] = "[business][����� ������][1][1][/business/mobile.html]";
	$templateArr[] = "[business][���� ECMS][1][2][/business/ecms.html]";
	$templateArr[] = "[business][Enterprise Solution][1][3][/business/solution.html]";
	$templateArr[] = "[business][�ֿ� ����][1][4][/business/customer.html]";



$templateArr[] = "[help][������][0][1][/bbs/bbsList.html?id=notice]";
	$templateArr[] = "[help][��������][1][1][/bbs/bbsList.html?id=notice]";
	$templateArr[] = "[help][����][1][2][/bbs/bbsList.html?id=news]";
	$templateArr[] = "[help][��ǰ����][1][3][/bbs/goodsAsk.html?form_id=formform]";



$templateArr[] = "[recruit][ä������][0][1][/recruit/info.html]";
	$templateArr[] = "[recruit][�����][1][1][/recruit/info.html]";
	$templateArr[] = "[recruit][ä�����][1][2][/bbs/bbsList.html?id=gonggo]";



//print_r($templateArr);
?>
