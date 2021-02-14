import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login, logout, isLoggedIn } from "../utils/auth";
import { withRouter } from "react-router-dom";

const LoginForm = ({ history }) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async (values) => {
    const { username, password } = values;
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);

    await login(username, password);
    console.log(isLoggedIn());
    if (isLoggedIn()) {
      history.push("/home");
    }
  };

  return (
    <Form
      form={form}
      name="horizontal_login"
      onFinish={onFinish}
      style={{
        height: "30%",
        width: "55%",
        borderRadius: "10px",
      }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          style={{ height: "45px" }}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input
          style={{ height: "45px" }}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default withRouter(LoginForm);
