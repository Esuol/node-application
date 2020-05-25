import React from "react";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import CreateStore from "../store/index";
import Router from "../router";

function ServerRender(req, initStore) {
  const store = CreateStore(JSON.parse(initStore.store));

  return (props, context) => {
    return (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Router />
        </StaticRouter>
      </Provider>
    );
  };
}

export default ServerRender;
