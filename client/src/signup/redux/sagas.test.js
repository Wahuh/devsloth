import {expectSaga} from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import {throwError} from 'redux-saga-test-plan/providers';
import {watchSignupRequest} from './sagas';
import {SIGNUP_SUCCESS, SIGNUP_REQUEST, SIGNUP_FAILURE} from './types';
import authApi from '../../api/auth.api';
import authReducer from '../../auth/redux/reducers';

describe('signup > redux > sagas', () => {
  describe('watchSignupRequest', () => {
    it('outputs a SIGNUP_SUCCESS action on success', () => {
      const signupResponse = {
        data: {},
        headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'},
      };

      return expectSaga(watchSignupRequest)
        .provide([[matchers.call.fn(authApi.signup), signupResponse]])
        .put({
          type: SIGNUP_SUCCESS,
        })
        .dispatch({
          type: SIGNUP_REQUEST,
          payload: {
            email: 'tmd@gmail.com',
            username: 'Thanh',
            password: 'abc123',
          },
        })
        .run();
    });

    it('handles jwt tasks', () => {
      const signupResponse = {
        data: {},
        headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'},
      };

      return expectSaga(watchSignupRequest)
        .provide([[matchers.call.fn(authApi.signup), signupResponse]])
        .call(authApi.saveJwt, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
        .call(
          authApi.setAuthorizationHeader,
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        )
        .dispatch({
          type: SIGNUP_REQUEST,
          payload: {
            email: 'tmd@gmail.com',
            username: 'Thanh',
            password: 'abc123',
          },
        })
        .run();
    });

    it('updates isAuthenticated in state via the auth reducer', () => {
      const signupResponse = {
        data: {},
        headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'},
      };
      return expectSaga(watchSignupRequest)
        .provide([[matchers.call.fn(authApi.signup), signupResponse]])
        .withReducer(authReducer)
        .hasFinalState({isAuthenticated: true})
        .dispatch({
          type: SIGNUP_REQUEST,
          payload: {
            email: 'tmd@gmail.com',
            username: 'Thanh',
            password: 'abc123',
          },
        })
        .run();
    });

    it('outputs a SIGNUP_FAILURE action on error', () => {
      const error = new Error('error');
      return expectSaga(watchSignupRequest)
        .provide([[matchers.call.fn(authApi.signup), throwError(error)]])
        .put({
          type: SIGNUP_FAILURE,
          payload: error,
          error: true,
        })
        .dispatch({
          type: SIGNUP_REQUEST,
          payload: {
            email: 'tmd@gmail.com',
            username: 'Thanh',
            password: 'abc123',
          },
        })
        .run();
    });
  });
});
