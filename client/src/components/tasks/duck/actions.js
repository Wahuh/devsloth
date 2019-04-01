import { createAction } from "redux-actions";
import { TASK_CREATE_RECEIVE, TASK_UPDATE_RECEIVE, TASK_DELETE_RECEIVE, TASK_LOCAL_CREATE, TASK_LOCAL_UPDATE, TASK_LOCAL_DELETE, TASK_CREATE_REQUEST, TASK_CREATE_SUCCESS, TASK_CREATE_FAILURE, TASK_DELETE_REQUEST, TASK_DELETE_SUCCESS, TASK_DELETE_FAILURE, TASK_UPDATE_REQUEST, TASK_UPDATE_SUCCESS, TASK_UPDATE_FAILURE, TASK_SELECT, TASK_ADD, TASK_REMOVE, TASK_EDIT, TASK_PREV_EDIT, TASK_MOVE_REQUEST, TASK_MOVE_SUCCESS, TASK_MOVE_FAILURE, TASKS_REORDER } from "./types";


import { normalize } from "normalizr";
import schemas from "../../../schemas";

const payloadCreator = (data) => normalize(data, schemas.task)
const metaCreator = () => ({ errorType: "task" });

export const createTaskRequest = createAction(TASK_CREATE_REQUEST);
export const createTaskSuccess = createAction(TASK_CREATE_SUCCESS, payloadCreator);
export const createTaskFailure = createAction(TASK_CREATE_FAILURE);

export const deleteTaskRequest = createAction(TASK_DELETE_REQUEST, taskId => ({ taskId }));
export const deleteTaskSuccess = createAction(TASK_DELETE_SUCCESS, payloadCreator);
export const deleteTaskFailure = createAction(TASK_DELETE_FAILURE, null, metaCreator);

export const updateTaskRequest = createAction(TASK_UPDATE_REQUEST);
export const updateTaskSuccess = createAction(TASK_UPDATE_SUCCESS, payloadCreator);
export const updateTaskFailure = createAction(TASK_UPDATE_FAILURE, null, metaCreator);

export const receiveTaskCreate = createAction(TASK_CREATE_RECEIVE, payloadCreator);
export const receiveTaskUpdate = createAction(TASK_UPDATE_RECEIVE, payloadCreator);
export const receiveTaskDelete = createAction(TASK_DELETE_RECEIVE, payloadCreator);

export const moveTaskRequest = createAction(TASK_MOVE_REQUEST);
export const moveTaskSuccess = createAction(
    TASK_MOVE_SUCCESS, 
    (tasks, listData) => {
        const payload = normalize(tasks, [ schemas.task ]);
        return { ...payload, extra: listData };
    }
);
export const moveTaskFailure = createAction(TASK_MOVE_FAILURE);


export const selectTask = createAction(TASK_SELECT, _id => payloadCreator({ _id }));
export const addTask = createAction(TASK_ADD);
export const removeTask = createAction(TASK_REMOVE);
export const editTask = createAction(TASK_EDIT);
export const editPrevTask = createAction(TASK_PREV_EDIT);
export const reorderTasks = createAction(
    TASKS_REORDER, 
    (tasks, listData) => {
        const payload = normalize(tasks, [ schemas.task ]);
        return { ...payload, extra: listData };
    }
);
