import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import history from './history.js';

import App from './containers/App/App.js';
import Home from './components/Home.js';
import CounterContainer from './containers/CounterContainer.js';
import UserContainer from './containers/UserContainer.js';
import NotFoundPage from './components/NotFoundPage.js';

const routes = (
  <Router history={history}>
    <Route path='/' component={App} >
      <IndexRoute component={Home} />
      <Route path='counter' component={CounterContainer}/>
      <Route path='counter/:counterNum' component={CounterContainer}/>
      <Route path='user' component={UserContainer}/>
      <Route path='*' component={NotFoundPage} />
    </Route>
  </Router>
);

export default routes;
