import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";
import {Login, Register} from "../components";
import UserProfile from "../components/UserProfile/UserProfile";
import {AddPerson} from "../components/Persons/AddPerson";

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

        <Route path='/add-person'>
          <AddPerson/>
        </Route>

        <Route path='/'>
          <HomePage/>
        </Route>

      </Switch>
    )
  }
}

export default Router;
