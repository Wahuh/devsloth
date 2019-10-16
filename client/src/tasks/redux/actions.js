import {createAction} from 'redux-actions';
import {CREATE_TASK_REQUEST} from './types';
import makeRequestMetaCreator from '../../common/redux/makeRequestMetaCreator';

export const createTaskRequest = createAction(
  CREATE_TASK_REQUEST,
  null,
  makeRequestMetaCreator('postTask'),
);

export const getTasks = () => {};
