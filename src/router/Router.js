import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import Link from "@material-ui/core/Link";
import HomePage from "../components/HomePage/HomePage";

class Router extends Component{

  render() {
    return (
      <Switch>

        <Route path ='/hello'>
          <Link to={`/`}>HOME</Link>
        </Route>

        <Route path ='/'>
          <HomePage/>
        </Route>


      </Switch>
    )
  }
}

export default Router;
