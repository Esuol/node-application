import React from "react";
import { MenuFoldOutlined, LogoutOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "./index.less";

export default function Header(props) {
  // eslint-disable-next-line react/prop-types
  const { handleCollapsed, collapsed } = props;

  return (
    <div className="header" style={{ width: !collapsed ? "calc(100vw - 256px)" : "calc(100vw - 80px)" }}>
      <div className="header-left">
        {!collapsed ? (
          <MenuFoldOutlined style={{ fontSize: "16px" }} onClick={() => handleCollapsed()} />
        ) : (
          <MenuUnfoldOutlined style={{ fontSize: "16px" }} onClick={() => handleCollapsed()} />
        )}
      </div>
      <div className="header-right">
        <Avatar
          src="https://img2.woyaogexing.com/2020/05/07/57e9e9e9f09945bcb1f13eabbc7348e7!400x400.webp"
          size="small"
        />
        <span style={{ marginLeft: 8, marginRight: 8 }}>berlin</span>
        <LogoutOutlined style={{ fontSize: "16px" }} />
      </div>
    </div>
  );
}
