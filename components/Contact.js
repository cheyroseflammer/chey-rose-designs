import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import smiles from '../public/smiles.webp';
import { useLayoutEffect, useRef } from 'react';
React.useLayoutEffect = React.useEffect;
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import dynamic from 'next/dynamic';

const Contact = () => {
  const contactRef = useRef();
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
    }, contactRef);
    return () => ctx.revert();
  }, []);
  const LazyCanvas = dynamic(() => import('./Canvas'), {
    ssr: false,
  });
  return (
    <section className='contact-container' id='contact' ref={contactRef}>
      <div className='top-bar'>
        <p className='quote'>{`"What separates design from art is that design is meant to be... functional."`}</p>
      </div>
      <div className='hr'></div>
      <div className='bar'>
        <div className='site-name'>
          <p>chey</p>
        </div>
        <div className='branding'>
          <p>CIRCA</p>
          <Image className='smile' src={smiles} alt='smile logo' height={44} width={36} />
          <p>2019</p>
        </div>
        <div className='email'>
          <p>
            <Link href='mailto:' prefetch={false}>
              email
            </Link>
          </p>
        </div>
      </div>
      <div className='hr'></div>
      <div className='marquee-contact'>
        <span className='contact-span'>
          contact us / contact us / contact us / contact us / contact us / contact us / contact us /
          contact us / contact us / contact us /
        </span>
      </div>
      <div className='contact-section'>
        <div className='contact-details col'>
          <LazyCanvas />
        </div>
        <div className='contact-form col'>
          <div className='form-wrapper'>
            <form action='https://formspree.io/f/xknqdqkv' method='POST'>
              <div className='fields'>
                <div className='field name'>
                  <input
                    className='contact-input'
                    name='name'
                    type='text'
                    placeholder='Name'
                    required
                  />
                </div>
                <div className='field email'>
                  <input
                    className='contact-input'
                    name='__replyto'
                    type='email'
                    placeholder='Email'
                    required
                  />
                </div>
                <div className='field'>
                  <input
                    className='contact-input'
                    name='subject'
                    type='text'
                    placeholder='Subject'
                    required
                  />
                </div>
                <div className='field textarea'>
                  <textarea
                    className='contact-input'
                    id='message'
                    name='message'
                    cols='30'
                    rows='10'
                    placeholder='Message..'
                    required
                  ></textarea>
                </div>
                <div className='submit'>
                  <button type='submit'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
