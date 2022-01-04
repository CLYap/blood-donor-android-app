import API from './api';

export const getDonationHistoryService = (donorId) => {
  return API.get('/donor/donations/' + donorId)
    .then((response) => (response.status === 200 ? response : null))
    .catch((err) => console.log(err.message));
};

export const getLatestDonationHistoryService = (donorId) => {
  return API.get('/donor/latest/donation/' + donorId)
    .then((response) => (response.status === 200 ? response : null))
    .catch((err) => console.log(err.message));
};
