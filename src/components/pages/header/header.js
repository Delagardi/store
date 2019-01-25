import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.css';

const Header = ({ itemsNumber, orderSum }) => {
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
          {itemsNumber} items (${orderSum})
        </div>
      </div>
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    itemsNumber: state.itemsNumber,
    orderSum: state.orderSum
  };
}

export default connect(MapStateToProps)(Header);