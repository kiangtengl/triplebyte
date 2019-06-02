import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "./Home";

function AppRoutes() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  );
}

export default AppRoutes;
