import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Home from "../../Containers/Home";
import NotFound from "../../Containers/NotFound";
import SignIn from "../../Containers/SignIn";
import SignUp from "../../Containers/SignUp";

export default function Routes({ appProps }) {
  return (
    <React.Fragment>
      <Switch>
        <UnauthenticatedRoute path="/SignIn" exact component={SignIn} appProps={appProps} />
        <UnauthenticatedRoute path="/SignUp" exact component={SignUp} appProps={appProps} />
        <AuthenticatedRoute path="/" exact component={Home} appProps={appProps} />
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}
