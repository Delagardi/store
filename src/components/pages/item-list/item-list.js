import React from 'react';

import './item-list.css';

const ItemList = () => {
  return (
    <div className="container">
      <table className="order-list">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sapiens: A Brief History of Humankind</td>
            <td>1</td>
            <td>$34</td>
            <td>+</td>
          </tr>
          <tr>
            <td>2</td>
            <td>The Hero with a Thousand Faces</td>
            <td>1</td>
            <td>$43</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;