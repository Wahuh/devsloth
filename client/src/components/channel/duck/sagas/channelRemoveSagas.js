import { put, takeEvery } from "redux-saga/effects";
import { CHANNEL_DELETE_SUCCESS } from "../types";
import { removeChannel } from "../actions";

export function* watchRemoveChannel() {
    yield takeEvery([
        CHANNEL_DELETE_SUCCESS,
    ], handleRemoveChannel);
}

function* handleRemoveChannel({ payload }) {
    yield put(removeChannel(payload));
}