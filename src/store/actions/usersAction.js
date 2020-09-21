import { SET_USERS, SET_CURRENT_USERS_PAGE, SET_USERS_TOTAL_COUNT,
  TOGGLE_PRELOADER, TOGGLE_FOLLOW_USER, TOGGLE_FOLLOW_USER_PROGRESS } from '@store/actions/actionTypes';

export const setUsers = users => ({ type: SET_USERS, payload: users })

export const setCurrentUsersPage = page => ({type: SET_CURRENT_USERS_PAGE, payload: page })

export const setUsersTotalCount = totalCount => ({ type: SET_USERS_TOTAL_COUNT, payload: totalCount });

export const togglePreloader = loaded => ({ type: TOGGLE_PRELOADER, payload: loaded });

export const toggleFollowUser = id => ({ type: TOGGLE_FOLLOW_USER, payload: id });

export const toggleFollowUserProgress = (status, id) => ({ type: TOGGLE_FOLLOW_USER_PROGRESS, payload: { status, id } });