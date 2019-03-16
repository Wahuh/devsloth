import { put, takeEvery } from "redux-saga/effects";
import { CHANNEL_DELETE_SUCCESS } from "../types";
import { removeChannel } from "../actions";

export function* watchChannelRemove() {
    yield takeEvery([
        CHANNEL_DELETE_SUCCESS,
    ], handleChannelRemove);
}

function* handleChannelRemove({ payload }) {
    yield put(removeChannel(payload));
}