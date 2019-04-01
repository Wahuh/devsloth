import { takeEvery, put } from "redux-saga/effects";
import { MESSAGE_SEND } from "../types";
import { emitSocketAction } from "../../../socket/duck/actions";

export function* watchSendMessage() {
    yield takeEvery(MESSAGE_SEND, handleEmitMessage);
}

export function* handleEmitMessage({ payload }) {
    yield put(emitSocketAction(payload, "channel message"));
}
