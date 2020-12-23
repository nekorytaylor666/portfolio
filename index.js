import LocomotiveScroll from 'locomotive-scroll';
0;

const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true,
	smoothMobile: false,
});
scroll.destroy();
document.addEventListener('DOMContentLoaded', function (event) {
	scroll.init();
});
