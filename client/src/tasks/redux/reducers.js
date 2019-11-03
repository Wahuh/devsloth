import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {CREATE_TASK_SUCCESS, GET_TASKS_SUCCESS, UPDATE_TASK} from './types';

const addTasks = (state, action) => {
  const {tasks} = action.payload.entities;
  return {...state, ...tasks};
};

const addTaskIds = (state, action) => {
  const {result} = action.payload;
  const taskIds = Array.isArray(result)
    ? [...state, ...result]
    : [...state, result];
  return [...new Set(taskIds)];
};

const updateTask = (state, action) => {
  const {result: task_id, entities} = action.payload;
  return {...state, [task_id]: {...entities.tasks[task_id]}};
};

const byId = handleActions(
  {
    [CREATE_TASK_SUCCESS]: addTasks,
    [GET_TASKS_SUCCESS]: addTasks,
    [UPDATE_TASK]: updateTask,
  },
  {},
);
const allIds = handleActions(
  {
    [CREATE_TASK_SUCCESS]: addTaskIds,
    [GET_TASKS_SUCCESS]: addTaskIds,
  },
  [],
);

export default combineReducers({byId, allIds});
