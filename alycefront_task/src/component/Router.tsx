import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import HomeScreen from "../routes/Home";
import DetailScreen from "../routes/Detail";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/detail" component={DetailScreen} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
