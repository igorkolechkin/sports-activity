import { SET_USERS, SET_CURRENT_USERS_PAGE, SET_USERS_TOTAL_COUNT,
  TOGGLE_PRELOADER, TOGGLE_FOLLOW_USER } from '@store/actions/actionTypes';

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
        users: action.payload
       }

    case SET_CURRENT_USERS_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    case TOGGLE_PRELOADER:
      return { ...state, loaded: action.payload }

    case TOGGLE_FOLLOW_USER:
      return  {
        ...state,
        users: state.users.map(user => {
          return user.id === action.payload ? { ...user, followed: !user.followed } : user;
        })
      }

    default:
      return state
  }
}