import {all, call, take, put} from 'redux-saga/effects';
import meApi from '../../api/me.api';
import {getUserSuccess, getUserFailure, addUser} from './actions';
import {GET_USER_REQUEST} from './types';
import {JWT_LOGIN_SUCESS} from '../../login/redux/types';

function* handleUserRequest() {
  try {
    const user = yield call(meApi.getUser);
    yield put(getUserSuccess(user));
  } catch (err) {
    yield put(getUserFailure(err));
  }
}

function* watchGetUserRequest() {
  while (true) {
    yield take(GET_USER_REQUEST);
    yield call(handleUserRequest);
  }
}

function* handleAddUser({payload}) {
  yield put(addUser(payload));
}

function* watchUserAuthSuccess() {
  while (true) {
    const action = yield take([JWT_LOGIN_SUCESS]);
    yield call(handleAddUser, action);
  }
}

export default function* meSaga() {
  yield all([]);
}
