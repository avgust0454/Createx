$(document).ready(function() {

	/*
	$('#slider1').slick({
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: true,
		pauseOnHover: true,
	});
	*/

	$('#slider1 .big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '#slider1 .small',
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		pauseOnHover: true,
	});
	$('#slider1 .small').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '#slider1 .big',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});
});


