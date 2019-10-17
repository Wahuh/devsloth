import authReducer from './reducers';
import {SIGNUP_SUCCESS} from '../../signup/redux/types';

describe('authReducer', () => {
  it('returns the initial state', () => {
    const action = {};
    const initalState = undefined;
    const state = authReducer(initalState, action);
    const expectedState = {
      isAuthenticated: false,
      user: {},
    };
    expect(state).toEqual(expectedState);
  });

  it('handles SIGNUP_SUCCESS', () => {
    const action = {
      type: SIGNUP_SUCCESS,
      payload: {
        username: 'Dasadasdsa',
        email: 'tmdoan98@gmail.com',
        id: 2,
      },
    };
    const state = authReducer({}, action);
    const expectedState = {
      isAuthenticated: true,
      user: {
        username: 'Dasadasdsa',
        email: 'tmdoan98@gmail.com',
        id: 2,
      },
    };
    expect(state).toEqual(expectedState);
  });
});
