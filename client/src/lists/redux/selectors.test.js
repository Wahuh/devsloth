import {selectListsByBoardId} from './selectors';

describe('selectListsByBoardId', () => {
  it('returns an empty array if there are no lists for that board_id', () => {
    const state = {
      lists: {
        byId: {},
      },
    };
    const lists = selectListsByBoardId(state, 2);
    const expectedLists = [];
    expect(lists).toEqual(expectedLists);
  });

  it('returns an array of list objects given a board_id', () => {
    const state = {
      lists: {
        byId: {
          1: {
            id: 1,
            title: 'hello list',
            board_id: 2,
          },
        },
      },
    };

    const lists = selectListsByBoardId(state, 2);
    const expectedLists = [
      {
        id: 1,
        title: 'hello list',
        board_id: 2,
      },
    ];
    expect(lists).toEqual(expectedLists);
  });
});
