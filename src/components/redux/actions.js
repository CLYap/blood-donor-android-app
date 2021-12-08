export const SET_DONOR_GENDER = 'SET_GENDER';
export const SET_DONOR_DOB = 'SET_DOB';

export const setGender = (gender) => (dispatch) => {
  dispatch({
    type: SET_DONOR_GENDER,
    payload: gender,
  });
};

export const setDOB = (dob) => (dispatch) => {
  dispatch({
    type: SET_DONOR_DOB,
    payload: dob,
  });
};
