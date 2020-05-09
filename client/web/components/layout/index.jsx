/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "antd";
import Sidebar from "../sidebar";
import Header from "../header";
import Container from "../container";
import * as CounterActions from "../../action/count";
import "./index.less";

class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Row className="layout">
        <Col>
          <div style={{ height: "100%" }}>
            <Sidebar className="layout-sidebar" />
          </div>
        </Col>
        <Col>
          <Header />
          <Container>{this.props.children}</Container>
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
