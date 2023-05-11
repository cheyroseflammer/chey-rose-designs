import React from 'react';
import Link from 'next/link';

const Socials = () => {
  return (
    <>
      <section className='socials-container' id='socials'>
        <div className='social-links'>
          <div className='socials-id dr'>
            <Link href='https://dribbble.com/cheyrose' target='_blank' prefetch={false}>
              dribble
            </Link>
          </div>
          <div className='socials-id ln'>
            <Link
              href='https://www.linkedin.com/in/cheyenne-flammer-4b4a5726a/'
              target='_blank'
              prefetch={false}
            >
              linkedin
            </Link>
          </div>
          <div className='socials-id gh'>
            <Link href='https://github.com/cheyroseflammer' target='_blank' prefetch={false}>
              github
            </Link>
          </div>
        </div>
        <div className='white-space'></div>
      </section>
      <div className='hr'></div>
    </>
  );
};

export default Socials;
