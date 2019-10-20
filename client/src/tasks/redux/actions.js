import {createAction} from 'redux-actions';
import {CREATE_TASK_REQUEST, GET_TASKS_REQUEST} from './types';
import makeRequestMetaCreator from '../../common/redux/makeRequestMetaCreator';

export const createTaskRequest = createAction(
  CREATE_TASK_REQUEST,
  null,
  makeRequestMetaCreator('postTask'),
);

export const getTasksRequest = createAction(
  GET_TASKS_REQUEST,
  null,
  makeRequestMetaCreator('getTasks'),
);
