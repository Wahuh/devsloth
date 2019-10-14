import {all, call, take, put} from 'redux-saga/effects';
import {LOGIN_REQUEST, JWT_LOGIN_REQUEST} from './types';
import authApi from '../../api/auth.api';
import {
  loginSuccess,
  loginFailure,
  jwtLoginSuccess,
  jwtLoginFailure,
} from './actions';
import {getUser} from '../../api/me.api';
import {addUser} from '../../me/redux/actions';

function* handleLoginRequest({payload}) {
  try {
    const {headers} = yield call(authApi.login, payload);
    const jwt = yield call(authApi.extractJwt, headers);
    yield call(authApi.saveJwt, jwt);
    yield call(authApi.setAuthorizationHeader, jwt);
    yield put(loginSuccess());
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* watchLoginRequest() {
  while (true) {
    const action = yield take(LOGIN_REQUEST);
    yield call(handleLoginRequest, action);
  }
}

function* handleJwtLoginRequest({payload: jwt}) {
  try {
    yield call(authApi.setAuthorizationHeader, jwt);
    const user = yield call(getUser);
    yield put(jwtLoginSuccess(user));
  } catch (err) {
    yield put(jwtLoginFailure(err));
  }
}

export function* watchJwtLoginRequest() {
  while (true) {
    const action = yield take(JWT_LOGIN_REQUEST);
    yield call(handleJwtLoginRequest, action);
  }
}

export default function* loginSaga() {
  // yield all([watchLoginRequest(), watchJwtLoginRequest()]);
}
