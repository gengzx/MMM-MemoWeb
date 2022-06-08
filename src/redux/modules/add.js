
// action types

// reducer
export default function add(state = {value:0}, action){
    switch (action.type) {
        case 'ADD':
          return { ...state, value:state.value+action.value }
        default: 
          return state // 未匹配到的 action 返回原来的 state
      }
}


// action


export const action = {
    addfff() {
        return {type:'ADD',value:1};
    },
    load() {
        return {type:'ADD',value:1};
    }
}