import { combineReducers } from 'redux'
import headerReducer from './headerReducer.js';
import messageReducer from './messageReducer.js';

export default combineReducers({
  headerReducer,
  messageReducer
})