jest.mock('./http.api');
/* eslint-disable */
import {postTask} from './tasks.api';
/* eslint-enable */
describe('postTask', () => {
  it('returns normalized data for a task object', async () => {
    const task = await postTask({title: 'hello task', list_id: 1});
    const expectedTask = {
      entities: {
        tasks: {
          1: {
            list_id: 1,
            title: 'hello task',
            id: 1,
          },
        },
      },
      result: 1,
    };
    expect(task).toEqual(expectedTask);
  });
});
