import React, { Component } from 'react';
import Frontpage from '../pages/frontpage';
import ItemList from '../pages/item-list';
import Header from '../pages/header';

class App extends Component {
  constructor() {
    super();

    this.state = {
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
    const { itemsNumber } = this.state;
    console.log(itemsNumber);

    return (
    <div className="container">
      <Header itemsNumber={itemsNumber}/>
      <Frontpage onAddToCart={this.onAddToCart}/>
      <ItemList/>
    </div>
    )
  }
}

export default App;