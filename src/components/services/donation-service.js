import API from './api';

export const getDonationHistory = (donorId) => {
  return API.get('/donor/donations/' + donorId)
    .then((response) => (response.status === 200 ? response : null))
    .catch((err) => console.log(err.message));
};
