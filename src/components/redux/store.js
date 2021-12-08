import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import donorReducer from './reducers';

const rootReducer = combineReducers({ donorReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
