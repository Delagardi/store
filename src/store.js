import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

store.subscribe( () => {
  console.log('STORE changed:');
  console.log(store.getState());
})


export default store;
