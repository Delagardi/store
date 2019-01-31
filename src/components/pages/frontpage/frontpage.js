import React, { Component } from 'react';
import FrontpageItem from '../frontpage-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { booksLoaded } from '../../../actions';

import ServiceBookstore from '../../../services/service-bookstore';

import withBookstoreService from '../../hoc';


import './frontpage.css';

//const serviceBookstore = new ServiceBookstore();

class Frontpage extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;

    const data = bookstoreService.getBooks();

    // this.serviceBookstore
    //   .getBooks()
    //   .then( (booksData) => {
    //     this.setState({
    //       booksData: booksData
    //     });
    // });

    this.props.booksLoaded(data);
  }
  
  render() {
    //const { onAddToCart } = this.props;
    const { books } = this.props;
    
    return (
      books.map( (item) => {
        return(
          <div className="container">
            <FrontpageItem
              key={item.id}
              book={item}
            />
          </div>
        )
      })
    )
  }
}
//onAddToCart={onAddToCart}              

const mapStateToProps = ({ books }) => {
  return {
    books: books
  }
}


const mapDispatchToProps = (dispatch) => {
  //const { onAddToCart, booksLoaded } = bindActionCreators(actions, dispatch);

  return {
    // Varian 1
    booksLoaded: (newBooks) => dispatch(booksLoaded(newBooks)),
    //Variant 2
    // booksLoaded: (newBooks) => {
    //   dispatch({
    //     type: 'BOOKS_LOADED',
    //     payload: newBooks
    //   })
    // }
  }
}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(Frontpage));