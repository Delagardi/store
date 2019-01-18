import React from 'react';

import './item-list.css';

const ItemList = ({ customerBooks, onRemove }) => {
  const items = customerBooks.map( (item, index) => {
    const { id, name, price, count } = item;
    index += 1;
    return (
      <tr key={id}>
        <td>{index}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>{price}</td>
        <td>
          <button
            onClick={ () => onRemove(id) }
            className="order-item-link d-block" href="remove">
            <i className="icon d-inline-block ion-md-remove-circle-outline"></i>
          </button>
          <button className="order-item-link d-block" href="remove"><i className="icon d-inline-block ion-md-add-circle-outline"></i></button>
          <button className="order-item-link d-block" href="remove"><i className="icon d-inline-block ion-md-close-circle-outline"></i></button>
        </td>
      </tr>
    );
  });


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
          {items}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;