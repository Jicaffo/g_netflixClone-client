import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import { Home, Login, Profiles, Browse } from '../Pages';

function Routes() {
  return (
    <BrowserRouter >
      <Layout>
        <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Login} path="/login" />
            <Route exact component={Profiles} path="/profiles" />
            <Route exact component={Browse} path="/browse" />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes;