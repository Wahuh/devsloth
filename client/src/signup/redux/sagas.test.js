import {call} from 'redux-saga/effects';
import {expectSaga} from 'redux-saga-test-plan';
import {watchSignupRequest} from './sagas';
import {SIGNUP_SUCCESS, SIGNUP_REQUEST, SIGNUP_FAILURE} from './types';
import authApi from '../../api/auth.api';
import authReducer from '../../auth/redux/reducers';

describe('watchSignupRequest', () => {
  it('outputs a SIGNUP_SUCCESS action on success', () => {
    const fakeUser = {
      email: 'tmd@gmail.com',
      username: 'Thanh',
    };

    return expectSaga(watchSignupRequest)
      .provide([[call(authApi.signup), fakeUser]])
      .put({
        type: SIGNUP_SUCCESS,
        payload: {},
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

  it('outputs a SIGNUP_FAILURE action on error', () => {
    return expectSaga(watchSignupRequest)
      .provide([[call(authApi.signup), new Error('oh dear')]])
      .put({
        type: SIGNUP_FAILURE,
        payload: {},
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

  it('updates isAuthenticated in state via the auth reducer', () => {
    const fakeUser = {
      email: 'tmd@gmail.com',
      username: 'Thanh',
    };

    return expectSaga(watchSignupRequest)
      .provide([[call(authApi.signup), fakeUser]])
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
});
