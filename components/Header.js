'use client';
import React from 'react';
React.useLayoutEffect = React.useEffect;
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = ({ title, order }) => {
  const headerRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('h3', {
        x: -100,
        ease: 'power4.out',
        opacity: 0,
        stagger: {
          amount: 0.8,
        },
        autoAlpha: 0,
        duration: 1.8,
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className='section-header' ref={headerRef}>
      <div className='section-header-container'>
        <h3 className='section-title'>{title}</h3>
        <h3 className='section-order'>/{order}</h3>
      </div>
    </div>
  );
};

export default Header;
