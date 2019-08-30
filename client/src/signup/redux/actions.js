import {createAction} from 'redux-actions';
import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from './types';

const signupRequest = createAction(SIGNUP_REQUEST);
const signupSuccess = createAction(SIGNUP_SUCCESS);
const signupFailure = createAction(SIGNUP_FAILURE);

export {signupRequest, signupSuccess, signupFailure};
