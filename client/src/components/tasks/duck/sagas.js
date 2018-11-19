import { call, take, put } from "redux-saga/effects";
import tasksApi from "../../../api/tasksApi";
import { TASK_CREATE_REQUEST } from "../duck/types";
import { createTaskSuccess, createTaskFailure, hideTaskModal } from "../duck/actions";

export function* loadTasks() {

}

export function* createTask() {
    while(true) {
        const { payload } = yield take(TASK_CREATE_REQUEST);

        try {
            const { data } = yield call(tasksApi.create, payload);
            yield put(createTaskSuccess(data));
            yield put(hideTaskModal());
        } catch(error) {
            yield put(createTaskFailure(error));
            return;
        }
    }
}