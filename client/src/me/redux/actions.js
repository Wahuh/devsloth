import {createAction} from 'redux-actions';
import {
  GET_USER_REQUEST,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  ADD_USER,
} from './types';

export const getUserRequest = createAction(GET_USER_REQUEST);
export const getUserSuccess = createAction(GET_USER_SUCCESS);
export const getUserFailure = createAction(GET_USER_FAILURE);
export const addUser = createAction(ADD_USER);
