import { combineReducers, createStore, compose } from 'redux';
import meetings from './reducers/meetings';

const reducers = combineReducers({
  /* Add reducers here */
  meetings,
});

// Redux Dev Tools extension
const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(reducers, enhancers);

export default store;
