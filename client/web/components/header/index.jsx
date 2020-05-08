import React from 'react'
import { MenuFoldOutlined, LogoutOutlined } from '@ant-design/icons'
import { Avatar } from 'antd';
import './index.less'

export default function Header () {
  return (
    <div className="header">
      <div className="header-left">
         <MenuFoldOutlined  style={{ fontSize: '16px' }} />
      </div>
      <div className="header-right">
        <Avatar src="https://img2.woyaogexing.com/2020/05/07/57e9e9e9f09945bcb1f13eabbc7348e7!400x400.webp" size="small" />
        <span style={{marginLeft: 8, marginRight: 8}}>berlin</span>
        <LogoutOutlined  style={{ fontSize: '16px' }} />
      </div>
    </div>
  )
}