const initialState = {
  books: [],
  customerBooks: [],
  itemsNumber: 0,
  orderSum: 0,
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false
      };
    
    case 'ITEM_ADDED_TO_CART':
      const buffer = state.itemsNumber + 1;
      return {
        book: state.books[action.index],
        itemsNumber: buffer,
        addedBookIndex: action.index
      }
    
    default: 
      return state;
  }
}

export default reducer;