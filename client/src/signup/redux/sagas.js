import {all, call, take, put} from 'redux-saga/effects';
import {SIGNUP_REQUEST} from './types';
import authApi from '../../api/auth.api';
import {signupSuccess, signupFailure} from './actions';

function* handleSignup(payload) {
  try {
    const {headers} = yield call(authApi.signup, payload);
    const jwt = yield call(authApi.extractJwt, headers);
    yield call(authApi.saveJwt, jwt);
    yield call(authApi.setAuthorizationHeader, jwt);
    yield put(signupSuccess());
  } catch (err) {
    yield put(signupFailure(err));
  }
}

export function* watchSignupRequest() {
  while (true) {
    const {payload} = yield take(SIGNUP_REQUEST);
    yield call(handleSignup, payload);
  }
}

export default function* signupSaga() {
  yield all([watchSignupRequest]);
}
