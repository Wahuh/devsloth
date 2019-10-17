import * as actions from './actions';
import {SIGNUP_REQUEST} from './types';

describe('signup actions', () => {
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
        meta: {
          apiFunction: 'signup',
        },
      };
      expect(action).toEqual(expectedAction);
    });
  });
});
