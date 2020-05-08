import React from 'react'
import './index.less'

export default function Container (props) {

  return (
    <div class="container">
      {props.children}
    </div>
  )
}