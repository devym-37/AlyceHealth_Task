import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Layout } from "antd";
import { RestrictRoute } from "./RestrictRoute";

import Header from "./Header";

import HomeScreen from "../routes/Home";
import DetailScreen from "../routes/Detail";
import LikeScreen from "../routes/Like";

const GoToMainPage = () => {
  alert("로그인시 접근 가능한 페이지입니다.");
  return <Redirect to="/" />;
};

export default () => (
  <Router>
    <>
      <Layout className="layout" style={{ minHeight: "100vh" }}>
        <Header />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/detail" component={DetailScreen} />
          <RestrictRoute
            path="/likeNews"
            component={LikeScreen}
            fallback={GoToMainPage}
            isAllow={(user) => user}
          />

          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </>
  </Router>
);
