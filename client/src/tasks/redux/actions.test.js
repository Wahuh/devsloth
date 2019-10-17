import {createTaskRequest} from './actions';
import {CREATE_TASK_REQUEST} from './types';

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
