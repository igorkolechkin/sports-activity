import { SET_USER_PROFILE } from '@store/actions/actionTypes';

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}