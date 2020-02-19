import React, {Component, useContext} from "react";
import {Link} from "react-router-dom";

import Button from '@material-ui/core/Button';

import './Header.css';

import {api} from '../../api/request.wrapper'
import {tokenEnum} from '../../constants'
import {checkIsUserLoggedGuard} from '../../guards'
import {AuthContext} from "../../context/AuthContext";

const AuthButtons = ({children, className}) => {
  console.log(AuthContext);
  // const token = checkIsUserLoggedGuard();

  const { auth, logout } = useContext(AuthContext);

  async function handleLogout() {
    // await api.logoutUser();
    //
    // localStorage.removeItem(tokenEnum.ACCESS_TOKEN);
    // localStorage.removeItem(tokenEnum.REFRESH_TOKEN);
    logout();
  }

  if (auth) {
    return (
      <div className={className}>
        <Link to='/profile'>
          <Button>
            My Profile
          </Button>
        </Link>

        <Button onClick={handleLogout}>
          Logout
        </Button>
      </div>
    )
  }

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
};

function MainLogo(props) {
  // console.log(props);
  // const {children, className} = props;

  return (
    <Link to='/'>
      <div className='logo-text'>
        <h1>QR PEOPLE</h1>
        We help to find your parents
      </div>
    </Link>

  )
}

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <MainLogo/>
        <AuthButtons className='auth-btn-wrapper'/>
      </header>
    )
  }
}

export default Header;
