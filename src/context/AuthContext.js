import React, {Component, createContext} from 'react';

export const AuthContext = createContext(); // If I set default value here I have context


// const AuthContextProvider = ({children}) => {
//     // const [error, setError] = useState(null);
//     // const [auth, setAuth] = useState(false);
//     //
//     // const login = () => {
//     //   setAuth(true);
//     // };
//     //
//     // const logout = () => {
//     //   setAuth(false);
//     // };
//
//     return (
//         <AuthContext.Provider value='Not working'>
//             {children}
//         </AuthContext.Provider>
//     );
// };

class AuthContextProvider extends Component {
    state = {
        text: 'RRRRRRRR',
        isUserAuth: false,
        changeTextTTTT: () => {
            this.state.text = 'TTTTTTTTT'
        },
        changeTextRRRRR: () => {
            this.state.text = 'RRRRRRRR'
        }
    }

    render() {
        return <AuthContext.Provider value={{...this.state}}>
            {this.props.children}
        </AuthContext.Provider>
    }
}

export default AuthContextProvider;
