const booksRequested = () => {
  return ({
    type: 'BOOKS_REQUESTED',
  })
}

const booksLoaded = (newBooks) => {
  return ({
    type: 'BOOKS_LOADED',
    payload: newBooks
  });
}

const onAddToCart = (index) => {
  console.log('onAddToCart index:');
  console.log(index);

  return ({
    type: 'ITEM_ADDED_TO_CART',
    index: index
  })
}

const booksError = (errorMessage) => {
  return ({
    type: 'BOOKS_ERROR',
    payload: errorMessage
  })
}

export {
  booksLoaded,
  onAddToCart,
  booksRequested,
  booksError
}