import { ADD_FRIENDS } from '@store/actions/actionTypes';
import { _axios } from '@services/requests';

export const addFriends = () => {
  return async dispatch => {
    try {
      const users = await _axios.get('users');
      dispatch({ type: ADD_FRIENDS, payload: users.data })
    } catch (e) {
      console.log(e)
    }
  }
}