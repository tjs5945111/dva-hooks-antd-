import React from 'react';
import { Link } from 'react-router-dom';
import { Layout,Menu, Icon } from 'antd';
import {connect} from 'dva';

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

const MoblieLeftMenu = (props) => {
  const {collapsed}=props
  return (
    <Sider trigger={null} collapsible  collapsed={collapsed}  >
    <div style={{ color:'#fff',textAlign:'center',padding:"3px",fontSize:"18px"}} >{collapsed ? '' :"运维管理系统"}</div>
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
      <SubMenu
        key='/pc/source'
        title={<span><Icon type="file" /><span className="nav-text">资源管理(手机端)</span></span>}
        >
        <Menu.Item key='/moblie/source/system'><Link to='/moblie/source/system'>系统(手机端)</Link></Menu.Item>
        {/*<Menu.Item key='/home/pc/source/tool'><Link to='/home/pc/source/tool'>工具</Link></Menu.Item>*/}
        {/*<Menu.Item key='/home/pc/source/container'><Link to='/home/pc/source/container'>容器</Link></Menu.Item>*/}
        <Menu.Item key='/moblie/source/service'><Link to='/moblie/source/service'>服务(手机端)</Link></Menu.Item>
        {/*<Menu.Item key='/home/pc/source/serversync'><Link to='/home/pc/source/serversync'>服务同步</Link></Menu.Item>*/}
        <Menu.Item key='/moblie/source/topic'><Link to='/moblie/source/topic'>专题资源(手机端)</Link></Menu.Item>
        <Menu.Item key='/moblie/source/dataContent'><Link to='/moblie/source/dataContent'>数据资源目录(手机端)</Link></Menu.Item>
      </SubMenu>
   
    <SubMenu
        key='/moblie/usermanage'
        title={<span><Icon type="notification" /><span className="nav-text">用户管理(手机端)</span></span>}
    >
        <Menu.Item key='/moblie/usermanage/organization'><Link to='/moblie/usermanage/organization'>组织机构(手机端)</Link></Menu.Item>
        <Menu.Item key='/moblie/usermanage/users'><Link to='/moblie/usermanage/users'>用户(手机端)</Link></Menu.Item>
    </SubMenu>
    <SubMenu
        key='/moblie/roleperm'
        title={<span><Icon type="mobile" /><span className="nav-text">角色权限(手机端)</span></span>}
    >
        {/* {this.props.user.type === "超级管理员" ? null : <Menu.Item key='/pc/roleperm/role'><Link to='/pc/roleperm/role'>角色权限</Link></Menu.Item>}
        {this.props.user.type === "超级管理员" ? <Menu.Item key='/pc/roleperm/domain'><Link to='/pc/roleperm/domain'>空间域管理</Link></Menu.Item> : null} */}
    </SubMenu>
    <SubMenu
        key='/moblie/logs'
        title={<span><Icon type="file-text" /><span className="nav-text">日志管理(手机端)</span></span>}
    >
        <Menu.Item key='/moblie/logs/system'>
            <Link to='/moblie/logs/system'><span className="nav-text">运维系统日志(手机端)</span></Link>
        </Menu.Item>
        <Menu.Item key='/moblie/logs/query'>
            <Link to='/moblie/logs/query'><span className="nav-text">应用系统日志查询(手机端)</span></Link>
        </Menu.Item>
        <Menu.Item key='/moblie/logs/statistics'>
            <Link to='/moblie/logs/statistics'><span className="nav-text">应用系统日志统计(手机端)</span></Link>
        </Menu.Item>
    </SubMenu>
    <SubMenu
        key='/moblie/dataDic'
        title={<span><Icon type="solution"/><span className="nav-text">数据字典(手机端)</span></span>}
    >
        {/*{this.props.user.type === "超级管理员" ? null : <Menu.Item key='/pc/dataDic/mapattribute'>*/}
            {/*<Link to='/pc/dataDic/mapattribute'><span className="nav-text">地图属性</span></Link>*/}
        {/*</Menu.Item>}*/}
        <Menu.Item key='/moblie/dataDic/funcDic'>
            <Link to='/moblie/dataDic/funcDic'><span className="nav-text">功能字典(手机端)</span></Link>
        </Menu.Item>
    </SubMenu>
    {/*{this.getIndicatorSider()}*/}
</Menu> 
</Sider>

);

};

MoblieLeftMenu.propTypes = {
};

export default MoblieLeftMenu;
