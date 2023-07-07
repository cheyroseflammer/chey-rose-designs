import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import lostArt from '../public/lostArt.webp';
import deathly from '../public/deathly.webp';
import hoobank from '../public/hoobank.webp';
import todo from '../public/todo.gif';
import { useLayoutEffect, useRef } from 'react';
React.useLayoutEffect = React.useEffect;
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef();
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
    }, projectsRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className='projects-container' id='projects' ref={projectsRef}>
      <div className='project-head'>
        <p className='project-type'>{`////// development ////// design //////`}</p>
      </div>
      <section className='development-container'>
        <div className='project-list'>
          <nav className='menu'>
            <div className='hr'></div>
            <div className='menu-item'>
              <p className='menu-item-link' rel='preload'>
                Lost Art Design
              </p>
              <Image className='menu-item-img' src={lostArt} alt='image' rel='preload' />
              <div className='marquee'>
                <div className='marquee-inner'>
                  <p className='marquee-text'>Lost Art Design</p>
                  <p className='marquee-text'>Lost Art Design</p>
                  <p className='marquee-text'>Lost Art Design</p>
                  <p className='marquee-text'>Lost Art Design</p>
                </div>
              </div>
            </div>
            <div className='menu-item-info'>
              <div className='project-link-container'>
                <Link
                  className='project-link'
                  href='https://github.com/cheyroseflammer/lostArtDesign'
                  target='_blank'
                >
                  GitHub
                </Link>
              </div>
              <div className='project-link-container'>
                <Link
                  className='project-link'
                  href='https://cheyroseflammer.github.io/lostArtDesign/'
                  target='_blank'
                >
                  Live Site
                </Link>
              </div>
            </div>
            <div className='hr'></div>
            <div className='menu-item'>
              <p className='menu-item-link'>Deathly Design</p>
              <Image className='menu-item-img' src={deathly} alt='image' />
              <div className='marquee'>
                <div className='marquee-inner'>
                  <p className='marquee-text'>Deathly Design</p>
                  <p className='marquee-text'>Deathly Design</p>
                  <p className='marquee-text'>Deathly Design</p>
                  <p className='marquee-text'>Deathly Design</p>
                </div>
              </div>
            </div>
            <div className='menu-item-info'>
              <div className='project-link-container'>
                <Link
                  className='project-link'
                  href='https://github.com/cheyroseflammer/deathlyDesign'
                  target='_blank'
                >
                  GitHub
                </Link>
              </div>
              <div className='project-link-container'>
                <Link
                  className='project-link'
                  href='https://deathlydesign-cheyroseflammer.vercel.app/'
                  target='_blank'
                >
                  Live Site
                </Link>
              </div>
            </div>
            <div className='hr'></div>
            <div className='menu-item'>
              <p className='menu-item-link'>Hoobank Design</p>
              <Image className='menu-item-img' src={hoobank} alt='image' rel='preload' />
              <div className='marquee'>
                <div className='marquee-inner'>
                  <p className='marquee-text'>Hoobank Design</p>
                  <p className='marquee-text'>Hoobank Design</p>
                  <p className='marquee-text'>Hoobank Design</p>
                  <p className='marquee-text'>Hoobank Design</p>
                </div>
              </div>
            </div>
            <div className='menu-item-info'>
              <div className='project-link-container'>
                <Link className='project-link' href='' target='_blank'>
                  GitHub
                </Link>
              </div>
              <div className='project-link-container'>
                <Link className='project-link' href='' target='_blank'>
                  Live Site
                </Link>
              </div>
            </div>
            <div className='hr'></div>
            <div className='hr'></div>
            <div className='menu-item'>
              <p className='menu-item-link'>Todo PERN App</p>
              <Image className='menu-item-img' src={todo} alt='image' rel='preload' />
              <div className='marquee'>
                <div className='marquee-inner'>
                  <p className='marquee-text'>Todo PERN App</p>
                  <p className='marquee-text'>Todo PERN App</p>
                  <p className='marquee-text'>Todo PERN App</p>
                  <p className='marquee-text'>Todo PERN App</p>
                </div>
              </div>
            </div>
            <div className='menu-item-info'>
              <div className='project-link-container'>
                <Link
                  className='project-link'
                  href='https://github.com/cheyroseflammer/progressTodoClient'
                  target='_blank'
                >
                  GitHub
                </Link>
              </div>
              <div className='project-link-container'>
                <Link
                  className='project-link'
                  href='https://progress-todo-app.vercel.app/'
                  target='_blank'
                >
                  Live Site
                </Link>
              </div>
            </div>
            <div className='hr'></div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Projects;
