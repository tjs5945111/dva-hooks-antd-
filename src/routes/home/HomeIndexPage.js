import React from 'react';
import { connect } from 'dva';
import styles from './HomeIndexPage.css';
import RightContent from '../../components/homeComponents/RightContent'
import LeftMenu from '../../components/homeComponents/LeftMenu'
import {Layout, Menu, Breadcrumb, Icon } from 'antd';
import { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


function HomeIndexPage({dispatch}) {
  const [collapsed, onCollapse] = useState(false);  
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider trigger={null} collapsible  collapsed={collapsed}>
      <div className={styles.logo} />
      <LeftMenu></LeftMenu>
    </Sider>
    <Layout>
    <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={()=>onCollapse( !collapsed)}
            />
          </Header>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  )
}


export default connect()(HomeIndexPage);
