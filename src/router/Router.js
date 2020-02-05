import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";
import {Login, Register, UserProfile} from "../components";

class Router extends Component {

  render() {
    return (
      <Switch>

        <Route path='/profile'>
          <UserProfile/>
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/register'>
          <Register/>
        </Route>

        <Route path='/'>
          <HomePage/>
        </Route>

      </Switch>
    )
  }
}

export default Router;
