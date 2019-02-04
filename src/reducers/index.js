const initialState = {
  books: [],
  cart: [],
  cartQuantity: 0,
  cartSum: 0,
  loading: true,
  error: null,
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
      const dublicateIndex = state.cart.findIndex( (item) => item.id === action.payload );
      let newCart = null;

      if (dublicateIndex >= 0 ) {
        newCart = state.cart.map( 
                          (cartItem) => cartItem.id === action.payload 
                          ? { 
                              ...cartItem, 
                              count: cartItem.count + 1 
                            } 
                          : cartItem 
                        )
      } else {
        const newCartItem = {
          id: action.payload,
          count: 1
        }

        newCart = [
          ...state.cart,
          newCartItem
        ]
      }

      const cartBook = state.books.find( (book) => book.id === action.payload );
      
      return {
        ...state,
        cartQuantity: state.cartQuantity + 1,
        cartSum: state.cartSum + cartBook.price,
        cart: newCart
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