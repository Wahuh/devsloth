import {createAction} from 'redux-actions';
import {SIGNUP_REQUEST} from './types';
import makeRequestMetaCreator from '../../common/redux/makeRequestMetaCreator';

/* eslint-disable */
export const signupRequest = createAction(
  SIGNUP_REQUEST,
  null,
  makeRequestMetaCreator('signup'),
);
/* eslint-enable */
