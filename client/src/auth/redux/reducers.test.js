import authReducer from './reducers';
import {signupSuccess} from '../../signup/redux/actions';

describe('authReducer', () => {
  it('returns the initial state', () => {
    const action = {};
    const initalState = undefined;
    const state = authReducer(initalState, action);
    const expectedState = {
      isAuthenticated: false,
    };
    expect(state).toEqual(expectedState);
  });

  it('handles SIGNUP_SUCCESS', () => {
    const action = signupSuccess();
    const state = authReducer({}, action);
    const expectedState = {
      isAuthenticated: true,
    };
    expect(state).toEqual(expectedState);
  });
});
