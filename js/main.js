$(function() {
	'use strict';

	const nav = document.getElementById('nav');
	const links = document.querySelectorAll(".navbar .navbar-nav a");

	// Adiust Slider Hight
	var winH 	= $(window).height();

	$('.intro').height(winH);

	for (const link of links) {
		link.addEventListener("click", clickHandler);
	}
	 
	function clickHandler(e) {
		for (const link of links) {
	    	link.classList.remove('active');
		}
		this.classList.add('active');
	}

	// https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport
	function elementInViewport(elemnt) {
		var top_of_element = $(elemnt).offset().top + nav.offsetHeight;
		var bottom_of_element = $(elemnt).offset().top + $(elemnt).outerHeight();
		var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
		var top_of_screen = $(window).scrollTop();

		if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && (bottom_of_element > 0)){
			return true;
		} else {
			return false;
		}
	}

	document.onscroll = function(){
		if ( window.pageYOffset > $('.intro').height() - (nav.offsetHeight / 2) ){
			nav.classList.add("nav-custom-style");
		} else{
			nav.classList.remove("nav-custom-style");
		}

		for (const link of links) {
			const href = link.getAttribute("href");
			const section = document.querySelector(href);

			for (const link of links) {
				link.classList.remove('active');
			}

			if (elementInViewport(section) == true) {

				link.classList.add('active');

				break;

			}
		}
	}

	const btn = document.getElementById('navbar-toggler');
	const brand = document.querySelector('.navbar .navbar-brand');
	btn.onclick = function() {
		if (brand.style.color == "black"){
		nav.style.backgroundColor = "transparent";
		brand.style.color = "white";

		} else{
			nav.style.backgroundColor = "white";
			brand.style.color = "black";
		}
	}

	// OWL Carousel
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			768:{
				items:2,
			},
			992:{
		        items:3,
			}
    	}
	});
	$('.owl-prev span').text("prev");
	$('.owl-next span').text("next");

	// AOS
	AOS.init();
	AOS.init({
		duration: 500, // values from 0 to 3000, with step 50ms
		easing: 'ease-in-out', // default easing for AOS animations
	});

	// Smooth Scroll
	var scroll = new SmoothScroll('a[href*="#"]');

	// Nice Scroll
	$(function() {  
	    $("body").niceScroll({
			cursorcolor: "#7971ea", // change cursor color in hex
			cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
			cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
			cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
			cursorborder: "1px solid #7971ea", // css definition for cursor border
			cursorborderradius: "5px", // border radius in pixel for cursor
			scrollspeed: 60, // scrolling speed
			mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
			autohidemode: true, // how hide the scrollbar works, possible values: 
			spacebarenabled: true, // enable page down scrolling when space bar has pressed
			enablemousewheel: true, // nicescroll can manage mouse wheel events
			enablekeyboard: true, // nicescroll can manage keyboard events
			smoothscroll: true, // scroll with ease movement
		});
	});

});