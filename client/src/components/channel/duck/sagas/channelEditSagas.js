import { put, takeEvery } from "redux-saga/effects";
import { CHANNEL_UPDATE_SUCCESS } from "../types";
import { editChannel } from "../actions";

export function* watchChannelEdit() {
    yield takeEvery(CHANNEL_UPDATE_SUCCESS, handleChannelEdit);
}

function* handleChannelEdit({ payload }) {
    yield put(editChannel(payload));
}
