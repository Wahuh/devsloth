import { all } from "redux-saga/effects";
import { watchUpdateUserRequest } from "./userUpdateSagas";

export default function* userSaga() {
    yield all([
        watchUpdateUserRequest(),
    ]);
}

