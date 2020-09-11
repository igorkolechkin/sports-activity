import { SELECT_USER_MESSAGE } from '@store/actions/actionTypes';

export const selectUserMessage = id => {
  return dispatch => {
    dispatch({ type: SELECT_USER_MESSAGE, payload: id })
  }
}