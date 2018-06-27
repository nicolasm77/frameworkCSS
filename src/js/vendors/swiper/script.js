mySwiper = new Swiper(".swiper-container", {
	speed: 400,
	slidesPerView: 3,
	spaceBetween: 50,
	loop:false,
	navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
	},
	on: {
		init:getPrices()
	},
	breakpoints: {
		320: {
			slidesPerView: 2.3,
			spaceBetween: 5
		},
		480: {
			slidesPerView: 2.3,
			spaceBetween: 5
		},
		640: {
			slidesPerView: 3.3,
			spaceBetween: 5
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 5,
			centeredSlides: true
		},
		1000: {
			slidesPerView: 3,
			spaceBetween: 5,
			centeredSlides: true
		}
	}
});