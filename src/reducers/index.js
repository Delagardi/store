const initialState = {
  books: [],
  customerBooks: [],
  itemsNumber: 0,
  orderSum: 0,
  loading: true,
  addedBookIndex: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_REQUESTED':
      return {
        ...state,
        loading: true,
        error: null
      }

    case 'BOOKS_LOADED':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    
    case 'ITEM_ADDED_TO_CART':
      return {
        ...state,
        itemsNumber: state.itemsNumber + 1,
        addedBookIndex: action.index,
      }
    
    case 'BOOKS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default: 
      return state;
  }
}

export default reducer;