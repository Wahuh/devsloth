jest.mock('./http.api');

/* eslint-disable */
import {
  extractJwt,
  setAuthorizationHeader,
  saveJwt,
  getJwt,
  logout,
  signup,
  login,
} from './auth.api';
import * as httpApi from './http.api';
/* eslint-enable */

beforeEach(() => {
  localStorage.removeItem('jwt');
});

describe('auth api functions', () => {
  describe('getJwt', () => {
    it('retrieves the jwt from localStorage', () => {
      saveJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
      const jwt = getJwt('jwt');
      expect(jwt).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
    });
  });

  describe('extractJwt', () => {
    it('returns a jwt as a string when passed a headers object', () => {
      const headers = {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      };
      const actual = extractJwt(headers);
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
            extractJwt(headers);
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
      saveJwt(jwt);
      expect(spy).toHaveBeenCalledWith('jwt', jwt);
    });

    it('throws an error when passed an empty string', () => {
      const jwt = '';
      const error = new Error('Invalid jwt cannot be saved');
      expect(() => {
        saveJwt(jwt);
      }).toThrow(error);
      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('setAuthorizationHeader', () => {
    it('sets the Authorization header with Bearer and token', () => {
      const spy = jest.spyOn(httpApi, 'setDefaultHeader');
      const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      setAuthorizationHeader(jwt);
      expect(spy).toHaveBeenCalledWith('Authorization', `Bearer ${jwt}`);
      spy.mockRestore();
    });
  });

  describe('signup', () => {
    it("returns the user's data", async () => {
      const user = await signup({
        email: 'tmd@gmail.com',
        username: 'Thanh',
        password: 'abc123',
      });

      const expectedUser = {
        id: expect.any(Number),
        email: 'tmd@gmail.com',
        username: 'Thanh',
      };
      expect(user).toEqual(expectedUser);
    });

    it('stores a jwt in localStorage', async () => {
      await signup({
        email: 'tmd@gmail.com',
        username: 'Thanh',
        password: 'abc123',
      });
      const jwt = getJwt();
      expect(jwt).toBe(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTcxMTcyNjE0fQ.Gp-mrmHVnSgluaXZECQC3_mf98P3_nj1jHa22wK7n6M',
      );
    });

    it('sets a default Authorization header', async () => {
      const spy = jest.spyOn(httpApi, 'setDefaultHeader');
      const jwt =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTcxMTcyNjE0fQ.Gp-mrmHVnSgluaXZECQC3_mf98P3_nj1jHa22wK7n6M';
      await signup({
        email: 'tmd@gmail.com',
        username: 'Thanh',
        password: 'abc123',
      });
      expect(spy).toHaveBeenCalledWith('Authorization', `Bearer ${jwt}`);
      spy.mockRestore();
    });
  });

  describe('login', () => {
    it("returns the user's data", async () => {
      const user = await login({email: 'tmdo@gmail.com', password: 'abc123'});
      const expectedUser = {
        id: expect.any(Number),
        email: 'tmdo@gmail.com',
        username: 'Thanh',
      };
      expect(user).toEqual(expectedUser);
    });

    it('stores a jwt in localStorage', async () => {
      await login({
        email: 'tmdo@gmail.com',
        password: 'abc123',
      });
      const jwt = getJwt();
      expect(jwt).toBe(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTcxMTcyNjE0fQ.Gp-mrmHVnSgluaXZECQC3_mf98P3_nj1jHa22wK7n6M',
      );
    });

    it('sets a default Authorization header', async () => {
      const spy = jest.spyOn(httpApi, 'setDefaultHeader');
      const jwt =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTcxMTcyNjE0fQ.Gp-mrmHVnSgluaXZECQC3_mf98P3_nj1jHa22wK7n6M';
      await login({
        email: 'tmd@gmail.com',
        password: 'abc123',
      });
      expect(spy).toHaveBeenCalledWith('Authorization', `Bearer ${jwt}`);
      spy.mockRestore();
    });
  });

  describe('logout', () => {
    it('logs the user out by removing the jwt from localStorage', () => {
      saveJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
      logout();
      const jwt = getJwt();
      expect(jwt).toBeFalsy();
    });
  });
});
