import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware),
  )
);
