import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  authenticationService,
  getUserProfileService,
} from '../services/user-service';
import { getDonationHistoryService } from '../services/donation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import * as BackgroundFetch from 'expo-background-fetch';
import { db } from '../services/firebase-config';
import { collection, Timestamp } from 'firebase/firestore';

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

  const sendBackgroundLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const { status } = await Location.requestBackgroundPermissionsAsync();
      if (status === 'granted') {
        await Location.startLocationUpdatesAsync('LocationUpdate', {
          accuracy: Location.Accuracy.Balanced,
          timeInterval: 900000, // 15 mins
          distanceInterval: 5000, // 5km
          foregroundService: {
            notificationTitle: 'Live Tracker',
            notificationBody: 'Live Tracker is on.',
          },
        });
      }
    }
  };

  const _requestLocationPermission = async () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status == 'granted') {
        let { status } = await Location.requestBackgroundPermissionsAsync();
        if (status == 'granted') {
        } else {
          console.log('Permission to access location was denied');
        }
      } else {
        console.log('Permission to access location was denied');
      }
    })();
  };

  sendBackgroundLocation();

  useEffect(() => {
    (async () => await _requestLocationPermission())();
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
          getProfile(values.icNo);
          getHistories(userProfile.donorId);
          setErrorMessage(null);
        } else {
          setErrorMessage('Wrong email/password!');
        }
      })
      .catch((error) => console.log(error.message));
  };

  let logoutUser = async () => {
    try {
      await AsyncStorage.clear().then(console.log('clear'));
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  getProfile = (icNo) => {
    getUserProfileService(icNo)
      .then(async (res) => {
        if (res !== undefined && res !== null) {
          const profile = res.data;
          await AsyncStorage.setItem('userProfile', JSON.stringify(profile));
          setIsLoggedIn(true);
        }
      })
      .catch((error) => console.log(error.message));
  };

  const getHistories = (userId) => {
    getDonationHistoryService(userId)
      .then(async (res) => {
        if (res !== undefined && res !== null) {
          const historyData = res.data;
          await AsyncStorage.setItem(
            'donationHistories',
            JSON.stringify(historyData)
          );
        } else {
          console.log('no data');
        }
      })
      .catch((error) => console.log(error.message));
  };

  let contextData = {
    loginUser: loginUser,
    logoutUser: logoutUser,
    isLoggedIn: isLoggedIn,
    errorMessage: errorMessage,
    userProfile: userProfile,
    getHistories: getHistories,
  };

  return (
    <UserInfoContext.Provider value={contextData}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);

export default UserInfoProvider;

async function initBackgroundFetch(taskName) {
  try {
    if (!TaskManager.isTaskDefined(taskName)) {
      TaskManager.defineTask(taskName, async ({ data, error }) => {
        if (error) {
          console.log('Error bg', error);
          return;
        }
        if (data) {
          const { locations } = data;
          currentLocation = {
            latitude: locations[0].coords.latitude,
            longitude: locations[0].coords.longitude,
          };

          updateLocation(currentLocation);
        }
      });
    }
    const options = {
      minimumInterval: 15, // task will fire 15 minute after app is backgrounded
    };

    //Registers background fetch task with given name.
    //Registered tasks are saved in persistent storage and restored once the app is initialized.

    await BackgroundFetch.registerTaskAsync(taskName, options);
  } catch (err) {
    console.log('registerTaskAsync() failed:', err);
  }
}

let updateLocation = async (location) => {
  let userProfile = JSON.parse(await AsyncStorage.getItem('userProfile'));
  if (userProfile) {
    db.collection('donor')
      .doc(userProfile.donorId)
      .set({
        bloodType: userProfile.bloodType,
        contactNo: userProfile.contactNo,
        fName: userProfile.fName,
        lName: userProfile.lName,
        latitude: location.latitude,
        longitude: location.longitude,
        timestamp: Timestamp.fromDate(new Date()),
      });
  }
};

initBackgroundFetch('LocationUpdate');
