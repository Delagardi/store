import React, { Component } from 'react';
import FrontpageItem from '../frontpage-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { booksLoaded } from '../../../actions';
import withBookstoreService from '../../hoc';

import './frontpage.css';

class Frontpage extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;

    bookstoreService.getBooks()
      .then( (data) => {
        booksLoaded(data); 
      })
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