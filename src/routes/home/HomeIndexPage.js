import React from 'react';
import { connect } from 'dva';
import RightContent from '../../components/homeComponents/RightContent/RightContent'
import LeftMenu from '../../components/homeComponents/LeftMenu'
import RightHead from '../../components/homeComponents/RightHead'
import {Layout} from 'antd';
import { useState } from 'react';


function HomeIndexPage({dispatch}) {
  const [collapsed, onCollapse] = useState(false);  
  let _props = {
    collapsed,
    onCollapse
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
    {/* 左边栏 */}
      <LeftMenu {..._props}></LeftMenu>
    <Layout>
      {/* 右上 */}
    <RightHead {..._props}/>
     <RightContent></RightContent>
    </Layout>
  </Layout>
  )
}


export default connect()(HomeIndexPage);
