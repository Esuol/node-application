import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 17 },
}

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const LoginForm = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button htmlType="submit" type="primary" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;