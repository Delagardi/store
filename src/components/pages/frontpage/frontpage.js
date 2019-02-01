import React, { Component } from 'react';
import FrontpageItem from '../frontpage-item';

import { connect } from 'react-redux';
import { booksLoaded, booksRequested, booksError } from '../../../actions';
import withBookstoreService from '../../hoc';
import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator';

import './frontpage.css';

class Frontpage extends Component {
  componentDidMount() {
    const { 
      bookstoreService, 
      booksLoaded, 
      booksRequested,
      booksError
    } = this.props;

    booksRequested();
    bookstoreService.getBooks()
      .then( (data) => booksLoaded(data) )
      .catch( (error) => booksError(error) )
  }
  
  render() {
    //const { onAddToCart } = this.props;
    const { books, loading, error } = this.props;
    
    if (error) {
      return <ErrorIndicator />
    }

    if (loading) {
      return <Spinner />
    }

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

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error
  }
}


const mapDispatchToProps = (dispatch) => {
  //const { onAddToCart, booksLoaded } = bindActionCreators(actions, dispatch);

  return {
    booksRequested: () => dispatch(booksRequested()),
    booksError: () => dispatch(booksError()),
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