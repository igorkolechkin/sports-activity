import { combineReducers } from 'redux'
import headerReducer from './headerReducer';
import messageReducer from './messageReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  headerReducer,
  messageReducer,
  usersReducer
})