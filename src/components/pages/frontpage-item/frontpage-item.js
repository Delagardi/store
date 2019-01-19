import React from 'react';

import './frontpage-item.css';

const FrontpageItem = (props) => {
  const { 
    id, 
    name, 
    author, 
    price, 
    imageSource,
    onAddToCart 
  } = props;

  return (
    <div 
      className="item d-flex">
      <div className="item-img">
        <img height="200" src={`/book-preview/${imageSource}`} alt={name} />
      </div>
      <div className="item-data">
        <h3>{name}</h3>
        <span>{author}</span>
        <span className="item-price d-block">{price}</span>
        <button 
          className="btn btn-success"
          onClick={() => onAddToCart(id)}>Add to cart</button>
      </div>
    </div>
  );
}

export default FrontpageItem;