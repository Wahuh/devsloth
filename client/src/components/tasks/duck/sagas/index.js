import { all, call, take, put } from "redux-saga/effects";
import tasksApi from "../../../../api/tasksApi";

import { 
    TASK_CREATE_REQUEST,
    TASK_UPDATE_REQUEST,
    TASK_DELETE_REQUEST,
    TASK_LIST_CREATE_REQUEST
} from "../types";
import { 
    createTaskSuccess, 
    createTaskFailure,
    updateTaskSuccess,
    updateTaskFailure,
    createTaskListSuccess,
    createTaskListFailure,
    createLocalTask,
    updateLocalTask,
} from "../actions";

import { removeUiModal } from "../../../ui/duck/actions";
import { MODAL_TASK_EDIT } from "../../../ui/constants";
import { watchTaskAdd } from "./taskAddSagas";
import { watchCreateTaskRequest } from "./taskCreateSagas";
import { watchTaskEdit } from "./taskEditSagas";
import { watchTaskUpdateRequest } from "./taskUpdateSagas";
import { watchTaskMoveRequest } from "./taskMoveSagas";




export function* watchDeleteTaskRequest() {
    while(true) {
        const { payload } = yield take(TASK_DELETE_REQUEST);
        yield call(handleDeleteTask, payload);
    }
}

function* handleDeleteTask(payload) {
    try {
        const { data } = yield call(deleteTask, payload);
        yield put(deleteTaskSuccess(data));
        yield put(removeUiModal(MODAL_TASK_EDIT));
    } catch(error) {
        yield put(deleteTaskFailure(error));
    }
}

function* deleteTask(payload) {
    try {
        const response = yield call(tasksApi.deleteTask, payload);
        return response;
    } catch (error) {
        throw(error);
    }
}

export default function* tasksSaga() {
    yield all([
        watchCreateTaskRequest(),
        watchTaskUpdateRequest(),
        watchTaskMoveRequest(),
        watchTaskAdd(),
        watchTaskEdit(),

    ]);
}