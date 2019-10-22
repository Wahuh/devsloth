import {loginRequest, jwtLoginRequest} from './actions';
import {LOGIN_REQUEST, JWT_LOGIN_REQUEST} from './types';

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
      meta: {
        apiFunction: 'login',
      },
    };
    expect(action).toEqual(expectedAction);
  });
});

describe('jwtLoginRequest', () => {
  it('returns a JWT_LOGIN_REQUEST action', () => {
    const payload = 'jwt token';
    const action = jwtLoginRequest(payload);
    const expectedAction = {
      type: JWT_LOGIN_REQUEST,
      payload,
      meta: {
        apiFunction: 'getUser',
      },
    };
    expect(action).toEqual(expectedAction);
  });
});
