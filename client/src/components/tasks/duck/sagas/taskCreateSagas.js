import { call, takeEvery, put } from "redux-saga/effects";
import tasksApi from "../../../../api/tasksApi";
import { createTaskFailure } from "../actions";
import { TASK_CREATE_REQUEST, TASK_CREATE_SUCCESS } from "../types";
import { toastify } from "../../../ui/duck/sagas";

export function* watchCreateTaskRequest() {
    yield takeEvery(TASK_CREATE_REQUEST, handleCreateTask);
}

function* handleCreateTask({ payload }) {
    try {
        yield call(tasksApi.createTask, payload);
        yield call(toastify, {
            message: "Task created successfully!",
            duration: 1500,
            status: "success"
        });
    } catch(error) {
        yield put(createTaskFailure(error));
    }
}