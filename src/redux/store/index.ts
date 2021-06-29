import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState: any) => createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);
export default configureStore;
