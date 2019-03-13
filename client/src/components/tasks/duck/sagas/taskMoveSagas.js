import { call, put, takeEvery } from "redux-saga/effects";
import { TASK_MOVE_REQUEST } from "../types";
import { updateTaskFailure, moveTaskFailure, reorderTasks } from "../actions";
import { toastify } from "../../../ui/duck/sagas";
import tasksApi from "../../../../api/tasksApi";

export function* watchTaskMoveRequest() {
    yield takeEvery(TASK_MOVE_REQUEST, handleTaskMove);
}

function* handleTaskMove({ payload }) {
    yield put(reorderTasks(payload));
    console.log("move", payload);
    // try {
    //     yield call(tasksApi.updateTask, payload);
    //     yield call(toastify, { 
    //         message: "Task updated successfully!",
    //         duration: 3000,
    //         status: "success"
    //     });
    // } catch(error) {
    //     yield put(moveTaskFailure(error));
    // }
}
