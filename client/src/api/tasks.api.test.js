jest.mock('./http.api');
/* eslint-disable */
import {postTask, getTasks, patchTaskPosition} from './tasks.api';
/* eslint-enable */
describe('patchTaskPosition', () => {
  it('returns normalized data for a task object', async () => {
    const task = await patchTaskPosition({id: 1, position: 500});
    const expectedTask = {
      entities: {
        tasks: {
          1: {
            list_id: 1,
            title: 'hello thanh',
            id: 1,
            position: 500,
          },
        },
      },
      result: 1,
    };
    expect(task).toEqual(expectedTask);
  });
});

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

describe('getTasks', () => {
  it('returns normalized data for an array of task objects', async () => {
    const tasks = await getTasks({list_id: 1});
    const expectedTasks = {
      entities: {
        tasks: {
          1: {
            list_id: 1,
            title: 'hello task',
            id: 1,
          },
        },
      },
      result: [1],
    };
    expect(tasks).toEqual(expectedTasks);
  });
});
