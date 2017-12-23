import React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import App from './App';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/:groupId/meetings/:meetingId" component={App} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
