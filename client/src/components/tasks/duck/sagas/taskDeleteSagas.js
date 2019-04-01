import { call, takeEvery, put, select } from "redux-saga/effects";
import tasksApi from "../../../../api/tasksApi";
import { deleteTaskFailure, deleteTaskSuccess } from "../actions";
import { TASK_DELETE_REQUEST } from "../types";
import { toastify } from "../../../ui/duck/sagas";
import { getSelectedTask, getTask, getPreviousTask } from "../selectors";
import { removeUiPortal } from "../../../ui/duck/actions";
import { DROPDOWN_TASK } from "../../../ui/constants";
import { delay } from "redux-saga";
export function* watchTaskDeleteRequest() {
    yield takeEvery(TASK_DELETE_REQUEST, handleTaskDelete);
}

function* handleTaskDelete({ payload }) {
    yield put(removeUiPortal(DROPDOWN_TASK));
    const t1 = performance.now();
    const task = yield select(getTask, payload);
    console.log(task, "t");
    const deletedTask = { ...task };
    const originalTasks = [ { ...task } ];

    if (!task.isHead) {
        //if there is a task before this
        const prevTask = yield select(getPreviousTask, task._id);
        console.log(task._id);
        deletedTask.prev = prevTask._id;
        originalTasks.push({ ...prevTask });
    }

    if (task.next) {
        //if there is another task after it
        const nextTask = yield select(getTask, task.next);
        originalTasks.push({ ...nextTask });
    }
    console.log(originalTasks);
    const t2 = performance.now()
    console.log(t2 - t1);

    yield delay(150);
    yield put(deleteTaskSuccess(deletedTask));
    const t3 = performance.now();
    console.log(t3 - t2);


    try {
        // yield call(tasksApi.deleteTask, payload);
    } catch(error) {
        yield put(deleteTaskFailure(error));
    }
}