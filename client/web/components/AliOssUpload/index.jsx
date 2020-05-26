import React from "react";
// import { Upload, message } from "antd";
import moment from "moment";
import OSS from "ali-oss";
// import { PlusOutlined, LoadingOutlined, InboxOutlined } from "@ant-design/icons";
import { accessKeySecret, accessKeyId, bucket } from "./secret";

// const { Dragger } = Upload;

const client = new OSS({
  region: "oss-cn-hangzhou",
  accessKeyId,
  accessKeySecret,
  bucket,
  secure: true,
});

const UploadToOss = (path, file) => {
  return new Promise((resolve, reject) => {
    client
      .put(path, file)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const filePath = (file) => {
  // 上传文件路径和名称
  return `${moment().format("YYYYMMDD")}/${file.uid}.${file.type.split("/")[1]}`;
};

const AliOssUpload = (props) => {
  // const { type, returnImageUrl }
};
