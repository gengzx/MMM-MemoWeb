
// action types
const LOAD = "create/LOAD";
const LOAD_TREE = "create/LOAD_TREE";

const ADD_TREE_NODE = "create/ADD_TREE_NODE";
const DELETE_TREE_NODE = "create/DELETE_TREE_NODE";
const SELECT_TREE_NODE = "create/SELECT_TREE_NODE";

// reducer
const initialState = {
    treeData: [],
    deleteTreeKeys:[]
};

export default function create(state = initialState, action = {}) {

    const { treeData, selectNode, deleteTreeKeys } = state
    switch (action.type) { 

        case LOAD:
            return {
                ...state,
                data: action.data
            }

        case LOAD_TREE:
            return {
                ...state,
                treeData: action.result
            }

        case ADD_TREE_NODE:
            const { text } = action
            const timestamp = new Date().getTime()
            const newNode = {
                name: text,
                code:timestamp
            }

            if(selectNode && JSON.stringify(selectNode) != '{}'){
                if(!selectNode.children) selectNode.children = []
                selectNode.children.push(newNode)
            }else{
                treeData.push(newNode)
            }

            return {
                ...state,
                timestamp:timestamp,
                treeData:treeData
            }
        case DELETE_TREE_NODE:
            const loop = (data) => {
                data.find( (item, idx) => {
                    if(item == selectNode){
                        data.splice(idx, 1)
                        return true
                    }
                    if (item.children) loop(item.children)
                })
            }
            loop(treeData)
            if(selectNode.F_ID) deleteTreeKeys.push(selectNode.F_ID)
            return {
                ...state,
                selectNode:null,
                deleteTreeKeys:deleteTreeKeys,
                treeData:treeData
            }
        case SELECT_TREE_NODE:
            return {
                ...state,
                selectNode: action.node
            }
        default:
            return state // 未匹配到的 action 返回原来的 state
    }
}

// action
export const action = {

    load() {
        return { type: LOAD, data: [] }
    },

    loadTree(id) {
        return { type: LOAD_TREE, ajax: (api, cb) => api.loadTree(id,cb)   }
    },
    replaceTree(data) {
        return { type: LOAD_TREE, result: data   }
    },

    addTreeNode(text) {
        return { type: ADD_TREE_NODE, text: text   }
    },
    deleteTreeNode() {
        return { type: DELETE_TREE_NODE  }
    },

    selectTreeNode(node) {
        return { type: SELECT_TREE_NODE, node: node }
    }

};



