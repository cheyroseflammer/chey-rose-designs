import React, { useLayoutEffect, useRef } from 'react';
import { Hero, Header, About, Socials } from '../components';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';

import {
	setupScrollTriggers,
	setupInitialAnimations,
} from '../utils/gsapAnimations';

const Index = () => {
	const appRef = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(setupScrollTriggers, appRef);
		return () => ctx.revert();
	}, []);

	useLayoutEffect(() => {
		let ctx = gsap.context(setupInitialAnimations, appRef);
		return () => ctx.revert();
	}, []);

	const LazyProjects = dynamic(() => import('../components/Projects'), {
		ssr: false,
	});
	const LazyContact = dynamic(() => import('../components/Contact'), {
		ssr: false,
	});

	return (
		<div className="wrapper" ref={appRef}>
			<Hero />
			<Header order="001" title="about" />
			<About />
			<Header order="002" title="projects" />
			<LazyProjects />
			<Header order="003" title="socials" />
			<Socials />
			<Header order="004" title="contact" />
			<LazyContact />
		</div>
	);
};

export default Index;
