import React from 'react';
import { connect } from 'dva';
import RightContent from '../../components/homeComponents/RightContent/RightContent'
import PcLeftMenu from '../../components/homeComponents/LeftMenu/PcLeftMenu'
import RightHead from '../../components/homeComponents/RightHead'
import {Layout} from 'antd';
import { useState } from 'react';
import MoblieLeftMenu from '../../components/homeComponents/LeftMenu/MoblieLeftMenu';


function HomeIndexPage({dispatch}) {
  const [collapsed, onCollapse] = useState(false);  
  const [keyss, clickTab] = useState('pc');
  let _props = {
    collapsed,
    onCollapse,
    keyss,
    clickTab
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
    {/* 左边栏 (待改进=>根据设备的选择加载对应的组件 通过子组件传递的参数判断)*/}
     { _props.keyss==='pc'?<PcLeftMenu {..._props}></PcLeftMenu>:<MoblieLeftMenu></MoblieLeftMenu>}
    <Layout>
      {/* 右上 */}
    <RightHead {..._props}/>
     <RightContent></RightContent>
    </Layout>
  </Layout>
  )
}


export default connect()(HomeIndexPage);
