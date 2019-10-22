import {createAction} from 'redux-actions';
import {
  CREATE_TASK_REQUEST,
  GET_TASKS_REQUEST,
  MOVE_TASK_SAME_LIST,
  MOVE_TASK_DIFFERENT_LIST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK,
} from './types';
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

export const updateTaskSuccess = createAction(UPDATE_TASK_SUCCESS);
export const updateTask = createAction(UPDATE_TASK);
export const moveTaskSameList = createAction(MOVE_TASK_SAME_LIST);
export const moveTaskDifferentList = createAction(MOVE_TASK_DIFFERENT_LIST);
