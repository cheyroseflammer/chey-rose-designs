const Header = ({ title, order }) => {
  return (
    <div className='section-header'>
      <div className='section-header-container'>
        <h3 className='section-title'>{title}</h3>
        <h3 className='section-order'>/{order}</h3>
      </div>
      <div className='hr'></div>
    </div>
  );
};

export default Header;
