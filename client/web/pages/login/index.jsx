/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Particles from 'react-particles-js';
import { Form } from 'antd'
import priticleParams from './priticle'
import LoginForm from './loginForm'
import { get } from '../../request'
import './index.less'

export default function Login () {
  const submitLogin = (values) => {
    console.log('values', values)
    console.log(get)
  }
  return (
    <div className="wrapForm">
      <Particles params={ priticleParams } className="login" />
     <section className="loginWrap">
        <h2 className="loginTitle">博客管理端</h2>
        <LoginForm submitLogin={submitLogin} />
     </section>
    </div>
  )
}
