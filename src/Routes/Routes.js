import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRequiredWrapper } from "../Components";
import {
  Home,
  Register,
  Login,
  Profiles,
  Browse,
  EditProfile,
  AddProfile,
  NotFound,
} from "../Pages";


function Routes() {
  return (
    <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Register} path="/register" />
        <Route exact component={Login} path="/login" />
        <>
        <AuthRequiredWrapper>
          <Route exact component={Profiles} path="/profiles" />
          <Route exact component={Profiles} path="/manage-profiles" />
          <Route exact component={EditProfile} path="/manage-profiles/:id" />
          {/* <Route exact component={EditProfile} path="/manage-profiles/:userName" /> */}
          <Route exact component={AddProfile} path="/add-profile/" />
          <Route exact component={Browse} path="/browse" />
        </AuthRequiredWrapper>
        <Route component={NotFound} path="/*" />
        </>
    </Switch>
  );
}

export default Routes;
