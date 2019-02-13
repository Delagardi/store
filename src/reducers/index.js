const initialState = {
  books: [],
  cart: [],
  cartQuantity: 0,
  cartSum: 0,
  loading: true,
  error: null,
};

const updateCartItems = (cart, item, index) => {

  if (item.count === 0) {
    return [
      ...cart.slice(0, index),
      ...cart.slice(index+1)
    ]
  }

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

const updateCartItem = (book, item = {}, quantity ) => { // if item will be undefined we will give it empty object
  const {
    id = book.id,
    name = book.name,
    price = 0,
    count = 0
  } = item;

  return {
    id: id,
    name: name,
    price: price + quantity*book.price,
    count: count + quantity,
  };
}

const updateOrder = (state, bookID, quantity) => {
  const { books, cart, cartQuantity, cartSum } = state;

  const book = books.find( (book) => book.id === bookID );
  const itemIndex = cart.findIndex( (item) => item.id === bookID )
  const item = cart[itemIndex];

  const newCartItem = updateCartItem(book, item, quantity);
  return {
    ...state,
    cart: updateCartItems(cart, newCartItem, itemIndex),
    cartQuantity: cartQuantity + quantity,
    cartSum: cartSum + quantity*book.price
  }
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
      return updateOrder(state, action.payload, 1);
    
    case 'REMOVE_BOOK_REQUEST':
      return updateOrder(state, action.payload, -1);
    
    case 'DELETE_BOOK_REQUEST': 
      const item = state.cart.find( (book) => book.id === action.payload );
      
      return updateOrder(state, action.payload, -1*item.count);

    
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