'use strict';

/**
 * React-router 路由
 */

import React, { Component } from 'react';

import { HashRouter as Router, Route, IndexRoute } from 'react-router-dom'
 
import { LazyLoad } from '@/bundle';

const Default = LazyLoad(require(`bundle-loader?lazy&name=[folder]!./views/default`))

//const Test = LazyLoad(require(`bundle-loader?lazy&name=[name]!./views/Create/Widget/Files`))

/*
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
)*/


// 路由
class Routes extends Component {

  componentDidMount(){

  }

  componentWillUnmount() {

  }

   render() {
      return (
    
        <Router>
            <Route exact path="/" component={Default} />
        </Router>
          
      );
   }
}

export default Routes
