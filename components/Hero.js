import Link from 'next/link';

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='row'>
        <div className='reveal'>
          <h1 className='primary'>Cheyenne</h1>
        </div>
        <div className='reveal'>
          <h1 className='primary'>Flammer</h1>
        </div>
      </div>
      <div className='hr-hero'></div>
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
            <Link href='#about' className='link'>
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
            <Link href='#projects' className='link'>
              PROJECTS
            </Link>
          </p>
          <p className='id'>002</p>
        </div>
      </div>
      <div className='hr-hero'></div>
      <div className='row'>
        <div className='reveal'>
          <h2 className='secondary'>Web</h2>
        </div>
        <div className='nav-item'>
          <p className='item'>
            <Link href='#socials' className='link'>
              SOCIALS
            </Link>
          </p>
          <p className='id'>003</p>
        </div>
        <div className='reveal'>
          <h2 className='secondary'>Developer</h2>
        </div>
      </div>
      <div className='hr-hero'></div>
      <div className='row'>
        <div className='reveal'>
          <h2 className='secondary'>Based in</h2>
        </div>
        <div className='nav-item-two'>
          <p className='item'>
            <Link href='#contact' className='link'>
              CONTACT
            </Link>
          </p>
          <p className='id'>004</p>
        </div>
        <div className='reveal'>
          <h2 className='secondary'>California</h2>
        </div>
      </div>
      <div className='hr-hero'></div>
    </section>
  );
};

export default Hero;
