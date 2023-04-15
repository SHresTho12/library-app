import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useUser } from "../../Hooks/UserContext";
import PageLayout from "../../components/Layout/PageLayout";
import "./CSS/index.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //handleLogin
  // const handleLogin = () => {

  //   //create a user object
  //   const values = {
  //     email,
  //     password
  //   };

  //   console.log(values);
  //  //axios request
  // //  axios.post('/api/auth/login', values).then((response) => {
  // //     console.log(response.data);
  // //     setUser(response.data);
  // //   }).catch((error) => {
  // //     console.log(error);
  // //   });

  //   //if success

  // };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    axios
      .post("http://localhost:8000/api/auth/login", values)
      .then((response) => {
        console.log(response.data);

        //only set user if login is successful
        if (response.status === 200) {
          console.log(response.data);
          setUser(response.data);
          navigate("/profile");
        } else {
          alert("Login Failed");
          navigate("/profile");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <PageLayout></PageLayout>
      <div className="container-form">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            {/* <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="/register">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
