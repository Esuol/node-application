import React from 'react'
import { MenuFoldOutlined } from '@ant-design/icons'
import './index.less'

export default function Header () {
  return (
    <div className="header">
      <div className="header-left">
         <MenuFoldOutlined  style={{ fontSize: '16px' }} />
      </div>
      <div className="header-right">right</div>
    </div>
  )
}