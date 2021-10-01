import {combineReducers} from 'redux';
import usersReduser from './users/reducer';

export default combineReducers({
  users: usersReduser,
});
