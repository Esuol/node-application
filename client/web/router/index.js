/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import Layout from "../components/layout";
import FancyRoute from '../components/FancyRoute'
import StatusRoute from '../components/StatusRoute'
import menuList from "./const";
import globalRoute from './common'

function RenderRouter() {
  const globalRoutes = globalRoute.map(item => (
    <FancyRoute {...item} />
  ))
  console.log('globalRoutes', globalRoutes)
  return (
    <Switch>
      { globalRoutes }
      <Layout>{menuList.map((item) => item.children.map((route) => <Route {...route} />))}</Layout>
      <StatusRoute code={404}>
        <div>
          <h1>Not Found</h1>
        </div>
      </StatusRoute>
    </Switch>
  );
}

export default RenderRouter;
