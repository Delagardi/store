import React, { Component } from 'react';
import Frontpage from '../pages/frontpage';
import ItemList from '../pages/item-list';
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
      ],
      customerBooks: [],
      itemsNumber: 0
    }
  }
  
  onAddToCart = (id) => {
    let buffer = this.state.itemsNumber + 1;
    let newBook = this.state.booksData.filter( (item) => item.id === id );
    console.log(newBook);

    this.setState( ({ customerBooks }) => {
      const newCustomerBooks = [
        ...customerBooks,
        newBook
      ]
  
      return {
        itemsNumber: buffer,
        customerBooks: newCustomerBooks
      }
    })
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
      <ItemList
        customerBooks={customerBooks}
        booksData={booksData}
      />
    </div>
    )
  }
}

export default App;