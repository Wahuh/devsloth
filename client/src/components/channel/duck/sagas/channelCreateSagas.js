import channelApi from "../../../../api/channelApi";
import { call, takeEvery, put } from "redux-saga/effects";
import { CHANNEL_CREATE_REQUEST } from "../types";
import { createChannelSuccess, createChannelFailure } from "../actions";
import { MODAL_CHANNEL_CREATE } from "../../../ui/constants";
import { addUiFetching, removeUiFetching, removeUiPortal } from "../../../ui/duck/actions";
import { toastify } from "../../../ui/duck/sagas";

export function* watchChannelCreateRequest() {
    yield takeEvery(CHANNEL_CREATE_REQUEST, handleChannelCreate);
}

function* handleChannelCreate({ payload }) {
    yield put(addUiFetching("channelCreate"));
    try {
        const { data } = yield call(channelApi.createChannel, payload);
        yield put(createChannelSuccess(data));
        yield put(removeUiPortal(MODAL_CHANNEL_CREATE));
        yield call(toastify, { 
            message: "Channel created successfully!",
            duration: 3000,
            status: "success"
        });
    } catch (error) {
        yield put(createChannelFailure(error));
        yield call(toastify, { 
            message: "Failed to create channel. Please try again",
            duration: 3000,
            status: "error"
        });
    } finally {
        yield put(removeUiFetching("channelCreate"));
    }
}