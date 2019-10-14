import {all, call, take, takeEvery, put} from 'redux-saga/effects';
import api from '../../api';

function* handleRequest({meta, payload, type}) {
  console.log(type, payload, meta);
  const {apiFunction} = meta;
  const regex = /REQUEST.*$/;
  try {
    const data = yield call(api[apiFunction], payload);
    console.log(type.replace(regex, 'SUCCESS'), data);
    yield put({type: type.replace(regex, 'SUCCESS'), payload: data});
  } catch (err) {
    yield put({
      type: type.replace(regex, 'FAILURE'),
      payload: err,
      error: true,
    });
  }
}

export function* watchRequest() {
  while (true) {
    const action = yield take(({type}) => /_REQUEST$/.test(type));
    yield call(handleRequest, action);
  }
}

export function* watchEveryRequest() {
  yield takeEvery(({type}) => /_REQUEST_EVERY$/.test(type), handleRequest);
}

export default function* commonSaga() {
  yield all([watchRequest(), watchEveryRequest()]);
}
// export function* watchLatestRequest() {

// }
