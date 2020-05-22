import React from "react";
import PropTypes from "prop-types";

const HeadTag = ({ level, children }) => {
  if (children.lengtn === 0) return null;
  const {
    props: { nodeKey, value },
  } = children[0];

  return React.createElement(`h${level}`, { className: "fw-700", key: nodeKey }, value);
};

HeadTag.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.arrayOf.isRequired,
};

export default HeadTag;
