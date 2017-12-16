import { combineReducers, createStore, compose } from 'redux';

const reducers = combineReducers({
  /* Add reducers here */
});

// Redux Dev Tools extension
const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(reducers, enhancers);

export default store;
