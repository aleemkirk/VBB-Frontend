import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// type deff for redux dev tools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create an instance of saga middleware to invoke
const sagaMiddleWare = createSagaMiddleware();

const middleware = [sagaMiddleWare];


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
  

sagaMiddleWare.run(rootSaga);

export default store;
