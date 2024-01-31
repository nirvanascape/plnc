$(document).ready(function(){


	$('#toggle').on('click',function(){

		var checked = $('#toggle').is(':checked');

		if( checked ){
			$('html, body').addClass('hidden');
		}else{
			$('html, body').removeClass('hidden');
		}

	});

	$(window).on('scroll',function(){

		var scrollValue = $(document).scrollTop();
		var rollingStart = $('ol.link li:nth-child(2)').offset().top;

		if( rollingStart < scrollValue ){
			$('.bottom-visual .text-img-rolling').addClass('on');
		}

	});

	var uploadFile =  $('.file-box .file-btn');
		uploadFile.on('change', function(){

			if(window.FileReader){
				var filename =  $(this)[0].files[0].name;
			} else {
				var filename =  $(this).val().split('/').pop().split('\\').pop();
			}
			 $(this).siblings('.file-name').val(filename);
		});

	var mainBannerCnt = 0;
	var mainBannerTime = 0;
	var mainBannerLen = $('.top-banner-area .item').length;
	var mainTimeMax = 5000;
	var mainTimerSet;

	function mainTimeCount() {
		if (mainBannerTime < mainTimeMax) {
			mainBannerTime += 10;
		} else {
			mainBannerTime = 0;
			if (mainBannerCnt < mainBannerLen -1) {
				mainBannerCnt++;
			} else {
				mainBannerCnt = 0;
			}
			mainBannerSet();
		}
		var progressPercent = mainBannerTime / mainTimeMax * 100;
		$('.progress-bar').width(progressPercent + '%');
	}

	function mainBannerSet() {
		$('.background-wrap .bg').removeClass('on')
		$('.background-wrap .bg').eq(mainBannerCnt).addClass('on');
		$('.control-wrap .cur-num').text(mainBannerCnt+1);
		$('.top-banner-area .item').removeClass('on');
		$('.top-banner-area .item').eq(mainBannerCnt).addClass('on');
	}

	$('.mainBanControl').on('click', function() {
		if ($(this).val() == 'pause') {
			$(this).val('play').addClass('play');
			clearInterval(mainTimerSet);
		} else {
			$(this).val('pause').removeClass('play');
			mainTimerSet = setInterval(mainTimeCount, 10);
		}
	});

	$('.top-banner-area .item').eq(0).addClass('on');
	mainTimerSet = setInterval(mainTimeCount, 10);

	$('.sub-select').click(function(){
		$('.lnb').stop().slideToggle();
		$('.sub-select-btn').stop().toggleClass('on');
	})


});
