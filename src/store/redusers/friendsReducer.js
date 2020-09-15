import { ADD_FRIENDS } from '@store/actions/actionTypes';

const initialState = {
  loaded: false,
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIENDS:
      return {
        ...state,
        loaded: action.payload.loaded,
        users: action.payload.users
       }

    default:
      return state
  }
}