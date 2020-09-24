import { SET_USERS, SET_CURRENT_USERS_PAGE, SET_USERS_TOTAL_COUNT,
  TOGGLE_PRELOADER, TOGGLE_FOLLOW_USER, TOGGLE_FOLLOW_USER_PROGRESS } from '@store/actions/actionTypes';
import { samuraiApi } from '@services/requests';

/* Action creators */

export const setUsers = users => ({ type: SET_USERS, payload: users })

export const setCurrentUsersPage = page => ({type: SET_CURRENT_USERS_PAGE, payload: page })

export const setUsersTotalCount = totalCount => ({ type: SET_USERS_TOTAL_COUNT, payload: totalCount });

export const togglePreloader = loaded => ({ type: TOGGLE_PRELOADER, payload: loaded });

export const toggleFollowUser = id => ({ type: TOGGLE_FOLLOW_USER, payload: id });

export const toggleFollowUserProgress = (status, id) => ({ type: TOGGLE_FOLLOW_USER_PROGRESS, payload: { status, id } });


/* Thunks */

export const setUsersTotalCountThunk = () => {
  return async dispatch => {
    try {
      const response = await samuraiApi.getUsers(1, 1);
      dispatch(setUsersTotalCount(response.data.totalCount));
    } catch (e) {

    }
  }
};

export const setUsersThunk = (usersCount, currentPage) => {
  return async dispatch => {
    try {
      dispatch(togglePreloader(true));
      const page = currentPage || currentPage;

      const users = await samuraiApi.getUsers(page, usersCount);
      dispatch(setUsers(users.data.items));

      dispatch(togglePreloader(false));
    } catch (e) {

    }
  }
};

export const toggleFollowUserThunk = (id, isSubscribe) => {
  return async dispatch => {
    try {
      dispatch(toggleFollowUserProgress(true, id));

      if (isSubscribe) await samuraiApi.unsubscribe(id);
      else await samuraiApi.subscribe(id);

      dispatch(toggleFollowUserProgress(false, id));

      dispatch(toggleFollowUser(id));
    } catch (e) {

    }
  }
};