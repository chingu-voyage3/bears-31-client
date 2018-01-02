/* global window */

import { combineReducers, createStore, compose } from 'redux';
import rootReducer from './reducers';

// Redux Dev Tools extension
const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(rootReducer, enhancers);

export default store;
