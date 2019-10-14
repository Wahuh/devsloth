import {createAction} from 'redux-actions';
import {SHOW_MODAL, HIDE_MODAL} from './types';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
