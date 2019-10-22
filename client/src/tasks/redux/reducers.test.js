import tasksReducer from './reducers';
import {CREATE_TASK_SUCCESS, GET_TASKS_SUCCESS} from './types';
import {updateTask} from './actions';

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

  it('handles UPDATE_TASK', () => {
    const action = updateTask({
      entities: {
        tasks: {
          1: {
            id: 1,
            title: 'hello task 1',
            list_id: 1,
            description: '',
            position: 500,
          },
        },
      },
      result: 1,
    });

    const intialState = {
      byId: {
        1: {
          id: 1,
          title: 'hello task 1',
          list_id: 1,
          description: '',
          position: 300,
        },
      },
      allIds: [1],
    };
    const expectedState = {
      byId: {
        1: {
          id: 1,
          title: 'hello task 1',
          list_id: 1,
          description: '',
          position: 500,
        },
      },
      allIds: [1],
    };
    const state = tasksReducer(intialState, action);
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

  it('handles GET_TASKS_SUCCESS', () => {
    const action = {
      type: GET_TASKS_SUCCESS,
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
        result: [1],
      },
    };
    const initialState = {
      byId: {},
      allIds: [],
    };
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
