import listsReducer from './reducers';
import {CREATE_LIST_SUCCESS} from './types';

describe('listsReducer', () => {
  it('returns the initial state', () => {
    const action = {};
    const initialState = undefined;
    const state = listsReducer(initialState, action);
    const expectedState = {
      byId: {},
    };
    expect(state).toEqual(expectedState);
  });

  it('handles CREATE_LIST_SUCCESS', () => {
    const action = {
      type: CREATE_LIST_SUCCESS,
      payload: {entities: {lists: {1: {id: 1, title: 'hello list'}}}},
    };
    const initialState = {byId: {}};
    const state = listsReducer(initialState, action);
    const expectedState = {
      byId: {1: {id: 1, title: 'hello list'}},
    };
    expect(state).toEqual(expectedState);
  });
});
