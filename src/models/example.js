
import { routerRedux } from 'dva/router';
export default {

  namespace: 'example',

  state: {
    count:0
  },

  subscriptions: {
    setup({ dispatch, history }) {  
      // history.listen((location) => {
      //   console.log('location is: %o', location);
      //   console.log('重定向接收参数：%o', location.state)
      //   // 调用 effects 属性中的 query 方法，并将 location.state 作为参数传递 
      //   dispatch({
      //     type: 'query',
      //     payload: location.state,
      //   })
      // });
    },

  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
     // 路由跳转
     * redirect ({ payload }, { put }) {
     yield put(routerRedux.push('/detail/', {name: 'DetailPage'}));
   },
//    *query ({ payload }, { call, put }) {
//     console.log('payload is: %o', payload);
//  }

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    add(state) {
    const newCurrent = state.count + 1;
     return { ...state,
            count: newCurrent,
         };
        },
    // change(state) {
   
    //  return { ...state,
    //         count: newCurrent,
    //      };
    //     },
  },

};
