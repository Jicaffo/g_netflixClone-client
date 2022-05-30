import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  Register,
  Login,
  Profiles,
  Browse,
  EditProfile,
  AddProfile,
} from "../Pages";
import { ProfilesProvider } from "../Contexts/profilesContext";

function Routes() {
  return (
    <Switch>
      <ProfilesProvider>
        <Route exact component={Home} path="/" />
        <Route exact component={Register} path="/register" />
        <Route exact component={Login} path="/login" />
        <Route exact component={Profiles} path="/profiles" />
        <Route exact component={Profiles} path="/manage-profiles" />
        <Route exact component={EditProfile} path="/manage-profiles/:id" />
        {/* <Route
          exact
          component={EditProfile}
          path="/manage-profiles/:userName"
        /> */}
        <Route exact component={AddProfile} path="/add-profile/" />
        <Route exact component={Browse} path="/browse" />
      </ProfilesProvider>
    </Switch>
  );
}

export default Routes;
