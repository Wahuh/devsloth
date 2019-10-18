jest.mock('./http.api');
/* eslint-disable */
import {getUser} from './me.api';
import * as httpApi from './http.api';
/* eslint-enable */

describe('getUser', () => {
  it('returns a user object', async () => {
    const user = await getUser('jwt token');
    const expectedUser = {
      username: 'Thanh',
      email: 'tmdoa@gmail.com',
      id: 1,
    };
    expect(user).toEqual(expectedUser);
  });

  it('sets a default Authorization header', async () => {
    const spy = jest.spyOn(httpApi, 'setDefaultHeader');
    const jwt =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTcxMTcyNjE0fQ.Gp-mrmHVnSgluaXZECQC3_mf98P3_nj1jHa22wK7n6M';
    await getUser(jwt);
    expect(spy).toHaveBeenCalledWith('Authorization', `Bearer ${jwt}`);
    spy.mockRestore();
  });
});
