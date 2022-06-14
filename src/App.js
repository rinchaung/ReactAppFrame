import {DesktopOutlined,CrownFilled,HomeOutlined,TeamOutlined,UserOutlined,SoundFilled} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu} from 'antd'; 
import React, { useState } from 'react';
import './App.css';
const { Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Home', '1',  <HomeOutlined />),
  getItem('About', '2', <DesktopOutlined />),
  getItem('News','3',   <SoundFilled />),
  getItem('Leaders', 'sub3', <CrownFilled />, [getItem('David Lin', '9'), getItem('SuZar', '10')]),
  getItem('Developers', 'sub1', <UserOutlined />, [
    getItem('Tom', '4'),
    getItem('Bill', '5'),
    getItem('Alex', '6'),
  ]),
  getItem('Teams', 'sub2', <TeamOutlined />, [getItem('ATT 1', '7'), getItem('ATT 2', '8 ')])
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
   <Layout>          
       <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
      <Layout className="site-layout">
          <Header style={{padding :"0px"}}>
            <h1 style={{color:'white'}}>ATT</h1>
          </Header>
        <Content style={{margin: '0 16px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            <h1 style={{color : 'green'}}>This is a content..!</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center'}}>Ant Design ©2022 Created by ATT</Footer>
      </Layout>
    </Layout>
   </Layout>
  );
};

export default App;