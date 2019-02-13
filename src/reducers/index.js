const initialState = {
  books: [],
  cart: [],
  cartQuantity: 0,
  cartSum: 0,
  loading: true,
  error: null,
};

const updateCartItems = (cart, item, index) => {
  if (index === -1) {
    return [
      ...cart,
      item
    ]
  }

  return [
    ...cart.slice(0, index),
    item,
    ...cart.slice(index+1)
  ]
}

const updateCartItem = (book, item = {} ) => { // if item will be undefined we will give it empty object
  const {
    id = book.id,
    name = book.name,
    price = 0,
    count = 0
  } = item;

  return {
    id: id,
    name: name,
    price: price + book.price,
    count: count + 1
  };
}

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
      const bookID = action.payload;
      const book = state.books.find( (book) => book.id === bookID );
      const itemIndex = state.cart.findIndex( (item) => item.id === bookID )
      const item = state.cart[itemIndex];

      const newCartItem = updateCartItem(book, item);
      return {
        ...state,
        cart: updateCartItems(state.cart, newCartItem, itemIndex)
      }

      // const newCartItem = {
      //   id: action.payload,
      //   count: 1
      // }

      // let newCart = [
      //   ...state.cart,
      //   newCartItem
      // ]

      // const dublicateIndex = state.cart.findIndex( (item) => item.id === action.payload );

      // if (dublicateIndex >= 0 ) {
      //   newCart = state.cart.map( 
      //                     (cartItem) => cartItem.id === action.payload 
      //                     ? { 
      //                         ...cartItem, 
      //                         count: cartItem.count + 1 
      //                       } 
      //                     : cartItem 
      //                   )
      // }

      // const cartBook = state.books.find( (book) => book.id === action.payload );
      
      // return {
      //   ...state,
      //   cartQuantity: state.cartQuantity + 1,
      //   cartSum: state.cartSum + cartBook.price,
      //   cart: newCart
      // }
    
    case 'REMOVE_BOOK_REQUEST': {
      const cartBook = state.books.find( (book) => book.id === action.payload );

      const newCart = state.cart.map( (cartItem) => {
        if (cartItem.id === action.payload) {
          if (cartItem.count > 1) {
            return ({
              ...cartItem, 
              count: cartItem.count - 1 
            })
          } else {

            const cartItemIndex = state.cart.findIndex( (item) => item.id === action.payload );

            const newCart = [
              ...state.cart.slice(0, cartItemIndex),
              ...state.cart.slice(cartItemIndex+1)
            ]

            return {
              ...state,
              cartQuantity: state.cartQuantity - 1,
              cartSum: state.cartSum - cartBook.price,
              cart: newCart
            }

          }
        } else {
          return cartItem 
        }
      });

      return {
        ...state,
        cartQuantity: state.cartQuantity - 1,
        cartSum: state.cartSum - cartBook.price,
        cart: newCart
      }
    }
    
    case 'DELETE_BOOK_REQUEST': {
      const index = state.cart.findIndex( (item) => item.id === action.payload );
      const indexBooks = state.books.findIndex( (book) => book.id === action.payload );
      const newCartSum = state.cartSum - state.books[indexBooks].price * state.cart[index].count;
      
      const newCart = [
        ...state.cart.slice(0, index),
        ...state.cart.slice(index+1)
      ]

      return {
        ...state,
        cartSum: newCartSum,
        cartQuantity: state.cartQuantity - state.cart[index].count,
        cart: newCart
      }
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