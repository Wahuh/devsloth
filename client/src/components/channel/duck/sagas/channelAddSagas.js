import { put, takeEvery } from "redux-saga/effects";
import { CHANNEL_CREATE_SUCCESS } from "../types";
import { addChannel, selectChannel } from "../actions";

export function* watchAddChannel() {
    yield takeEvery([
        CHANNEL_CREATE_SUCCESS,
    ], handleAddChannel);
}

function* handleAddChannel({ payload }) {
    const { result: channelId, entities } = payload;
    const { group: groupId } = entities.channels[channelId];
    yield put(addChannel(payload));
    yield put(selectChannel({ [groupId]: channelId }));
}