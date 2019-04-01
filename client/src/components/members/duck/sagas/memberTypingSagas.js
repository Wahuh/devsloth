import { throttle, takeLatest, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import { MEMBER_TYPING_START, MEMBER_TYPING_STOP } from "../types";
import { emitSocketAction } from "../../../socket/duck/actions";

export function* watchMemberTypingStart() {
    yield throttle(400, MEMBER_TYPING_START, handleMemberTypingStart);
}

function* handleMemberTypingStart({ payload }) {
    console.log("typing", payload);
    yield put(emitSocketAction(payload, "channel member typing start"));
}

export function* watchMemberTypingStop() {
    yield takeLatest(MEMBER_TYPING_START, handleMemberTypingStop)
}

function* handleMemberTypingStop(action) {
    const { payload } = action;
    yield delay(400);
    yield put(emitSocketAction(payload, "channel member typing stop"));
}