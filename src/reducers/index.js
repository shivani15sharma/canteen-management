import {combineReducers} from 'redux';
import itemsReducer from './itemsReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
  itemsReducer,
  employeeReducer
});