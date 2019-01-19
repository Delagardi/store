import React, { Component } from 'react';
import Frontpage from '../pages/frontpage';
import OrderList from '../pages/order-list';
import Header from '../pages/header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      booksData: [
        {
          id: 321,
          name: "Sapiens: A Brief History of Humankind",
          author: "Yuval Noah Harari",
          price: "$34",
          imageSource: 'sapiens.jpg'
        },
        {
          id: 322,
          name: "The Hero with a Thousand Faces",
          author: "Joseph Campbell",
          price: "$43",
          imageSource: 'hero-faces.jpg'
        },
        {
          id: 323,
          name: "Some third test book",
          author: "Joseph Noah",
          price: "$143",
          imageSource: 'sapiens.jpg'
        },
      ],
      customerBooks: [],
      itemsNumber: 0
    }
  }

  onRemove = (id) => {
    const { itemsNumber, customerBooks } = this.state;
    const itemsCount = itemsNumber - 1;
    const index = customerBooks.findIndex( (item) => item.id === id );
    const stateCopy =  JSON.parse(JSON.stringify(customerBooks));

    if (stateCopy[index].count === 1) {
      console.log('DELETE THIS SHIT')
      return this.onDelete(id);
    }

    stateCopy[index].count--;

    this.setState({
      itemsNumber: itemsCount,
      customerBooks: stateCopy
    })
  }
  
  onAdd = (id) => {
    const { itemsNumber, customerBooks } = this.state;
    const itemsCount = itemsNumber + 1;
    const index = customerBooks.findIndex( (item) => item.id === id );
    const stateCopy =  JSON.parse(JSON.stringify(customerBooks));

    stateCopy[index].count++;

    this.setState({
      itemsNumber: itemsCount,
      customerBooks: stateCopy
    });
  }

  onDelete = (id) => {
    this.setState(({ itemsNumber, customerBooks }) => {
      const index = customerBooks.findIndex( (item) => item.id === id );
      const stateCopy =  JSON.parse(JSON.stringify(customerBooks));
      const itemsCount = itemsNumber - stateCopy[index].count;

      const newCustomerBooks = [
        ...customerBooks.slice(0, index),
        ...customerBooks.slice(index+1)
      ]

      return {
        itemsNumber: itemsCount,
        customerBooks: newCustomerBooks
      }
    });
  }

  onAddToCart = (id) => {
    const { itemsNumber, booksData, customerBooks } = this.state;
    const itemsCount = itemsNumber + 1;
    const newBook = booksData.find( (item) => item.id === id );
    const isOld = customerBooks.findIndex( (item) => item.id === id );

    if (isOld > -1) {      
      const oldBookIndex = customerBooks.findIndex( (item) => item.id === id );

      const stateCopy =  JSON.parse(JSON.stringify(customerBooks));
      stateCopy[oldBookIndex].count++;

      this.setState({
        itemsNumber: itemsCount,
        customerBooks: stateCopy
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
          customerBooks: newCustomerBooks
        }
      })
    }
  }

  render() {
    const { itemsNumber, customerBooks, booksData  } = this.state;

    return (
    <div className="container">
      <Header 
        itemsNumber={itemsNumber}
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
    )
  }
}

export default App;