import { call, put, takeEvery, select } from "redux-saga/effects";
import { TASK_MOVE_REQUEST } from "../types";
import { moveTaskFailure, reorderTasks, moveTaskSuccess } from "../actions";
import { toastify } from "../../../ui/duck/sagas";
import tasksApi from "../../../../api/tasksApi";
import { getTask, getPreviousTask } from "../selectors";
import { removeUiPortal } from "../../../ui/duck/actions";
import { POPOVER_TASK_MOVE, DROPDOWN_TASK } from "../../../ui/constants";
import { makeGetListTaskIdsOrdered } from "../../../lists/duck/selectors";

export function* watchTaskMoveRequest() {
    yield takeEvery(TASK_MOVE_REQUEST, handleTaskMove);
}

function* handleTaskMove({ payload }) {
    const {
        taskId,
        oldListId,
        oldChannelId,
        oldIndex,
        newListId,
        newChannelId,
        newIndex,
    } = payload;

    yield put(removeUiPortal(POPOVER_TASK_MOVE));
    yield put(removeUiPortal(DROPDOWN_TASK));
    console.log("payload",payload);
    //if the task wasn't moved
    if (newListId === oldListId && newIndex === oldIndex) return;

    const task = yield select(getTask, { taskId });

    const originalTasks = [ { ...task } ];
    const newTasks = [];

    const newTask = { ...task };

    if (newChannelId !== oldChannelId) {
        //task was moved to different list in a different channel
        newTask.channel = newChannelId;
        newTask.list = newListId;

        //in the old list...
        if (task.isHead) {
            if (task.next) {
                //the second task becomes head
                const nextTask = yield select(getTask, { taskId: task.next });
                originalTasks.push({ ...nextTask });
                newTasks.push({ ...nextTask, isHead: true });
            }
            //else it's the only task in the list, no need to update
            newTask.isHead = null;
        } else if (!task.next) {
            //it is the last task in the list
            const prevTask = yield select(getPreviousTask, task._id);
            originalTasks.push({ ...prevTask });
            newTasks.push({ ...prevTask, next: null });
        } else {
            const prevTask = yield select(getPreviousTask, task._id);
            originalTasks.push({ ...prevTask });
            newTasks.push({ ...prevTask, next: task.next });
        }

        //in the new list...
        const getListTaskIdsOrdered = yield call(makeGetListTaskIdsOrdered);
        const newListIds = yield select(getListTaskIdsOrdered, { listId: newListId });
        console.log(newListIds, "NLIDS")
        if (newIndex == 0) {
            newTask.isHead = true;
            newTask.next = newListIds[0];
            const nextTask = yield select(getTask, { taskId: newListIds[0] });
            originalTasks.push({ ...nextTask });
            newTasks.push({ ...nextTask, isHead: null });
        } else if (newIndex == newListIds.length) {
            //if it becomes last task in list
            const prevTask = yield select(getTask, { taskId: newListIds.length - 1 });
            originalTasks.push({ ...prevTask });
            newTasks.push({ ...prevTask, next: task._id });
            newTask.next = null;
        } else {
            newTask.next = newListIds[newIndex];
            const prevTask = yield select(getTask, { taskId: newListIds[newIndex - 1] });
            originalTasks.push({ ...prevTask });
            newTasks.push({ ...prevTask, next: task._id });
        }
        newTasks.push(newTask);
    } else if (newListId !== oldListId) {
        //task was moved to different list in the same channel
        newTask.list = newListId;
        if (task.isHead) {
            newTask.isHead = null;
            const nextTask = yield select(getTask, { taskId: task.next });
            newTasks.push({ ...nextTask, isHead: true });
        } else {
            const prevTask = yield select(getPreviousTask, { taskId: task._id });
            if (task.next) {
                newTasks.push({ ...prevTask, next: task.next });
            } else {
                //it is last task in the list
                newTasks.push({ ...prevTask, next: null });
            }
        }

        const getListTaskIdsOrdered = yield call(makeGetListTaskIdsOrdered);
        const newListIds = yield select(getListTaskIdsOrdered, { listId: newListId });

        if (newIndex == 0) {
            newTask.isHead = true;
            const nextTask = yield select(getTask, { taskId: newListIds[0] });
            newTasks.push({ ...nextTask, isHead: null })
            newTask.next = nextTask._id;
        } else if (newIndex == newListIds.length) {
            //last in list
            newTask.next = null;
            const prevTask = yield select(getTask, { taskId: newListIds[newIndex - 1] });
            newTasks.push({ ...prevTask, next: task._id });
        } else {
            const prevTask = yield select(getTask, { taskId: newListIds[newIndex - 1] });
            newTasks.push({ ...prevTask, next: task._id });
            newTask.next = newListIds[newIndex];
        }
        newTasks.push(newTask);
    } else {
        //task was moved to different index in the same list
        const getListTaskIdsOrdered = yield call(makeGetListTaskIdsOrdered);
        const listIds = yield select(getListTaskIdsOrdered, { listId: oldListId });

        if (task.isHead) {
            newTask.isHead = null;
            const nextTask = yield select(getTask, { taskId: task.next });
            //if next Task gets updated twice
            //if next task is same as prev task
            if (newIndex == listIds.length) {
                //last in list
                newTask.next = null;
                const prevTask = yield select(getTask, { taskId: listIds[newIndex - 1] });
                newTasks.push({ ...prevTask, next: task._id });
                newTasks.push({ ...nextTask, isHead: true });
            } else {
                const prevTask = yield select(getTask, { taskId: listIds[newIndex - 1] })
                if (prevTask._id === task.next) {
                    newTasks.push({ 
                        ...prevTask, 
                        next: task._id,
                        isHead: true
                    });
                } else {
                    newTasks.push({ ...nextTask, isHead: true });
                }
                //if task is the new head

                newTask.next = listIds[newIndex];
            }
        }
        newTasks.push(newTask);
    }

    yield put(reorderTasks(newTasks, payload));

    // const { payload: normalizedPayload } = yield call(moveTaskSuccess, payload);
    // yield put(reorderTasks(normalizedPayload));
    // console.log("tasks", payload);
    // console.log("move", moveTaskSuccess(payload));
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
