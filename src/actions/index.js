const booksLoaded = (newBooks) => {
  return ({
    type: 'BOOKS_LOADED',
    payload: newBooks
  });
}

const onAddToCart = () => {
  console.log('!!!');

  return ({
    type: 'ITEM_ADDED_TO_CART'
  })
} 

export {
  booksLoaded,
  onAddToCart
}