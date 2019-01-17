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
      itemsNumber: 0
    }
  }
  
  onAddToCart = () => {
    let buffer = this.state.itemsNumber + 1;
    
    this.setState({
      itemsNumber: buffer
    });
  }

  render() {
    const { itemsNumber, booksData } = this.state;

    return (
    <div className="container">
      <Header 
        itemsNumber={itemsNumber}
      />
      <Frontpage 
        onAddToCart={this.onAddToCart}
        booksData={booksData}
      />
      <ItemList/>
    </div>
    )
  }
}

export default App;