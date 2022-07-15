import {createStore, applyMiddleware, compose} from 'redux';
import { reducers } from './reducers/root';
import thunk from 'redux-thunk';

// let composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )

  )

export default store;