import {all, call, take, put} from 'redux-saga/effects';
import {LOGIN_REQUEST} from './types';
import authApi from '../../api/auth.api';
import {loginSuccess, loginFailure} from './actions';

function* handleLoginRequest(payload) {
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
    const {payload} = yield take(LOGIN_REQUEST);
    yield call(handleLoginRequest, payload);
  }
}

export default function* loginSaga() {
  yield all([watchLoginRequest]);
}
