import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  AutoComplete,
  Layout,
  Skeleton,
  message
} from 'antd';
import Container from '../Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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



const CompanyEdit = () => {
    const [form] = Form.useForm();
    const [company,setCompany] = useState({});
    const [isLoading,setLoading] = useState(true);
    const navigate = useNavigate();
    const [uploading,setUpload] = useState(false);

    useEffect(()=>{
      axios.get('/manager/company')
      .then(res=>{
          setCompany(res.data);
          setLoading(false);
      })
      .catch(err=>{
          return err;
      })
  },[]);

  const onFinish = (values) => {
    setUpload(true);
    axios.put('/manager/company',values)
    .then(res=>{
        navigate("/"); //navigate to employee listing after succesfull creation
        return res;
    })
    .catch(err=>{
        setUpload(false);
        if(err.response.data.hasOwnProperty('message')){
            message.error(err.response.data.message);
        }
        return err;
    })
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
    return(
    <Container>
    {
      isLoading?
      <Skeleton active/>:
      <Form
        initialValues={company}
        {...formItemLayout}
        form={form}
        name="companyedit"
        onFinish={onFinish}
        scrollToFirstError
        >

              <Form.Item
                name="name"
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
                name="website"
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
                name="owner"
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
                name="email"
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
                name="phone_number"
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
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Edit
                </Button>
              </Form.Item>

        </Form>
    }
        
    </Container>

)};

export default CompanyEdit;
