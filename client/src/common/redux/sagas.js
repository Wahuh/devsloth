import {all, call, take, takeEvery, put} from 'redux-saga/effects';
import api from '../../api';
import {startFetching, stopFetching} from '../../ui/redux/actions';

function* handleRequest({meta, payload, type}) {
  console.log(type, payload, meta);
  const {apiFunction} = meta;
  const regex = /REQUEST.*$/;
  try {
    const data = yield call(api[apiFunction], payload);
    console.log(type.replace(regex, 'SUCCESS'), data);
    yield put({type: type.replace(regex, 'SUCCESS'), payload: data, meta});
  } catch (err) {
    console.log(err);
    yield put({
      type: type.replace(regex, 'FAILURE'),
      payload: err,
      error: true,
      meta,
    });
  }
}

function* handleStartFetching({meta}) {
  const {apiFunction} = meta;
  yield put(startFetching(apiFunction));
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

export function* watchStartFetching() {
  yield takeEvery(
    ({type}) => /_REQUEST$|_REQUEST_EVERY/.test(type),
    handleStartFetching,
  );
}

function* handleStopFetching({meta}) {
  const {apiFunction} = meta;
  yield put(stopFetching(apiFunction));
}

export function* watchStopFetching() {
  yield takeEvery(
    ({type}) => /_SUCCESS|_FAILURE$/.test(type),
    handleStopFetching,
  );
}

export default function* commonSaga() {
  yield all([
    watchRequest(),
    watchEveryRequest(),
    watchStartFetching(),
    watchStopFetching(),
  ]);
}

// export function* watchLatestRequest() {

// }
