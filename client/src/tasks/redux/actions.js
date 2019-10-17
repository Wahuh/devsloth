import {createAction} from 'redux-actions';
import {CREATE_TASK_REQUEST} from './types';
import makeRequestMetaCreator from '../../common/redux/makeRequestMetaCreator';

/* eslint-disable */
export const createTaskRequest = createAction(
  CREATE_TASK_REQUEST,
  null,
  makeRequestMetaCreator('postTask'),
);
/* eslint-enable */
