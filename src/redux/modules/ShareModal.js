
// action types
const SHOW = "ShareModal/SHOW";
const HIDE = "ShareModal/HIDE";

// reducer
const initialState = {
    visible: false
};

export default function ShareModal(state = initialState, action = {}) {
    switch (action.type) {
        case SHOW:
            return {
                ...state,
                id: action.id,
                visible: true
            }
        case HIDE:
            return {
                ...state,
                visible: false
            }
        default:
            return state // 未匹配到的 action 返回原来的 state
    }
}

// action
export const action = {

    showShareModal(id) {
        return { type: SHOW, id: id };
    },
    hideShareModal() {
        return { type: HIDE };
    }
};



