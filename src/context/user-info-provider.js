import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  authenticationService,
  getUserProfileService,
} from '../components/services/user-service';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserInfoContext = createContext();

const UserInfoProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({
    donorId: '',
    icNo: '',
    fName: '',
    lName: '',
    bloodType: '',
  });
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    retrieveAuthTokens();
    retrieveUserProfile();
  });

  let retrieveAuthTokens = async () => {
    try {
      const authTokens = await AsyncStorage.getItem('authTokens');
      authTokens ? setIsLoggedIn(true) : setIsLoggedIn(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  let retrieveUserProfile = async () => {
    try {
      const userProfile = JSON.parse(await AsyncStorage.getItem('userProfile'));
      userProfile
        ? setUserProfile({
            donorId: userProfile.donorId,
            icNo: userProfile.appUser.username,
            fName: userProfile.fName,
            lName: userProfile.lName,
            bloodType: userProfile.bloodType,
          })
        : null;
    } catch (error) {
      console.log(error.message);
    }
  };

  let loginUser = (values) => {
    authenticationService(values)
      .then(async (data) => {
        if (data !== undefined && data !== null) {
          const tokens = data.data;
          await AsyncStorage.setItem('authTokens', JSON.stringify(tokens));
          getUserProfileService(values.icNo)
            .then(async (res) => {
              if (res !== undefined && res !== null) {
                const profile = res.data;
                await AsyncStorage.setItem(
                  'userProfile',
                  JSON.stringify(profile)
                );
                setIsLoggedIn(true);
              }
            })
            .catch((error) => console.log(error.message));
          setErrorMessage(null);
        } else {
          setErrorMessage('Wrong email/password!');
        }
      })
      .catch((error) => console.log(error.message));
  };

  let logoutUser = async () => {
    try {
      await AsyncStorage.removeItem('authTokens');
      await AsyncStorage.removeItem('userProfile');
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  let contextData = {
    loginUser: loginUser,
    logoutUser: logoutUser,
    isLoggedIn: isLoggedIn,
    errorMessage: errorMessage,
    userProfile: userProfile,
  };

  return (
    <UserInfoContext.Provider value={contextData}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);

export default UserInfoProvider;
