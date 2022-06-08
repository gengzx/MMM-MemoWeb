


// action types
const LOAD = "explore/LOAD";

// reducer
const initialState = {
    loaded: false,
    data:[]
};

export default function explore(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                data: action.result.data
            }
        default:
            return state // 未匹配到的 action 返回原来的 state
    }
}

// action
export const action = {
    load() {
        return { type: LOAD, ajax: ({ demo }, cb) => demo.loadData({},cb) };
    }
};



