import { Button, message, Space, Tag } from "antd";
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Link,Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const deleteRecord=(employee_id)=>{
  axios.delete(`manager/employee/${employee_id}`)
  .then(res=>{
    message.success("Record deleted");
  })
  .catch(err=>{
    message.error("Error occured");
  });
}

const employee_schema = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',    
      render: (text,record,index) => <Link to={`/employies/${record.id}`}>{text}</Link>,
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Passport',
      dataIndex: 'passport',
      key: 'passport',
    },
    {
      title: 'Midname',
      dataIndex: 'middlename',
      key: 'midname',
      responsive: ['lg'],
    },
    {
      title: 'Job title',
      dataIndex: 'job_title',
      key: 'job_title',
      responsive: ['lg'],

    },
  
    {
      title: 'Phone',
      dataIndex: 'phone_number',
      key: 'phone_num',
      responsive: ['lg'],

    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      responsive: ['lg'],

    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={()=>deleteRecord(record.id)} color="red" icon={<DeleteFilled />} size="small" />
          <Link to={`${record.id}/edit`}><Button type="primary"  icon={<EditFilled />} size="small" /></Link>
        </Space>
      ),
    },
  ];

const company_schema = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',    
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      responsive: ['lg'],

    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
      responsive: ['lg'],

    },
  
    {
      title: 'Phone',
      dataIndex: 'phone_number',
      key: 'phone_number',
      responsive: ['lg'],

    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      responsive: ['lg'],

    },
    
  ];

  const admin_employee_schema = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',    
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Passport',
      dataIndex: 'passport',
      key: 'passport',
    },
    {
      title: 'Midname',
      dataIndex: 'middlename',
      key: 'midname',
      responsive: ['lg'],
    },
    {
      title: 'Job title',
      dataIndex: 'job_title',
      key: 'job_title',
      responsive: ['lg'],

    },
  
    {
      title: 'Phone',
      dataIndex: 'phone_number',
      key: 'phone_num',
      responsive: ['lg'],

    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      responsive: ['lg'],

    }
  ];  


export {employee_schema,company_schema,admin_employee_schema};


