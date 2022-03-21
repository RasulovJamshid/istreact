import { Button, Layout, Menu, Skeleton } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import {admin_employee_schema} from "../../../utils/table";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '../../Company/Container';

const EmployiesTable =(props)=>{
  const [employee,setEmployee] = useState();
  const [isError,setError] = useState(false);
  const [isLoading,setLoading] = useState(true);
  const navigate = useNavigate(false);
  
  

  useEffect(()=>{
    axios.get("/admin/paginate/employee")
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
      <Table columns={admin_employee_schema} size="large" dataSource={employee} />
    }
    </div>
  </Container>
)
}


export default EmployiesTable;