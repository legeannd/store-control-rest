import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Signin from '../pages/Signin';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/signin" component={Signin}/>
  </Switch>
)

export default Routes;
