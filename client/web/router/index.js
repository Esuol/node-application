/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import Layout from "../components/layout";
import menuList from "./const";

function RenderRouter() {
  return (
    <Switch>
      <Layout>{menuList.map((item) => item.children.map((route) => <Route {...route} />))}</Layout>
    </Switch>
  );
}

export default RenderRouter;
