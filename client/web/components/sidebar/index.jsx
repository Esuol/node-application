/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

import menuList from "../../router/const";

const { SubMenu } = Menu;

function Sider() {
  const [openKeys, setOpenKeys] = useState([])
  const [state, setState] = useState({
    theme: "dark",
    current: "1",
  });

  const openChange = routerItemsArray => {
    if (routerItemsArray.length < openKeys.length) {
        setOpenKeys(routerItemsArray)
        return
      }

      routerItemsArray.map((item) => {
        if (!openKeys.includes(item)) {
          setOpenKeys(prev => [...prev, item])
        }
      })
  }

  const handleClick = (e) => {
    setState({
      current: e.key,
    });
  };

  return (
    <>
      <Menu
        theme="dark"
        openKeys={openKeys}
        selectedKeys={[state.current]}
        onClick={handleClick}
        onOpenChange={openChange}
        style={{ width: 256, height: "100%" }}
        defaultOpenKeys={["sub1"]}
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
                <Menu.Item
                  key={route.key}
                  onClick={() => {
                    // 设置文档标题
                    document.title = route.text;
                }}
                >
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

export default Sider
