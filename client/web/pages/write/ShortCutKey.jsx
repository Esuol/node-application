import React from "react";
import { Table } from "antd";
import { columns, dataSource } from "./const";

const ShortCutKey = () => {
  return <Table columns={columns} dataSource={dataSource} pagination={false} size="small" />;
};

export default ShortCutKey;
