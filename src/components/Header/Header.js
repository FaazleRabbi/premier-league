import React from 'react';
import './Header.css';
import img from '../../Photo/banner.png';

const Header = () => {
  return (
    <div className="header text-center d-flex justify-content-center">
      <div className='left-img'>
        <img src={img} alt=""/>
      </div>
      <div className='bg-info p-4'>
        <h1 >Premier league 2021</h1>
        <h6>Held on <span className="text-warning h4 bold">07 May</span></h6>
      </div>
      <div>
        <img src={img} alt=""/>
      </div>
    </div>
  );
};

export default Header;