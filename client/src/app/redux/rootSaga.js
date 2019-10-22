import {all} from 'redux-saga/effects';
// import meSaga from '../../me/redux/sagas';
import commonSaga from '../../common/redux/sagas';
import tasksSaga from '../../tasks/redux/sagas';

function* rootSaga() {
  yield all([commonSaga(), tasksSaga()]);
}

export default rootSaga;
