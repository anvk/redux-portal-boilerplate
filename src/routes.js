import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import history from './history.js';

import { App, CounterContainer, UserContainer } from './containers';
import { Home, NotFoundPage } from './components';

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
