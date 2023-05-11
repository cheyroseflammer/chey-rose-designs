import { Hero, Header, About, Socials } from '../components';
import React from 'react';
React.useLayoutEffect = React.useEffect;
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
gsap.registerPlugin(ScrollTrigger);
// Change it to say screen size bigger than 768px do -->
// function update() {
//   location.reload();
// }
export default function App() {
  const ContactLazy = dynamic(() => import('../components/Contact'), {
    ssr: false,
  });
  const ProjectsLazy = dynamic(() => import('../components/Projects'), {
    ssr: false,
  });
  // UPDATE ON APP RERENDER
  // useEffect(() => {
  //   window.addEventListener('resize', update);
  // }, []);
  const appRef = useRef();
  // SCROLL TRIGGERS
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
      let projects = gsap.utils.toArray('.menu');
      projects.forEach((project) => {
        gsap.from(project, {
          x: -600,
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          duration: 1.8,
        });
      });
      let projectHeads = gsap.utils.toArray('.project-head');
      projectHeads.forEach((head) => {
        gsap.from(head, {
          y: 600,
          scrollTrigger: {
            trigger: '.projects-container',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          duration: 1.8,
        });
      });
    }, appRef);
    return () => ctx.revert();
  }, []);
  // REGULAR ANIMATION IN
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
    }, appRef);
    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
    }, appRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className='wrapper' ref={appRef}>
      <Hero />
      <Header order='001' title='about' />
      <About />
      <Header order='002' title='projects' />
      <ProjectsLazy />
      <Header order='003' title='socials' />
      <Socials />
      <Header order='004' title='contact' />
      <ContactLazy />
    </div>
  );
}
