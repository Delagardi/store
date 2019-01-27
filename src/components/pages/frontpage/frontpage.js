import React, { Component } from 'react';
import FrontpageItem from '../frontpage-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import withBookstoreService from '../../hoc';


import './frontpage.css';

class Frontpage extends Component {
  componentDidMount() {
    const { bookstoreService, onAddToCart, booksData } = this.props;
    console.log(bookstoreService);
    const data = bookstoreService.getBooks();

    console.log('data:');
    console.log(data);
  }
  
  render() {
    const { onAddToCart, booksData } = this.props;
    
    return (
      booksData.map( (item) => {
        return(
          <div className="container">
            <FrontpageItem
              key={item.id}
              book={item}
              onAddToCart={onAddToCart}
            />
          </div>
        )
      })
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state:');
  console.log(state);
  return {
    
  }
}


const mapDispatchToProps = (dispatch) => {
  const { onAddToCart, booksLoaded } = bindActionCreators(actions, dispatch);

  return {
    onAddToCart,
    booksData: booksLoaded
  }
}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(Frontpage));