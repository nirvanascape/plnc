<?
include_once $_SERVER['DOCUMENT_ROOT'].'/common/config.inc.php';
include $_SERVER["DOCUMENT_ROOT"]."/config/category.conf.php";


/*
$templateArr[] = "[mname(폴더명)][menu(메뉴명)][depth(대:0,중:1,소:2)][subnum(서브메뉴순서)][url][target]";
*/

$templateArr[] = "[about][회사소개][0][1][/about/intro.html]";
	$templateArr[] = "[about][인사말][1][1][/about/intro.html]";
	$templateArr[] = "[about][회사개요][1][2][/about/company.html]";
	$templateArr[] = "[about][찾아오시는 길][1][3][/about/map.html]";



$templateArr[] = "[business][주요사업영역][0][1][/business/mobile.html]";
	$templateArr[] = "[business][모바일 컨설팅][1][1][/business/mobile.html]";
	$templateArr[] = "[business][통합 ECMS][1][2][/business/ecms.html]";
	$templateArr[] = "[business][Enterprise Solution][1][3][/business/solution.html]";
	$templateArr[] = "[business][주요 고객사][1][4][/business/customer.html]";



$templateArr[] = "[help][고객센터][0][1][/bbs/bbsList.html?id=notice]";
	$templateArr[] = "[help][공지사항][1][1][/bbs/bbsList.html?id=notice]";
	$templateArr[] = "[help][뉴스][1][2][/bbs/bbsList.html?id=news]";
	$templateArr[] = "[help][제품문의][1][3][/bbs/goodsAsk.html?form_id=formform]";



$templateArr[] = "[recruit][채용정보][0][1][/recruit/info.html]";
	$templateArr[] = "[recruit][인재상][1][1][/recruit/info.html]";
	$templateArr[] = "[recruit][채용공고][1][2][/bbs/bbsList.html?id=gonggo]";



//print_r($templateArr);
?>
