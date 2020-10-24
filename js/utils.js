function openNav() {
	document.getElementById("mySidenav").style.width = "520px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	document.body.style.overflow = "hidden";
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.body.style.backgroundColor = "white";
	document.body.style.overflow = "auto";
}
//scrollspy
$('body').scrollspy({ target: '#navbar-example' })
//swiper
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	centeredSlides: true,
	spaceBetween: 34,
	centeredSlides: true,
	grabCursor: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
	el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		600: {
		  slidesPerView: 1,
		  spaceBetween: 10
		},
		992: {
		  slidesPerView: 2,
		  spaceBetween: 20
		}
	},
});
 //Scrolltotop
$(window).scroll(function() {
	if ($(this).scrollTop() > 1000) {
		$('.scrollToTop').fadeIn();
	} else {
		$('.scrollToTop').fadeOut();
	}
});
$('.scrollToTop, .loadtop').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 800);
	return false;
});
