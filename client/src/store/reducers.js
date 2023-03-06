/* eslint-disable default-param-last */
import ATYPES from './types';

const initialState = {
  user: {},
  isAuth: false,
  game: null,
  questions: [],
};

const redusers = (state = initialState, action) => {
  switch (action.type) {
    case ATYPES.SET_USER:
      return { ...state, user: action.payload, isAuth: true };

    default:
      return state;
  }
};

export default redusers;
