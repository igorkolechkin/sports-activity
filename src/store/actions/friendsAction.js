import { ADD_FRIENDS } from '@store/actions/actionTypes';
import { samuraiApi } from '@services/requests';

export const addFriends = () => {
  return async dispatch => {
    try {
      const users = await samuraiApi.get('users?page=2');
      dispatch({ type: ADD_FRIENDS, payload: { users: users.data.items, loaded: true } })
    } catch (e) {

    }
  }
}