/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

import menuList from "../../router/const";

const { SubMenu } = Menu;

export default function Sider() {
  const [state, setState] = useState({
    theme: "dark",
    current: "1",
  });

  const handleClick = (e) => {
    setState({
      current: e.key,
    });
  };

  return (
    <>
      <Menu
        theme="dark"
        onClick={handleClick}
        style={{ width: 256, height: "100%" }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[state.current]}
        mode="inline"
      >
        {menuList.map((item) => (
          <SubMenu
            key={item.key}
            title={(
              <span>
                <Icon type={item.title.icon} />
                <span>{item.title.text}</span>
              </span>
          )}
          >
            {item.children &&
            item.children.map((route) => {
              return (
                <Menu.Item key={route.key}>
                  <Link to={route.path}>{route.text}</Link>
                </Menu.Item>
              );
            })}
          </SubMenu>
        ))}
      </Menu>
    </>
  );
}
