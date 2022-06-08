/**
 * 头部
 */
import React from 'react'

import './Header.less';
import classNames from 'classnames';

class Header extends React.Component {

    
    constructor(props) {
		super(props)
		this.state = {
            searchValue:"",
            menus:[]
		}
    }

	componentDidMount() {
        

	}

	/**
	 *已加载组件收到新的参数时调用
	 */

	componentDidUpdate(nextProps) {

	}

	onSearchChange(event) {
		this.setState({searchValue: event.target.value});
	}

	render() {

		return (
            <div className={classNames("page-header")}>
       
				<div>
					title
				</div>

            </div>
		);
	}
};

export default Header