import {loginRequest, loginSuccess, loginFailure} from './actions';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './types';

describe('login > redux > actions', () => {
  describe('loginRequest', () => {
    it('returns a LOGIN_REQUEST action', () => {
      const payload = {
        email: 'tmd@gmail.com',
        password: 'hello123',
      };
      const action = loginRequest(payload);
      const expectedAction = {
        type: LOGIN_REQUEST,
        payload,
      };
      expect(action).toEqual(expectedAction);
    });
  });

  describe('loginSuccess', () => {
    it('returns a LOGIN_SUCCESS action', () => {
      const action = loginSuccess();
      const expectedAction = {
        type: LOGIN_SUCCESS,
      };
      expect(action).toEqual(expectedAction);
    });
  });

  describe('loginFailure', () => {
    it('returns a LOGIN_FAILURE action', () => {
      const error = new Error('something bad happened...');
      const action = loginFailure(error);
      const expectedAction = {
        type: LOGIN_FAILURE,
        payload: error,
        error: true,
      };
      expect(action).toEqual(expectedAction);
    });
  });
});
