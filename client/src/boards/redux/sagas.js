import {all, call, put, takeEvery} from 'redux-saga/effects';
import {
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_SUCCESS,
  GET_USER_BOARDS_REQUEST,
  GET_USER_BOARDS_SUCCESS,
  GET_BOARD_REQUEST,
  GET_BOARD_SUCCESS,
} from './types';
import boardsApi from '../../api/boards.api';
import {
  createBoardSuccess,
  createBoardFailure,
  addBoards,
  getUserBoardsSuccess,
  getBoardSuccess,
  getBoardFailure,
} from './actions';
import {hideModal} from '../../ui/redux/actions';

function* handleCreateBoardRequest({payload}) {
  try {
    const board = yield call(boardsApi.postUserBoard, payload);
    yield put(createBoardSuccess(board));
    yield put(hideModal('board'));
  } catch (err) {
    yield put(createBoardFailure(err));
  }
}
function* handleGetBoardRequest({payload}) {
  try {
    const board = yield call(boardsApi.getBoard, payload);
    yield put(getBoardSuccess(board));
  } catch (err) {
    console.log(err);
    yield put(getBoardFailure(err));
  }
}

export function* watchGetBoardRequest() {
  yield takeEvery(GET_BOARD_REQUEST, handleGetBoardRequest);
}

export function* watchCreateBoardRequest() {
  yield takeEvery(CREATE_BOARD_REQUEST, handleCreateBoardRequest);
}

function* handleAddBoards({payload}) {
  console.log(payload);
  yield put(addBoards(payload));
}

export function* watchCreateBoardSuccess() {
  yield takeEvery(
    [CREATE_BOARD_SUCCESS, GET_USER_BOARDS_SUCCESS, GET_BOARD_SUCCESS],
    handleAddBoards,
  );
}
function* handleGetUserBoardsRequest() {
  const boards = yield call(boardsApi.getUserBoards);
  yield put(getUserBoardsSuccess(boards));
}

export function* watchGetUserBoardsRequest() {
  yield takeEvery(GET_USER_BOARDS_REQUEST, handleGetUserBoardsRequest);
}

export default function* boardsSaga() {
  yield all([
    watchCreateBoardRequest(),
    watchCreateBoardSuccess(),
    watchGetUserBoardsRequest(),
    watchGetBoardRequest(),
  ]);
}
