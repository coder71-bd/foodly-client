import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

const AuthContext = createContext(); //should be exported otherwise we can't use it in authprovider hook

const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
