import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {JWT_LOGIN_SUCCESS, LOGIN_SUCCESS} from '../../login/redux/types';
import {SIGNUP_SUCCESS} from '../../signup/redux/types';

export const isAuthenticated = handleActions(
  {
    [SIGNUP_SUCCESS]: () => true,
    [LOGIN_SUCCESS]: () => true,
    [JWT_LOGIN_SUCCESS]: () => true,
  },
  false,
);

const addUser = (state, action) => ({...state, ...action.payload});

export const user = handleActions(
  {
    [SIGNUP_SUCCESS]: addUser,
    [LOGIN_SUCCESS]: addUser,
    [JWT_LOGIN_SUCCESS]: addUser,
  },
  {},
);

export default combineReducers({
  isAuthenticated,
  user,
});
