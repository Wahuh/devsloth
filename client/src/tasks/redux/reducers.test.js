import tasksReducer from './reducers';
import {CREATE_TASK_SUCCESS} from './types';

describe('tasksReducer', () => {
  it('returns the initial state', () => {
    const action = {};
    const initialState = undefined;
    const state = tasksReducer(initialState, action);
    const expectedState = {
      byId: {},
      allIds: [],
    };
    expect(state).toEqual(expectedState);
  });

  it('handles CREATE_TASK_SUCCESS', () => {
    const action = {
      type: CREATE_TASK_SUCCESS,
      payload: {
        entities: {
          tasks: {
            1: {
              id: 1,
              title: 'hello task',
              description: '',
              list_id: 1,
            },
          },
        },
        result: 1,
      },
    };

    const initialState = {byId: {}, allIds: []};
    const expectedState = {
      byId: {
        1: {
          id: 1,
          title: 'hello task',
          description: '',
          list_id: 1,
        },
      },
      allIds: [1],
    };
    const state = tasksReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
