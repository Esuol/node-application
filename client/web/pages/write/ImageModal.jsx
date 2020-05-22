import React from "react";
import { Modal, Input } from "antd";
import { PictureOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const ImageModal = (props) => {
  const {
    imageModalVisible,
    closeImageModal,
    insertImageOk,
    returnImage,
    insertImageValue,
    insertImageValueChange,
  } = props;

  return (
    <Modal
      title="插入图片"
      okText="确定"
      cancelText="取消"
      width={350}
      closable={false}
      destroyOnClose
      onCancel={closeImageModal}
      visible={imageModalVisible}
      onOk={insertImageOk}
    >
      <p className="tc mt-10">或</p>
      <Input
        placeholder="输入网络图片地址"
        size="large"
        value={insertImageValue}
        prefix={<PictureOutlined />}
        style={{ border: "1px solid #ccc" }}
        onChange={insertImageValueChange}
      />
    </Modal>
  );
};

ImageModal.propTypes = {
  imageModalVisible: PropTypes.bool.isRequired,
  closeImageModal: PropTypes.func.isReuired,
  insertImageOk: PropTypes.func.isRequired,
  returnImage: PropTypes.string.isRequred,
  insertImageValue: PropTypes.string.isRequred,
  insertImageValueChange: PropTypes.func.isRequred,
};

export default ImageModal;
