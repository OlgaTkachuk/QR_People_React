import React, { createContext, useState } from 'react';

export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
  // const [error, setError] = useState(null);
  const [auth, setAuth] = useState(false);

  const login = () => {
    setAuth(true);
  };

  const logout = () => {
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
