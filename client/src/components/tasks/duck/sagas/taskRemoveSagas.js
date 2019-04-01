import { put, takeEvery } from "redux-saga/effects";
import { TASK_DELETE_SUCCESS } from "../types";
import { removeTask } from "../actions";

export function* watchTaskRemove() {
    yield takeEvery(TASK_DELETE_SUCCESS, handleTaskRemove);
}

function* handleTaskRemove({ payload }) {
    yield put(removeTask(payload));
}
