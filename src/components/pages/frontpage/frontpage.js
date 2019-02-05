import React, { Component } from 'react';
import FrontpageItem from '../frontpage-item';

import { connect } from 'react-redux';
import { booksLoaded, booksRequested, booksError } from '../../../actions';
import withBookstoreService from '../../hoc';
import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator';

import './frontpage.css';

const Frontpage = ({ books }) => {
  return (
    books.map( (item) => {
      return(
        <div className="container" key={item.id}>
          <FrontpageItem
            book={item}
          />
        </div>
      )
    })
  )
}

class FrontpageContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  
  render() {
    const { books, loading, error } = this.props;
    
    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <Frontpage books={books} />
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      
      bookstoreService
        .getBooks()
        .then( (data) => dispatch(booksLoaded(data)) )
        .catch( (error) => dispatch(booksError(error)) ) 
    }
  }
}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(FrontpageContainer));