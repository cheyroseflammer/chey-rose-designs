import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import lostArt from '../public/lostArt.webp';
import deathly from '../public/deathly.webp';
import hoobank from '../public/hoobank.webp';

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
      <div className='project-head'>
        <p className='project-type'>{`////// development ////// design //////`}</p>
      </div>
      <section className='development-container'>
        <div className='project-list'>
          <nav className='menu'>
            <div className='hr'></div>
            <div className='menu-item'>
              <p className='menu-item-link'>Lost Art Design</p>
              <Image
                className='menu-item-img'
                src={lostArt}
                alt='image'
                quality={100}
                height={600}
                width={300}
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
            <div className='menu-item'>
              <p className='menu-item-link'>Deathly Design</p>
              <Image
                className='menu-item-img'
                src={deathly}
                alt='image'
                quality={100}
                height={600}
                width={300}
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
            <div className='menu-item'>
              <p className='menu-item-link'>Hoobank Design</p>
              <Image
                className='menu-item-img'
                src={hoobank}
                alt='image'
                quality={100}
                height={600}
                width={300}
              />
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
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Projects;
