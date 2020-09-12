import { SELECT_USER_TO_MESSAGE, WRITE_NEW_MESSAGE, ADD_NEW_MESSAGE } from '@store/actions/actionTypes';

export const selectUserToMessage = id => {
  return dispatch => {
    dispatch({ type: SELECT_USER_TO_MESSAGE, payload: id })
  }
}

export const writeNewMessage = text => {
  return dispatch => {
    dispatch({ type: WRITE_NEW_MESSAGE, payload: text })
  }
}

export const addNewMessage = () => {
  return dispatch => {
    dispatch({ type: ADD_NEW_MESSAGE })
  }
}