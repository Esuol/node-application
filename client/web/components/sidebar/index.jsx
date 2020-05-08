import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Menu, Switch, Icon } from "antd";
import { FileWordOutlined } from '@ant-design/icons'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import menuList from '../../router/const'

const { SubMenu } = Menu;

export default function Sider() {
  const [state, setState] = useState({
    theme: "dark",
    current: "1",
  });


  const handleClick = (e) => {
    console.log("click ", e);
    setState({
      current: e.key,
    });
  };

  return (
    <>
      <Menu
        theme="dark"
        onClick={handleClick}
        style={{ width: 256, height: '100%' }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[state.current]}
        mode="inline"
      >
        {menuList.map(item => {
          <SubMenu key="sub1"  title={
            <span>
                <Icon type={item.title.icon} />
                <span>{item.title.text}</span>
            </span>
          }>
            <Menu.Item key="1">
              <Link to="/">文章列表</Link>
            </Menu.Item>
          </SubMenu>
        })}
      </Menu>
    </>
  );
}
