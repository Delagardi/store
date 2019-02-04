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

const onAddToCart = (id, price) => {
  return ({
    type: 'ADD_BOOK_TO_CART',
    payload: id
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