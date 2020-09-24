import { SET_USER_PROFILE } from '@store/actions/actionTypes';
import { samuraiApi } from '@services/requests';

/* Action creators */

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, payload: profile });


/* Thunks */

export const setUserProfileThunk = (id = 11598) => {
  return async dispatch => {
    try {
      const users = await samuraiApi.getUser(id);
      setUserProfile(users.data);
    } catch (e) {

    }
  }
}