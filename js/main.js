(function($) {
	$(document).ready(function() {

		//menu bar
		$('.menuHambargur1 a, .menuHambargur2 a').click(function() {
			$('.menuBar').toggle(300);
			$('.menuHambargur1 a, .menuHambargur2 a').toggleClass('menuOpen');
		});
		//slider
		$('.slider-area').slick({
			autoplay: true,
			focusOnSelect: false,
			prevArrow: '.slider-arrow-left',
			nextArrow: '.slider-arrow-right'
		});

	});
})(jQuery);