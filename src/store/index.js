import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { addressReducer } from './reducers/addressReducer';
import { clientReducer } from './reducers/clientReducers';

const rootReducer = combineReducers({
  addressReducer,
  clientReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
