import { SELECT_USER_TO_MESSAGE, WRITE_NEW_MESSAGE, ADD_NEW_MESSAGE } from '@store/actions/actionTypes';

export const selectUserToMessage = id => ({ type: SELECT_USER_TO_MESSAGE, payload: id });

export const writeNewMessage = text => ({ type: WRITE_NEW_MESSAGE, payload: text });

export const addNewMessage = () => ({ type: ADD_NEW_MESSAGE })