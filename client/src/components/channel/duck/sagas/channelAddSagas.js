import { put, takeEvery } from "redux-saga/effects";
import { CHANNEL_CREATE_SUCCESS } from "../types";
import { addChannel, selectChannel } from "../actions";

export function* watchChannelAdd() {
    yield takeEvery([
        CHANNEL_CREATE_SUCCESS,
    ], handleChannelAdd);
}

function* handleChannelAdd({ payload }) {
    const { result: channelId, entities } = payload;
    const { group: groupId } = entities.channels[channelId];
    yield put(addChannel(payload));
    yield put(selectChannel({ [groupId]: channelId }));
}