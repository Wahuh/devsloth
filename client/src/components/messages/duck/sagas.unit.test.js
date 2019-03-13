import { testSaga } from "redux-saga-test-plan";
import { watchSendMessage, handleEmitMessage } from "./sagas";
import { MESSAGE_SEND } from "./types";

describe("Messages Sagas", () => {
    describe("watchSendMessage", () => {
        it("waits for the sendMessage action", () => {
            testSaga(watchSendMessage)
            .next()
            .takeEveryEffect(MESSAGE_SEND, handleEmitMessage)
            .finish()
            .isDone()
        })
    });
})