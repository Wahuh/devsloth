import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {CREATE_LIST_SUCCESS} from './types';

const addList = (state, action) => {
  const {lists} = action.payload.entities;
  return {...state, ...lists};
};

const byId = handleActions(
  {
    [CREATE_LIST_SUCCESS]: addList,
  },
  {},
);

export default combineReducers({byId});
