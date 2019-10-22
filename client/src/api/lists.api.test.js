jest.mock('./http.api');
/* eslint-disable */
import {postList, getLists} from './lists.api';
/* eslint-enable */

describe('postList', () => {
  it('returns normalized data for a list object', async () => {
    const list = await postList({title: 'hello list', board_id: 1});
    const expectedList = {
      entities: {
        lists: {
          1: {
            id: 1,
            title: 'hello list',
            board_id: 1,
          },
        },
      },
      result: 1,
    };
    expect(list).toEqual(expectedList);
  });
});

describe('getLists', () => {
  it('returns normalized data from an array of list objects', async () => {
    const lists = await getLists(1);
    const expectedLists = {
      entities: {
        lists: {
          1: {
            id: 1,
            board_id: 1,
            title: 'hello list',
          },
        },
      },
      result: [1],
    };
    expect(lists).toEqual(expectedLists);
  });
});
