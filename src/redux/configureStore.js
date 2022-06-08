/**
 * 创建配置 Redux Store
 */
import { createStore, applyMiddleware, } from 'redux'
import reducer from './modules/reducer';
import asyncData from './middleware/async-data';

// Redux 中间件
const middlewares = [asyncData()]

if(process.env.NODE_ENV == 'development'){

    // 引入日志中间件
    const { createLogger } = require(`redux-logger`)
    const logger = createLogger({
        timestamp:true,
        duration:true
    })
    middlewares.push(logger)

}

export default  function configureStore(initialState = {}){

    const store = createStore(reducer, initialState, applyMiddleware(...middlewares))

    return store

}