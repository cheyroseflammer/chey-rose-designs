import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import todoImage from '../public/todo.png';
import lostArt from '../public/lostArt.png';
import deathly from '../public/deathly.png';
import hoobank from '../public/hoobank.png';

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
      <div className='project-head'>
        <p className='project-design'>{`////// development ////// development //////`}</p>
      </div>
      <section className='development-container'>
        <div className='project-list'>
          <nav className='menu'>
            <div className='hr'></div>
            <div className='menu-item'>
              <p className='menu-item-link'>Progress Todo App</p>
              <Image
                className='menu-item-img'
                src={todoImage}
                alt='image'
                height={300}
                width={400}
                quality={100}
              />
              <div className='marquee'>
                <div className='marquee-inner'>
                  <p className='marquee-text'>Progress Todo App</p>
                  <p className='marquee-text'>Progress Todo App</p>
                  <p className='marquee-text'>Progress Todo App</p>
                  <p className='marquee-text'>Progress Todo App</p>
                </div>
              </div>
            </div>
            <div className='menu-item-info'>
              <div className='project-link-container'>
                <Link
                  className='project-link'
                  href='https://github.com/cheyroseflammer/progressTodoClient/blob/main/README.md'
                  target='_blank'
                >
                  GitHub
                </Link>
              </div>
              <div className='project-link-container'>
                <Link
                  className='project-link'
                  href='https://progress-todo-app.vercel.app'
                  target='_blank'
                >
                  Live Site
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <div className='hr'></div>
      <div className='project-head'>
        <p className='project-design'>{`////// Design ////// Design ////// Design //////`}</p>
      </div>
      <div className='hr'></div>
      <section className='design-container'>
        <div className='projects-list'>
          <div>
            <nav className='menu'>
              <div className='hr'></div>
              <div className='menu-item'>
                <p className='menu-item-link'>Lost Art Design</p>
                <Image
                  className='menu-item-img'
                  src={lostArt}
                  alt='image'
                  width={400}
                  height={600}
                />
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
                    href='https://www.figma.com/file/4uxUHi3224xNldcbUIBjN3/Lost-Art?t=H6ZOCT79Eg75Wg2b-6'
                    target='_blank'
                  >
                    Figma Design
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
                <Image
                  className='menu-item-img'
                  src={deathly}
                  alt='image'
                  width={400}
                  height={600}
                />
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
                    href='https://www.figma.com/file/7B5A7NRmH4ZDEDZGrMEtem/Deathly?t=H6ZOCT79Eg75Wg2b-6'
                    target='_blank'
                  >
                    Figma Design
                  </Link>
                </div>
                <div className='project-link-container'>
                  <Link className='project-link' href='https://deathly.vercel.app' target='_blank'>
                    Live Site
                  </Link>
                </div>
              </div>
              <div className='hr'></div>
              <div className='menu-item'>
                <p className='menu-item-link'>Hoobank</p>
                <Image
                  className='menu-item-img'
                  src={hoobank}
                  alt='image'
                  width={400}
                  height={600}
                />
                <div className='marquee'>
                  <div className='marquee-inner'>
                    <p className='marquee-text'>Hoobank</p>
                    <p className='marquee-text'>Hoobank</p>
                    <p className='marquee-text'>Hoobank</p>
                    <p className='marquee-text'>Hoobank</p>
                  </div>
                </div>
              </div>
              <div className='menu-item-info'>
                <div className='project-link-container'>
                  <Link
                    className='project-link'
                    href='https://www.figma.com/file/bUGIPys15E78w9bs1l4tgS/HooBank?node-id=310-485'
                    target='_blank'
                  >
                    Figma Design
                  </Link>
                </div>
                <div className='project-link-container'>
                  <Link
                    className='project-link'
                    href='https://tailwind-react-hoobank.vercel.app'
                    target='_blank'
                  >
                    Live Site
                  </Link>
                </div>
              </div>
              <div className='white-space'></div>
              <div className='hr'></div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
