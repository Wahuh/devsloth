import {selectBoardsByOwnerId, selectBoard} from './selectors';

describe('selectBoardsByOwnerId', () => {
  it('returns an empty array from state if the owner_id has no boards', () => {
    const state = {
      boards: {
        byId: {},
      },
    };
    const boards = selectBoardsByOwnerId(state, 3);
    const expectedBoards = [];
    expect(boards).toEqual(expectedBoards);
  });

  it('returns an array of boards from state given an owner_id', () => {
    const state = {
      boards: {
        byId: {
          1: {id: 1, title: 'hello', owner_id: 3},
        },
      },
    };
    const boards = selectBoardsByOwnerId(state, 3);
    const expectedBoards = [{id: 1, title: 'hello', owner_id: 3}];
    expect(boards).toEqual(expectedBoards);
  });
});

describe('selectBoard', () => {
  it('returns null if the board does not exist', () => {
    const state = {
      boards: {
        byId: {},
      },
    };

    const board = selectBoard(state, 1);
    const expectedBoard = null;
    expect(board).toBe(expectedBoard);
  });

  it('returns a board object given a board_id', () => {
    const state = {
      boards: {
        byId: {
          1: {id: 1, title: 'hello', owner_id: 3},
        },
      },
    };

    const board = selectBoard(state, 1);
    const expectedBoard = {id: 1, title: 'hello', owner_id: 3};
    expect(board).toEqual(expectedBoard);
  });
});
