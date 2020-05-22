import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

const MarkDown = (props) => {
  const { markdown } = props;
  return <ReactMarkdown source={markdown} linkTarget={() => "_blank"} plugins={[[require("remark-math")]]} />;
};

MarkDown.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default MarkDown;
