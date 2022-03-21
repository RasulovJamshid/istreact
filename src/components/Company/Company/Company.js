import Container from '../Container';
import { PageHeader, Tabs, Button, Statistic, Descriptions,Form, Skeleton } from 'antd';
import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const renderContent = (props,column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Company">{props.name}</Descriptions.Item>
    <Descriptions.Item label="Owner">{props.owner}</Descriptions.Item>
    <Descriptions.Item label="Website">{props.website}</Descriptions.Item>
    <Descriptions.Item label="Email">{props.email}</Descriptions.Item>
    <Descriptions.Item label="Address">{props.address}</Descriptions.Item>
    <Descriptions.Item label="Phone">{props.phone_number}</Descriptions.Item>
  </Descriptions>
);

const Content = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);

const State = (props)=>(
  props.isLoading?
    Skeleton:
    props.component
)

const Company =(props)=>{
  const [company,setCompany] = useState();
  const [isError,setError] = useState(false);
  const [isLoading,setLoading] = useState(true);
  const navigate = useNavigate(false);
  
  useEffect(()=>{
    axios.get("/manager/company")
    .then((res)=>{
      setCompany(res.data);
      console.log(res.data)
      setLoading(false)
      return res;
    })
    .catch(e=>{
      console.log(e);
      setError(true);
      navigate('/login');
      return e;
    });
  },[]);

return(
  <Container>
    {isLoading?
      <Skeleton active/>:
      <PageHeader
        className="site-page-header-responsive"
        title="Company Data"
        subTitle={company.name}
        extra={[
          <Button key="3" onClick={()=>navigate('/edit')} type="primary">Edit</Button>
        ]}
      >
        <Content>{renderContent(company)}</Content>
      </PageHeader>
    }
      
  </Container>
)

}


export default Company;




