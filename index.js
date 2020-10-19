import LocomotiveScroll from 'locomotive-scroll';

document.addEventListener(
	'DOMContentLoaded',
	function () {
		// your code goes here
		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			smoothMobile: true,
		});
	},
	false
);
