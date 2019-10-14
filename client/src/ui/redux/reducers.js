import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {showModal, hideModal} from './actions';
import {START_FETCHING, STOP_FETCHING} from './types';

const modals = handleActions(
  {
    [showModal]: (state, {payload}) => [...state, payload],
    [hideModal]: (state, {payload}) => {
      return state.filter(modal => modal !== payload);
    },
  },
  [],
);

const fetching = handleActions(
  {
    [START_FETCHING]: (state, {payload}) => ({
      ...state,
      [payload]: true,
    }),
    [STOP_FETCHING]: (state, {payload}) => ({
      ...state,
      [payload]: false,
    }),
  },
  {},
);

export default combineReducers({fetching, modals});
