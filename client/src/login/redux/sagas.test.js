import {expectSaga} from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import {throwError} from 'redux-saga-test-plan/providers';
import {watchLoginRequest} from './sagas';
import authApi from '../../api/auth.api';
import {loginSuccess, loginRequest, loginFailure} from './actions';
import authReducer from '../../auth/redux/reducers';

describe('watchLoginRequest', () => {
  it('on successful login, outputs a LOGIN_SUCCESS action', () => {
    const loginResponse = {
      data: {},
      headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'},
    };

    return expectSaga(watchLoginRequest)
      .provide([[matchers.call.fn(authApi.login), loginResponse]])
      .put(loginSuccess())
      .dispatch(loginRequest({email: 'tmd@gmail.com', password: 'hello123'}))
      .run();
  });

  it('handles jwt tasks', () => {
    const loginResponse = {
      data: {},
      headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'},
    };

    return expectSaga(watchLoginRequest)
      .provide([[matchers.call.fn(authApi.login), loginResponse]])
      .call(authApi.saveJwt, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
      .call(
        authApi.setAuthorizationHeader,
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      )
      .dispatch(loginRequest({email: 'tmd@gmail.com', password: 'hello123'}))
      .run();
  });

  it('updates isAuthenticated in state via the auth reducer', () => {
    const loginResponse = {
      data: {},
      headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'},
    };

    return expectSaga(watchLoginRequest)
      .provide([[matchers.call.fn(authApi.login), loginResponse]])
      .withReducer(authReducer)
      .hasFinalState({isAuthenticated: true})
      .dispatch(loginRequest({email: 'tmd@gmail.com', password: 'hello123'}))
      .run();
  });

  it('outputs a LOGIN_FAILURE action on error', () => {
    const error = new Error('error');
    return expectSaga(watchLoginRequest)
      .provide([[matchers.call.fn(authApi.login), throwError(error)]])
      .put(loginFailure(error))
      .dispatch(loginRequest({email: 'tmd@gmail.com', password: 'hello123'}))
      .run();
  });
});
