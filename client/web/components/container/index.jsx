/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "./index.less";

export default function Container(props) {
  // eslint-disable-next-line react/prop-types
  const { collapsed } = props;
  return (
    <div className="container" style={{ width: !collapsed ? "calc(100vw - 256px)" : "calc(100vw - 80px)" }}>
      {props.children}
    </div>
  );
}
