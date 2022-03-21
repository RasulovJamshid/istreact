import React from 'react';
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { LockOutlined, InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const onFinish = values => {
    let res = axios.post("/users/login",values)
    .then(response=>{
      if(response.data.hasOwnProperty('success') && response.data.success === true){
      localStorage.setItem('user-token',response.data.token);
      localStorage.setItem('user-role',response.data.role);
      console.log(response.data.role);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

      navigate('/');
      }
      return response.data
    })
    .catch(err=>err);
   
  };

  return (
<Layout style={{minHeight:'100vh'}}>
 <Layout.Content style={{display:"flex",margin:"auto",alignItems:"center"}}>
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
            type:'email',
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<InboxOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
    </Layout.Content>
    </Layout>
  );
};

export default Login;
