import React from 'react';
import { connect } from 'react-redux';
import { onRemoveFromCart, onAddToCart, onDeleteFromCart } from '../../../actions';
import './order-list.css';

const OrderList = ({ 
  books,
  cart,
  onRemoveFromCart, 
  onAddToCart, 
  onDeleteFromCart 
}) => {
  const items = cart.map( (item, index) => {
    const { id, count } = item;
    const book = books.find( (book) => book.id === id );
    const { name, price } = book;
    const priceSum = price * count;
    index += 1;

    return (
      <tr key={id}>
        <td>{index}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>${priceSum}</td>
        <td>
          <button
            onClick={ () => onRemoveFromCart(id) }
            className="order-item-button d-block" href="remove">
            <i className="icon d-inline-block ion-md-remove-circle-outline"></i>
          </button>
          <button
            onClick={ () => onAddToCart(id) }
            className="order-item-button d-block" href="remove">
            <i className="icon d-inline-block ion-md-add-circle-outline">
            </i>
          </button>
          <button
            onClick={ () => onDeleteFromCart(id) }
            className="order-item-button d-block" href="remove">
            <i className="icon d-inline-block ion-md-close-circle-outline"></i>
          </button>
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

const mapStateToProps = (state) => {
  return ({
    books: state.books,
    cart: state.cart
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    onRemoveFromCart: (id) => dispatch(onRemoveFromCart(id)),
    onAddToCart: (id) => dispatch(onAddToCart(id)),
    onDeleteFromCart: (id) => dispatch(onDeleteFromCart(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);