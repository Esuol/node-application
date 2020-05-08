/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from 'antd';
import Sidebar from "../sidebar";
import * as CounterActions from "../../action/count";
import './index.less'

class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Row className="layout">
        <Col span={5}>
          <div style={{height: '100%'}}>
            <Sidebar className="layout-sidebar" />
          </div>
        </Col>
        <Col span={19}>
          right
        </Col>
    </Row>
    );
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter,
  state,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
