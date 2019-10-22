import {createStore, applyMiddleware} from 'redux';
import sagaMiddlewareFactory from 'redux-saga';
import rootReducer from './redux/rootReducer';
import rootSaga from './redux/rootSaga';

const configureStore = () => {
  const sagaMiddleware = sagaMiddlewareFactory();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
