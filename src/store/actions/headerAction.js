import { SHOW_HEADER, USER_LOGGED } from '@store/actions/actionTypes';
import { samuraiApi } from '@services/requests';

/* Action creators */

export const toggleHeaderHandler = () => ({ type: SHOW_HEADER });

export const userLogged = data => ({ type: USER_LOGGED, payload: data });


/* Thunks */

export const userLoggedThunk = () => {
  return async dispatch => {
    try {
      const authAnswer = await samuraiApi.authMe();
      const details = {
        email: authAnswer.data.data.email,
        id: authAnswer.data.data.id,
        login: authAnswer.data.data.login
      }

      dispatch(userLogged(details));

      localStorage.setItem('isLogged', '1');
      localStorage.setItem('userDetails', JSON.stringify(details));
    } catch (e) {

    }
  }
}