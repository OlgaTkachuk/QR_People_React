import React, {Component} from "react";
import {Link} from "react-router-dom";

import {Button} from "@material-ui/core";

import './UserProfile.css'

import {api} from "../../api/request.wrapper";
import {checkIsUserLoggedGuard} from "../../guards";
import {RelatedPersons} from "../Persons/RelatedPersons";


class UserProfile extends Component {
  state = {};
  token = checkIsUserLoggedGuard();

  async componentDidMount() {
    await this.getUserInfo()
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  getUserInfo = async () => {
    const userInfo = await api.getPersonalInfoByToken(this.token);
    const user = userInfo.data.data.userByToken;

    await this.setStateAsync({
      name: user.name,
      surname: user.surname,
      email: user.email,
      phone: user.phone,
      city: user.city,
      max_persons: user.max_persons,
      already_connect: Array.from(user.related_persons).length,
      related_persons: user.related_persons,
    });
  }

  render() {
    return (
      <div className='container'>
        <h3>MY PROFILE</h3>

        <div className='main-profile'>
          <div className='profile-part'>NAME</div>
          <div className='profile-part'>{this.state.name || 'empty'}</div>
        </div>

        <div className='main-profile'>
          <div className='profile-part'>SURNAME</div>
          <div className='profile-part'>{this.state.surname || 'empty'}</div>
        </div>

        <div className='main-profile'>
          <div className='profile-part'>EMAIL</div>
          <div className='profile-part'>{this.state.email || 'empty'}</div>
        </div>

        <div className='main-profile'>
          <div className='profile-part'>PHONE</div>
          <div className='profile-part'>{this.state.phone || 'empty'}</div>
        </div>

        <div className='main-profile'>
          <div className='profile-part'>CITY</div>
          <div className='profile-part'>{this.state.city || 'empty'}</div>
        </div>

        <div className='main-profile'>
          <div className='profile-part'>PERSONS</div>
          <div className='profile-part'>
            {this.state.already_connect || 0} / {this.state.max_persons || 'NO DATA'}
          </div>
        </div>

        <h3>RELATED PERSONS</h3>
        <p/>
        <RelatedPersons persons={this.state.related_persons || []}/>
        <p/>

        <Link to='/add-person'>
          <Button
            className={ (this.state.already_connect >= this.state.max_persons) ? 'hide' : 'add-person-button'}
            variant="outlined"
            color="primary">
            Add person
          </Button>
        </Link>
      </div>
    )
  }
}

export default UserProfile
