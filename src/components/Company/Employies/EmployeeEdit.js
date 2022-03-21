import { Breadcrumb,Skeleton, message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../Container";
import EmployeeForm from "./EmployeeForm";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import axios from "axios";
const EmployeeEdit = (props) =>{
    let params = useParams();
    const navigate = useNavigate();
    const [employee,setEmployee] = useState();
    const [isLoading,setLoading] = useState(true);
    const [uploading,setUpload] = useState(false);
    useEffect(()=>{
        axios.get(`/manager/employee/${params.employeId}`)
        .then(res=>{
            setEmployee(res.data);
            setLoading(false);
        })
        .catch(err=>{
            return err;
        })
    },[]);

    const onFinish = (values) => {
        setUpload(true);
        axios.put(`/manager/employee/${params.employeId}`,values)
        .then(res=>{
            navigate("/employies"); //navigate to employee listing after succesfull creation
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

    return(
        <Container>

        <Breadcrumb>
        <Breadcrumb.Item>
            <Link to="/employies">
                <UserOutlined />
                <span> Employee List</span>
            </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
                Edit Employee({params.employeId});
        </Breadcrumb.Item>
        </Breadcrumb>
        
        {isLoading?
            <Skeleton active />:
            <EmployeeForm action="Edit" onFinish={onFinish} uploading={uploading} initialValues={employee}/>
        }
        </Container>
    )
}


export default EmployeeEdit;