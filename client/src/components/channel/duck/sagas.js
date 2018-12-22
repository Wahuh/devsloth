import channelApi from "../../../api/channelApi";
import { call, take, put } from "redux-saga/effects";
import { normalize } from "normalizr";
import schemas from "../../../schemas"
import * as types from "./types";
import { createChannelSuccess, createChannelFailure} from "./actions";
import { hideUiModal } from "../../ui/duck/actions";

export function* watchCreateChannelRequest() {
    while(true) {
        const { payload } = yield take(types.CHANNEL_CREATE_REQUEST);
        console.log(payload);
        yield call(handleCreateChannel, payload);
    }
}

export function* watchUpdateChannelRequest() {
    while(true) {
        const { payload } = yield take(types.CHANNEL_UPDATE_REQUEST);
        yield call(handleUpdateChannel, payload);
    }
}
export function* watchDeleteChannelRequest() {
    while(true) {
        const { payload } = yield take(types.CHANNEL_DELETE_REQUEST);
        yield call(handleDeleteChannel, payload);
    }
}

function* handleCreateChannel(payload) {
    try {
        const { data } = yield call(createChannel, payload);
        console.log(data, "channelpayload");
        const normalized = yield call(normalize, data, schemas.channel);
        console.log(normalized, "normalin");
        yield put(createChannelSuccess(normalized));
        yield put(hideUiModal());
    } catch (error) {
        yield put(createChannelFailure(error));
    }
}

function* handleUpdateChannel() {

}

function* handleDeleteChannel() {

}

function* createChannel(channel) {
    try {
        const response = yield call(channelApi.createChannel, channel);
        return response;
    } catch (error) {
        throw(error);
    }
}

function* updateChannel() {

}

function* deleteChannel() {
    
}