import {all} from 'redux-saga/effects';
// import boardsSaga from '../../boards/redux/sagas';
// import loginSaga from '../../login/redux/sagas';
// import meSaga from '../../me/redux/sagas';
import signupSaga from '../../signup/redux/sagas';
import commonSaga from '../../common/redux/sagas';

function* rootSaga() {
  yield all([commonSaga(), signupSaga()]);
}

export default rootSaga;
