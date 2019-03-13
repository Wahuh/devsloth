import { all } from "redux-saga/effects";
import { watchSendMessage } from "./sendMessageSagas";
import { watchStopTyping, watchTyping } from "./typingSagas";

export default function* messagesSaga() {
    yield all([
        watchSendMessage(),
        watchTyping(),
        watchStopTyping(),
    ]);
}