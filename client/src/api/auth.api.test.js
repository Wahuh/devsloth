import authApi from './auth.api';
import httpApi from './http.api';

describe('authApi', () => {
  describe('extractJwt', () => {
    it('returns a jwt as a string when passed a headers object', () => {
      const headers = {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      };
      const actual = authApi.extractJwt(headers);
      expect(actual).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
    });

    describe('throws an error when the jwt cannot be extracted', () => {
      const testCases = [
        {
          message: 'missing authorization key',
          headers: {},
          error: new Error('authorization header missing'),
        },
        {
          message: 'Bearer does not precede the token',
          headers: {authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'},
          error: new Error('Bearer does not precede the token'),
        },
        {
          message: 'nothing precedes the token',
          headers: {authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'},
          error: new Error('Bearer does not precede the token'),
        },
      ];

      testCases.forEach(({message, headers, error}) => {
        it(message, () => {
          expect(() => {
            authApi.extractJwt(headers);
          }).toThrow(error);
        });
      });
    });
  });

  describe('saveJwt', () => {
    let spy;
    beforeEach(() => {
      spy = jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
    });

    afterEach(() => {
      spy.mockRestore();
    });

    it('saves the jwt to localStorage', () => {
      const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      authApi.saveJwt(jwt);
      expect(spy).toHaveBeenCalledWith('jwt', jwt);
    });

    it('throws an error when passed an empty string', () => {
      const jwt = '';
      const error = new Error('Invalid jwt cannot be saved');
      expect(() => {
        authApi.saveJwt(jwt);
      }).toThrow(error);
      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('setAuthorizationHeader', () => {
    it('sets the Authorization header with Bearer and token', () => {
      const spy = jest.spyOn(httpApi, 'setDefaultHeader');
      const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      authApi.setAuthorizationHeader(jwt);
      expect(spy).toHaveBeenCalledWith('Authorization', `Bearer ${jwt}`);
      spy.mockRestore();
    });
  });
});
