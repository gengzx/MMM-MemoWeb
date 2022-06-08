
/**
 * 创建配置 Redux Reducer 
 * 根据 action 处理 state 数据,接收旧的 state 返回新的 state
 */
import { combineReducers } from 'redux';

/*
function add(state = {value:0}, action){
    switch (action.type) {
        case 'ADD':
          return { ...state, value:state.value+action.value }
        default: 
          return state // 未匹配到的 action 返回原来的 state
      }
}

function add2(state = {value2:0}, action){
    switch (action.type) {
        case 'ADD_2':
          return { ...state, value2:state.value2+action.value2 }
        default: 
          return state // 未匹配到的 action 返回原来的 state
      }
}*/



import add from './add';
import explore from './explore';
import layout from './layout';

import create from './Create';
import ShareModal from './ShareModal';

export default combineReducers({
    create,
    add,
    explore,
    layout,
    ShareModal
})