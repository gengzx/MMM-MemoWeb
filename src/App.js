'use strict';

import React, { Component } from 'react';

import Layout from './layout'
import Routes from './routes.js'

import '../static/css/normalize.css';
import '../static/css/app.less';

// 应用入口
class App extends Component {

	componentDidMount() {


	}

	componentWillUnmount() {

	}

	render() {

		return (
			<>
                {<Routes />}
			</>
		);
	}
}

export default App
