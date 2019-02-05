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
      const newCartItem = {
        id: action.payload,
        count: 1
      }

      let newCart = [
        ...state.cart,
        newCartItem
      ]

      const dublicateIndex = state.cart.findIndex( (item) => item.id === action.payload );

      if (dublicateIndex >= 0 ) {
        newCart = state.cart.map( 
                          (cartItem) => cartItem.id === action.payload 
                          ? { 
                              ...cartItem, 
                              count: cartItem.count + 1 
                            } 
                          : cartItem 
                        )
      }

      const cartBook = state.books.find( (book) => book.id === action.payload );
      
      return {
        ...state,
        cartQuantity: state.cartQuantity + 1,
        cartSum: state.cartSum + cartBook.price,
        cart: newCart
      }
    
    case 'REMOVE_BOOK_REQUEST':
      const removingBook = state.books.find( (book) => book.id === action.payload );

      const updatedCart = state.cart.map( 
                              (cartItem) => cartItem.id === action.payload 
                              ? { 
                                  ...cartItem, 
                                  count: cartItem.count - 1 
                                } 
                              : cartItem 
      )

      return {
        ...state,
        cartQuantity: state.cartQuantity - 1,
        cartSum: state.cartSum - removingBook.price,
        cart: updatedCart
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