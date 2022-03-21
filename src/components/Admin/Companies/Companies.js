import { Button, Layout, Menu, Skeleton } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import {company_schema} from "../../../utils/table";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '../../Company/Container';

const Companies =(props)=>{
  const [company,setCompany] = useState();
  const [isError,setError] = useState(false);
  const [isLoading,setLoading] = useState(true);
  const navigate = useNavigate(false);
  

  useEffect(()=>{
    axios.get("/admin/paginate/company")
    .then((res)=>{
      setCompany(res.data.data);
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
    <div>
    {isLoading?
      <Skeleton/>:
      <Table columns={company_schema} size="large" dataSource={company} />
    }
    </div>
  </Container>
)
}


export default Companies;