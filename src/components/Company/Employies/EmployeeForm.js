import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  AutoComplete,
  Layout
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 50,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 50,
    },
    sm: {
      span: 15,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 60,
      offset: 0,
    },
    sm: {
      span: 60,
      offset: 5,
    },
  },
};


let phoneRegExp = /^[0-9]{9}$/;
let passportRegExp = /^[a-zA-Z]{2}-?[0-9]{7}$/;

const EmployeeForm=(props)=>
{
    const [form] = Form.useForm();   
return(
    <Form
    initialValues={props.initialValues}
    style={{marginTop:20}}
    {...formItemLayout}
    form={form}
    name="employee"
    onFinish={props.onFinish}
    scrollToFirstError
>


<Form.Item
  name="name"
  label="Name"
  rules={[
    {
      required: true,
      message: 'Please input name!',
      whitespace: true,
    },
  ]}
>
  <Input />
</Form.Item>

<Form.Item
  name="surname"
  label="Surname"
  rules={[
    {
      required: true,
      message: 'Please input name!',
      whitespace: true,
    },
  ]}
>
  <Input />
</Form.Item>

<Form.Item
  name="middlename"
  label="Middlename"
  rules={[
    {
      required: true,
      message: 'Please input name!',
      whitespace: true,
    },
  ]}
>
  <Input />
</Form.Item>

<Form.Item
  name="job_title"
  label="Job"
  rules={[
    {
      required: true,
      message: 'Please input job type!',
      whitespace: true,
    },
  ]}
>
  <Input />
</Form.Item>



<Form.Item
  name="phone_number"
  label="Employee phone number"
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
  name="address"
  label="Address"
  rules={[
    {
      required: true,
      message: 'Please input address!',
      whitespace: true,
    },
  ]}
>
  <Input />
</Form.Item>

<Form.Item
  name="passport"
  label="Passport"
  rules={[
    {
      pattern:passportRegExp,
      message:"Please input in this pattern AA1234567"
    },
    {
      required: true,
      message: 'Please input passport!',
      whitespace: true,
    },
  ]}
>
  <Input />
</Form.Item>

<Form.Item {...tailFormItemLayout} >
  <Button type="primary" loading={props.uploading}  htmlType="submit">
    {props.action}
  </Button>
</Form.Item>

</Form>)};


EmployeeForm.defaultProps = {
  action: "Create",
  uploading: false,
  initialValues: {}
}


export default EmployeeForm;


