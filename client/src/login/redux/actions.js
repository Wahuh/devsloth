import {createAction} from 'redux-actions';
import {LOGIN_REQUEST, JWT_LOGIN_REQUEST} from './types';
import makeRequestMetaCreator from '../../common/redux/makeRequestMetaCreator';

export const loginRequest = createAction(
  LOGIN_REQUEST,
  null,
  makeRequestMetaCreator('login'),
);

export const jwtLoginRequest = createAction(
  JWT_LOGIN_REQUEST,
  null,
  makeRequestMetaCreator('getUser'),
);
