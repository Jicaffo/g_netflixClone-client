import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login, Profiles, Browse, Mylist } from '../Pages';

function Routes() {
  return (
    <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Login} path="/login" />
        <Route exact component={Profiles} path="/profiles" />
        <Route exact component={Browse} path="/browse" />
        <Route exact component={Mylist} path="/my-list" />
        
    </Switch>
  )
}

export default Routes;