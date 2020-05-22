/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import PropTypes from "prop-types";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 17 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const LoginForm = ({ submitLogin }) => {
  const onFinish = (values) => {
    submitLogin(values);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="用户名" name="username" rules={[{ required: true, message: "请输入用户名!" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码!" }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button htmlType="submit" type="primary" block>
          登陆
        </Button>
      </Form.Item>
    </Form>
  );
};

LoginForm.propTypes = {
  submitLogin: PropTypes.func.isRequired,
};

export default LoginForm;
