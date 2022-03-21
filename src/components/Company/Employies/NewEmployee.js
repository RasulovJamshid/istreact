import { Breadcrumb, message, PageHeader } from "antd";
import React, { useState } from "react";
import Container from "../Container";
import EmployeeForm from "./EmployeeForm";
import {  UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const NewEmployee = (props) =>{
    const [uploading,setUpload] = useState(false);
    const navigate = useNavigate();
    const onFinish = (values) => {
        setUpload(true);
        axios.post('/manager/employee',values)
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
                New Employee
        </Breadcrumb.Item>
        </Breadcrumb>
        
        <EmployeeForm uploading={uploading} action="Create" onFinish={onFinish}/>
        
        </Container>
    )
}


export default NewEmployee;