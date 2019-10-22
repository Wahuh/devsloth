import {selectTasksByListId, selectTasksCountByListId} from './selectors';

describe('selectTasksByListId', () => {
  it('returns an array of task objects sorted by position from state given a list_id', () => {
    const state = {
      tasks: {
        byId: {
          1: {
            id: 1,
            title: 'hello task',
            list_id: 2,
            position: 100,
          },
          2: {
            id: 2,
            title: 'hello task 2',
            list_id: 2,
            position: 1000,
          },
          3: {
            id: 3,
            title: 'hello task 3',
            list_id: 2,
            position: 50,
          },
        },
        allIds: [1, 2, 3],
      },
    };

    const tasks = selectTasksByListId(state, 2);
    const expectedTasks = [
      {
        id: 3,
        title: 'hello task 3',
        list_id: 2,
        position: 50,
      },

      {
        id: 1,
        title: 'hello task',
        list_id: 2,
        position: 100,
      },
      {
        id: 2,
        title: 'hello task 2',
        list_id: 2,
        position: 1000,
      },
    ];
    expect(tasks).toEqual(expectedTasks);
  });
});

describe('selectTasksCountByListId', () => {
  it('returns 0 if there are no tasks in the list', () => {
    const state = {
      tasks: {
        byId: {
          1: {
            id: 1,
            title: 'hello task',
            list_id: 3,
          },
        },
        allIds: [1],
      },
    };

    const count = selectTasksCountByListId(state, 2);
    expect(count).toBe(0);
  });

  it('returns the number of tasks given a list_id', () => {
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

    const count = selectTasksCountByListId(state, 2);
    expect(count).toBe(1);
  });
});
