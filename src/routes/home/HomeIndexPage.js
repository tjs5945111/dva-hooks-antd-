import React from 'react';
import { connect } from 'dva';
import styles from './HomeIndexPage.css';
import RightContent from '../../components/homeComponents/RightContent'
import LeftMenu from '../../components/homeComponents/LeftMenu'
import RightHead from '../../components/homeComponents/RightHead'
import {Layout, Menu, Breadcrumb, Icon } from 'antd';
import { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


function HomeIndexPage({dispatch}) {
  const [collapsed, onCollapse] = useState(false);  
  let _props = {
    collapsed,
    onCollapse
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
    {/* 左边栏 */}
    <Sider trigger={null} collapsible  collapsed={collapsed}>
      <div className={styles.logo} >{collapsed ? '' :"运维管理系统"}</div>
      <LeftMenu></LeftMenu>
    </Sider>
    <Layout>
      {/* 右上 */}
    <RightHead {..._props}/>
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
