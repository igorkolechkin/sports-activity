import { ADD_FRIENDS } from '@store/actions/actionTypes';
import { samuraiApi } from '@services/requests';

export const addUsers = () => {
  return async dispatch => {
    try {
      const users = await samuraiApi.get('users');
      dispatch({
        type: ADD_FRIENDS,
        payload: {
          users: users.data.items,
          loaded: true,
          totalCount: users.data.totalCount
        }
      })
    } catch (e) {

    }
  }
}