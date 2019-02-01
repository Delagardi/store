const booksRequested = () => {
  return ({
    type: 'FETCH_BOOKS_REQUEST',
  })
}

const booksLoaded = (newBooks) => {
  return ({
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  });
}

const onAddToCart = (index) => {
  console.log('onAddToCart index:');
  console.log(index);

  return ({
    type: 'ADD_BOOK_TO_CART',
    index: index
  })
}

const booksError = (errorMessage) => {
  return ({
    type: 'FETCH_BOOK_FAILURE',
    payload: errorMessage
  })
}

export {
  booksLoaded,
  onAddToCart,
  booksRequested,
  booksError
}