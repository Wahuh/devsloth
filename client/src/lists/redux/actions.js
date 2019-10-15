import {createAction} from 'redux-actions';
import {CREATE_LIST_REQUEST} from './types';
import makeRequestMetaCreator from '../../common/redux/makeRequestMetaCreator';

export const createListRequest = createAction(
  CREATE_LIST_REQUEST,
  null,
  makeRequestMetaCreator('postList'),
);

export const getList = createAction('');
