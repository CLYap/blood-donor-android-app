import { SET_DONOR_GENDER, SET_DONOR_DOB } from './actions';

const initialState = {
  gender: '',
  dob: '',
};

function donorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DONOR_GENDER:
      return { ...state, gender: action.payload };

    case SET_DONOR_DOB:
      return { ...state, dob: action.payload };

    default:
      return state;
  }
}

export default donorReducer;
