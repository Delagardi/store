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

export {
  booksLoaded,
  onAddToCart
}