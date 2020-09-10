import { SHOW_HEADER } from '@store/actions/actionTypes';

export const toggleHeaderHandler = () => {
  return dispatch => {
    dispatch({type: SHOW_HEADER})
  }
}