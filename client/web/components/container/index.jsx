/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "./index.less";
import ProtoTypes from "prop-types";

export default function Container(props) {
  const { collapsed } = props;
  return (
    <div className="container" style={{ width: !collapsed ? "calc(100vw - 256px)" : "calc(100vw - 80px)" }}>
      {props.children}
    </div>
  );
}

Container.prototype = {
  collapsed: ProtoTypes.bool.isRequired,
};
