import React, {Component} from "react";
import {Link} from "react-router-dom";

import Button from '@material-ui/core/Button';

import './Header.css';

import {api} from '../../api/request.wrapper'
import {tokenEnum} from '../../constants'

const AuthButtons = ({children, className}) => {
  const token = localStorage.getItem('access_token');

  async function handleLogout() {
    await api.logoutUser();

    localStorage.removeItem(tokenEnum.ACCESS_TOKEN)
    localStorage.removeItem(tokenEnum.REFRESH_TOKEN)
  }

  if (token) {
    return (
      <div className={className}>
        <Button onClick={handleLogout}>
          Logout
        </Button>
      </div>
    )
  } else {
    return (
      <div className={className}>
        <Link to='/login'>
          <Button>
            Login
          </Button>
        </Link>
        <Link to='/register'>
          <Button>
            Register
          </Button>
        </Link>
      </div>
    );
  }
};

function MainLogo(props) {
  console.log(props);

  // const {children, className} = props;

  return (
    <div className='logo-text'>
      <h1>QR PEOPLE</h1>
      We will find your parents
    </div>
  )
}

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <MainLogo/>
        <AuthButtons className='auth-btn-wrapper'/>

        <br/>
        todo list:
        <br/>
        1) Огортка для фетча для посилання запитів на бек
        <br/>
        2) універсальна компонента інпуту
      </header>
    )
  }
}

export default Header;
