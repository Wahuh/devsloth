import {createTaskRequest, getTasksRequest} from './actions';
import {CREATE_TASK_REQUEST, GET_TASKS_REQUEST} from './types';

describe('createTaskRequest', () => {
  it('returns a CREATE_TASK_REQUEST action', () => {
    const action = createTaskRequest({title: 'hello task'});
    const expectedAction = {
      type: CREATE_TASK_REQUEST,
      payload: {title: 'hello task'},
      meta: {apiFunction: 'postTask'},
    };
    expect(action).toEqual(expectedAction);
  });
});

describe('getTasksRequest', () => {
  it('returns a GET_TASKS_REQUEST action', () => {
    const action = getTasksRequest({list_id: 1});
    const expectedAction = {
      type: GET_TASKS_REQUEST,
      payload: {list_id: 1},
      meta: {apiFunction: 'getTasks'},
    };
    expect(action).toEqual(expectedAction);
  });
});
