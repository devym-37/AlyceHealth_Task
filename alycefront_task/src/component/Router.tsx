import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Layout } from "antd";

import Header from "./Header";

import HomeScreen from "../routes/Home";
import DetailScreen from "../routes/Detail";
import LikeScreen from "../routes/Like";

export default () => (
  <Router>
    <>
      <Layout className="layout" style={{ minHeight: "100vh" }}>
        <Header />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/detail" component={DetailScreen} />
          <Route path="/likeNews" component={LikeScreen} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </>
  </Router>
);
