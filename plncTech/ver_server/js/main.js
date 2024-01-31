$(document).ready(function(){

	//ItemBox, SubTitle, tab_content
	(function(){
		 $('.main_section').addClass('active'); 
		 $('#tab-content >div').hide(); 
		 $('#tab-content > div:first-child').fadeIn();
	})();

    //MainVisual
	(function(){
			var oldidx = 0,
			idx = 0,
			visualBtn =  $('.mainvisual .btn>span'),
			visualImg =  $('.mainvisual ul li'),
			imgLength = visualImg.length,
			duration = 6000;

		function changeImg(idx) {

			if(oldidx!=idx){  
				visualBtn.eq(idx).addClass("active"); 
				visualBtn.eq(oldidx).removeClass("active"); 
				visualImg.eq(idx).stop(true,true).fadeIn(300); 
				visualImg.eq(oldidx).stop(true,true).fadeOut(300); 
			}
			oldidx=idx; 
		};
	 
		function changeAuto(){
			idx++;
			if(idx>imgLength-1) {
				idx=0;
			};
			changeImg(idx);
		}
		
		timer=setInterval(changeAuto,duration);

		visualBtn.click(function(){
			clearInterval(timer);
			idx= $(this).index();
			changeImg(idx);
			timer=setInterval(changeAuto,duration);

		});

		chkPlay=true;
		 $(".playbt").click(function(){

			if(chkPlay){
				clearInterval(timer);
				 $(this).css({"background":"url('images/main_play.png')no-repeat 0 0 / cover"});
				chkPlay=false;
			}else{
				timer=setInterval(changeAuto,duration);
				 $(this).css({"background":"url('images/main_stop.png')no-repeat 0 0 /cover"});
				chkPlay=true;
			}
		});

		 $(".prev").click(function(e){
			e.preventDefault();
			clearInterval(timer);
			idx--;
			if(idx<0) {
				idx=imgLength-1;
			};
			changeImg(idx);
			timer=setInterval(changeAuto,duration);

		});

		$(".next").click(function(e){
			e.preventDefault();
			clearInterval(timer);
			idx++;
			if(idx>imgLength-1) { 
				idx=0;
			};
			changeImg(idx);
			timer=setInterval(changeAuto,duration);
		});

	})();
    
	//Rolling Notice
	$(window).load(function() {  
		var options = {};
		options['animSpeed'] = 500; 
		options['pauseTime'] = 3000; 
		options['moveType'] = 'top'; 
	
		$("#slideshow").hdamalleffect(options);
	});
	
	//TabMenu
	(function(){
		 $('#tab-content>div:not('+ $('.tab-menu>li .active').attr('href')+')').hide();
		 $('.tab-menu li a').click(function(){
			 $('.tab-menu li a').removeClass('active'); 
			 $(this).addClass('active'); 
			 $('#tab-content > div').hide(); 
			 $( $(this).attr('href')).fadeIn(); 
			return false; 
		});
	})();

	//moving line, Changing text
	(function(){
		 var durationLine = 100;
		
		 $('.tab-menu li a').each(function(){
			var firstCoor =  $('.tab-menu li:first-child').position().left;
			$('.tab_hr').css({left:firstCoor});

			 $(this).click(function(e){
				e.preventDefault();
				const coordinate =  $(this).position().left;
				 $('.tab_hr').stop().animate({left:coordinate},durationLine);
				
				const changeText =  $(this).parent('li').data('text');
				 $('.change_text').text(changeText);
			});
		});
	})();

	//Menu Highlight //customer hr
	(function(){
		//Menu Highligh
		var subMenu = $('.sub_menu ul li');
		var url = window.location.href;
		url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
		url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
		url = url.substr(url.lastIndexOf("/") + 1);

		if(url == ''){
		url = 'index2.html'; 
		}

		$(subMenu).each(function(){
		var href = $(this).find('a').data('value');
			if(url == href){
				$(this).addClass('active');
			}
		});

		//customer hr
		var tabUrl = location.href;
		var noticeUrl = "id=notice";
		var newsUrl = "id=news";
		var gonggoUrl = "id=gonggo";
		var quesUrl = "form_id=formform";

		if(tabUrl.indexOf(noticeUrl) != -1){
			$('.tab-menu2 li a').removeClass('active');
			$('.tab_menu01').addClass('active');
			$(subMenu).removeClass('active');
			$('.sub_header li:nth-of-type(3)').addClass('active');
			$('.tab_hr').css({"left":0, "width":"333px"});
			$('.change_text').text("공지사항");
		};
		if(tabUrl.indexOf(newsUrl) != -1){
			$('.tab-menu2 li a').removeClass('active');
			$('.tab_menu02').addClass('active');
			$(subMenu).removeClass('active');
			$('.sub_header li:nth-of-type(3)').addClass('active');
			$('.tab_hr').css({"left":"333px", "width":"333px"});
			$('.change_text').text("뉴스");
		};
		if(tabUrl.indexOf(gonggoUrl) != -1){
			$('.change_text').text("채용공고");
			$(subMenu).removeClass('active');
			$('.sub_header li:nth-of-type(4)').addClass('active');
		};
		
		if(tabUrl.indexOf(quesUrl) != -1){
	//		$('.tab-menu2 li a').removeClass('active');
	//		$('.tab_menu03').addClass('active');
			$('.tab_hr').css({"left":"666px", "width":"333px"});
		};
	})();

	//FooterMenuView MainSectionMenuView
	(function(){
		var pageButton1 = document.getElementById("footer_btn1");
		var newUrl = location.href;
		var b_href1 = "page=on1";
		var b_href2 = "page=on2";
		var s_href1 = "tab=01";
		var s_href2 = "tab=02";
		var s_href3 = "tab=03";
		var s_href4 = "tab=04";

		if(newUrl.indexOf(b_href1) != -1){
			$('.tab-menu li a').removeClass('active'); 
			$('.about_tabs2 a').addClass('active');
			$('#tab-content > div').css({"display":"none"});
			$('#tabs-2').css({"display":"block"}); 
			$('.tab_hr').css({"left":"333px"});
			$('.change_text').text("회사개요");
		};
		if(newUrl.indexOf(b_href2) != -1){
			$('.tab-menu li a').removeClass('active'); 
			$('.about_tabs3 a').addClass('active');
			$('#tab-content > div').css({"display":"none"});
			$('#tabs-3').css({"display":"block"}); 
			$('.tab_hr').css({"left":"666px"});
			$('.change_text').text("제품문의");
		};
		if(newUrl.indexOf(s_href1) != -1){
			$('.tab-menu li a').removeClass('active'); 
			$('service_tabs1 a').addClass('active');
			$('#tab-content > div').css({"display":"none"});
			$('#tabs-1').css({"display":"block"}); 
			$('.tab_hr').css({"left":"0"});
			$('.change_text').text("모바일 컨설팅");
		};
		if(newUrl.indexOf(s_href2) != -1){
			$('.tab-menu li a').removeClass('active'); 
			$('service_tabs2 a').addClass('active');
			$('#tab-content > div').css({"display":"none"});
			$('#tabs-2').css({"display":"block"}); 
			$('.tab_hr').css({"left":"250px"});
			$('.change_text').text("통합 ECMS");
		};
		if(newUrl.indexOf(s_href3) != -1){
			$('.tab-menu li a').removeClass('active'); 
			$('service_tabs3 a').addClass('active');
			$('#tab-content > div').css({"display":"none"});
			$('#tabs-3').css({"display":"block"}); 
			$('.tab_hr').css({"left":"500px"});
			$('.change_text').text("EP Solution");
		};
		if(newUrl.indexOf(s_href4) != -1){
			$('.tab-menu li a').removeClass('active'); 
			$('service_tabs4 a').addClass('active');
			$('#tab-content > div').css({"display":"none"});
			$('#tabs-4').css({"display":"block"}); 
			$('.tab_hr').css({"left":"750px"});
			$('.change_text').text("주요고객사");
		};
	})();

	//filtering client
	(function(){
			$(".content_filter li").fadeIn();
			$(".client_head button").click(function(e){
			e.preventDefault();
			$('.client_head button').removeClass('active');
			$(this).addClass('active');

			var category = $(this).attr("title");   
			$(".content_filter li").hide();            
			if(category == "all"){
				$(".content_filter li").fadeIn();
			}else{
				$(".content_filter li[class*="+category+"]").fadeIn();
			}               
		 })
	})();

	//filtering client Change number
	(function(){
		$('.client .controls button').each(function(){

		$(this).click(function(e){
			const buttonFilter =  $(this).data('filter');
			const buttonData = buttonFilter.replace('.','');
			const listLength =  $('.'+ buttonData).toArray();
			const listNumber = listLength.length;
			 $('.change_number').text(listNumber);
			})
		})

		 $('.client .controls button:first-child').click(function(){
			const allLength =  $('.mix_box li').length;
			 $('.change_number').text(allLength);
		})
	})();

	//Number animation
	(function(){
		 var progressRate =  $('.number_animate').attr('data-rate');
		 $({percent:3.0}).animate({percent:progressRate},{
			duration: 1000, 
			progress: function(){
				var now = this.percent;
				 $('.number_animate').text(Math.round(now * 10)/10);
			}
		});
	})();

	//File_box 
	(function(){
		var uploadFile =  $('.file_box .file_btn');
		uploadFile.on('change', function(){
			if(window.FileReader){
				var filename =  $(this)[0].files[0].name;
			} else {
				var filename =  $(this).val().split('/').pop().split('\\').pop();
			}
			 $(this).siblings('.file_name').val(filename);
		});
	})();

	//FormTag Placeholder
	$('input[name="form_data[1]"]').attr('placeholder','제목을 입력해 주세요.').css({'width':'578px'});
	$('input[name="form_data[2]"]').attr('placeholder','이름을 입력해 주세요.');
	$('input[name="form_data[3]"]').attr('placeholder','이메일을 입력해 주세요.');
	$('input[name="form_data[4]"]').attr("placeholder","'-'를 제외하고 입력해 주세요");
	$('textarea[name="form_data[5]"]').attr('placeholder','내용을 입력해 주세요.');




});


