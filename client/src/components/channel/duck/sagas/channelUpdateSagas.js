import channelApi from "../../../../api/channelApi";
import { call, takeEvery, put } from "redux-saga/effects";
import { CHANNEL_UPDATE_REQUEST } from "../types";
import { updateChannelSuccess, updateChannelFailure } from "../actions";
import { toastify } from "../../../ui/duck/sagas";
import { addUiFetching, removeUiFetching } from "../../../ui/duck/actions";

export function* watchChannelUpdateRequest() {
    yield takeEvery(CHANNEL_UPDATE_REQUEST, handleChannelUpdate);
}

function* handleChannelUpdate({ payload }) {
    yield put(addUiFetching("channelUpdate"));
    try {
        yield call(channelApi.updateChannel, payload);
        yield call(toastify, {
            message: "Channel updated successfully!",
            duration: 3000,
            status: "success"
        });
        // yield put(updateChannelSuccess(data));
    } catch (error) {
        yield put(updateChannelFailure(error));
    } finally {
        yield put(removeUiFetching("channelUpdate"));
    }
}