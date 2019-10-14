import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {signupSuccess} from '../../signup/redux/actions';
import {loginSuccess, jwtLoginSuccess} from '../../login/redux/actions';
import {JWT_LOGIN_SUCCESS} from '../../login/redux/types';

export const isAuthenticated = handleActions(
  {
    [signupSuccess]: () => true,
    [loginSuccess]: () => true,
    [JWT_LOGIN_SUCCESS]: () => true,
  },
  false,
);

const addUser = (state, action) => action.payload;

export const user = handleActions(
  {
    [signupSuccess]: addUser,
    [loginSuccess]: addUser,
    [JWT_LOGIN_SUCCESS]: addUser,
  },
  {},
);

export default combineReducers({
  isAuthenticated,
  user,
});
