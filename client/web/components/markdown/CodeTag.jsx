import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import PropTypes from "prop-types";

const CodeTag = ({ value, language }) => {
  if (!value) return null;
  return (
    <SyntaxHighlighter language={language} style={github}>
      {value}
    </SyntaxHighlighter>
  );
};

CodeTag.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeTag;
