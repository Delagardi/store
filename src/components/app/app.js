import React, { Component } from 'react';
import Frontpage from '../pages/frontpage';
import OrderList from '../pages/order-list';
import Header from '../pages/header';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from '../error-boundry';

class App extends Component {
  render() {
    return (
    <ErrorBoundry>
      <Router>
        <div className="container">
          <Header/>
          <Frontpage/>
          <OrderList/>
        </div>
      </Router>
    </ErrorBoundry>
    )
  }
}

export default App;