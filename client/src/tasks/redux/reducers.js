import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {CREATE_TASK_SUCCESS, GET_TASKS_SUCCESS} from './types';

const addTasks = (state, action) => {
  const {tasks} = action.payload.entities;
  return {...state, ...tasks};
};

const addTaskIds = (state, action) => {
  const {result} = action.payload;

  return Array.isArray(result) ? [...state, ...result] : [...state, result];
};

const byId = handleActions(
  {
    [CREATE_TASK_SUCCESS]: addTasks,
    [GET_TASKS_SUCCESS]: addTasks,
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
