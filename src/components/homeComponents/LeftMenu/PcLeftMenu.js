import React from 'react';
import { Link } from 'react-router-dom';
import { Layout,Menu, Icon } from 'antd';
import {connect} from 'dva';
import { useState } from 'react';

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

const PcLeftMenu = (props) => {
    const [selectedKey, onClick] = useState([]);
    const [openKey, openChange] = useState([]);
  const {collapsed}=props
  return (
    <Sider trigger={null} collapsible  collapsed={collapsed}  >
    <div style={{ color:'#fff',textAlign:'center',padding:"3px",fontSize:"18px"}} >{collapsed ? '' :"运维管理系统"}</div>
    <Menu 
     theme="dark"
     mode="inline" 
     defaultSelectedKeys={selectedKey}
    //  defaultOpenKeys={this.state.openKey}
     onClick={(e)=>onClick("e.key")}
    //  onOpenChange={this.openChange.bind(this)}
     >
      <SubMenu
        key='/pc/source'
        title={<span><Icon type="file" /><span className="nav-text">资源管理</span></span>}
        >
        <Menu.Item key='/pc/source/system'><Link to='/pc/source/system'>系统</Link></Menu.Item>
        {/*<Menu.Item key='/home/pc/source/tool'><Link to='/home/pc/source/tool'>工具</Link></Menu.Item>*/}
        {/*<Menu.Item key='/home/pc/source/container'><Link to='/home/pc/source/container'>容器</Link></Menu.Item>*/}
        <Menu.Item key='/pc/source/service'><Link to='/pc/source/service'>服务</Link></Menu.Item>
        {/*<Menu.Item key='/home/pc/source/serversync'><Link to='/home/pc/source/serversync'>服务同步</Link></Menu.Item>*/}
        <Menu.Item key='/pc/source/topic'><Link to='/pc/source/topic'>专题资源</Link></Menu.Item>
        <Menu.Item key='/pc/source/dataContent'><Link to='/pc/source/dataContent'>数据资源目录</Link></Menu.Item>
      </SubMenu>
   
    <SubMenu
        key='/pc/usermanage'
        title={<span><Icon type="notification" /><span className="nav-text">用户管理</span></span>}
    >
        <Menu.Item key='/pc/usermanage/organization'><Link to='/pc/usermanage/organization'>组织机构</Link></Menu.Item>
        <Menu.Item key='/pc/usermanage/users'><Link to='/pc/usermanage/users'>用户</Link></Menu.Item>
    </SubMenu>
    <SubMenu
        key='/pc/roleperm'
        title={<span><Icon type="mobile" /><span className="nav-text">角色权限</span></span>}
    >
        {/* {this.props.user.type === "超级管理员" ? null : <Menu.Item key='/pc/roleperm/role'><Link to='/pc/roleperm/role'>角色权限</Link></Menu.Item>}
        {this.props.user.type === "超级管理员" ? <Menu.Item key='/pc/roleperm/domain'><Link to='/pc/roleperm/domain'>空间域管理</Link></Menu.Item> : null} */}
    </SubMenu>
    <SubMenu
        key='/pc/logs'
        title={<span><Icon type="file-text" /><span className="nav-text">日志管理</span></span>}
    >
        <Menu.Item key='/pc/logs/system'>
            <Link to='/pc/logs/system'><span className="nav-text">运维系统日志</span></Link>
        </Menu.Item>
        <Menu.Item key='/pc/logs/query'>
            <Link to='/pc/logs/query'><span className="nav-text">应用系统日志查询</span></Link>
        </Menu.Item>
        <Menu.Item key='/pc/logs/statistics'>
            <Link to='/pc/logs/statistics'><span className="nav-text">应用系统日志统计</span></Link>
        </Menu.Item>
    </SubMenu>
    <SubMenu
        key='/pc/dataDic'
        title={<span><Icon type="solution"/><span className="nav-text">数据字典</span></span>}
    >
        {/*{this.props.user.type === "超级管理员" ? null : <Menu.Item key='/pc/dataDic/mapattribute'>*/}
            {/*<Link to='/pc/dataDic/mapattribute'><span className="nav-text">地图属性</span></Link>*/}
        {/*</Menu.Item>}*/}
        <Menu.Item key='/pc/dataDic/funcDic'>
            <Link to='/pc/dataDic/funcDic'><span className="nav-text">功能字典</span></Link>
        </Menu.Item>
    </SubMenu>
    {/*{this.getIndicatorSider()}*/}
</Menu> 
</Sider>

);

};

PcLeftMenu.propTypes = {
};

export default PcLeftMenu;
