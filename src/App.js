import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import 'antd/dist/antd.css';
import Register from './components/Register';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Register />} />
    </Routes>)
}

export default App;
