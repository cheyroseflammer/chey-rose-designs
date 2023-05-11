import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import smiles from '../public/smiles.webp';

const Contact = () => {
  const LazyCanvas = dynamic(() => import('../components/Canvas'), {
    ssr: false,
  });
  return (
    <section className='contact-container' id='contact'>
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
          <Suspense fallback={null}>
            <LazyCanvas />
          </Suspense>
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
