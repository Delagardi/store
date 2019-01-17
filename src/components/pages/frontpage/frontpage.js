import React from 'react';

import './frontpage.css';

const Frontpage = ({ onAddToCart, booksData }) => {
  const items = booksData.map( (item) => {
    const { id, name, author, price, imageSource } = item;
    
    return (
      <div 
        key={id}
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
            onClick={onAddToCart}>Add to cart</button>
        </div>
      </div>
    );
  });

  return(
    <div className="container">
      {items}
    </div>
  );
}

export default Frontpage;