/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Switch } from "react-router";
import { Route, Redirect } from "react-router-dom";
import Layout from "../components/layout";
import FancyRoute from '../components/FancyRoute'
import menuList from "./const";
import globalRoute from './common'

function RenderRouter(ctx) {
  const globalRoutes = globalRoute.map(item => (
    <FancyRoute {...item} />
  ))
  return (
    <Switch>
      { globalRoutes }
      <Redirect from="*" to="/notFound"/>
      <Layout>{menuList.map((item) => item.children.map((route) => <Route {...route} />))}</Layout>
    </Switch>
  );
}

export default RenderRouter;
