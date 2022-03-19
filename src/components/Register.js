import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Form, Input, Button, Checkbox, Layout, Row, Col } from 'antd';
import { LockOutlined, InboxOutlined } from '@ant-design/icons';


let forms_fields_left = [
    {'field':'name',"type":'string','message':'','placeholder':'name'},
    {'field':'email',"type":'email','message':'','placeholder':'email'},
    {'field':'password',"type":'string','message':'','placeholder':'password'},
    {'field':'company_name',"type":'string','message':'','placeholder':'Company name'},
  
]
let forms_fields_right = [
    {'field':'company_owner',"type":'string','message':'','placeholder':'Company owner'},
    {'field':'company_email',"type":'email','message':'','placeholder':'Company email'},
    {'field':'company_website',"type":'url','message':'','placeholder':'Website'},
    {'field':'company_phone_number',"type":'string','message':'','placeholder':'Phone number'}
]
const Register = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
<Layout style={{minHeight:'100vh'}}>
 <Layout.Content style={{display:"flex",margin:"auto",alignItems:"center"}}>
 <Text>Register your company</Text>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    <Col span={12}>
    {forms_fields_left.map((elem,i)=>(
        
        <Form.Item
        name={elem.field}
        rules={[
            {
                required: true,
                type:elem.type,
                message: 'Please input your email!',
            },
            ]}
        >
            <Input placeholder={elem.placeholder} />
        </Form.Item>
       
    ))} 
    </Col>
    <Col span={12}>
    {forms_fields_right.map((elem,i)=>(
        
        <Form.Item
        name={elem.field}
        rules={[
            {
                required: true,
                type:elem.type,
                message: 'Please input your email!',
            },
            ]}
        >
            <Input placeholder={elem.placeholder} />
        </Form.Item>
        
    ))}</Col>
    </Row>


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
          Register
        </Button>
        Or <a href="">Login now!</a>
      </Form.Item>
    </Form>
    </Layout.Content>
    </Layout>
  );
};

export default Register;
