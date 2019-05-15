import React from 'react';
import {Layout, Icon,Menu } from 'antd';
import back from '../../assets/images/back.svg'

const { Header} = Layout;
const RightHead = (props) => {
  //接收父组件传递的参数及及时间
 const {collapsed,onCollapse}=props
  return (
    <Header style={{ background: '#fff', paddingLeft:20,paddingRight:20,height:"56px"}}>
    <Icon
      className="trigger"
      type={collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={()=>onCollapse( !collapsed)}
    />
     <div style={{ lineHeight: "56px", float: 'right', marginRight: 15 }}>
                    <div ><img style={{cursor: "pointer", width: '1.7rem'}} alt="退出" src={back}/></div>
                </div>
                <div style={{ lineHeight: "56px", float: 'right', marginRight: 15 }}>
                    <span><Icon type='user' />&nbsp;未登录</span>
                </div>
                <Menu theme='light'
                    mode='horizontal'
                    defaultSelectedKeys={['pc']}
                    // onClick={this.props.clickTab.bind(this)}
                    style={{position:"relative",top:"-56px",width:"950px",left:"30px"}}
                >
                    <Menu.Item key='pc'>
                        <Icon type='home' /><span>首页</span>
                    </Menu.Item>
                    <Menu.Item key='mobile'>
                        <Icon type='mobile' /><span>移动</span>
                    </Menu.Item>
                </Menu>
  </Header>
    
  );

};

RightHead.propTypes = {
};

export default RightHead;
