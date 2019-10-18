import {getBoard, getUserBoards, postUserBoard} from './boards.api';

jest.mock('./http.api');

describe('getBoard', () => {
  it('returns normalized data for a board object', async () => {
    const board = await getBoard({board_id: 1});
    const expectedBoard = {
      entities: {
        boards: {1: {id: 1, title: 'hello board', owner_id: 2}},
      },
      result: 1,
    };
    expect(board).toEqual(expectedBoard);
  });
});

describe('getUserBoards', () => {
  it('returns normalized data for an array of board objects', async () => {
    const boards = await getUserBoards();
    const expectedBoards = {
      entities: {
        boards: {1: {id: 1, title: 'hello board', owner_id: 2}},
      },
      result: [1],
    };
    expect(boards).toEqual(expectedBoards);
  });
});

describe('postUserBoard', () => {
  it('returns normalized data for a board object', async () => {
    const board = await postUserBoard({title: 'hello board'});
    const expectedBoard = {
      entities: {
        boards: {1: {id: 1, title: 'hello board', owner_id: 2}},
      },
      result: 1,
    };
    expect(board).toEqual(expectedBoard);
  });
});
