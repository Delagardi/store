import React from 'react';

import './header.css';

const Header = ({ itemsNumber }) => {
  return (
    <div className="header">
      <h1 className="header-top">Book Store</h1>
      <div className="header-cart">
      <i className="icon d-inline-block ion-md-cart"></i>
        <div className="header-cart-text d-inline-block">
          {itemsNumber} items ($200)
        </div>
      </div>
    </div>
  );
}

export default Header;