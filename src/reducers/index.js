const initialState = {
  books: [],
  customerBooks: [],
  itemsNumber: 0,
  orderSum: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      };
    
    default: 
      return state;
  }
}

export default reducer;