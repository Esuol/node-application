import React from "react";
import MathJax from "react-mathjax"; // 组件显示数学公式。
import PropTypes from "prop-types";

const { Node } = MathJax;

const MathInline = ({ value }) => {
  return <Node formula={value} inline />;
};

MathInline.propTypes = {
  value: PropTypes.string.isRequired,
};

export default MathInline;
