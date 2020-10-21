import { SELECT_USER_TO_MESSAGE, ADD_NEW_MESSAGE } from '@store/actions/actionTypes';

export const selectUserToMessage = id => ({ type: SELECT_USER_TO_MESSAGE, payload: id });

export const addNewMessage = text => ({ type: ADD_NEW_MESSAGE, payload: text })