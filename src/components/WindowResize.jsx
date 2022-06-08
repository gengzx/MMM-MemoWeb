'use strict';

import React from 'react';

/**
 * 公共组件 通过 resize 事件获取面板高度
 * @param {组件} ComposeComponent 
 */
const WindowResize = ComposeComponent => class extends React.Component {

    static displayName = 'ComponentEnhancedWithIntervalHOC';

    constructor(props) {
        super(props);
        this.state = {
            windowHeight:this.getWindowHeight()
        }
    }

    componentDidMount() {

        
        window.addEventListener('resize', this.onWindowResize.bind(this))

    }

    componentWillUnmount() {

        window.removeEventListener('resize', this.onWindowResize.bind(this))

    }

    onWindowResize(){

        console.log(1111);
        
        
        this.setState({ windowHeight: this.getWindowHeight(),windowWidth: this.getWindowWidth() })

    }
    
    getWindowHeight(){
        return document.body.offsetHeight
    }

    getWindowWidth(){
        return document.body.offsetWidth
    }

    render() {

        return (
            <ComposeComponent {...this.props} {...this.state} />
        );
    }
}

export default WindowResize