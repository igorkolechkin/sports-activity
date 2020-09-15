import { ADD_FRIENDS } from '@store/actions/actionTypes';

const initialState = {
  loaded: false,
  users: [],
  currentPage: 1,
  usersCount: 10,
  totalCount: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIENDS:
      return {
        ...state,
        loaded: action.payload.loaded,
        users: action.payload.users,
        totalCount: action.payload.totalCount
       }

    default:
      return state
  }
}