import uiReducer from './reducers';
import {showModal, hideModal, startFetching, stopFetching} from './actions';

describe('uiReducer', () => {
  it('returns the initial state', () => {
    const action = {};
    const initialState = undefined;
    const state = uiReducer(initialState, action);
    const expectedState = {
      fetching: {},
      modals: [],
    };
    expect(state).toEqual(expectedState);
  });

  it('handles SHOW_MODAL', () => {
    const action = showModal('board');
    const initialState = {
      fetching: {},
      modals: [],
    };
    const expectedState = {
      fetching: {},
      modals: ['board'],
    };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('handles HIDE_MODAL', () => {
    const action = hideModal('board');
    const expectedState = {
      fetching: {},
      modals: [],
    };
    const initialState = {
      fetching: {},
      modals: ['board'],
    };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('handles START_FETCHING', () => {
    const action = startFetching('getBoard');
    const initialState = {
      fetching: {},
      modals: [],
    };
    const expectedState = {
      fetching: {getBoard: true},
      modals: [],
    };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('handles STOP_FETCHING', () => {
    const action = stopFetching('getBoard');
    const initialState = {
      fetching: {getBoard: true},
      modals: [],
    };
    const expectedState = {
      fetching: {getBoard: false},
      modals: [],
    };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
