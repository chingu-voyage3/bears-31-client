import React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import App from './App';
import Login from './components/Login/Login';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/:groupId/meetings/:meetingId" component={App} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
