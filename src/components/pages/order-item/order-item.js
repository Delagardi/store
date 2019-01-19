import React from 'react';

import './order-item.css';

const OrderItem = (props) => {
  const {
    id, 
    index, 
    name, 
    count, 
    price, 
    onRemove, 
    onAdd, 
    onDelete
  } = props;

  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{count}</td>
      <td>${price}</td>
      <td>
        <button
          onClick={ () => onRemove(id) }
          className="order-item-button d-block" href="remove">
          <i className="icon d-inline-block ion-md-remove-circle-outline"></i>
        </button>
        <button
          onClick={ () => onAdd(id) }
          className="order-item-button d-block" href="remove">
          <i className="icon d-inline-block ion-md-add-circle-outline">
          </i>
        </button>
        <button
          onClick={ () => onDelete(id) }
          className="order-item-button d-block" href="remove">
          <i className="icon d-inline-block ion-md-close-circle-outline"></i>
        </button>
      </td>
    </tr>
  );
}

export default OrderItem;
