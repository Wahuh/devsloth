import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {CREATE_USER_BOARD_SUCCESS, GET_USER_BOARDS_SUCCESS} from './types';

const addBoards = (state, action) => ({
  ...state,
  ...action.payload.entities.boards,
});

const byId = handleActions(
  {
    [GET_USER_BOARDS_SUCCESS]: addBoards,
    [CREATE_USER_BOARD_SUCCESS]: addBoards,
  },
  {},
);

export default combineReducers({byId});
