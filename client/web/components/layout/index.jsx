/* eslint-disable react/jsx-props-no-spreading */
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
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  handleCollapsed = () => {
    this.setState((prev) => ({
      collapsed: !prev.collapsed,
    }));
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Row className="layout">
        <Col>
          <div style={{ height: "100%" }}>
            <Sidebar className="layout-sidebar" {...this.props} collapsed={collapsed} />
          </div>
        </Col>
        <Col>
          <Header handleCollapsed={this.handleCollapsed} collapsed={collapsed} />
          <Container collapsed={collapsed}>{this.props.children}</Container>
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
