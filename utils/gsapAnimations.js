// gsapAnimations.js
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const setupScrollTriggers = () => {
	let lines = gsap.utils.toArray('.hr');
	lines.forEach((line) => {
		gsap.from(line, {
			width: 0,
			autoAlpha: 0,
			delay: 1,
			duration: 1,
			scrollTrigger: {
				trigger: line,
				start: 'top 90%',
				toggleActions: 'play none none reverse',
			},
		});
	});

	gsap.from('.about-text', {
		x: 820,
		autoAlpha: 0,
		scrollTrigger: {
			trigger: '.about-container',
			start: 'top 80%',
			toggleActions: 'play none none reverse',
		},
		duration: 1.8,
	});

	let titles = gsap.utils.toArray('.section-title');
	titles.forEach((title) => {
		gsap.from(title, {
			x: -600,
			autoAlpha: 0,
			scrollTrigger: {
				trigger: title,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
			},
			duration: 1.8,
		});
	});

	let orders = gsap.utils.toArray('.section-order');
	orders.forEach((order) => {
		gsap.from(order, {
			x: 600,
			autoAlpha: 0,
			scrollTrigger: {
				trigger: order,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
			},
			duration: 1.8,
		});
	});
};

export const setupInitialAnimations = () => {
	gsap.from('.reveal h1, .reveal h2', {
		y: -300,
		ease: 'power4.out',
		autoAlpha: 0,
		delay: 1,
		duration: 1.8,
		stagger: {
			amount: 0.3,
		},
	});

	gsap.from('p.text', {
		opacity: 0,
		y: -100,
		ease: 'power4.out',
		delay: 1,
		stagger: {
			amount: 0.3,
		},
		duration: 1.8,
		autoAlpha: 0,
	});

	gsap.from('.nav-item, .nav-item-two', {
		opacity: 0,
		y: 100,
		ease: 'power4.out',
		stagger: {
			amount: 0.3,
		},
		autoAlpha: 0,
		duration: 1.8,
		delay: 1,
	});

	gsap.from('.hr-hero', {
		width: 0,
		ease: 'power4.out',
		delay: 0,
		stagger: {
			amount: 0.3,
		},
		autoAlpha: 0,
		duration: 1.8,
	});
};

export const setupContactAnimations = () => {
	let lines = gsap.utils.toArray('.hr');
	lines.forEach((line) => {
		gsap.from(line, {
			width: 0,
			autoAlpha: 0,
			delay: 1,
			duration: 1,
			scrollTrigger: {
				trigger: line,
				start: 'top 90%',
				toggleActions: 'play none none reverse',
			},
		});
	});

	gsap.from('.contact-details', {
		x: -600,
		scrollTrigger: {
			trigger: '.contact-span',
			start: 'top 80%',
			toggleActions: 'play none none reverse',
		},
		duration: 1.8,
	});

	gsap.from('.contact-form', {
		x: 600,
		scrollTrigger: {
			trigger: '.contact-span',
			start: 'top 80%',
			toggleActions: 'play none none reverse',
		},
		duration: 1.8,
	});
};
