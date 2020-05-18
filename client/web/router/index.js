/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import Layout from "../components/layout";
import menuList from "./const";
import globalRoute from "./common";
import FancyRoute from "../components/FancyRoute";

function RenderRouter() {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const globalRoutes = globalRoute.map((item) => <FancyRoute {...item} />);
  return (
    <Switch>
      {...globalRoutes}
      <Layout>{menuList.map((item) => item.children.map((route) => <Route {...route} />))}</Layout>
    </Switch>
  );
}

export default RenderRouter;
