import React, { useState } from 'react';
export const AuthContext = React.createContext(null);

function AuthProviderComponent({ children }) {
  const [token, setToken] = useState('');

  return (
    <AuthContext.Provider
      value={{
        token: token,
        setToken: setToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProviderComponent;
