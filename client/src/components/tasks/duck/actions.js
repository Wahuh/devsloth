import { createAction } from "redux-actions";
import * as types from "./types";

const metaCreator = () => ({ errorType: "task" });

export const createTaskRequest = createAction(types.TASK_CREATE_REQUEST);
export const createTaskSuccess = createAction(types.TASK_CREATE_SUCCESS);
export const createTaskFailure = createAction(types.TASK_CREATE_FAILURE, null, metaCreator);

export const deleteTaskRequest = createAction(types.TASK_DELETE_REQUEST);
export const deleteTaskSuccess = createAction(types.TASK_DELETE_SUCCESS);
export const deleteTaskFailure = createAction(types.TASK_DELETE_FAILURE, null, metaCreator);

export const loadTasksRequest= createAction(types.TASKS_LOAD_REQUEST);
export const loadTasksSuccess = createAction(types.TASKS_LOAD_SUCCESS);
export const loadTasksFailure = createAction(types.TASKS_LOAD_FAILURE, null, metaCreator);

export const showTaskModal = createAction(types.TASK_MODAL_SHOW);
export const hideTaskModal = createAction(types.TASK_MODAL_HIDE);