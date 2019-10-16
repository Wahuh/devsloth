import {createAction} from 'redux-actions';
import {CREATE_LIST_REQUEST, GET_LISTS_REQUEST} from './types';
import makeRequestMetaCreator from '../../common/redux/makeRequestMetaCreator';

export const createListRequest = createAction(
  CREATE_LIST_REQUEST,
  null,
  makeRequestMetaCreator('postList'),
);

export const getListsRequest = createAction(
  GET_LISTS_REQUEST,
  null,
  makeRequestMetaCreator('getLists'),
);
