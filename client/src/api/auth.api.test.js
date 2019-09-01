import authApi from './auth.api';

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
