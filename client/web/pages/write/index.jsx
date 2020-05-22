import React, { useState, useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import moment from "moment";
import { Input, Row, Col, Button, Popover, Tag, Dropdown, Menu, Drawer, List, Modal, Table } from "antd";
import { CaretDownOutlined, PictureOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import MathJax from "react-mathjax";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Markdown from "../../components/markdown";
import styles from "./index.less";

const { CheckableTag } = Tag;
const { TextArea } = Input;

export default function Article() {
  const markdown = "# This is a header\n\nAnd this is a paragraph";
  return (
    <div>
      <span>writeeeee</span>
      <Markdown markdown={markdown} />
    </div>
  );
}
