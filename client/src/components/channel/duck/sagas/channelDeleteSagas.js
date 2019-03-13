import channelApi from "../../../../api/channelApi";
import { call, take, put } from "redux-saga/effects";
import { removeUiModal } from "../../../ui/duck/actions";
import { CHANNEL_DELETE_REQUEST, CHANNEL_DELETE_SUCCESS } from "../types";
import { deleteChannelSuccess, deleteChannelFailure, deleteChannel } from "../actions";
import { MODAL_CHANNEL_SETTINGS } from "../../../ui/constants";

export function* watchDeleteChannelRequest() {
    while(true) {
        const { payload } = yield take(CHANNEL_DELETE_REQUEST);
        yield call(handleDeleteChannel, payload);
    }
}

function* handleDeleteChannel(payload) {
    try {
        const { data } = yield call(channelApi.deleteChannel, payload);
        yield put(deleteChannelSuccess(data))
        yield put(removeUiModal(MODAL_CHANNEL_SETTINGS));
    } catch (error) {
        yield put(deleteChannelFailure(error));
    }
}

export function* watchDeleteChannelSuccess() {
    //delete all tasks and messages
    const { payload } = yield take(CHANNEL_DELETE_SUCCESS);
    console.log("CHAN", payload);
    // yield put(deleteChannel(payload));
}