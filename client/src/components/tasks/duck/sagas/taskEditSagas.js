import { put, takeEvery } from "redux-saga/effects";
import { TASK_UPDATE_SUCCESS } from "../types";
import { editTask } from "../actions";

export function* watchTaskEdit() {
    yield takeEvery(TASK_UPDATE_SUCCESS, handleTaskEdit);
}

function* handleTaskEdit({ payload }) {
    yield put(editTask(payload));
}
