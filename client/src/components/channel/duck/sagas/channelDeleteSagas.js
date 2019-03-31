import channelApi from "../../../../api/channelApi";
import { call, takeEvery, put } from "redux-saga/effects";
import { addUiFetching, removeUiFetching, removeUiPortal } from "../../../ui/duck/actions";
import { CHANNEL_DELETE_REQUEST } from "../types";
import { deleteChannelFailure } from "../actions";
import { MODAL_CHANNEL_SETTINGS } from "../../../ui/constants";

export function* watchChannelDeleteRequest() {
    yield takeEvery(CHANNEL_DELETE_REQUEST, handleChannelDelete);
}

function* handleChannelDelete({ payload }) {
    yield put(addUiFetching("channelDelete"));
    try {
        yield call(channelApi.deleteChannel, payload);
        yield put(removeUiPortal(MODAL_CHANNEL_SETTINGS));
    } catch (error) {
        yield put(deleteChannelFailure(error));
    } finally {
        yield put(removeUiFetching("channelDelete"));
    }
}