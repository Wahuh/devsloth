import {createUserBoardRequest} from './actions';
import {CREATE_USER_BOARD_REQUEST} from './types';

describe('createUserBoardRequest', () => {
  it('returns an action with a payload containing params and apiFunction', () => {
    const action = createUserBoardRequest({title: 'Hello Board'});
    const expectedAction = {
      type: CREATE_USER_BOARD_REQUEST,
      payload: {title: 'Hello Board'},
      meta: {apiFunction: 'postUserBoard'},
    };
    expect(action).toEqual(expectedAction);
  });
});
