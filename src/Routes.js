import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './containers/NotFound';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NewNote from './containers/NewNote';
import AppliedRoute from './components/AppliedRoute';

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/notes/new" exact component={NewNote} props={childProps} />
    <Route component={NotFound} />
  </Switch>
);