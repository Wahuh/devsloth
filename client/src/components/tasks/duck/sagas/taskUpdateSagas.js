import { call, put, takeEvery } from "redux-saga/effects";
import { TASK_UPDATE_REQUEST } from "../types";
import { updateTaskFailure } from "../actions";

import { toastify } from "../../../ui/duck/sagas";
import tasksApi from "../../../../api/tasksApi";

export function* watchTaskUpdateRequest() {
    yield takeEvery(TASK_UPDATE_REQUEST, handleTaskUpdate);
}

function* handleTaskUpdate({ payload }) {
    try {
        yield call(tasksApi.updateTask, payload);
        yield call(toastify, { 
            message: "Task updated successfully!",
            duration: 3000,
            status: "success"
        });
    } catch(error) {
        yield put(updateTaskFailure(error));
    }
}
