import {all, call, take, put} from 'redux-saga/effects';
import {SIGNUP_REQUEST} from './types';
import authApi from '../../api/auth.api';
import {signupSuccess, signupFailure} from './actions';

function* handleSignup(payload) {
  try {
    const {data} = yield call(authApi.signup, payload);
    yield put(signupSuccess(data));
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
