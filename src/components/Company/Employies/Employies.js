import { Button, Layout, Menu, Skeleton } from 'antd';
import Container from '../Container';
import { Table, Tag, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import {employee_schema} from "../../../utils/table";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Employies =(props)=>{
  const [employee,setEmployee] = useState();
  const [isError,setError] = useState(false);
  const [isLoading,setLoading] = useState(true);
  const navigate = useNavigate(false);
  
  

  useEffect(()=>{
    axios.get("/manager/employee")
    .then((res)=>{
      setEmployee(res.data.data);
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
      <Table columns={employee_schema} size="large" dataSource={employee} />
    }
    <Button key="1" onClick={()=>navigate("create")} type="primary">+ New</Button>
    </div>
  </Container>
)
}


export default Employies;