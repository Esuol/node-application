import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import Layout from "./components/Layout";
// import createStore from "./store";
import "./style/app.css";

// const store = createStore( window.REDUX_DATA );

const jsx = (
    <ReduxProvider>
        <Router>
            <Layout />
        </Router>
    </ReduxProvider>
);

const app = document.getElementById( "app" );
ReactDOM.hydrate( jsx, app );