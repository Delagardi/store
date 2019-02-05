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

const onAddToCart = (id) => {
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

const onRemove = (id) => {
  return ({
    type: 'REMOVE_BOOK_REQUEST',
    payload: id
  })
}

export {
  booksLoaded,
  onAddToCart,
  booksRequested,
  booksError,
  onRemove
}