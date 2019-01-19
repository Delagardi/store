import React from 'react';
import FrontpageItem from '../frontpage-item';
import './frontpage.css';

const Frontpage = ({ onAddToCart, booksData }) => {
  const items = booksData.map( (item) => {
    const { id, name, author, price, imageSource } = item;
    
    return (
      <FrontpageItem
        key={id} 
        id={id}
        name={name}
        author={author}
        price={price}
        imageSource={imageSource}
        onAddToCart={onAddToCart}
      />
    );
  });

  return(
    <div className="container">
      {items}
    </div>
  );
}

export default Frontpage;