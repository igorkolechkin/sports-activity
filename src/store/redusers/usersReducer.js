import { SET_USERS, SET_CURRENT_USERS_PAGE, SET_USERS_TOTAL_COUNT,
  TOGGLE_PRELOADER, TOGGLE_FOLLOW_USER, TOGGLE_FOLLOW_USER_PROGRESS } from '@store/actions/actionTypes';

const initialState = {
  loaded: false,
  users: [],
  currentPage: 1,
  usersCount: 4,
  totalCount: '',
  followingUsersList: []
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

    case TOGGLE_FOLLOW_USER_PROGRESS:
      return {
        ...state,
        followingUsersList: action.payload.status
          ? [ ...state.followingUsersList, action.payload.id ]
          : state.followingUsersList.filter(elem => elem !== action.payload.id)
      }

    default:
      return state
  }
}