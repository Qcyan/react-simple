import {createStore} from 'redux';
// import * as home from './home/reducer';
// import * as production from './production/reducer';
// import thunk from 'redux-thunk';

let store = createStore(()=>{
  let newState = {
    num:1
  }
  return newState;
});

export default store;