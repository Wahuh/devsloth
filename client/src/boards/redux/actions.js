import {createAction} from 'redux-actions';
import {
  GET_USER_BOARDS_REQUEST,
  GET_BOARD_REQUEST,
  CREATE_USER_BOARD_REQUEST,
} from './types';
import makeRequestMetaCreator from '../../common/redux/makeRequestMetaCreator';

export const getBoardRequest = createAction(
  GET_BOARD_REQUEST,
  null,
  makeRequestMetaCreator('getBoard'),
);

export const getUserBoardsRequest = createAction(
  GET_USER_BOARDS_REQUEST,
  null,
  makeRequestMetaCreator('getUserBoardsRequest'),
);

export const createUserBoardRequest = createAction(
  CREATE_USER_BOARD_REQUEST,
  null,
  makeRequestMetaCreator('postUserBoard'),
);
