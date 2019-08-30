import {all} from 'redux-saga/effects';
import signupSaga from '../../signup/redux/sagas';

function* rootSaga() {
  yield all([signupSaga()]);
}

export default rootSaga;
