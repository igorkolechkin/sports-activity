import { SHOW_HEADER, USER_LOGGED } from '@store/actions/actionTypes';

export const toggleHeaderHandler = () => ({ type: SHOW_HEADER });

export const userLogged = (data, isLogged) => ({ type: USER_LOGGED, payload: { data, isLogged } });