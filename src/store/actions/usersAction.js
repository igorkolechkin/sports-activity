import { SET_USERS, SET_CURRENT_USERS_PAGE, SET_USERS_TOTAL_COUNT,
  TOGGLE_PRELOADER } from '@store/actions/actionTypes';

export const setUsers = data => ({ type: SET_USERS, payload: { users: data.users } })

export const setCurrentUsersPage = page => ({type: SET_CURRENT_USERS_PAGE, payload: page })

export const setUsersTotalCount = totalCount => ({ type: SET_USERS_TOTAL_COUNT, payload: totalCount });

export const togglePreloader = loaded => ({ type: TOGGLE_PRELOADER, payload: loaded });