import {createAction} from 'redux-actions';
import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from './types';
import makeRequestMetaCreator from '../../common/redux/makeRequestMetaCreator';

const signupRequest = createAction(
  SIGNUP_REQUEST,
  null,
  makeRequestMetaCreator('signup'),
);
const signupSuccess = createAction(SIGNUP_SUCCESS);
const signupFailure = createAction(SIGNUP_FAILURE);

export {signupRequest, signupSuccess, signupFailure};
