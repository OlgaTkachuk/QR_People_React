import React, {Component} from "react";
import Button from '@material-ui/core/Button';

import './Header.css';
import {Link} from "react-router-dom";

const AuthButtons = ({children, className}) => {
    console.log(className);
    console.log(children);
    const token = localStorage.getItem('access_token');

    if (token) {
        return (
            <div className={className}>
                <Button>
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
            </header>
        )
    }
}

export default Header;
