

import * as Api from '@/api'


/**
 * redux 加载异步数据流 中间件
 */
export default function asyncData(client) {
    return ({dispatch, getState}) => {
      return next => action => {

        if (typeof action === 'function') {
          return action(dispatch, getState);
        }
  
        //const { type, types, ...rest } = action; 
        //const [REQUEST, SUCCESS, FAILURE] = types;

        const { ajax, ...rest } = action; 

        if (!ajax) {
            return next(action);
        }
        ajax(Api, result => next({...rest, result}) );


      };
    };
  }
