/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Menu } from "antd";

import menuList from "../../router/const";

const { SubMenu } = Menu;

function Sider(props) {
  const { collapsed } = props
  const [openKeys, setOpenKeys] = useState(["article"])
  const [selectedKeys, setSelectedKeys] = useState({
    current: "article-a",
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
    setSelectedKeys({
      current: e.key,
    });
  };


  return (
    <>
      <Menu
        theme="dark"
        openKeys={openKeys}
        selectedKeys={[selectedKeys.current]}
        onClick={handleClick}
        onOpenChange={openChange}
        style={{ width: collapsed ? 'auto' : 256 , height: "100%" }}
        defaultOpenKeys={["article"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        {menuList.map((item) => (
          <SubMenu
            key={item.key}
            title={item.title}
            icon={item.icon}
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

Sider.propTypes = {
  // eslint-disable-next-line react/require-default-props
  collapsed: PropTypes.bool
}

export default Sider
