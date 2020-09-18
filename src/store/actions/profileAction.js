import { SET_USER_PROFILE } from '@store/actions/actionTypes';

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, payload: profile });