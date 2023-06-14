
import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  // custom authentication 
  const [authenticated, setAuthenticated] = useState(false);
// sending userId in PaymentDetails
  const [authUser,setAuthUser] = useState({})

  const login = () => {
    // Perform login logic here
    console.log("login logic is perfomred")
    setAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic here
    console.log("logout logic is perfomred")
    setAuthenticated(false);
  };


  console.log("in Authprovider",authenticated);
  return (
    <AuthContext.Provider value={{ authenticated, login, logout ,authUser, setAuthUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;