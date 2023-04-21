'use client';
import Link from 'next/link';
import React from 'react';
React.useLayoutEffect = React.useEffect;
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.reveal h1, .reveal h2', {
        y: 200,
        ease: 'power4.out',
        autoAlpha: 0,
        delay: 0,
        duration: 1.8,
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
      gsap.from('.hr', {
        width: 0,
        ease: 'power4.out',
        delay: 0,
        stagger: {
          amount: 0.3,
        },
        autoAlpha: 0,
        duration: 1.8,
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
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={heroRef}>
      <div className='row'>
        <div className='reveal'>
          <h1 className='primary'>Cheyenne</h1>
        </div>
        <div className='reveal'>
          <h1 className='primary'>Flammer</h1>
        </div>
      </div>
      <div className='hr'></div>
      <div className='row'>
        <p className='text'>web design</p>
        <p className='text'>
          <Link href='' className='hero-email'>
            email
          </Link>
        </p>
        <p className='text'>brand development</p>
        <p className='text'>juniper hills</p>
      </div>
      <div className='white-space'></div>
      <div className='row'>
        <div className='nav-item-two'>
          <p className='item'>
            <Link href='' className='link'>
              ABOUT
            </Link>
          </p>
          <p className='id'>001</p>
        </div>
        <div className='reveal'>
          <h2 className='secondary'>Los Angeles</h2>
        </div>
        <div className='nav-item'>
          <p className='item'>
            <Link href='' className='link'>
              PROJECTS
            </Link>
          </p>
          <p className='id'>002</p>
        </div>
      </div>
      <div className='hr'></div>
      <div className='row'>
        <div className='reveal'>
          <h2 className='secondary'>Web</h2>
        </div>
        <div className='nav-item'>
          <p className='item'>
            <Link href='' className='link'>
              Socials
            </Link>
          </p>
          <p className='id'>003</p>
        </div>
        <div className='reveal'>
          <h2 className='secondary'>Developer</h2>
        </div>
      </div>
      <div className='hr'></div>
      <div className='row'>
        <div className='reveal'>
          <h2 className='secondary'>Based in</h2>
        </div>
        <div className='nav-item-two'>
          <p className='item'>
            <Link href='#contact' className='link'>
              contact
            </Link>
          </p>
          <p className='id'>004</p>
        </div>
        <div className='reveal'>
          <h2 className='secondary'>California</h2>
        </div>
      </div>
      <div className='hr'></div>
    </section>
  );
};

export default Hero;
