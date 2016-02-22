import React from 'react';
import { Route } from 'react-router';

import { App, CounterContainer, UserContainer } from './containers';
import { Home, NotFoundPage } from './components';

export default (
  <Route path='/' component={App} >
    <Route path='home' component={Home} />
    <Route path='counter' component={CounterContainer}/>
    <Route path='counter/:counterNum' component={CounterContainer}/>
    <Route path='user' component={UserContainer}/>
    <Route status={404} path='*' component={NotFoundPage} />
  </Route>
);
