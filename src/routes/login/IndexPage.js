import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

function IndexPage({dispatch,form: { getFieldDecorator, validateFields }}) {
  
  function handleSubmit(e) {
    e.preventDefault()
    validateFields((err, values) => {
        console.log(err)
        if (!err) {
            dispatch({
                type: 'login/checkLogin',
                payload: values
            })
        }
    })
}
  return (
    <div className={styles.loginconter}>
       <div className={styles.normal}>
       <div className={styles.headtitle}>运维管理系统</div>
    <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className={styles.loginformforgot} href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
    </div>
   
  );
 
}

// IndexPage.propTypes = {
// };
//用于连接模板文件与models文件
export default connect()(Form.create()(IndexPage));
