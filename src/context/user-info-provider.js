import React, { createContext, useContext, useState } from 'react';

const UserInfoContext = createContext();

const UserInfoProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserInfoContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);

export default UserInfoProvider;
