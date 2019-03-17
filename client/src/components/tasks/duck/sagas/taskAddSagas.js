import { put, takeEvery } from "redux-saga/effects";
import { TASK_CREATE_SUCCESS } from "../types";
import { addTask} from "../actions";

export function* watchTaskAdd() {
    yield takeEvery([
        TASK_CREATE_SUCCESS
    ], handleTaskAdd);
}

function* handleTaskAdd({ payload }) {
    yield put(addTask(payload));
}