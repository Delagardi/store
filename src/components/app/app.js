import React from 'react';
import Frontpage from '../pages/frontpage';
import ItemList from '../pages/item-list';
import Header from '../pages/header';

const App = () => {
  return (
  <div className="container">
    <Header/>
    <Frontpage/>
    <ItemList/>
  </div>
  )
}

export default App;