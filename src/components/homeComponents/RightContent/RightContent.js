import React from 'react';
import {Layout} from 'antd';
import { Route ,Switch} from 'react-router-dom';
import SystemCompontent from '../RightContent/Pc/SystemCompontent'
import ServiceCompontent from '../RightContent/Pc/ServiceCompontent'
import TopicCompontent from '../RightContent/Pc/TopicCompontent'
import DataContentCompontent from '../RightContent/Pc/DataContentCompontent'
import OrganizationCompontent from '../RightContent/Pc/OrganizationCompontent'
import UsersCompontent from '../RightContent/Pc/UsersCompontent'
import LogsSystemCompontent from '../RightContent/Pc/LogsSystemCompontent'
import QueryCompontent from '../RightContent/Pc/QueryCompontent'
import StatisticsCompontent from '../RightContent/Pc/StatisticsCompontent'
import FuncDicCompontent from '../RightContent/Pc/FuncDicCompontent'

const { Content} = Layout;
const RightContent = (props) => {
 
  return (
    <Content style={{margin: '24px 16px', padding: 15, background: '#fff'}}>
         <Switch>
            <Route path={`/pc/source/system`} component={SystemCompontent} />
            <Route path={`/pc/source/service`} component={ServiceCompontent} />
            <Route path={`/pc/source/topic`} component={TopicCompontent} />
            <Route path={`/pc/source/dataContent`} component={DataContentCompontent} />
            <Route path={`/pc/usermanage/organization`} component={OrganizationCompontent} />
            <Route path={`/pc/usermanage/users`} component={UsersCompontent} />
            <Route path={`/pc/logs/system`} component={LogsSystemCompontent} />
            <Route path={`/pc/logs/query`} component={QueryCompontent} />
            <Route path={`/pc/logs/statistics`} component={StatisticsCompontent} />
            <Route path={`/pc/dataDic/funcDic`} component={FuncDicCompontent} />
          </Switch>
    </Content>
    
  );

};

RightContent.propTypes = {
};

export default RightContent;
