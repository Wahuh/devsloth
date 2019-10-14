import {handleActions} from 'redux-actions';
import {addUser} from './actions';

const user = handleActions(
  {
    [addUser]: (state, {payload}) => {
      return {...state, ...payload};
    },
  },
  {},
);

export default user;
