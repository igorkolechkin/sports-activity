import { SHOW_HEADER } from '@store/actions/actionTypes';

const initialState = {
  isShow: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_HEADER:
      return { ...state, isShow: !state.isShow };

    default:
      return state
  }
}