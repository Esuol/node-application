/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Particles from 'react-particles-js';
import { Form } from 'antd'
import priticleParams from './priticle'
import LoginForm from './loginForm'
import './index.less'

class Login extends React.Component {

  render () {
    return (
      <div className="wrapForm">
        <Particles params={ priticleParams } className="login" />
       <section className="loginWrap">
          <h2 className="loginTitle">ANTD-REACT LOGIN</h2>
          <LoginForm />
       </section>
      </div>
    )
  }
}

export default Login