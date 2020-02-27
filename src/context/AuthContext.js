import React, {Component, createContext} from 'react';

export const AuthContext = createContext(); // If I set default value here I have context


class AuthContextProvider extends Component {
    state = {
        text: 'RRRRRRRR',
        isUserAuth: false,
        changeTextTTTT: () => {
            this.setState({
                text: 'NewTextTTTT'
            })
        },
        changeTextRRRRR: () => {
            this.setState({
                text: 'NewTextRRRR'
            })
        }
    }

    render() {
        return <AuthContext.Provider value={{...this.state}}>
            {this.props.children}
        </AuthContext.Provider>
    }
}

export default AuthContextProvider;
