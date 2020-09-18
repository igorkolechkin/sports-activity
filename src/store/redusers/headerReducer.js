import { SHOW_HEADER } from '@store/actions/actionTypes';

const initialState = {
  isHeaderShow: false,
  navigation: [
    {id: 0, content: 'Profile', href: '/profile', exact: true},
    {id: 1, content: 'Users', href: '/users', exact: false},
    {id: 2, content: 'Message', href: '/message', exact: false},
    {id: 3, content: 'Activities', href: '/activities', exact: false},
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_HEADER:
      return { ...state, isHeaderShow: !state.isHeaderShow };

    default:
      return state
  }
}