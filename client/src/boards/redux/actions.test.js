import {
  createUserBoardRequest,
  getUserBoardsRequest,
  getBoardRequest,
} from './actions';
import {
  CREATE_USER_BOARD_REQUEST,
  GET_USER_BOARDS_REQUEST,
  GET_BOARD_REQUEST,
} from './types';

describe('createUserBoardRequest', () => {
  it('returns a CREATE_USER_BOARD_REQUEST action', () => {
    const action = createUserBoardRequest({title: 'Hello Board'});
    const expectedAction = {
      type: CREATE_USER_BOARD_REQUEST,
      payload: {title: 'Hello Board'},
      meta: {apiFunction: 'postUserBoard'},
    };
    expect(action).toEqual(expectedAction);
  });
});

describe('getUserBoardsRequest', () => {
  it('returns a GET_USER_BOARDS action', () => {
    const action = getUserBoardsRequest();
    const expectedAction = {
      type: GET_USER_BOARDS_REQUEST,
      meta: {apiFunction: 'getUserBoards'},
    };
    expect(action).toEqual(expectedAction);
  });
});

describe('getBoardRequest', () => {
  it('returns GET_BOARD_REQUEST action', () => {
    const action = getBoardRequest();
    const expectedAction = {
      type: GET_BOARD_REQUEST,
      meta: {apiFunction: 'getBoard'},
    };
    expect(action).toEqual(expectedAction);
  });
});
