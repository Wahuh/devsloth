import {createListRequest, getListsRequest} from './actions';
import {CREATE_LIST_REQUEST, GET_LISTS_REQUEST} from './types';

describe('createListRequest', () => {
  it('returns a CREATE_LIST_REQUEST action', () => {
    const action = createListRequest({title: 'hello list'});
    const expectedAction = {
      type: CREATE_LIST_REQUEST,
      payload: {title: 'hello list'},
      meta: {apiFunction: 'postList'},
    };
    expect(action).toEqual(expectedAction);
  });
});

describe('getListsRequest', () => {
  it('returns a GET_LISTS_REQUEST action', () => {
    const action = getListsRequest();
    const expectedAction = {
      type: GET_LISTS_REQUEST,
      meta: {apiFunction: 'getLists'},
    };
    expect(action).toEqual(expectedAction);
  });
});
