/* eslint-disable global-require */
import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import CodeTag from "./CodeTag";
import ImageTag from "./ImageTag";
import HeadTag from "./HeadTag";
import MathTag from "./MathTag";
import MathInline from "./MathInLine";

const MarkDown = (props) => {
  const { markdown } = props;
  return (
    <ReactMarkdown
      source={markdown}
      linkTarget={() => "_blank"}
      plugins={[[require("remark-math")]]}
      renderers={{
        code: CodeTag,
        image: ImageTag,
        heading: HeadTag,
        math: MathTag,
        inlineMath: MathInline,
      }}
    />
  );
};

MarkDown.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default MarkDown;
