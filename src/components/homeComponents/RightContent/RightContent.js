import React from 'react';
import {Layout} from 'antd';
import { Route ,Switch} from 'react-router-dom';

const { Content} = Layout;
const RightContent = (props) => {
 
  return (
    <Content style={{margin: '24px 16px', padding: 15, background: '#fff'}}>
         <Switch>
                {/* <Route path={`/pc/usermanage/organization`} component={} /> */}
                </Switch>
    </Content>
    
  );

};

RightContent.propTypes = {
};

export default RightContent;
