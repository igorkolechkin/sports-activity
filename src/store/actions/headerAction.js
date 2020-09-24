import { SHOW_HEADER, USER_LOGGED } from '@store/actions/actionTypes';
import { samuraiApi } from '@services/requests';

/* Action creators */

export const toggleHeaderHandler = () => ({ type: SHOW_HEADER });

export const userLogged = (data, isLogged) => ({ type: USER_LOGGED, payload: { data, isLogged } });


/* Thunks */

export const userLoggedThunk = () => {
  return async dispatch => {
    const authAnswer = await samuraiApi.authMe();

    try {
      dispatch(userLogged(
        {
          email: authAnswer.data.data.email,
          id: authAnswer.data.data.id,
          login: authAnswer.data.data.login
        },
        authAnswer.data.resultCode
      ))
    } catch (e) {

    }
  }
}