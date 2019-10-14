import {createAction} from 'redux-actions';
import {SHOW_MODAL, HIDE_MODAL, START_FETCHING, STOP_FETCHING} from './types';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const startFetching = createAction(START_FETCHING);
export const stopFetching = createAction(STOP_FETCHING);
