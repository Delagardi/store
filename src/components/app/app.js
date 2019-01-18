import React, { Component } from 'react';
import Frontpage from '../pages/frontpage';
import ItemList from '../pages/item-list';
import Header from '../pages/header';

class App extends Component {
  constructor() {
    super();

    this.CustomerBookKEY = 1;

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
      newBook.key = this.CustomerBookKEY++;

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
      <ItemList
        customerBooks={customerBooks}
        booksData={booksData}
      />
    </div>
    )
  }
}

export default App;