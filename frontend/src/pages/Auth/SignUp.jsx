import React from 'react'
import PageLayout from '../../components/Layout/PageLayout'
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import {useNavigate} from 'react-router-dom';
import './CSS/index.css'
import axios from 'axios';
function SignUp() {
  const navigate = useNavigate();
  const loginPath = ()=>{
  
  }
  return (
   <>
   <PageLayout>

   </PageLayout>



<div className = "container-form"> 
    <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            //sign up
            console.log(values)
            axios.post('http://localhost:8000/api/auth/signup', values).then((response) => {
              console.log(response.data);
              navigate('/login');
            }
            ).catch((error) => {
              console.log(error);
            }
            );

          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="username"
            label="username"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
              { min: 6 },
              {
                validator: (_, value) =>
                  value && value.includes("A")
                    ? Promise.resolve()
                    : Promise.reject("Password does not match criteria."),
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered does not match."
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>



 

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block onClick={loginPath} type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
  </div>
   
   </>
  )
}

export default SignUp