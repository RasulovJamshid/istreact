import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  AutoComplete,
  Layout
} from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 50,
    },
    sm: {
      span: 10,
    },
  },
  wrapperCol: {
    xs: {
      span: 40,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 5,
      offset: 2,
    },
    sm: {
      span: 15,
      offset: 10,
    },
  },
};


let phoneRegExp = /^[0-9]{9}$/;

const Registration = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    axios.post("/users/register",values)
    .then(res=>{
      console.log(res.data);
      if(res.data.hasOwnProperty('success') && res.data.success === true){
        navigate("/login");
      }
      return res;
    })
    .catch(err=>err.response);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.uz', '.ru', '.com','.io','.org'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
<Layout style={{minHeight:'100vh'}}>
 <Layout.Content style={{display:"flex",margin:"auto",alignItems:"center"}}>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      

      <Form.Item
        name="name"
        label="Your Name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="company_name"
        label="Organization Name"
        rules={[
          {
            required: true,
            message: 'Please input your organization Name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="company_website"
        label="Organization Website"
        rules={[
          {
            type:"url",
            message:"Please input organization website"
          },
          {
            required: true,
            message: 'Please input organization website!',
          },
        ]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="company_owner"
        label="Organization CEO"
        rules={[
          {
            required: true,
            message: 'Please input CEO!',
          },
        ]}
      >
          <Input />
      </Form.Item>

      <Form.Item
        name="address"
        label="Organization Address"
        rules={[
          {
            required: true,
            message: 'Please input address!',
          },
        ]}
      >
          <Input />
      </Form.Item>

      <Form.Item
        name="company_email"
        label="Organization email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input email!',
          },
          
        ]}
      >
          <Input />
      </Form.Item>

      <Form.Item
        name="company_phone_number"
        label="Organization phone number"
        rules={[
          {
            pattern:phoneRegExp,
            message: 'The input is not valid phone number!',
          },
          {
            required: true,
            message: 'Please input phone number!',
          },
          
        ]}
      >
          <Input addonBefore="+998"/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="password_confirmation"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
         Or <Link to="/login">Login</Link>
      </Form.Item>

    </Form>
  </Layout.Content>
</Layout>
  );
};

export default Registration;

