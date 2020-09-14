import { ADD_FRIENDS } from '@store/actions/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIENDS:
      return [ ...state, ...action.payload ]

    default:
      return state
  }
}