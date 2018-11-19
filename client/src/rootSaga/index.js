import { all } from "redux-saga/effects";
import { createTask } from "../components/tasks/duck/sagas";
import { register } from "../components/auth/duck/sagas";
import { loadInitialUserData } from "../components/user/duck/sagas";

export default function* rootSaga() {
    yield all([
        loadInitialUserData(),
        register(),
        createTask(),
    ]);
}