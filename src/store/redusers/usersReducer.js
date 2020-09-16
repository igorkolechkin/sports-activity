import { SET_USERS, SET_CURRENT_USERS_PAGE, SET_USERS_TOTAL_COUNT } from '@store/actions/actionTypes';

const initialState = {
  loaded: false,
  users: [],
  currentPage: 1,
  usersCount: 4,
  totalCount: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        loaded: action.payload.loaded,
        users: action.payload.users
       }

    case SET_CURRENT_USERS_PAGE:
      return {
        ...state,
        currentPage: action.payload.page,
        loaded: action.payload.loaded
      }

    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalCount: action.payload }

    default:
      return state
  }
}