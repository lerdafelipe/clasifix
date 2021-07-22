import React from 'react';
// Import component banner with the image
import Banner from '../banner/index';
// Import component Main with the navbar and info
import Main from '../Main/index';
// Styles
import './Header.css';

function Header() {
  return (
    <header>
      <Banner />
      <Main />
    </header>
  );
}

export default Header;
