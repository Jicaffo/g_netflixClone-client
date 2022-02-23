import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Login } from '../Pages';

function Routes() {
  return (
    <BrowserRouter >
        <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Login} path="/login" />
        </Switch>
    </BrowserRouter>
  )
}

export default Routes;