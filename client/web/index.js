/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

function ClientRender() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
