import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.css';

const Header = ({ cartQuantity = 0, cartSum = 0 }) => {
  return (
    <div className="header">
      <Link 
        to="/"
      >
        <h1 className="header-top">Book Store</h1>
      </Link>
      <div className="header-cart">
      <i className="icon d-inline-block ion-md-cart"></i>
        <div className="header-cart-text d-inline-block">
          {cartQuantity} items (${cartSum})
        </div>
      </div>
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    cartQuantity: state.cartQuantity,
    cartSum: state.cartSum
  };
}

export default connect(MapStateToProps)(Header);