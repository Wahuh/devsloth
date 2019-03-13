import { all, take, put } from "redux-saga/effects";
import shortid from "shortid";
import { addUiToast, createUiToast } from "./actions";
import { UI_TOAST_CREATE } from "./types";

export function* toastify(toast) {
    yield put(createUiToast({ ...toast, _id: shortid.generate() }));
}

export function* watchToasts() {
    while(true) {
        const { payload } = yield take(UI_TOAST_CREATE);
        yield put(addUiToast(payload));
    }
}

export default function* uiSaga() {
    yield all([
        watchToasts(),
    ]);
}