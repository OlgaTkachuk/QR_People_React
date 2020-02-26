import React, { createContext, useState } from 'react';

export const AuthContext = createContext(); // If I set default value here I have context


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
    <AuthContext.Provider value={
      {text: 'RRRRRRRRR'}
    }>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
