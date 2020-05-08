import React from "react";

import { Router, Switch, Route } from "react-router-dom";

import history from "./History";

import HomePage from "../components/HomePage/HomePage";
import NotFound from "../components/NotFound/NotFound";
import AboutMe from "../components/AboutMe/AboutMe";

import { HOME_PATH } from "../constants/Constants";
import { ABOUT_ME } from "../constants/Constants";

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={HOME_PATH} component={HomePage} />
        <Route exact path={ABOUT_ME} component={AboutMe} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
