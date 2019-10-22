import {selectIsAuthenticated, selectUser, selectUserId} from './selectors';

describe('selectIsAuthenticated', () => {
  it('returns an isAuthenticated boolean from state', () => {
    const state = {
      auth: {
        isAuthenticated: true,
      },
    };

    const actual = selectIsAuthenticated(state);
    const expected = true;
    expect(actual).toBe(expected);
  });
});

describe('selectUser', () => {
  it('returns the authenticated user object from state', () => {
    const state = {
      auth: {
        user: {username: 'Dasadasdsa', email: 'tmdoan@gmail.com', id: 2},
      },
    };

    const actual = selectUser(state);
    const expected = {username: 'Dasadasdsa', email: 'tmdoan@gmail.com', id: 2};
    expect(actual).toEqual(expected);
  });
});

describe('selectUserId', () => {
  it('returns the id of the authenticated user from state', () => {
    const state = {
      auth: {
        user: {username: 'Dasadasdsa', email: 'tmdoan@gmail.com', id: 2},
      },
    };

    const actual = selectUserId(state);
    const expected = 2;
    expect(actual).toEqual(expected);
  });
});
