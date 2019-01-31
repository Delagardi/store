import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './frontpage-item.css';

class FrontpageItem extends Component {
  componentDidMount() {
    
  }

  render() {
    const { 
      book,
      onAddToCart 
    } = this.props;
    
    console.log('book:');
    console.log(book);

    const {
      //id,
      name,
      author,
      price,
      imageSource
    } = book;
    
    console.log('state:');
    console.log(this.state);

    console.log('props:');
    console.log(this.props);

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
          <span className="item-price d-block">{price}</span>
          <button 
            className="btn btn-success"
            onClick={onAddToCart}>Add to cart</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (index) => {
      dispatch({
        type: 'ITEM_ADDED_TO_CART',
        index: index
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontpageItem);