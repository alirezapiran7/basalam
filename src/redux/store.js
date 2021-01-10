import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk];
const initialState = {};

import { combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  sotre: reducer,
});


const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
