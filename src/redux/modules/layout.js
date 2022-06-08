// action types
const TOGGLE_HEADER = "layout/TOGGLE_HEADER";

// reducer
const initialState = {
    header: true
}

export default function layout(state = initialState, action = {}) {
    switch (action.type) {
        case TOGGLE_HEADER:
            return {
                ...state,
                header: action.toggle
            }
        default:
            return state // 未匹配到的 action 返回原来的 state
    }
}

// action
export const action = {
    
    toggleHeader(toggle) {
        return { type: TOGGLE_HEADER, toggle: toggle };
    }


};



