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

const onAddToCart = (index, price) => {
  console.log('onAddToCart index:');
  console.log(index);

  console.log('onAddToCart price:');
  console.log(price);

  return ({
    type: 'ADD_BOOK_TO_CART',
    index,
    price
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