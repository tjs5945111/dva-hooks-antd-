import React from 'react';

// import example from '../models/example'
const Example = (props) => {
  const Clicks = () => {
    console.log(props)    
    //2为要传递过去的参数
  props.receives(2)
   }
  // const Click = () => {
  //  alert(1)
  //  }
  return (
    <div onClick={Clicks}>
     <div>{props.count}</div>
     <button onClick={() => { props.dispatch({type: 'example/add'}); }}>添加</button>
     {/* <div onClick={Click}>事件处理</div> */}
    </div>
    
  );

};

Example.propTypes = {
};

export default Example;
