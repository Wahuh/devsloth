import { put, throttle, takeLatest } from "redux-saga/effects";
import { MESSAGE_TYPING_START_SEND, MESSAGE_TYPING_STOP_SEND } from "../types";
import { emitSocketAction } from "../../../socket/duck/actions";

export function* watchTyping() {
    yield throttle(500, MESSAGE_TYPING_START_SEND, handleTyping);
}

export function* watchStopTyping() {
    yield takeLatest(MESSAGE_TYPING_STOP_SEND, handleStopTyping);
}

function* handleTyping(action) {
    const { payload } = action; 
    yield put(emitSocketAction(payload, "sendMessageTypingStart"));
}

function* handleStopTyping(action) {
    yield delay(500)
    const { payload } = action;
    yield put(emitSocketAction(payload, "sendMessageTypingStop"));
}