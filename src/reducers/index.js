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
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      }

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    
    case 'ADD_BOOK_TO_CART':
      return {
        ...state,
        itemsNumber: state.itemsNumber + 1,
        orderSum: state.orderSum + action.price,
        addedBookIndex: action.index,
      }
    
    case 'FETCH_BOOK_FAILURE':
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