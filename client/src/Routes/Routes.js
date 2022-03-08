import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import { Home, Login } from '../Pages';

function Routes() {
  return (
    <BrowserRouter >
      <Layout>
        <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Login} path="/login" />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes;