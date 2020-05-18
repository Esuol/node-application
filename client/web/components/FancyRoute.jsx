import React, { useEffect } from "react";
import { Route } from "react-router-dom";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";
// import "./index.less";

// NProgress.inc(0.2);
// NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

function FancyRoute(props) {
  useEffect(() => {
    // NProgress.start();
    // NProgress.set(0.4);
    // return () => {
    //   NProgress.done();
    // };
  });
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} />;
}

export default FancyRoute;
