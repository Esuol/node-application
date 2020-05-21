import React from "react";
import { Route } from "react-router-dom";

const StatusRoute = (props) => {
  return (
    <Route
      render={({ staticContext }) => {
        // console.log("staticContext", staticContext);
        // 客户端无staticContext对象
        if (staticContext) {
          // 设置状态码
          staticContext.status = props.code;
        }
        return props.children;
      }}
    />
  );
};

export default StatusRoute;
