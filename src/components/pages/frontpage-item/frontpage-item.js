import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onAddToCart } from '../../../actions';

import './frontpage-item.css';

class FrontpageItem extends Component {
  render() {
    const { 
      book,
      onAddToCart 
    } = this.props;

    const {
      id,
      name,
      author,
      price,
      imageSource
    } = book;

    return (
      <div 
        className="item d-flex">
        <div className="item-img">
          <img height="200" src={`/book-preview/${imageSource}`} alt={name} />
        </div>
        <div className="item-data">
          <Link to="/books:id">
            <h3>{name}</h3>
          </Link>
          <span>{author}</span>
          <span className="item-price d-block">${price}</span>
          <button 
            className="btn btn-success"
            onClick={() => onAddToCart(id)}>Add to cart</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ bookList: { books } }) => {
  return {
    books: books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (id) => {
      return dispatch(onAddToCart(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontpageItem);