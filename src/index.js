'use strict';

// 支持es新语法
//import 'babel-polyfill';
//import '../static/css/antd.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 引入 Redux

import { Provider } from 'react-redux';  
import configureStore from './redux/configureStore';  

const initialState = {}
const store = configureStore(initialState)

require('./config');
//global.$ = global.jQuery = require('jquery');

ReactDOM.render(
    <Provider store={store}>  
        <App />
    </Provider>,
    document.getElementById('root')
);
