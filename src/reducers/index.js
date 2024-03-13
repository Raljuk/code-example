import produce, { enableES5 } from 'immer';
import { combineReducers } from 'redux-immer';
import { globalReducer } from './global';
import { userReducer } from './user';

enableES5();
export default combineReducers(produce, {
  global: globalReducer,
  user: userReducer,
});
