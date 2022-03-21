import Container from '../Container';
import { PageHeader, Tabs, Button, Statistic, Descriptions, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const { TabPane } = Tabs;

const renderContent = (props,column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Name">{props.name}</Descriptions.Item>
    <Descriptions.Item label="Passport">{props.passport}</Descriptions.Item>
    <Descriptions.Item label="Surname">{props.surname}</Descriptions.Item>
    <Descriptions.Item label="Middlename">{props.middlename}</Descriptions.Item>
    <Descriptions.Item label="Address">{props.address}</Descriptions.Item>
    <Descriptions.Item label="Job title">{props.job_title}</Descriptions.Item>
    <Descriptions.Item label="Phone">{props.phone_number}</Descriptions.Item>
  </Descriptions>
);

const extraContent = (
  <div
    style={{
      display: 'flex',
      width: 'max-content',
      justifyContent: 'flex-end',
    }}
  >
    <Statistic
      title="Status"
      value="Pending"
      style={{
        marginRight: 32,
      }}
    />
    <Statistic title="Price" prefix="$" value={568.08} />
  </div>
);

const Content = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);



const SingleEmployee =(props)=>{
  const [employee,setEmployee] = useState();
  const params = useParams();
  const [isError,setError] = useState(false);
  const [isLoading,setLoading] = useState(true);
  const navigate = useNavigate(false);
  
  useEffect(()=>{
    axios.get(`/manager/employee/${params.employeId}`)
    .then((res)=>{
      setEmployee(res.data);
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
        title={employee.name}
        subTitle="employee"
       
      >
        <Content >{renderContent(employee)}</Content>
      </PageHeader>
    }
  </Container>
)

}


export default SingleEmployee;




