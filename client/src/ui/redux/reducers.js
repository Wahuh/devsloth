import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {showModal, hideModal} from './actions';

const modals = handleActions(
  {
    [showModal]: (state, {payload}) => [...state, payload],
    [hideModal]: (state, {payload}) => {
      console.log(payload, state);
      return state.filter(modal => modal !== payload);
    },
  },
  [],
);

export default combineReducers({modals});
