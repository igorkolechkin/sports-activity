import { SELECT_USER_MESSAGE } from '@store/actions/actionTypes';

const initialState = [
  {
    id: 0,
    name: 'Nazar',
    selected: false,
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
    selected: false,
    currentMessageText: '',
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
    selected: false,
    currentMessageText: '',
    message: []
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_USER_MESSAGE:
      return state.map(item => {
        item.selected = item.id === parseInt(action.payload);
        return item;
      });

    default:
      return state;
  }
}