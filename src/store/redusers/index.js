import { combineReducers } from 'redux'
import headerReducer from './headerReducer.js';
import messageReducer from './messageReducer.js';
import friendsReducer from './friendsReducer.js';

export default combineReducers({
  headerReducer,
  messageReducer,
  friendsReducer
})