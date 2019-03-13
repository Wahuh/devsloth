import channelApi from "../../../../api/channelApi";
import { call, take, put } from "redux-saga/effects";
import { CHANNEL_UPDATE_REQUEST } from "../types";
import { updateChannelSuccess, updateChannelFailure } from "../actions";

export function* watchUpdateChannelRequest() {
    while(true) {
        const { payload } = yield take(CHANNEL_UPDATE_REQUEST);
        yield call(handleUpdateChannel, payload);
    }
}

function* handleUpdateChannel(payload) {
    try {
        yield call(updateChannel, payload);
        // yield put(updateChannelSuccess(data));
    } catch (error) {
        yield put(updateChannelFailure(error));
    }
}

function* updateChannel(payload) {
    try {
        const response = yield call(channelApi.updateChannel, payload);
        return response;
    } catch (error) {
        throw(error);
    }
}