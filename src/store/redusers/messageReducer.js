import { SELECT_USER_TO_MESSAGE, ADD_NEW_MESSAGE } from '@store/actions/actionTypes';

const initialState = {
  selectedUser: 0,
  users: [
    {
      id: 0,
      name: 'Nazar',
      message: [
        {
          isMy: false,
          text: 'Hello, Igor!'
        },
        {
          isMy: true,
          text: 'Hello, Nazar!'
        }
      ]
    },
    {
      id: 1,
      name: 'Andrey',
      message: [
        {
          isMy: false,
          text: 'Hello, Igor!'
        },
        {
          isMy: true,
          text: 'Hello, Andrey!'
        },
      ]
    },
    {
      id: 2,
      name: 'Oleg',
      message: []
    }
  ],
  getSelectedUserIndex() {
    return this.users.findIndex((item) => item.id === this.selectedUser)
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_USER_TO_MESSAGE:
      return { ...state, selectedUser: parseInt(action.payload) }

    case ADD_NEW_MESSAGE:
      const updateUserObject = JSON.parse(JSON.stringify(state.users[state.selectedUser]));
      updateUserObject.message.push({ isMy: true, text: action.payload });

      const newUsers = [...state.users];
      newUsers.splice(state.getSelectedUserIndex(),1,updateUserObject);

      return { ...state, users: newUsers }

    default:
      return state;
  }
}