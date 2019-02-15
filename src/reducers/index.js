const initialState = {
  bookList: {
    books: [],
    loading: true,
    error: null,
  },
  order: {
    cart: [],
    cartQuantity: 0,
    cartSum: 0,
  }
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
  const { 
    bookList: {
      books
    }, 
    order: {
      cart, 
      cartQuantity, 
      cartSum
    } 
  } = state;

  const book = books.find( (book) => book.id === bookID );
  const itemIndex = cart.findIndex( (item) => item.id === bookID )
  const item = cart[itemIndex];

  const newCartItem = updateCartItem(book, item, quantity);
  return {
    cart: updateCartItems(cart, newCartItem, itemIndex),
    cartQuantity: cartQuantity + quantity,
    cartSum: cartSum + quantity*book.price
  }
}

const updateBookList = (state, action) => {
  switch(action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        loading: true,
        error: null
      }

    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: action.payload,
        loading: false,
        error: null
      };
    
    case 'FETCH_BOOK_FAILURE':
      return {
        books: [],
        loading: false,
        error: action.payload
      }
    
      default: 
      return state;
  }
}

const updateShoppingCart = (state, action) => {
  switch (action.type) {    
    case 'ADD_BOOK_TO_CART':
      return updateOrder(state, action.payload, 1);
    
    case 'REMOVE_BOOK_FROM_CART':
      return updateOrder(state, action.payload, -1);
    
    case 'DELETE_BOOK_FROM_CART': 
      const item = state.order.cart.find( (book) => book.id === action.payload );
      
      return updateOrder(state, action.payload, -1*item.count); 
    
    default: 
      return state;
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_BOOKS_REQUEST':
    case 'FETCH_BOOKS_SUCCESS':
    case 'FETCH_BOOK_FAILURE':
      return {
        ...state,
        bookList: updateBookList(state, action)
      }
    
    case 'ADD_BOOK_TO_CART':
    case 'REMOVE_BOOK_FROM_CART':
    case 'DELETE_BOOK_FROM_CART': 
      return {
        ...state,
        order: updateShoppingCart(state, action)
      }
    
    default: 
      return state;
  }
}

export default reducer;