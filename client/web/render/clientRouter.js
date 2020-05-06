import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "../router";
import configStore from "../store";

// eslint-disable-next-line no-underscore-dangle
const initStore = window.__INIT_STORE__;
const store = configStore(initStore);

function ClientRender() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.hydrate(<ClientRender />, document.querySelector("#app"));
