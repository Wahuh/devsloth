import {showModal, hideModal, startFetching, stopFetching} from './actions';
import {SHOW_MODAL, HIDE_MODAL, START_FETCHING, STOP_FETCHING} from './types';

describe('showModal', () => {
  it('returns a SHOW_MODAL action', () => {
    const action = showModal('board');
    const expectedAction = {
      type: SHOW_MODAL,
      payload: 'board',
    };
    expect(action).toEqual(expectedAction);
  });
});

describe('hideModal', () => {
  it('returns a HIDE_MODAL action', () => {
    const action = hideModal('board');
    const expectedAction = {
      type: HIDE_MODAL,
      payload: 'board',
    };
    expect(action).toEqual(expectedAction);
  });
});

describe('startFetching', () => {
  it('returns a START_FETCHING action', () => {
    const action = startFetching();
    const expectedAction = {
      type: START_FETCHING,
    };
    expect(action).toEqual(expectedAction);
  });
});

describe('stopFetching', () => {
  it('returns a STOP_FETCHING action', () => {
    const action = stopFetching();
    const expectedAction = {
      type: STOP_FETCHING,
    };
    expect(action).toEqual(expectedAction);
  });
});
