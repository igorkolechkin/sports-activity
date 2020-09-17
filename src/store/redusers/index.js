import { combineReducers } from 'redux'
import headerReducer from './headerReducer';
import messageReducer from './messageReducer';
import usersReducer from './usersReducer';
import profileReducer from './usersReducer';

export default combineReducers({
  headerReducer, messageReducer, usersReducer, profileReducer
})