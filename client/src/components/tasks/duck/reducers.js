import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { 
    createTaskSuccess, 
    createLocalTask, 
    updateLocalTask,
    deleteLocalTask,
    selectTask,
    addTask,
    editTask,
    editPrevTask,
    reorderTasks
} from "./actions";
import { loadUserData } from "../../user/duck/actions";

export const byId = handleActions(
    {
        [loadUserData]: (state,  { payload }) => addTasks(state, payload),
        [addTask]: (state,  { payload }) => insertTask(state, payload),
        [editTask]: (state,  { payload }) => updateTask(state, payload),
        [reorderTasks]: (state,  { payload }) => reorder(state, payload),
    }, {}
);

export const allIds = handleActions(
    {
        [loadUserData]: (state, { payload }) => addTaskIds(state, payload),
        [addTask]: (state, { payload }) => addTaskIds(state, payload),
    }, []
);

export const selectedId = handleActions(
    {
        [selectTask]: (state, { payload }) => updateSelectedTaskId(state, payload),
    }, null
)

const reorder = (state, payload) => {
    const { beforeOldIndex, newIndex, beforeNewIndex } = payload;
    if (beforeOldIndex) {
        return {
            ...state,
            [beforeOldIndex._id]: { ...state[beforeOldIndex._id], next: beforeOldIndex.next },
            [newIndex._id]: { ...state[newIndex._id], next: newIndex.next },
            [beforeNewIndex._id]: { ...state[beforeNewIndex._id], next: beforeNewIndex.next }
        }
    } else {
        console.log("first item moved", {
            [newIndex._id]: { ...state[newIndex._id], next: newIndex.next },
            [beforeNewIndex._id]: { ...state[beforeNewIndex._id], next: beforeNewIndex.next }
        })
        return {
            ...state,
            [newIndex._id]: { ...state[newIndex._id], next: newIndex.next },
            [beforeNewIndex._id]: { ...state[beforeNewIndex._id], next: beforeNewIndex.next }
        }
    }
}

const updateSelectedTaskId = (state, { result: taskId }) => {
    return taskId;
}

const insertTask = (state, { result: taskId, entities }) => {
    const { tasks } = entities;
    const task = tasks[taskId];
    const { prev } = task;
    if (prev) {
        const prevTask = { ...state[prev] };
        prevTask.next = taskId;
        console.log("updated", { ...state, [prev]: prevTask, [taskId]: task })
        return { ...state, [prev]: prevTask, [taskId]: task };
    }
    return { ...state, [taskId]: task };
}

const addTasks = (state, { entities }) => {
    const { tasks } = entities;
    return { ...state, ...tasks };
}

const updateTask = (state, { entities, result: taskId }) => {
    const { tasks } = entities;
    const task = tasks[taskId];
    return { ...state, [taskId]: task };
}

const removeTask = (state, { result: taskId }) => {
    const { [taskId]: removedTask, ...rest } = state;
    return rest;
}

const removeTaskId = (state, { result: taskId }) => {
    return state.filter(id => id !== taskId);
}

const addTaskIds = (state, { entities }) => {
    const { tasks } = entities;
    if (tasks) return [ ...state, ...Object.keys(tasks) ];
    return state;
}

export default combineReducers({
    byId,
    allIds,
    selectedId
});