import { Layout, Menu } from 'antd';
import {  UserOutlined, HomeFilled,LogoutOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const { Header, Content, Footer, Sider } = Layout;

const Container =(props)=>{
  const navigate = useNavigate();
const onLogout = ()=>{
  axios.get('/users/logout')
  .then(res=>{
    localStorage.removeItem('user-token');
    localStorage.removeItem('user-role');
    navigate('/login');
  })
  .catch(e=>e);
}
return(
<Layout style={{minHeight:"100vh"}}>
    <Sider
    collapsible
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      theme="light"
    >
      <div className="logo" />
      <Menu theme="light" mode="inline" defaultActiveFirst={true} defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<HomeFilled />}>
          <Link to="/">
            Company
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/employies">
            Employies
          </Link>
        </Menu.Item>
        <Menu.Item key="3" onClick={onLogout} icon={<LogoutOutlined />}>
            Logout
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          {props.children}
        </div>
      </Content>
    </Layout>
</Layout>

)

}


export default Container;