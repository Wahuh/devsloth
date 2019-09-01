import * as actions from './actions';
import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from './types';

describe('signup > redux > actions', () => {
  describe('signupRequest', () => {
    it('returns a SIGNUP_REQUEST action', () => {
      const payload = {
        email: 'tmd@gmail.com',
        username: 'Thanh',
        password: 'hello123',
      };
      const action = actions.signupRequest(payload);
      const expectedAction = {
        type: SIGNUP_REQUEST,
        payload,
      };
      expect(action).toEqual(expectedAction);
    });
  });

  describe('signupSuccess', () => {
    it('returns a SIGNUP_SUCCESS action', () => {
      const action = actions.signupSuccess();
      const expectedAction = {
        type: SIGNUP_SUCCESS,
      };
      expect(action).toEqual(expectedAction);
    });
  });

  describe('signupFailure', () => {
    it('returns a SIGNUP_FAILURE action', () => {
      const error = new Error('something went wrong...');
      const action = actions.signupFailure(error);
      const expectedAction = {
        type: SIGNUP_FAILURE,
        payload: error,
        error: true,
      };
      expect(action).toEqual(expectedAction);
    });
  });
});
