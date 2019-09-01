import {createAction} from 'redux-actions';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './types';

const loginRequest = createAction(LOGIN_REQUEST);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginFailure = createAction(LOGIN_FAILURE);

export {loginRequest, loginSuccess, loginFailure};
