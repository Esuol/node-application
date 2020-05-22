import React from "react";
import Markdown from "../../components/markdown";

export default function Article() {
  const markdown = "# This is a header\n\nAnd this is a paragraph";
  return (
    <div>
      <span>article</span>
      <Markdown markdown={markdown} />
    </div>
  );
}
