import React from 'react';
import {
  Route,
  Router,
  Redirect,
  browserHistory
} from 'react-router';
import {
  App,
  CounterContainer,
  UserContainer,
  LoginPageContainer
} from './containers';
import { Home, NotFoundPage } from './components';

export default (
  <Router history={browserHistory}>
    <Redirect from="/" to="home" />
    <Route path="login" component={LoginPageContainer} />
    <Route path="/" component={App} >
      <Route path="home" component={Home} />
      <Route path="counter" component={CounterContainer} />
      <Route path="counter/:counterNum" component={CounterContainer} />
      <Route path="user" component={UserContainer} />
      <Route status={404} path="*" component={NotFoundPage} />
    </Route>
  </Router>
);
