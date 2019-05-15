import React from 'react';
import { connect } from 'dva';
import RightContent from '../../components/homeComponents/RightContent/RightContent'
import PcLeftMenu from '../../components/homeComponents/LeftMenu/PcLeftMenu'
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
    {/* 左边栏 (待改进=>根据设备的选择加载对应的组件 通过子组件传递的参数判断)*/}
      <PcLeftMenu {..._props}></PcLeftMenu>
    <Layout>
      {/* 右上 */}
    <RightHead {..._props}/>
     <RightContent></RightContent>
    </Layout>
  </Layout>
  )
}


export default connect()(HomeIndexPage);
