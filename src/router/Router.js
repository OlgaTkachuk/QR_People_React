import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import {Register} from "../components/Register";
import {Login} from "../components/Login";

class Router extends Component{

  render() {
    return (
      <Switch>

        <Route path ='/login'>
          <Login/>
        </Route>

        <Route path ='/register'>
          <Register/>
        </Route>

        <Route path ='/'>
          <HomePage/>
        </Route>

      </Switch>
    )
  }
}

export default Router;
