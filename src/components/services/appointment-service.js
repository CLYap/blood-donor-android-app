import API from './api';

export const getBloodCentreService = () => {
  return API.get('/bloodcentres')
    .then((response) => (response.status === 200 ? response : null))
    .catch((err) => console.log(err.message));
};

export const getAppointmentSlotService = (bloodCentreId) => {
  return API.get('/donor/appointments/' + bloodCentreId)
    .then((response) => (response.status === 200 ? response : null))
    .catch((err) => console.log(err.message));
};

export const requestAppointmentService = (donorId, appointmentSessionId) => {
  return API.post(
    '/appointment/request/' + donorId + '/' + appointmentSessionId
  )
    .then((response) => (response.status === 200 ? response : null))
    .catch((err) => console.log(err.message));
};

export const getLatestAppointmentService = (donorId) => {
  return API.get('/appointment/latest/' + donorId)
    .then((response) => (response.status === 200 ? response : null))
    .catch((err) => console.log(err.message));
};
