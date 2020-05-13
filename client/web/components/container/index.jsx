import React from "react";
import "./index.less";
import ProtoTypes from "prop-types";

export default function Container(props) {
  const { collapsed, children } = props;

  return (
    <div className="container" style={{ width: !collapsed ? "calc(100vw - 256px)" : "calc(100vw - 80px)" }}>
      {children}
    </div>
  );
}

Container.propTypes = {
  collapsed: ProtoTypes.bool.isRequired,
  children: ProtoTypes.element.isRequired,
};
