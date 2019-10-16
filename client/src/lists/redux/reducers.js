import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {CREATE_LIST_SUCCESS, GET_LISTS_SUCCESS} from './types';

const addLists = (state, action) => {
  const {lists} = action.payload.entities;
  return {...state, ...lists};
};

const byId = handleActions(
  {
    [GET_LISTS_SUCCESS]: addLists,
    [CREATE_LIST_SUCCESS]: addLists,
  },
  {},
);

export default combineReducers({byId});
