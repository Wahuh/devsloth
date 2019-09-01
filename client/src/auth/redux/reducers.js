import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {signupSuccess} from '../../signup/redux/actions';
import {loginSuccess} from '../../login/redux/actions';

export const isAuthenticated = handleActions(
  {
    [signupSuccess]: () => true,
    [loginSuccess]: () => true,
  },
  false,
);

export default combineReducers({
  isAuthenticated,
});
