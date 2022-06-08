/**
 * 主页面容器
 */
import React from 'react'

import './Container.less'
import WindowResize from 'components/WindowResize';

class Container extends React.Component {

    constructor(props) {
		super(props)
		this.state = {
		}
    }
    
	componentDidMount() {


	}

	/**
     *已加载组件收到新的参数时调用
     */

    componentDidUpdate(nextProps) {

    }

	render() {
        
		return (
			<div className="page-container" style={{ background: '#F0F2F5' }}>
				{this.props.children}
			</div>
		)
	}

}

export default WindowResize(Container)
