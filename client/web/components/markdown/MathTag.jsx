import React from "react";
import MathJax from "react-mathjax";
import PropTypes from "prop-types";

const { Node } = MathJax;

const MathTag = ({ value }) => <Node formula={value} />;

MathTag.propTypes = {
  value: PropTypes.string.isRequired,
};

export default MathTag;
