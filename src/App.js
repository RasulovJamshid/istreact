import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import 'antd/dist/antd.less';
import Register from './components/Register';
import Company from './components/Company/Company/Company';
import Employies from './components/Company/Employies/Employies';
import EmployeeEdit from './components/Company/Employies/EmployeeEdit';
import SingleEmployee from './components/Company/Employies/SingleEmployee';
import CompanyEdit from './components/Company/Company/CompanyEdit';
import NewEmployee from './components/Company/Employies/NewEmployee';
import axios from 'axios';
import EmployiesTable from './components/Admin/Employies/Employies';
import Companies from './components/Admin/Companies/Companies';
import { useEffect, useState } from 'react';

let role = "manager";
let user_token = localStorage.getItem('user-token');
role =localStorage.getItem('user-role');
axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${user_token}`;

function App() {
  return (
      <Routes>
      <Route path="/" element={<Company/>} />
      <Route path='edit' element={<CompanyEdit/>}/>
      <Route path="register" element={<Register/>} />
      <Route path="login" element={<Login/>} />
      <Route path="employies">
            <Route index element={<Employies/>}/>
            <Route path="create" element={<NewEmployee/>}/>
            <Route path=":employeId" element={<SingleEmployee/>} />
            <Route path=":employeId/edit" element={<EmployeeEdit/>} />   
      </Route>
      </Routes>    
    )
}

export default App;
