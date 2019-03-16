import { call, takeEvery, take, put } from "redux-saga/effects";
import tasksApi from "../../../../api/tasksApi";
import { createTaskFailure } from "../actions";
import { TASK_CREATE_REQUEST, TASK_CREATE_SUCCESS } from "../types";
import { toastify } from "../../../ui/duck/sagas";

export function* watchCreateTaskRequest() {
    while(true) {
        const { payload } = yield take(TASK_CREATE_REQUEST);
        yield call(handleCreateTask, payload);
    }
    // yield takeEvery(TASK_CREATE_REQUEST, handleCreateTask);
}

function* handleCreateTask(payload) {
    try {
        console.log("request", payload);
        yield call(tasksApi.createTask, payload);
    } catch(error) {
        yield put(createTaskFailure(error));
    }
}