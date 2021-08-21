import { AUTH, LOG_OUT } from '../constants/actionTypes';

const initialState = {
  authData: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...payload }));
      return { ...state, authData: payload };

    case LOG_OUT:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
