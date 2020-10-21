import {SHOW_HEADER, USER_LOGGED} from '@store/actions/actionTypes';

const initialState = {
  isHeaderShow: false,
  userDetails: JSON.parse(localStorage.getItem('userDetails')),
  isLogged: localStorage.getItem('isLogged'),
  navigation: [
    {id: 0, content: 'Profile', href: '/profile', exact: true},
    {id: 1, content: 'Users', href: '/users', exact: false},
    {id: 2, content: 'Message', href: '/message', exact: false},
    {id: 3, content: 'Login', href: '/login', exact: false}
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_HEADER:
      return {...state, isHeaderShow: !state.isHeaderShow};

    case USER_LOGGED:
      return {
        ...state,
        userDetails: action.payload
      };

    default:
      return state;
  }
}