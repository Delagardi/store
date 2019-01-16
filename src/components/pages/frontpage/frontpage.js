import React from 'react';

import './frontpage.css';
import book1 from '../../../upload/book-preview/sapiens.jpg';
import book2 from '../../../upload/book-preview/hero faces.jpg';

const Frontpage = () => {
  return(
    <div className="container">
      <div className="item d-flex">
        <div className="item-img">
          <img height="200" src={book1} alt="Sapiens: A Brief History of Humankind" />
        </div>
        <div className="item-data">
          <h3>Sapiens: A Brief History of Humankind</h3>
          <span>Yuval Noah Harari</span>
          <span className="item-price d-block">$34</span>
        </div>
      </div>
      <div className="item d-flex">
        <div className="item-img">
          <img height="200" src={book2} alt="The Hero with a Thousand Faces " />
        </div>
        <div className="item-data">
          <h3>The Hero with a Thousand Faces</h3>
          <span>Joseph Campbell</span>
          <span className="item-price d-block">$43</span>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;