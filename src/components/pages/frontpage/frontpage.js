import React from 'react';
import FrontpageItem from '../frontpage-item';
import './frontpage.css';

const Frontpage = ({ onAddToCart, booksData }) => {
  const items = booksData.map( (item) => {
    const { id } = item;
    
    return (
      <FrontpageItem
        key={id}
        book={item}
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