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

      const updatedCart = state.cart.map( (cartItem) => {
        if (cartItem.id === action.payload) {
          if (cartItem.count > 1) {
            return ({
              ...cartItem, 
              count: cartItem.count - 1 
            })
          } else {

            const cartItemIndex = state.cart.findIndex( (item) => item.id === action.payload );

            const newCartArray = [
              ...state.cart.slice(0, cartItemIndex),
              ...state.cart.slice(cartItemIndex+1)
            ]

            return {
              ...state,
              cartQuantity: state.cartQuantity - 1,
              cartSum: state.cartSum - removingBook.price,
              cart: newCartArray
            }

          }
        } else {
          return cartItem 
        }
      });

      return {
        ...state,
        cartQuantity: state.cartQuantity - 1,
        cartSum: state.cartSum - removingBook.price,
        cart: updatedCart
      }
    
    case 'DELETE_BOOK_REQUEST':
      const indexCart = state.cart.findIndex( (item) => item.id === action.payload );
      const indexBooks = state.books.findIndex( (book) => book.id === action.payload );
      const newCartSum = state.cartSum - state.books[indexBooks].price * state.cart[indexCart].count;
      
      const newCartArray = [
        ...state.cart.slice(0, indexCart),
        ...state.cart.slice(indexCart+1)
      ]

      return {
        ...state,
        cartSum: newCartSum,
        cartQuantity: state.cartQuantity - state.cart[indexCart].count,
        cart: newCartArray
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