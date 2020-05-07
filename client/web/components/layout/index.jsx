/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Sidebar from "../sidebar";
import * as CounterActions from "../../action/count";

class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <span>
          <a href="/" style={{ color: "pink", fontSize: 50 }}>
            首页
          </a>
          <a href="/page2" style={{ color: "pink", fontSize: 50 }}>
            次页
          </a>
          <a href="">{this.props.counter}</a>
          {this.props.children}
        </span>
        <Sidebar />
      </div>
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
