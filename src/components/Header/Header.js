import React, {Component} from "react";
import Button from '@material-ui/core/Button';

import './Header.css';

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
                <Button>
                    Login
                </Button>
                <Button>
                    Register
                </Button>
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
