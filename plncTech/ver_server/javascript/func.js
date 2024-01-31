isIE = document.all;
isNN = !document.all && document.getElementById;
isN4 = document.layers;

// explore 변경 관련 - flash
function load_flash( src, w, h, id ) {
	if( typeof( id ) == "undefined" ) id = "";

	html = '';
	html += '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="' + w + '" height="' + h + '" id="' + id + '">';
	html += '<param name="movie" value="' + src + '">';
    html += '<param name="quality" value="high">';
	html += '<param name="wmode" value="transparent">';
	html += '<embed src="' + src + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + w + '" height="' + h + '"></embed>';
	html += '</OBJECT>';
	
	document.writeln( html );
}

// explore 변경 관련 - object
function load_object( src, w, h, id ) {
	if( typeof( id ) == "undefined" ) id = "";

	html = '';
	html += '<OBJECT width="' + w + '" height="' + h + '" id="' + id + '">';
	html += '<param name="movie" value="' + src + '">';
    html += '<param name="quality" value="high">';
	html += '<param name="wmode" value="transparent">';
	html += '<embed src="' + src + '" quality="high" width="' + w + '" height="' + h + '"></embed>';
	html += '</OBJECT>';
	
	document.writeln( html );
}

// space 막기 useage : HTML -> <ELEMENT onkeydown="defenseNull()">
function defenseNull() {
	if( event.keyCode == 32 ) event.returnValue = false;
}

// 숫자,영어,"_" 만 입력받기 useage : HTML -> <ELEMENT onkeydown="onlyId()" style="IME-MODE:DISABLED">
function onlyId() {
	var rtn = false;

	if( event.keyCode >= 33 && event.keyCode <= 40 ) rtn = true;
	if( event.keyCode >= 48 && event.keyCode <= 57 ) rtn = true;
	if( event.keyCode >= 65 && event.keyCode <= 90 ) rtn = true;
	if( event.keyCode >= 96 && event.keyCode <= 105 ) rtn = true;
	if( event.keyCode == 189 && event.shiftKey == true ) rtn = true;
	if( event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 13 || event.keyCode == 46 ) rtn = true;
	
	if( rtn ) {
		return;
	}
	else {
		event.returnValue = false;
	}
}

// 엔터 막기 useage : HTML -> <ELEMENT onKeyDown="defenseSubmit()">
function defenseSubmit() {
	if( event.keyCode == 13 ) event.returnValue = false;
}

//숫자만 입력받기 useage : HTML -> <ELEMENT onkeydown="onlynumber()" style="IME-MODE:DISABLED">
function onlyNumber( canfloat ) {
	var rtn = false;
	if( canfloat !== true ) canfloat = false;

	if( !event.shiftKey ) {
		if( event.keyCode >= 33 && event.keyCode <= 40 ) rtn = true;
		if( event.keyCode >= 48 && event.keyCode <= 57 ) rtn = true;
		if( event.keyCode >= 96 && event.keyCode <= 105 ) rtn = true;
		if( event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 13 || event.keyCode == 46 ) rtn = true;
		if( canfloat == true && ( event.keyCode == 110 || event.keyCode == 190 || event.keyCode == 109 || event.keyCode == 189 ) ) rtn = true;
	}

	if( rtn ) {
		return;
	}
	else{
		event.returnValue = false;
	}
}

function noChar() {
	if( event.keyCode == 9 ) return;
	var val = event.srcElement.value;
	var newVal = val.replace( /[^0-9]/gi, "" );
	event.srcElement.value = newVal;
}

function numCheck() {
	val = event.srcElement.value;
	str=" "+"-0123456789";
	for(i=0;i<val.length;i++) {
		if(str.indexOf(val.substring(i,i+1))<=0) {
			alert("숫자만 입력하세요");
			event.srcElement.value="";
			event.srcElement.focus();
			return;
		}
	}
}

function onlyNumeric() {
	var val = event.srcElement.value;
	if( val && !val.match( /^[-|0-9.][0-9.]*$/gi ) ) {
		alert( "숫자만 입력해 주세요." );
		event.srcElement.value = "";
		event.srcElement.focus();
		return;
	}
}

function moneyCheck() {
	var val = event.srcElement.value.replace(/[ ]/g,'');
	if( val && !val.match( /^[0-9\-\+\,]*$/gi ) ) {
		alert( "숫자만 입력해 주세요." );
		event.srcElement.value = "";
		event.srcElement.focus();
		return;
	}
}

// 숫자체크 후 트루/펄스 반환 by Bread
function numericCheck(val) {
	if(val.match(/^[-|0-9][0-9]*$/gi)) return true;
	else return false;
}

// 양수만 트루로 반환 by Bread
function numberCheck(val) {
	if( val.match( /^[0-9]*$/gi ) ) return true;
	else return false;
}

//숫자가 아닌경우는 비우고 다시 시작
function phoneCheck() {
	val=event.srcElement.value;
	str=" -0123456789";
	for(i=0;i<val.length;i++) {
		if(str.indexOf(val.substring(i,i+1))<=0) {
			alert("잘못된 전화번호입니다.");
			event.srcElement.value="";
			event.srcElement.focus();
			return;
		}
	}
}

// 일정입력뒤에 다음으로 전환
function moveNext( obj, num ) {
	val = event.srcElement.value;
	if( val.length == num ) obj.focus();
}

//비활성화..
function checkCheckBox( form,val,obj1, obj2 ) {
	val=event.srcElement.checked;
	if(obj1=="COPYRIGHT") {
		if(val) {
			eval("form."+obj1+".style.background='#FFFFFF'");
			if(obj2!="") eval("form."+obj2+".style.background='#FFFFFF'");
		}
		else {
			eval("form."+obj1+".style.background='#EEEEEE'");
			if(obj2!="") eval("form."+obj2+".style.background='#EEEEEE'");
		}
	}
	else {
		if(val) {
			eval("form."+obj1+".style.background='#EEEEEE'");
			if(obj2!="") eval("form."+obj2+".style.background='#EEEEEE'");
		}
		else {
			eval("form."+obj1+".style.background='#FFFFFF'");
			if(obj2!="") eval("form."+obj2+".style.background='#FFFFFF'");
		}
	}
	return;
}

//포커스 못오게..
function checkBlur( val ) {
	if(val) event.srcElement.blur();
	return;
}

function checkAll( form, chk ) {
	if( chk == true ) {
		for( var i = 0; i < form.length; i++ ) {
			if( form[i].type == "checkbox" && form[i].checked == false ) {
				form[i].checked = true;
			}
		}
	}
	else {
		for( var i = 0; i < form.length; i++ ) {
			if( form[i].type == "checkbox" && form[i].checked == true ) {
				form[i].checked = false;
			}
		}
	}
}

function checkAllWithName( form, name, chk ) {
	if( chk == true ) {
		for( var i = 0; i < form.length; i++ ) {
			if( form[i].type == "checkbox" && form[i].name == name && form[i].checked == false ) {
				form[i].checked = true;
			}
		}
	}
	else {
		for( var i = 0; i < form.length; i++ ) {
			if( form[i].type == "checkbox" && form[i].name == name && form[i].checked == true ) {
				form[i].checked = false;
			}
		}
	}
}

function checkAllOverFormWithName( name, chk ) {
	if( chk == true ) {
		for( var i = 0; i < document.forms.length; i++ ) {
			for( var j = 0; j < document.forms[i].length; j++ ) {
				if( document.forms[i][j].type == "checkbox" && document.forms[i][j].name == name && document.forms[i][j].checked == false ) {
					document.forms[i][j].checked = true;
				}
			}
		}
	}
	else {
		for( var i = 0; i < document.forms.length; i++ ) {
			for( var j = 0; j < document.forms[i].length; j++ ) {
				if( document.forms[i][j].type == "checkbox" && document.forms[i][j].name == name && document.forms[i][j].checked == true ) {
					document.forms[i][j].checked = false;
				}
			}
		}
	}
}

function checkAllWithoutFormWithName( name, chk ) {
	if( chk == true ) {
		for( var i = 0; i < document.all.length; i++ ) {
			if( document.all[i].type == "checkbox" && document.all[i].name == name && document.all[i].checked == false ) {
				document.all[i].checked = true;
			}
		}
	}
	else {
		for( var i = 0; i < document.all.length; i++ ) {
			if( document.all[i].type == "checkbox" && document.all[i].name == name && document.all[i].checked == true ) {
				document.all[i].checked = false;
			}
		}
	}
}
function zipWin(formName, zip1, zip2, addr1, addr2) {
	var zipWin = window.open( "/member/pop_zip.html?formName=" + formName + "&zip1=" + zip1 + "&zip2=" + zip2 + "&addr1=" + addr1 + "&addr2=" + addr2, "","width=470 ,height=300, top=200, left=200, scrollbars=yes" );
	zipWin.focus();
}

function checkId( field ) {
	var len = field.length;

	var str = "4자 이상 12자 이하의\n영문자/숫자 조합으로 입력해주세요.\n첫글자는 영문이어야 합니다.";

	if( len == 0 ) return true;

 	// 길이는 4자 이상 12자 이하
	if( len < 4 || len > 12 ) {
		alert( str )
		event.srcElement.focus();
		return false;
	}
	// 영문자 및 숫자
	if( !field.match( /^[a-zA-Z][0-9a-zA-Z]*$/gi ) ) {
		alert( str );
		event.srcElement.focus();
		return false;
	}

	return true;
}


function checkEmail(field) {
	if(field.length>0) {
		if( ( field.indexOf(".")<0 ) || ( field.indexOf("@")<0) ) {
				alert("잘못된 메일주소입니다.");
				event.srcElement.value="";
				event.srcElement.focus();
				return;
		}
	}
}


// 아스키코드값을 이용한 한글만 입력받기
function hanCheck(str){
	if(str.length>0) {
		var len;
        len = str.length;
        for (i=0;i<len;i++) {
			if (str.charCodeAt(i) < 128 ) {
				alert('이 항목에는 한글만 입력가능합니다.');
				event.srcElement.value="";
				event.srcElement.focus();
				return;
			}
		}
	}
}

// 주민번호 검사 by Bread
function checkJumin( form, jumin1, jumin2 ) {
	var str = "잘못된 주민등록번호입니다.";
		
	// 일단 유효성 체크
	if( !numberCheck( jumin1.value ) ) {
		alert( "숫자만 입력하셔야 합니다." );
		jumin1.focus();
		return false;
	}
	if( jumin1.value.length != 6 ) {
		alert( str );
		jumin1.focus();
		return false;
	}
	if( !numberCheck( jumin2.value ) ) {
		alert( "숫자만 입력하셔야 합니다." );
		jumin2.focus();
		return false;
	}
	if( jumin2.value.length != 7 ) {
		alert( str );
		jumin2.focus();
		return false;
	}
	
	var jumin = jumin1.value + jumin2.value;

	var len1 = jumin1.value.length;
	var len2 = jumin2.value.length;
	var len = len1 + len2;

	var gender = eval( jumin2.value.substring(0,1) );
	var year = eval( jumin1.value.substring(0,2) );
	var month = eval( jumin1.value.substring(2,4) );
	var day = eval( jumin1.value.substring(4,6) );

	var lastNum = eval( jumin.substring(12,13) );

	//성별체크
	if( gender == 1 || gender == 2 ) year += 1900;
	else if( gender == 3 || gender == 4 ) year += 2000;
	else {
		alert( str );
		jumin2.focus();
		return false;
	}

	// 날짜체크
	if( year < 1900 || month > 12 || day > 31 ) {
		alert( str );
		jumin1.focus();
		return false;
	}

	//주민번호 알고리즘 체크
	var chk = 0;
	for( var i = 0; i <= 5; i++ ) {
		chk = chk + ( ( i % 8 + 2 ) * eval( jumin1.value.substring(i,i + 1 ) ) );
	}
	for (var i = 6; i <=11 ; i++){
		chk = chk + ( ( i % 8 + 2 ) * eval( jumin2.value.substring(i - 6, i - 5 ) ) );
	}

	var okNum = 11 - ( chk % 11 );
	if( okNum > 9 ) okNum = okNum % 10;
	if( lastNum != okNum ) {
		alert( str );
		jumin1.focus();
		return false;
	}
	
	return true;
}

function wishInsert( code ) {
	exeFrame.location="/shopuser/mypage/wishlistInsert.html?code=" + code;
	return;
}

function cartInsert( code, kind ) {
	var cartref = "";
	if( !self.location.href.match( /\/shopuser\/goods\/cart.html/gi ) ) {
		// ? 및 & 변환 후 넘긴다.
		cartref = self.location.href.replace( "?", "::Q::" );
		cartref = cartref.replace( /&/gi, "::A::" );
	}
	exeFrame.location = "/shopuser/goods/simpleCartInsert.html?code=" + code + "&kind=" + kind + "&cartref=" + cartref;
	return;
}

function compareGood( form ) {
	var num = 0;
	for( i = 0; i < form.length; i++ ) {
		if( form.elements[i].type == "checkbox" && form.elements[i].checked ) num += 1;
	}

	if( num == 0 ) {
		alert( "비교할 상품을 선택해 주세요." );
		return;
	}
	else if( num > 3 ) {
		alert( "최대 3개의 상품까지\n비교가 가능합니다." );
		return;
	}
	else {
		window.open( "", "compare", "top=100,left=100,width=766, height=600, scrollbars=yes, resizable=1" );
		form.target = "compare";
		form.action = "/shopuser/goods/compareView.html";
		form.submit();
	}
}

function cartGood( form ) {
	var num = 0;
	for( i = 0; i < form.length; i++ ) {
		if( form.elements[i].type == "checkbox" && form.elements[i].checked ) num += 1;
	}

	if( num == 0 ) {
		alert( "장바구니에 담을 상품을\n선택해 주세요." );
		return;
	}
	else {
		form.target = "exeFrame";
		var cartref = self.location.href;
		form.action = "/shopuser/goods/listCartInsert.html?cartref=" + cartref;
		form.submit();
	}
}

function bigImg( img, width, height, top, left, added ) {
	if( typeof(cur_num) == "undefined" ) cur_num = 1;
	window.open( "/shopuser/goods/bigImage.html?img=" + escape(img) + "&cur_num=" + cur_num + "&width=" + width + "&height=" + height, "", "top=" + top + ", left=" + left + ", width=" + width + ", height=" + height + added );
}

function bigImgSimple( img, width, height, top, left, added ) {
	window.open( "/shopuser/goods/bigImage.html?img=" + escape(img) + "&cur_num=1&width=" + width + "&height=" + height, "", "top=" + top + ", left=" + left + ", width=" + width + ", height=" + height + added );
}

function receptPrint( ordno ) {
	window.open( "/shopuser/mypage/recept.html?ordno=" + ordno, "", "top=100, left=100, width=638, height=600, scrollbars=yes, resizable=1");	
}

function checkOut( ordno, paymethod ) {
	window.open( "checkForm.html?ordno=" + ordno + "&paymethod=" + paymethod, "check", "top=100, left=100, width=555, height=280" );
	return;		
}

function checkCancel( ordno, popuptype ) {
	if( confirm( "주문을 취소합니다\n정말 취소하시겠습니까?" ) ) {
		exe.location.href = "cancelOrderExe.html?ordno=" + ordno;
	}
	return;
}

function etcgoodView( etcno ) {
	window.open( "/shopuser/goods/etcgoodView.html?etcno=" + etcno, "", "top=100, left=100, width=518, height=532" );
}

function goWrite( url, time, qrystring ) {
	self.location = url + "?refer=" + time + qrystring;
}

function getCookie( name ) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;

  while( i < clen ) {
	  var j = i + alen;

	  if( document.cookie.substring(i,j) == arg ) {
		  var end = document.cookie.indexOf( ";", j );
		  if( end == -1 ) end = document.cookie.length;
		  return unescape( document.cookie.substring( j, end ) );
	  }

	  i = document.cookie.indexOf( " ", i ) + 1;
	  if( i == 0 ) break;
  }

  return null;
}

function boardWin( url, top, left ) {
	if( top == null ) top = 200;
	if( left == null ) left = 200;

	var boardWin = window.open( url, "boardWin", "top=" + top + ", left=" + left + ", width=100, height=100, resizable=1, scrollbars=yes" );
	boardWin.focus();
}

function formMail() {
	var formMailWin = window.open( '/shopuser/etc/formmail.html', 'formMailWin', 'top=200, left=200, width=100, height=100' );
	formMailWin.focus();
}

function myForm( id ) {
	var myFormWin = window.open( '/shopuser/etc/myForm.html?form_id=' + id, 'myFormWin', 'top=200, left=200, width=100, height=100, scrollbars=yes' );
	myFormWin.focus();
}

function showLayer( chk, layerid ) {
	if( typeof( layerid ) == "string" ) layerid = document.getElementById( layerid );

	if( chk ) layerid.style.display = "";
	else layerid.style.display = "none";
}

function showLayerYn( val, layer ) {
	if( typeof( layerid ) == "string" ) layerid = document.getElementById( layerid );

	if( val == "n" ) layer.style.display = "none";
	else if( val == "y" ) layer.style.display = "";
}

function showLayerNoChk( layerid ) {
	if( typeof( layerid ) == "string" ) layerid = document.getElementById( layerid );

	if( layerid.style.display == "none" ) layerid.style.display = "";
	else layerid.style.display = "none";
}

function setDisabled( chk, obj ) {
	if( chk ) obj.disabled = true;
	else obj.disabled = false;
}

function setChecked( chk, obj ) {
	if( chk ) obj.checked = true;
	else obj.checked = false;
}

function syncHeight( id, added ) {
	if( added == null ) added = 0;
	obj = document.all( id );
	obj.height = obj.contentWindow.document.body.scrollHeight + added;
}

function syncHeightChild( id ) {
	obj = parent.document.all( id );
	//alert(document.body.scrollHeight);
	obj.height = document.body.scrollHeight;
}

function get_js_date( php_date ) {
	var tmp_year = php_date.substring( 0, 4 );
	var tmp_month = eval( php_date.substring( 5, 7 ) ) - 1;
	var tmp_day = eval( php_date.substring( 8, 10 ) );

	var js_date = new Date( tmp_year, tmp_month, tmp_day );

	return js_date;
}

function commaSplit( srcNumber ) {
    var txtNumber = '' + srcNumber;
    var rxSplit = new RegExp( '([0-9])([0-9][0-9][0-9][,.])' );
    var arrNumber = txtNumber.split( '.' );
    arrNumber[0] += '.';
    do {
        arrNumber[0] = arrNumber[0].replace( rxSplit, '$1,$2' );
    }
	while( rxSplit.test( arrNumber[0] ) );
    if( arrNumber.length > 1 ) {
        return arrNumber.join( '' );
    }
	else {
        return arrNumber[0].split( '.' )[0];
    }
}

// 컨텐츠보호 온오프
function protectOnOff( onoff ) {
	if( onoff == null ) onoff = true;

	if( onoff ) {
		document.oncontextmenu	= function() {
			var e = window.Event ? window.Event : event;

			e.returnValue = false;
			e.cancelBubble = true;
			return false;
		}
		document.onselectstart		= new Function( "return false;" );
		document.ondragstart		= new Function( "return false;" );
	}
	else {
		document.oncontextmenu	= new Function( "return true;" );
		document.onselectstart		= new Function( "return true;" );
		document.ondragstart		= new Function( "return true;" );
	}
}

function protectKeyDown( onoff ) {
	if( onoff == null ) onoff = true;

	if( onoff ) {
		document.onkeydown = function() {
			var e = window.Event ? window.Event : event;

			e.keyCode = 0;
			e.returnValue = false;
			e.cancelBubble = true;
		}
	}
	else {
		document.onkeydown = null;
	}
}

function bluring() { 
	var e = window.Event ? window.Event : event;

	try {
		if( e.srcElement.tagName.toUpperCase() == "A" || e.srcElement.tagName.toUpperCase() == "IMG" || e.srcElement.type == "radio" || e.srcElement.type == "checkbox" || e.srcElement.type == "image" || e.srcElement.type == "button" ) {
			document.body.focus(); 
		}
	}
	catch( e ) {}
}

function noContent() {
	var e = window.Event ? window.Event : event;

	try {
		if( e.srcElement.tagName.toUpperCase() == "INPUT" || e.srcElement.tagName.toUpperCase() == "TEXTAREA" ) {
			protectOnOff( false );
			//protectKeyDown( false );
		}
		else {
			protectOnOff( true );
			//protectKeyDown( true );
		}
	}
	catch( e ) {}
}

function empty( chkval ) {
	if( event.srcElement.value == chkval ) event.srcElement.value = "";
}

function winObjClose( obj_name ) {
	var chk = obj_name.location + null;
	if( obj_name && chk != undefined ) obj_name.close();
}

// 쿠키 생성하는 함수 : 입력값 - 쿠키이름 + 쿠키값 + 유효기간
function setCookie( name, value, expires ) {
	document.cookie = name + "=" + escape(value) + ( ( expires == null ) ? "" : ( ";expires = " + expires.toGMTString() ) )+ "; path=";
}

function setCookieSimple( name, value, expiresSec ) {
	var today = new Date();
	var expires = new Date();
	expires.setTime( today.getTime() + ( expiresSec * 1000 ) );
	setCookie( name, value, expires );
}

function setCookieYear( name, value ) {
	var expires = new Date();
	expires.setTime( today.getTime() + ( 1000 * 60 * 60 * 24 * 365 ) );

	setCookie( name, value, expires );
}

function setCookieWithPHP( name, value, expires ) {
	if( expires == null ) expires = "0";

	actScript.src = "/lib/setCookie.php?name=" + name + "&value=" + value + "&expires=" + expires;

	return;
}

function setBackgroundColor( obj, color ) {
	obj.style.backgroundColor = color;
}

function trim( str ) {
	return str.replace( /(^\s*)|(\s*$)/g, "" ); 
}

function makeTarget( targetName ) {
	if( targetName == null ) targetName = "_mySubmitFrame";

	if( isIE ) {
		var oIFRAME = document.createElement( "<IFRAME name='" + targetName + "' id='" + targetName + "' style='display:none;'></IFRAME>" );
	}
	else {
		var oIFRAME = document.createElement( "IFRAME" );
		oIFRAME.name = targetName;
		oIFRAME.id = targetName;
		oIFRAME.style.display = "none";
	}
	document.body.appendChild( oIFRAME );

	return targetName;
}

function make_target( targetName ) {
	makeTarget( targetName );
}

function exeOnSubmit( frmObj ) {
	frmObj.target = makeTarget();
}

function exeSubmit( frmObj ) {
	if( typeof( frmObj ) == "string" ) frmObj = document.forms[frmObj];

	if( isIE ) {
		var oIFRAME = document.createElement( "<IFRAME name='_mySubmitFrame' id='_mySubmitFrame' style='display:none;'></IFRAME>" );
	}
	else {
		var oIFRAME = document.createElement( "IFRAME" );
		oIFRAME.name = "_mySubmitFrame";
		oIFRAME.id = "_mySubmitFrame";
		oIFRAME.style.display = "none";
	}
	document.body.appendChild( oIFRAME );

	frmObj.target = '_mySubmitFrame';
	frmObj.submit();
}

function exe_submit( frmObj ) {
	exeSubmit( frmObj );
}

function exeUrl( strURL ) {
	var oIFRAME = document.createElement( "<IFRAME style='display:none'></IFRAME>" );
	document.body.appendChild( oIFRAME );
	oIFRAME.src = strURL;
}

function setValue( obj, val ) {
	obj.value = val;
}

function adminPop( url ) {
	window.open( url, "", "top=30, left=30, width=100, height=100, scrollbars=yes" );
}

function adminPop2( url, width, height ) {
	window.open( url, "", "top=30, left=30, width=" + width + ", height=" + height + ", scrollbars=yes" );
}

// 해당이미지만큼의 큰창 띄우기
function popImgWindow( img ) {
	var imgWin = window.open( "/shopuser/etc/imgWindow.html?img=" + img, "", "width=100, height=100, noresize, scrollbars=no" );
	imgWin.focus();
}


function showLayerForObj( obj, layerID, interHeight ) {
	var leftpos = 0;
	var toppos = 0;

	if( interHeight == null ) interHeight = 2;

	aTag = obj;
	do {
		aTag		=		aTag.offsetParent;
		leftpos	+=		aTag.offsetLeft;
		toppos		+=		aTag.offsetTop;
	}
	while( aTag.tagName != "BODY" );

	var targetLayer			=	layerID.style;
	targetLayer.left			=	obj.offsetLeft	 + leftpos;
	targetLayer.top			=	obj.offsetTop + toppos + obj.offsetHeight + interHeight;
	targetLayer.width		=	obj.offsetWidth + interHeight;

	targetLayer.visibility = '';
}

function hideLayerForObj( layerID ) {
	var targetLayer		=	layerID.style;

	targetLayer.visibility = 'hidden';
}

function click2copy( txt ) {
	clipboardData.setData( 'Text', txt );
}

// 공동구매 남은시간 표시함수
function left_time( lt ) {
	var lefttime_count = new Date(2000, 0, 1, 0, 0, lt);
	var strLeftTime = "";

	if(lefttime_count.getMonth() > 0 || lefttime_count.getDate() > 1) strLeftTime = Math.floor(lt/(60*60*24)) + "일 ";
	if(lefttime_count.getHours() > 0 ) strLeftTime += lefttime_count.getHours() + "시간 ";
	if(lefttime_count.getMinutes() > 0 ) strLeftTime += lefttime_count.getMinutes() + "분 ";
	if(lefttime_count.getSeconds() > 0 ) strLeftTime += lefttime_count.getSeconds() + "초";
	return strLeftTime;
}

function left_count(lt,layerid){
	if( lt > 0 ){
		var lefttime_layer = document.getElementById(layerid);
		var timestr = left_time(lt);
		lefttime_layer.innerHTML = timestr;
		lt--;
		setTimeout("left_count("+lt+",'"+layerid+"')",1000);
	}
}

function pre_editnumber(){
	var t = event.srcElement;
	t.value = t.value.replace(/,/g,'');
	t.select();
}

function aft_editnumber(){
	var t = event.srcElement;
	var str = t.value.replace(/,/g,'');
	var tmpchk = str.substring(0,1);
	if( tmpchk == '-' || tmpchk == '+' ){
		str = str.substring(1,str.length);
	}
	var tmp = '';
	for( var i=str.length; i>0; i-=3 ){
		tmp = str.substring(i-3,i) + (tmp!=''?',':'') + tmp;
	}
	if( tmpchk == '-' || tmpchk == '+' ){
		tmp = tmpchk + tmp;
	}
	t.value = tmp;
}

function getOffsetLeftTop( obj ) {
	var x = 0;
	var y = 0;

	var a_obj = obj;
	do {
		a_obj = a_obj.offsetParent;
		x += a_obj.offsetLeft;
		y += a_obj.offsetTop;
	}
	while( a_obj.tagName != "BODY" );

	return new Array( x, y );
}

function trim( str ) {
      var count = str.length;
      var len = count;                
      var st = 0;

      while( st < len && str.charAt( st ) <= ' ' ) {
         st++;
      }

      while ( st < len && str.charAt( len - 1 ) <= ' ' ) {
         len--;
      }

      return ( st > 0 || len < count ) ? str.substring( st, len ) : str;   
}

function script_src( url ) {
	var scripts = document.createElement( "SCRIPT" );
	document.body.appendChild( scripts );

	scripts.src = url;
}

function get_query_from_form( form ) {
	var rtn = "";

	rtn += "&form_name=" + form.name;

	for( var i = 0; i < form.length; i++ ) {
		switch( form[i].type ) {
			case "checkbox" :
			case "radio" :
				if( form[i].checked ) rtn += "&" + form[i].name + "=" + ( form[i].value.url_encode() );
				break;
			case "select-one" :
				rtn += "&" + form[i].name + "=" + ( form[i][form[i].selectedIndex].value.url_encode() );
				break;
			default :
				rtn += "&" + form[i].name + "=" + ( form[i].value.url_encode() );
				break;
		}
	}

	return rtn;
}

function form_var_chk( form, form_name, form_val ) {
	var obj = form.elements[form_name];

	var chk = false;

	var obj_type;

	if( typeof( obj ) == "object" ) {
		if( obj.type == undefined ) obj_type = "radio";
		else obj_type = obj.type;

		switch( obj_type ) {
			case "text" :
			case "textarea" :
			case "password" :
			case "hidden" :
				if( obj.value == form_val ) chk = true;
				break;
			case "checkbox" :
				if( obj.checked && obj.value == form_val ) chk = true;
				break;
			case "radio" :
				if( typeof( obj.length ) == "number" ) {
					for( var i = 0; i < obj.length; i++ ) {
						if( obj[i].checked && obj[i].value == form_val ) chk = true;
					}
				}
				else {
					if( obj.checked && obj.value == form_val ) chk = true;
				}
				break;
			case "select-one" :
				if( obj[obj.selectedIndex].value == form_val ) chk = true;
				break;
		}
	}

	return chk;
}

function form_empty_chk( form, form_name, msg, target_form_name, func ) {
	if( msg == null ) msg = "";
	if( target_form_name == null ) target_form_name = "";
	if( func == null ) func = "focus";

	var obj = form.elements[form_name];
	var obj_target = target_form_name ? form.elements[target_form_name] : null;

	var chk = false;
	var fs_chk = false;

	var obj_type;

	if( typeof( obj ) == "object" ) {
		if( obj.type == undefined ) obj_type = "radio";
		else obj_type = obj.type;

		switch( obj_type ) {
			case "text" :
			case "textarea" :
				obj.value = trim( obj.value );
				if( obj.value != "" ) chk = true;
				fs_chk = true;
				break;
			case "password" :
				obj.value = trim( obj.value );
				if( obj.value != "" ) chk = true;
				fs_chk = true;
				break;
			case "checkbox" :
				if( obj.checked ) chk = true;
				break;
			case "radio" :
				if( typeof( obj.length ) == "number" ) {
					for( var i = 0; i < obj.length; i++ ) {
						if( obj[i].checked ) chk = true;
					}
				}
				else {
					if( obj.checked ) chk = true;
				}
				break;
			case "select-one" :
				if( obj.selectedIndex > 0 ) chk = true;
				fs_chk = true;
				break;
			case "hidden" :
				obj.value = trim( obj.value );
				if( obj.value != "" ) chk = true;
				break;
		}
	}

	if( chk == true ) {
		return true;
	}
	else {
		if( msg ) alert( msg );

		if( fs_chk ) {
			if( obj_target ) eval( "obj_target." + func + "();" );
			else eval( "obj." + func + "();" );
		}
		else {
			if( obj_target && func ) eval( "obj_target." + func + "();" );
		}

		return false;
	}
}

function form_length_chk( form, form_name, msg, min, max, func ) {
	if( msg == null ) msg = "";
	if( min == null ) min = 0;
	if( max == null ) max = 0;
	if( func == null ) func = "focus";

	var obj = form.elements[form_name];

	var chk = true;
	var fs_chk = false;

	if( typeof( obj ) == "object" ) {
		switch( obj.type ) {
			case "text" :
			case "textarea" :
				obj.value = trim( obj.value );

				if( min && obj.value.length < min ) chk = false;
				if( max && obj.value.length > max ) chk = false;
				fs_chk = true;
				break;
			case "password" :
				obj.value = trim( obj.value );
				if( min && obj.value.length < min ) chk = false;
				if( max && obj.value.length > max ) chk = false;
				fs_chk = true;
				break;
		}
	}

	if( chk == true ) {
		return true;
	}
	else {
		if( msg ) alert( msg );

		if( fs_chk ) {
			eval( "obj." + func + "();" );
		}

		return false;
	}
}

function form_regexp_chk( form, form_name, msg, regexp, func ) {
	if( msg == null ) msg = "";
	if( regexp == null ) regexp = "";
	if( func == null ) func = "focus";

	var obj = form.elements[form_name];

	var chk = false;
	var fs_chk = false;

	if( typeof( obj ) == "object" && regexp ) {
		var re = new RegExp( regexp, "g" );

		switch( obj.type ) {
			case "text" :
			case "textarea" :
				obj.value = trim( obj.value );
				if( obj.value.match( re ) ) chk = true;
				fs_chk = true;
				break;
			case "password" :
				obj.value = trim( obj.value );
				if( obj.value.match( re ) ) chk = true;
				fs_chk = true;
				break;
		}
	}

	if( chk == true ) {
		return true;
	}
	else {
		if( msg ) alert( msg );

		if( fs_chk ) {
			eval( "obj." + func + "();" );
		}

		return false;
	}
}

function form_same_chk( form, form_name1, form_name2, msg, func ) {
	if( msg == null ) msg = "";

	var obj1 = form.elements[form_name1];
	var obj2 = form.elements[form_name2];

	var chk = false;
	var fs_chk = false;

	if( typeof( obj1 ) == "object" &&  typeof( obj2 ) == "object" ) {
		if( obj1.type == obj2.type ) {
			switch( obj1.type ) {
				case "text" :
				case "textarea" :
					obj1.value = trim( obj1.value );
					obj2.value = trim( obj2.value );
					if( obj1.value == obj2.value ) chk = true;
					fs_chk = true;
					break;
				case "password" :
					obj1.value = trim( obj1.value );
					obj2.value = trim( obj2.value );
					if( obj1.value == obj2.value ) chk = true;
					fs_chk = true;
					break;
			}
		}
	}

	if( chk == true ) {
		return true;
	}
	else {
		if( msg ) alert( msg );

		if( fs_chk ) {
			eval( "obj1." + func + "();" );
		}

		return false;
	}
}

function make_form( name, method, target, action ) {
	var oForm = document.createElement( "FORM" );
	oForm.style.display = "none";
	if( name ) oForm.name = name;
	if( method ) oForm.method = method;
	if( target ) oForm.target = target;
	if( action ) oForm.action = action;
	document.body.appendChild( oForm );

	return oForm;
}

function make_elements( oForm, type, name, value ) {
	var oInput = document.createElement( "INPUT" );
	oInput.type = type;
	oInput.name = name;
	oInput.value = value;

	oForm.insertBefore( oInput );
}



String.prototype.bytes = function() {
    var str = this;

    var l = 0;
    for( var i = 0; i < str.length; i++ )
        l += ( str.charCodeAt( i ) > 128 ) ? 2 : 1;

    return l;
}

String.prototype.trim = function() {
    return this.replace( /(^\s*)|(\s*$)/g, "" ); 
}




String.prototype.url_encode = function url_encode() {
	var SAFECHARS = "0123456789" + // Numeric
							"ABCDEFGHIJKLMNOPQRSTUVWXYZ" + // Alphabetic
							"abcdefghijklmnopqrstuvwxyz" +
							"-_.!~*'()"; // RFC2396 Mark characters
	var HEX = "0123456789ABCDEF";
	var plaintext = this;
	var encoded = "";

	for( var i = 0; i < plaintext.length; i++ ) {
		var ch = plaintext.charAt( i );
		
		if( ch == " " ) {
			encoded += "+"; // x-www-urlencoded, rather than %20
		}
		else if( SAFECHARS.indexOf( ch ) != -1 ) {
			encoded += ch;
		}
		else {
			var charCode = ch.charCodeAt( 0 );
			if( charCode > 255 ) {
				/*
				alert( "Unicode Character '"
						+ ch
						+ "' cannot be encoded using standard URL encoding.\n" +
						"(URL encoding only supports 8-bit characters.)\n" +
						"A space (+) will be substituted." );
				encoded += "+";
				*/
				encoded += ch;
			}
			else {
				encoded += "%";
				encoded += HEX.charAt( ( charCode >> 4 ) & 0xF );
				encoded += HEX.charAt( charCode & 0xF );
			}
		}
	} // for

	return encoded;
};

String.prototype.url_decode = function url_decode() {
   var HEXCHARS = "0123456789ABCDEFabcdef";
   var encoded = this;
   var plaintext = "";
   var i = 0;

   while( i < encoded.length ) {
       var ch = encoded.charAt( i );

		if( ch == "+" ) {
			plaintext += " ";
			i++;
		}
		else if( ch == "%" ) {
			if( i < ( encoded.length - 2 )
				&& HEXCHARS.indexOf( encoded.charAt( i + 1 ) ) != -1
				&& HEXCHARS.indexOf( encoded.charAt( i + 2 ) ) != -1 ) {
				plaintext += unescape( encoded.substr( i, 3 ) );
				i += 3;
			}
			else {
				alert( 'Bad escape combination near ...' + encoded.substr( i ) );
				plaintext += "%[ERROR]";
				i++;
			}
		}
		else {
			plaintext += ch;
			i++;
		}
	} // while
	
	return plaintext;
};















function LoadDataControl()
{
	this.xmlHttp = null;
	this.bw = new Object;
	this.getHttpRequest = function(url,data,method,sload,async,user,password,callback){
		var sload = (!!this.getHttpRequest.arguments[3])?sload:false;
		if(sload || method.toUpperCase() == 'GET')url += "?";
		if(sload) url=url+"t="+(new Date()).getTime();

		var xmlHttp = this.xmlHttp;
		var xmlData = null;
		if(!xmlHttp){
			xmlHttp = this.createHttpRequest();
		}

		this.chkAjaBrowser();
		var opera	  = this.bw.opera;
		var safari	  = this.bw.safari;
		var konqueror = this.bw.konqueror;
		var mozes	  = this.bw.mozes ;

		if(opera || safari || mozes){
			xmlHttp.onload = function () {
				var xmlData = xmlHttp.responseXML;
				var txtData = xmlHttp.responseText;
				callback(xmlHttp,txtData);
			}
		} else {
			xmlHttp.onreadystatechange = function () 
			{
				/*
				0 (Uninitialized) The object has been created, but not initialized (the open method has not been called). 
				1 (Open) The object has been created, but the send method has not been called. 
				2 (Sent) The send method has been called, but the status and headers are not yet available. 
				3 (Receiving) Some data has been received. Calling the responseBody and responseText properties at this state to obtain partial results will return an error, because status and response headers are not fully available. 
				4 (Loaded) All the data has been received, and the complete data is available. 
				*/
				//if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 && xmlHttp.statusText=='OK' ){
				if ( xmlHttp.readyState == 4 ){
					var xmlData = xmlHttp.responseXML;
					var txtData = xmlHttp.responseText;
					callback(xmlHttp,txtData);
				}
			}
		}

		data = this.urlEncode(data);
		if(method.toUpperCase() == 'GET') {
			url += data;
		}

		xmlHttp.open(method,url,async,user,password);
		this.setEncHeader(xmlHttp);
		xmlHttp.send(data);
	}
	this.getUrl = function(url,data,listgood){
		this.getHttpRequest(url,data,"GET",true,true,"","",listgood);
	}
	this.chkAjaBrowser = function()
	{
		var a,ua = navigator.userAgent;
		this.bw = { 
		  safari    : ((a=ua.split('AppleWebKit/')[1])?a.split('(')[0]:0)>=124 ,
		  konqueror : ((a=ua.split('Konqueror/')[1])?a.split(';')[0]:0)>=3.3 ,
		  mozes     : ((a=ua.split('Gecko/')[1])?a.split(" ")[0]:0) >= 20011128 ,
		  opera     : (!!window.opera) && ((typeof XMLHttpRequest)=='function') ,
		  msie      : (!!window.ActiveXObject)?(!!this.createHttpRequest()):false 
		}
	}

	this.getXmlRootNode = function(nodes, rootName){
		var rootNode = nodes.getElementsByTagName(rootName);
		return rootNode;
	}

	this.createHttpRequest = function(){
		if(window.ActiveXObject){
			try {
				return new ActiveXObject("Msxml2.XMLHTTP") ;
			} catch (e) {
				try {
					return new ActiveXObject("Microsoft.XMLHTTP") ;
				} catch (e2) {
					return null ;
	 			}
	 		}
		} else if(window.XMLHttpRequest){
			return new XMLHttpRequest() ;
		} else {
			return null ;
		}
	}

	this.setEncHeader = function(Obj){
		var contentTypeUrlenc = 'application/x-www-form-urlencoded; charset=UTF-8';
		if(!window.opera){
			Obj.setRequestHeader('Content-Type',contentTypeUrlenc);
		} else {
			if((typeof Obj.setRequestHeader) == 'function')
				Obj.setRequestHeader('Content-Type',contentTypeUrlenc);
		}	
		return Obj
	}

	this.urlEncode = function(data){
		if(data!=""){
			var encdata = '';
			var datas = data.split('&');
			for(i=1;i<datas.length;i++)
			{
				var dataq = datas[i].split('=');
				encdata += '&'+encodeURIComponent(dataq[0])+'='+encodeURIComponent(dataq[1]);
			}
		} else {
			encdata = "";
		}
		return encdata;
	}

}

function ElementEvent(e,eT,eL)
{
	eT=eT.toLowerCase();
	var eh='e.on'+eT+'=eL';
	if(e.addEventListener) e.addEventListener(eT,eL,false);
	else if(e.attachEvent) e.attachEvent('on'+eT,eL);
	else eval(eh);
}


function center_div( msg )
{
	if( msg == null ) msg = "";

	try{
		this.divobj = document.createElement("div");
		this.divobj.id = 'loading-layer';
		if( msg ) {
			this.divobj.style.borderTop = '#000000 1px solid';
			this.divobj.style.borderRight = '#000000 1px solid';
			this.divobj.style.borderBottom = '#000000 1px solid';
			this.divobj.style.borderLeft = '#000000 1px solid';

			this.divobj.style.paddingTop = '10px';
			this.divobj.style.paddingRight = '10px';
			this.divobj.style.paddingBottom = '10px';
			this.divobj.style.paddingLeft = '10px';

			this.divobj.style.display = 'none';
			this.divobj.style.fontSize = '11px';
			this.divobj.style.background = '#ffffff';
			this.divobj.style.width = '160px';
			this.divobj.style.height = '50px';
			this.divobj.style.fontFamily = 'Verdana';
			this.divobj.style.textAlign = 'center';
		}
		document.body.appendChild(this.divobj);

		this.divobjtext = document.createElement("div");
		this.divobjtext.id = 'loading-layer-text';
		if( msg ) {
			this.divobjtext.style.fontWeight = 'bold';
			this.divobjtext.innerHTML = msg;
		}
		this.divobj.appendChild(this.divobjtext);

		this.busyobj = document.createElement("div");
		this.busyobj.id = 'busy_layer';
		this.busyobj.style.display = 'block';
		this.busyobj.style.top = '0px';
		this.busyobj.style.left = '0px';
		this.busyobj.style.width = '100%';
		this.busyobj.style.height = '0px';
		this.busyobj.style.visibility = 'hidden';
		this.busyobj.style.position = 'absolute';
		this.busyobj.style.backgroundColor = 'gray';
		this.busyobj.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=15)";
		document.body.appendChild(this.busyobj);
	}catch(e){
		this.divobj = null;
		this.divobjtext = null;
		this.busyobj = null;
	}
}
center_div.prototype.clear_div = function()
{
	try
	{
		if ( ! this.divobj )
		{
			return;
		}
		else
		{
/*
			this.divobj.style.display  = 'none';
			this.busyobj.style.visibility = "hidden";
			this.busyobj.style.height = "0px";
*/
			document.body.removeChild(this.divobj);
			document.body.removeChild(this.busyobj);
		}
	}
	catch(e)
	{
		return;
	}
}
center_div.prototype.Ywindow = function()
{
	var scrollY = 0;
	if ( document.documentElement && document.documentElement.scrollTop )
	{
		scrollY = document.documentElement.scrollTop;
	}
	else if ( document.body && document.body.scrollTop )
	{
		scrollY = document.body.scrollTop;
	}
	else if ( window.pageYOffset )
	{
		scrollY = window.pageYOffset;
	}
	else if ( window.scrollY )
	{
		scrollY = window.scrollY;
	}
	return scrollY;
}
center_div.prototype.move_div = function()
{
	var my_width  = 0;
	var my_height = 0;
	
	if ( typeof( window.innerWidth ) == 'number' )
	{
		my_width  = window.innerWidth;
		my_height = window.innerHeight;
	}
	else if ( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) )
	{
		my_width  = document.documentElement.clientWidth;
		my_height = document.documentElement.clientHeight;
	}
	else if ( document.body && ( document.body.clientWidth || document.body.clientHeight ) )
	{
		my_width  = document.body.clientWidth;
		my_height = document.body.clientHeight;
	}
	if( !this.divobj ){
	}else
	{
		this.divobj.style.position = 'absolute';
		this.divobj.style.display  = 'block';
		this.divobj.style.zIndex   = 99;
		
		var divheight = parseInt( this.divobj.style.Height );
		var divwidth  = parseInt( this.divobj.style.Width );
		
		divheight = divheight ? divheight : 50;
		divwidth  = divwidth  ? divwidth  : 200;
		
		var scrolly = this.Ywindow();
		
		var setX = ( my_width  - divwidth  ) / 2;
		var setY = ( my_height - divheight ) / 2 + scrolly;
		
		setX = ( setX < 0 ) ? 0 : setX;
		setY = ( setY < 0 ) ? 0 : setY;
		
		this.divobj.style.left = setX + "px";
		this.divobj.style.top  = setY + "px";

		this.busyobj.style.height = document.body.scrollHeight + "px";
		this.busyobj.style.visibility = "visible";
	}
}

function showLayer( chk, layerid ) {
	if( typeof( layerid ) == "string" ) layerid = document.getElementById( layerid );

	if( chk ) layerid.style.display = "";
	else layerid.style.display = "none";
}