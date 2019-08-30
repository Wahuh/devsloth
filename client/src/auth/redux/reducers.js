import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {signupSuccess} from '../../signup/redux/actions';

export const isAuthenticated = handleActions(
  {
    [signupSuccess]: () => false,
  },
  false,
);

export default combineReducers({
  isAuthenticated,
});
