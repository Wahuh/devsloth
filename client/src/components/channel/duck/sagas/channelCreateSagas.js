import channelApi from "../../../../api/channelApi";
import { call, takeEvery, put } from "redux-saga/effects";
import { CHANNEL_CREATE_REQUEST } from "../types";
import { createChannelSuccess, createChannelFailure } from "../actions";
import { MODAL_CHANNEL_CREATE } from "../../../ui/constants";
import { removeUiModal, addUiFetching, removeUiFetching } from "../../../ui/duck/actions";

export function* watchCreateChannelRequest() {
    yield takeEvery(CHANNEL_CREATE_REQUEST, handleCreateChannel);
}

function* handleCreateChannel(payload) {
    yield put(addUiFetching("channelCreate"));
    try {
        const { data } = yield call(channelApi.createChannel, payload);
        yield put(createChannelSuccess(data));
        yield put(removeUiModal(MODAL_CHANNEL_CREATE));
        yield put(removeUiFetching("channelCreate"));
    } catch (error) {
        yield put(createChannelFailure(error));
        yield put(removeUiFetching("channelCreate"));
    }
}