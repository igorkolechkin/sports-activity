import { SET_USERS, SET_CURRENT_USERS_PAGE, SET_USERS_TOTAL_COUNT,
  TOGGLE_PRELOADER } from '@store/actions/actionTypes';

const initialState = {
  loaded: false,
  users: [],
  currentPage: 1,
  usersCount: 4,
  totalCount: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalCount: action.payload }

    case SET_USERS:
      return {
        ...state,
        users: action.payload.users
       }

    case SET_CURRENT_USERS_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    case TOGGLE_PRELOADER:
      return { ...state, loaded: action.payload }

    default:
      return state
  }
}