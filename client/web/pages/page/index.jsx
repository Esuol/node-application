/* eslint-disable react/no-deprecated */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/destructuring-assignment
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import * as CounterActions from "../../action/count";
import "./index.less";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      test: "我是测试",
    };
  }

  onClick() {
    this.props.computedAdd();
  }

  componentWillMount() {
    axios("http://127.0.0.1:3000/test")
      .then((json) => {
        return json.data;
      })
      .then((res) => {
        this.props.setValue(res.data);
      });
  }

  render() {
    return (
      <div className="title-name">
        <h1>{this.props.counter}</h1>

        <h2>{this.state.test}</h2>
        <button onClick={this.onClick.bind(this)}>点我加</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
