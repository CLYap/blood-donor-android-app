import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({
  baseURL: 'http://192.168.0.106:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const RefreshAPI = axios.create({
  baseURL: 'http://192.168.0.106:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  async (config) => {
    const tokens = await AsyncStorage.getItem('authTokens');
    if (tokens) {
      const accessToken = JSON.parse(tokens).access_token;
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url === '/login') {
      return Promise.reject(error);
    }
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const tokens = await AsyncStorage.getItem('authTokens');
      const refreshToken = JSON.parse(tokens).refresh_token;
      const header = 'Bearer ' + refreshToken;
      RefreshAPI.get('/token/refresh', {
        headers: {
          Authorization: header,
        },
      })
        .then(async (response) => {
          if (response !== undefined && response !== null) {
            await AsyncStorage.setItem(
              'authTokens',
              JSON.stringify(response.data)
            );
          }
        })
        .catch(async () => {
          await AsyncStorage.clear();
        });
    }
    return Promise.reject(error);
  }
);

export default API;
