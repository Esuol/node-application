import React from "react";
import Zmage from "react-zmage"; // 图片组件
import PropTypes from "prop-types";

const ImageTag = ({ src }) => {
  return (
    <Zmage
      src={src}
      style={{ width: "100%" }}
      controller={{
        rotate: false,
        zoom: false,
      }}
    />
  );
};

ImageTag.propTypes = {
  src: PropTypes.string.isRequired,
};
export default ImageTag;
