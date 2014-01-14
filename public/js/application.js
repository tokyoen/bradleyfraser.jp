var fl = 0, interval, wall;

function setOnOff(v) {

	$(document).fullScreen(v);
	if (v == true) {
		$('#on').css("color", "#bfbfbf");
		$('#off').css("color", "#000");
	} else {
		$('#on').css("color", "#000");
		$('#off').css("color", "#bfbfbf");
	}

}

$(document).ready(function() {

	$("#bkimg").click(function() {
		clearTimeout(interval);
		$(window).resize();
	});
	
	var popupMarkup;
	var source   = $("#image_popup_tpl").html();
	if (source) {
		var template = Handlebars.compile(source);
		popupMarkup = template({});
		$("a[rel^='lightbox']").magnificPopup({
			type:'image',
			image: {
				markup: popupMarkup
			},
			mainClass: 'mfp-with-zoom productPopup',
			showCloseBtn: false
		});

		$(".processThumbContainer").magnificPopup({
			type: 'image',
			image: {
				markup: popupMarkup
			},
			gallery:{ enabled:true },
			delegate: 'a',
			mainClass: 'mfp-with-zoom productProcess',
			showCloseBtn: false,
		})
	}

	$('.seeProcessLink').click(function(e) {
		e.preventDefault();
		$(this).find('span').toggleClass('arrowrighticon');
		if (fl == 0) {
			$('.processThumbContainer').slideDown(function() {
				$('html, body').stop().animate({
					scrollTop: $('.processThumbContainer').offset().top
				}, 800);
				fl = 1;
			});
		} else {

			$('.processThumbContainer').slideUp(200);
			fl = 0;
		}
	});
	
	wall = new Masonry($('#showblck')[0], {
		columnWidth: 10,
		isFitWidth: true
	});
	
});

$(window).resize(function() {
	var windowSize = $(window).width();
	var blockSize = 255;
	var numberOfBlocks = Math.floor($(window).innerWidth() / 255);

	var leftSpace = parseInt($(window).innerWidth() - parseInt($(".galleryInside").css("width"))) / 2;
	$(".galleryInside").css("margin", "0 auto");
	if (windowSize < 600) {
		$('.galleryTxt p img').attr({
			'width': '100%'
		});
	} else {
		$('.galleryTxt p img').removeAttr('width');
	}
	
	$('section.container').show();
});

$(window).resize();
