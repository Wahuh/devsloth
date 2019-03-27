import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { 
    selectTask,
    addTask,
    editTask,
    reorderTasks,
    removeTask
} from "./actions";
import { removeChannel } from "../../channel/duck/actions";
import { loadUserData } from "../../user/duck/actions";
import { removeGroup } from "../../group/duck/actions";

export const byId = handleActions(
    {
        [loadUserData]: (state,  { payload }) => addTasks(state, payload),
        [addTask]: (state, { payload }) => insertTask(state, payload),
        [editTask]: (state, { payload }) => updateTask(state, payload),
        [removeChannel]: (state, { payload }) => removeTasksByChannel(state, payload),
        [reorderTasks]: (state,  { payload }) => reorder(state, payload),
        [removeGroup]: (state,  { payload }) => removeTasksByChannels(state, payload),
        [removeTask]: (state,  { payload }) => deleteTask(state, payload),
    }, {}
);

export const selectedId = handleActions(
    {
        [removeTask]: (state,  { payload }) => state === payload.result && null,
        [selectTask]: (state, { payload }) => updateSelectedTaskId(state, payload),
    }, null
)

const deleteTask = (state, { entities, result: taskId }) => {
    const { tasks } = entities;
    const task = tasks[taskId];
    const { prev, next, isHead } = task;
    const updatedTasks = {};
    let updatedPrev;
    let updatedNext;
    //update head
    if (prev) {
        const prevTask = state[prev];
        updatedTasks[prev] = { ...prevTask, next: next || null };
    }

    if (isHead && next) {
        //the next task becomes head
        const nextTask = state[next];
        updatedTasks[next] = { ...nextTask, isHead: true };
    }

    console.log("tasky", updatedTasks, taskId, next);
    const { [taskId]: removedTask, ...rest } = state;
    console.log({ ...updatedTasks, ...rest });
    return { ...rest, ...updatedTasks };
}

const reorder = (state, { entities, result: taskIds }) => {
    const { tasks } = entities;
    const reorderedTasks = taskIds.reduce(
        (obj, taskId) => ({ 
            ...obj, 
            [taskId]: { ...state[taskId], ...tasks[taskId] }
        }), {}
    )
    console.log("reordered", reorderedTasks);
    return { ...state, ...reorderedTasks };
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
        console.log("update", prevTask.next, prev);
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



const removeTasksByChannel = (state, { result: channelId }) => {
    const taskIds = Object.keys(state);
    if (taskIds) {
        return taskIds
        .filter(id => state[id].channel === channelId)
        .reduce((obj, key) => {
            const { [key]: dummy, ...rest } = obj;
            return rest;
        }, state)
    }
    return state;
}

const removeTasksByChannels = (state, { channelIds }) => {
    const taskIds = Object.keys(state);
    if (channelIds && taskIds) {
        return taskIds
        .filter(id => channelIds.includes(state[id].channel))
        .reduce((obj, key) => {
            const { [key]: dummy, ...rest } = obj;
            return rest;
        }, state)
    }
    return state;
}

export default combineReducers({
    byId,
    selectedId
});