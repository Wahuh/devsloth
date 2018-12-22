import { take, put, call, apply, fork } from "redux-saga/effects";
import socketApi from "../../../api/socketApi";
import { CHAT_MESSAGE_SEND_REQUEST, CHAT_TYPING_REQUEST } from "./types";
import { CHANNEL_SELECT } from "../../channel/duck/types";
import { receiveChatMessageSuccess } from "./actions";

import { normalize } from "normalizr";
import schemas from "../../../schemas";

export function* watchConnection() {
    const socket = yield call(socketApi.connect);
    const socketChannel = yield call(socketApi.createSocketChannel, socket);
    yield fork(watchChannelSelect, socket);
    yield fork(watchSendMessageRequest, socket);
    yield fork(watchTyping, socket);
    let _id = 0;
    while(true) {
        const action = yield take(socketChannel);
        yield put(action);
        // console.log("act", action)
        // payload._id = _id;
        // console.log(payload);
        // const normalized = yield call(normalize, payload, schemas.message);
        // console.log("normalized", normalized);
        // yield put(receiveChatMessageSuccess(normalized));
        // _id += 1;
    }
}

function* watchChannelSelect(socket) {
    while(true) {
        const { payload } = yield take(CHANNEL_SELECT);
        console.log("socketpayload", payload);
        yield apply(socket, socket.emit, ["channel", payload]);
    }
}

function* watchSendMessageRequest(socket) {
    while(true) {
        const { payload } = yield take(CHAT_MESSAGE_SEND_REQUEST);
        console.log("chatpayload", payload);
        yield apply(socket, socket.emit, ["chat", payload]);
    }
}

function* watchTyping(socket) {
    while(true) {
        const { payload } = yield take(CHAT_TYPING_REQUEST);
        yield apply(socket, socket.emit, ["typing", payload]);
    }
}