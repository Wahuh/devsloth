import boardsReducer from './reducers';
import {
  GET_BOARD_SUCCESS,
  GET_USER_BOARDS_SUCCESS,
  CREATE_USER_BOARD_SUCCESS,
} from './types';

describe('boardsReducer', () => {
  it('returns the initial state', () => {
    const action = {};
    const initialState = undefined;
    const state = boardsReducer(initialState, action);
    const expectedState = {
      byId: {},
    };
    expect(state).toEqual(expectedState);
  });

  it('handles CREATE_USER_BOARD_SUCCESS', () => {
    const action = {
      type: CREATE_USER_BOARD_SUCCESS,
      payload: {
        entities: {
          boards: {
            2: {
              title: 'asdasdsad',
              owner_id: 2,
              owner_type: 'user',
              id: 2,
            },
          },
        },
        result: 2,
      },
    };
    const initialState = {byId: {}};
    const state = boardsReducer(initialState, action);
    const expectedState = {
      byId: {
        2: {
          title: 'asdasdsad',
          owner_id: 2,
          owner_type: 'user',
          id: 2,
        },
      },
    };
    expect(state).toEqual(expectedState);
  });

  it('handles GET_USER_BOARDS_SUCCESS', () => {
    const action = {
      type: GET_USER_BOARDS_SUCCESS,
      payload: {
        entities: {
          boards: {
            1: {
              id: 1,
              title: 'hey',
              owner_id: 2,
              owner_type: 'user',
            },
          },
        },
        result: [1],
      },
    };
    const initialState = {byId: {}};
    const state = boardsReducer(initialState, action);
    const expectedState = {
      byId: {
        1: {
          id: 1,
          title: 'hey',
          owner_id: 2,
          owner_type: 'user',
        },
      },
    };
    expect(state).toEqual(expectedState);
  });

  it('handles GET_BOARD_SUCCESS', () => {
    const action = {
      type: GET_BOARD_SUCCESS,
      payload: {
        entities: {
          boards: {
            1: {
              id: 1,
              title: 'hey',
              owner_id: 2,
              owner_type: 'user',
            },
          },
        },
        result: 1,
      },
    };
    const initialState = {byId: {}};
    const state = boardsReducer(initialState, action);
    const expectedState = {
      byId: {
        1: {
          id: 1,
          title: 'hey',
          owner_id: 2,
          owner_type: 'user',
        },
      },
    };
    expect(state).toEqual(expectedState);
  });
});
