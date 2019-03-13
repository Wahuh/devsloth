import { take, put, call, apply, throttle, takeLatest } from "redux-saga/effects";
import { CHAT_MESSAGE_SEND_REQUEST, CHAT_TYPING_REQUEST, CHAT_MESSAGE_RECEIVE, CHAT_TYPING_START } from "./types";
import { sendChatMessage, startChatTyping, stopChatTyping, receiveChatMessage } from "./actions";
import { delay } from "redux-saga";
import { MEMBER_JOIN } from "../../members/duck/types";

export function* watchSendMessage() {
    while(true) {
        const { payload } = yield take(CHAT_MESSAGE_SEND_REQUEST);
        yield put(sendChatMessage(payload));
    }
}

export function* watchMemberJoin() {
    while(true) {
        const { payload } = yield take(MEMBER_JOIN);
        const { entities, result: memberId } = payload;
        const { members } = entities;
        const member = members[memberId];
        const { channels: channelIds, alias } = member;
        const message = {
            text: `${alias} has joined the group`,
            channelId: channelIds[0],
            memberId,
            notification: true,
            timestamp: Date.now()
        };
        yield put(receiveChatMessage(message));
    }
}

export function* watchTyping() {
    yield throttle(500, CHAT_TYPING_REQUEST, handleTyping);
}

export function* watchStopTyping() {
    yield takeLatest(CHAT_TYPING_START, handleStopTyping);
}

function* handleTyping(action) {
    const { payload } = action; 
    yield put(startChatTyping(payload));
}

function* handleStopTyping(action) {
    yield delay(500)
    const { payload } = action;
    yield put(stopChatTyping(payload));
}

