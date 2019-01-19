import React from 'react';
import OrderItem from '../order-item';
import './order-list.css';

const OrderList = ({ 
  customerBooks, 
  onRemove, 
  onAdd, 
  onDelete 
}) => {
  const items = customerBooks.map( (item, index) => {
    const { id, name, price, count } = item;
    index += 1;
    return (
      <OrderItem 
        key={id}
        id={id}
        index={index}
        name={name}
        count={count}
        price={price}
        onRemove={onRemove}
        onAdd={onAdd}
        onDelete={onDelete}
      />
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

export default OrderList;