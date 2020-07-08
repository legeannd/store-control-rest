import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Signin from '../pages/Signin';
import CreateProduct from '../pages/CreateProduct';
import EditProduct from '../pages/EditProduct';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/signin" component={Signin}/>
    <Route path="/create-product" component={CreateProduct}/>
    <Route path="/edit-product" component={EditProduct}/>
  </Switch>
)

export default Routes;
