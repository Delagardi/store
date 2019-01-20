import React, { Component } from 'react';
import Frontpage from '../pages/frontpage';
import OrderList from '../pages/order-list';
import Header from '../pages/header';
import ServiceBookstore from '../../services/service-bookstore';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      booksData: [],
      customerBooks: [],
      itemsNumber: 0,
      orderSum: 0
    }
  }

  serviceBookstore = new ServiceBookstore();

  onRemove = (id) => {
    const { itemsNumber, customerBooks, orderSum } = this.state;
    const itemsCount = itemsNumber - 1;
    const index = customerBooks.findIndex( (item) => item.id === id );
    const customerBooksCopy =  JSON.parse(JSON.stringify(customerBooks));
    const orderSumNumber = orderSum - customerBooks[index].price;


    if (customerBooksCopy[index].count === 1) {
      return this.onDelete(id);
    }

    customerBooksCopy[index].count--;

    this.setState({
      itemsNumber: itemsCount,
      customerBooks: customerBooksCopy,
      orderSum: orderSumNumber
    })
  }
  
  onAdd = (id) => {
    const { itemsNumber, customerBooks, orderSum } = this.state;
    const itemsCount = itemsNumber + 1;
    const index = customerBooks.findIndex( (item) => item.id === id );
    const customerBooksCopy =  JSON.parse(JSON.stringify(customerBooks));
    const orderSumNumber = orderSum + customerBooksCopy[index].price;

    customerBooksCopy[index].count++;

    this.setState({
      itemsNumber: itemsCount,
      customerBooks: customerBooksCopy,
      orderSum: orderSumNumber
    });
  }

  onDelete = (id) => {
    this.setState(({ itemsNumber, customerBooks, orderSum }) => {
      const index = customerBooks.findIndex( (item) => item.id === id );
      const customerBooksCopy =  JSON.parse(JSON.stringify(customerBooks));
      const itemsCount = itemsNumber - customerBooksCopy[index].count;
      const orderSumNumber = orderSum - customerBooks[index].price * customerBooks[index].count;


      const newCustomerBooks = [
        ...customerBooks.slice(0, index),
        ...customerBooks.slice(index+1)
      ]

      return {
        itemsNumber: itemsCount,
        customerBooks: newCustomerBooks,
        orderSum: orderSumNumber
      }
    });
  }

  onAddToCart = (id) => {
    const { itemsNumber, booksData, customerBooks, orderSum } = this.state;
    const itemsCount = itemsNumber + 1;
    const newBook = booksData.find( (item) => item.id === id );
    const isOld = customerBooks.findIndex( (item) => item.id === id );
    const orderSumNumber = orderSum + newBook.price;


    if (isOld > -1) {      
      const oldBookIndex = customerBooks.findIndex( (item) => item.id === id );
      const customerBooksCopy =  JSON.parse(JSON.stringify(customerBooks));
      customerBooksCopy[oldBookIndex].count++;

      this.setState({
        itemsNumber: itemsCount,
        customerBooks: customerBooksCopy,
        orderSum: orderSumNumber
      });

    } else {
      newBook.count = 1;

      this.setState( ({ customerBooks }) => {
        const newCustomerBooks = [
          ...customerBooks,
          newBook
        ]
    
        return {
          itemsNumber: itemsCount,
          customerBooks: newCustomerBooks,
          orderSum: orderSumNumber
        }
      })
    }
  }

  componentDidMount() {
    this.serviceBookstore
      .getBooks()
      .then( (booksData) => {
        this.setState({
          booksData: booksData
        });
      });
  }
  
  render() {
    const { itemsNumber, customerBooks, booksData, orderSum  } = this.state;

    return (
    <Router>
      <div className="container">
        <Route 
          path="/books" 
          component={Frontpage}
          exact
        />
        <Header 
          itemsNumber={itemsNumber}
          orderSum={orderSum}
        />
        <Frontpage 
          onAddToCart={this.onAddToCart}
          booksData={booksData}
        />
        <OrderList
          onRemove={this.onRemove}
          onAdd={this.onAdd}
          onDelete={this.onDelete}
          customerBooks={customerBooks}
          booksData={booksData}
        />
      </div>
    </Router>
    )
  }
}

export default App;