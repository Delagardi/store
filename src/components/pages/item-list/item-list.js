import React from 'react';

import './item-list.css';

const ItemList = () => {
  return (
    <div className="container">
      <h3 className="order-list-header">Your order</h3>
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
            <td>
              <a className="order-item-link d-block" href="remove"><i className="icon d-inline-block ion-md-remove-circle-outline"></i></a>
              <a className="order-item-link d-block" href="remove"><i className="icon d-inline-block ion-md-add-circle-outline"></i></a>
              <a className="order-item-link d-block" href="remove"><i className="icon d-inline-block ion-md-close-circle-outline"></i></a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>The Hero with a Thousand Faces</td>
            <td>1</td>
            <td>$43</td>
            <td>
              <a className="order-item-link d-block" href="remove"><i className="icon d-inline-block ion-md-remove-circle-outline"></i></a>
              <a className="order-item-link d-block" href="remove"><i className="icon d-inline-block ion-md-add-circle-outline"></i></a>
              <a className="order-item-link d-block" href="remove"><i className="icon d-inline-block ion-md-close-circle-outline"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;