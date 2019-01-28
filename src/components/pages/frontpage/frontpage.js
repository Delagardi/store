import React, { Component } from 'react';
import FrontpageItem from '../frontpage-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import ServiceBookstore from '../../../services/service-bookstore';

import withBookstoreService from '../../hoc';


import './frontpage.css';

const serviceBookstore = new ServiceBookstore();

class Frontpage extends Component {
  componentDidMount() {
    const { bookstoreService, onAddToCart} = this.props;

    const data = bookstoreService.getBooks();

    // this.serviceBookstore
    //   .getBooks()
    //   .then( (booksData) => {
    //     this.setState({
    //       booksData: booksData
    //     });
    // });

    console.log('data:');
    console.log(data);
  }
  
  render() {
    const { onAddToCart } = this.props;
    const { booksData } = this.state;

    console.log('booksData:');
    console.log(booksData);
    
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