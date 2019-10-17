import {selectTasksByListId} from './selectors';

describe('selectTasksByListId', () => {
  it('returns an array of task objects from state given a list_id', () => {
    const state = {
      tasks: {
        byId: {
          1: {
            id: 1,
            title: 'hello task',
            list_id: 2,
          },
        },
        allIds: [1],
      },
    };

    const tasks = selectTasksByListId(state, 2);
    const expectedTasks = [{id: 1, title: 'hello task', list_id: 2}];
    expect(tasks).toEqual(expectedTasks);
  });
});
