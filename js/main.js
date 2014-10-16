$(window).load(function () {
	$('#pictureBox').nivoSlider({
		effect: 'random',
		slices: 16,
		boxCols: 16,
		boxRows: 3.6,
		animSpeed: 500,
		pauseTime: 7000,
		directionNav: false,
		controlNav: false,
		keyboardNav: false,
		pauseOnHover: true,
		randomStart: true
	});

	//jQuery.easing.def = "easeOutElastic";
	
	// var sliderHeight = $('#pictureBox').height();
	// $('.menu').mouseover(function () {
	// 	$(this).find('.navMenu').stop().animate({height: sliderHeight}, 500, 'easeInOutQuad');
	// });
	// $('.menu').mouseleave(function () {
	// 	$(this).find('.navMenu').stop().animate({height: 0}, 500, 'easeInOutQuad');
	// });

	//$('.navMenu').css({'height':'auto'}).hide();
	/*$('.menu').hover(function () {
		$(this).find('.navMenu').slideToggle(500);
	});*/
});