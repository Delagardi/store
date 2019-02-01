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
    this.props.fetchBooks();
  }
  
  render() {
    //const { onAddToCart } = this.props;
    const { books, loading, error } = this.props;
    
    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
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


const mapDispatchToProps = (dispatch, ownProps) => {
  //const { onAddToCart, booksLoaded } = bindActionCreators(actions, dispatch);
  const { bookstoreService } = ownProps;
  
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      
      bookstoreService
        .getBooks()
        .then( (data) => dispatch(booksLoaded(data)) )
        .catch( (error) => dispatch(booksError(error)) ) 
    }
    //booksRequested: () => dispatch(booksRequested()),
    //booksError: (error) => dispatch(booksError(error)),
    // Varian 1
    //booksLoaded: (newBooks) => dispatch(booksLoaded(newBooks)),
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