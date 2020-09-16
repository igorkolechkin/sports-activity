import { SET_USERS, SET_CURRENT_USERS_PAGE, SET_USERS_TOTAL_COUNT } from '@store/actions/actionTypes';
import { samuraiApi } from '@services/requests';

export const setUsers = data => {
  return async dispatch => {
    try {
      const users = await samuraiApi.get(`users?page=${ data.currentPage }&count=${ data.usersCount }`);

      dispatch({
        type: SET_USERS,
        payload: {
          users: users.data.items,
          loaded: true,
          totalCount: users.data.totalCount
        }
      })
    } catch (e) {

    }
  }
}

export const setCurrentUsersPage = page => {
  return dispatch => {
    return dispatch({
      type: SET_CURRENT_USERS_PAGE,
      payload: { page, loaded: false }
    })
  }
}

export const setUsersTotalCount = totalCount => {
  return async dispatch => {
    try {
      const users = await samuraiApi.get('users');

      return dispatch({ type: SET_USERS_TOTAL_COUNT, payload: users.data.totalCount })
    } catch (e) {

    }
  }
}