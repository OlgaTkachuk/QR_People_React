import React, {useContext} from "react";
import {Link} from "react-router-dom";

import Button from '@material-ui/core/Button';

import './Header.css';

// import {api} from '../../api/request.wrapper'
// import {tokenEnum} from '../../constants'
// import {checkIsUserLoggedGuard} from '../../guards'
import AuthContextProvider, {AuthContext} from "../../context/AuthContext";


function AuthButtons({className}) {
    const context = useContext(AuthContext);

    const handleLogout = async () => {
        // await api.logoutUser();
        //
        // localStorage.removeItem(tokenEnum.ACCESS_TOKEN);
        // localStorage.removeItem(tokenEnum.REFRESH_TOKEN);
        // logout();
        context.changeTextTTTT();
        context.isUserAuth = false
    };


    const handleLogin = async () => {
        // await api.logoutUser();
        //
        // localStorage.removeItem(tokenEnum.ACCESS_TOKEN);
        // localStorage.removeItem(tokenEnum.REFRESH_TOKEN);
        // logout();
        context.changeTextRRRRR();
        context.isUserAuth = true
    };

    console.log(context);

    if (context.isUserAuth) {


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
            {/*<Link to='/login'>*/}
            <Button onClick={handleLogin}>
                Login
            </Button>
            {/*</Link>*/}

            {/*<Link to='/register'>*/}
            <Button onClick={handleLogout}>
                Register {context.text}
            </Button>
            {/*</Link>*/}
        </div>
    )

}

function MainLogo() {
    return (
        <Link to='/'>
            <div className='logo-text'>
                <h1>QR PEOPLE</h1>
                We help to find your parents
            </div>
        </Link>
    )
}

function Header() {
    return (
        <AuthContextProvider>
            <header className='header'>
                <MainLogo/>
                <AuthButtons className='auth-btn-wrapper'/>
            </header>
        </AuthContextProvider>
    )
}

export default Header;
