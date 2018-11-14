import { createAction } from "redux-actions";
import * as types from "./types";

export const addTaskRequest = createAction(types.TASK_ADD_REQUEST);
export const addTaskSuccess = createAction(types.TASK_ADD_SUCCESS);
export const addTaskFailure = createAction(types.TASK_ADD_FAILURE);

export const deleteTaskRequest = createAction(types.TASK_DELETE_REQUEST);
export const deleteTaskSuccess = createAction(types.TASK_DELETE_SUCCESS);
export const deleteTaskFailure = createAction(types.TASK_DELETE_FAILURE);

export const loadTasksRequest= createAction(types.TASKS_LOAD_REQUEST);
export const loadTasksSuccess = createAction(types.TASKS_LOAD_SUCCESS);
export const loadTasksFailure = createAction(types.TASKS_LOAD_FAILURE);

export const showTaskModal = createAction(types.TASK_MODAL_SHOW);
export const hideTaskModal = createAction(types.TASK_MODAL_HIDE);