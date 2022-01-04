import API from './api';
import axios from 'axios';

export const authenticationService = (values) => {
  const params = new URLSearchParams();
  params.append('username', values.icNo);
  params.append('password', values.password);

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  return API.post('/login', params, config)
    .then((response) => (response.status === 200 ? response : null))
    .catch((err) => console.log(err.message));
};

export const getUserProfileService = (icNo) => {
  return API.get('/user/profile/donor/' + icNo)
    .then((response) => (response.status === 200 ? response : null))
    .catch((err) => console.log(err.message));
};

export const updateUserProfileService = async (data) => {
  return await API.put('/update/profile/donor', data)
    .then((response) => (response.status === 200 ? response : null))
    .catch((err) => console.log(err.message));
};

export const resetPasswordService = async (data) => {
  const values = { username: '', password: '' };
  values.username = data.icNo;
  values.password = data.password;
  return await API.put('/reset/password', values)
    .then((response) => (response.status === 200 ? response : null))
    .catch((err) => console.log(err.message));
};
