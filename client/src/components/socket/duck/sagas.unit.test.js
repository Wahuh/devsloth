import { SocketIO, Server } from "mock-socket";
import { testSaga } from "redux-saga-test-plan";
import { watchConnection, generateConnectionData, handleConnection, watchEmitActions } from "./sagas";
import { USER_DATA_LOAD } from "../../user/duck/types";
import { SOCKET_ACTION_EMIT } from "./types";

const action = {
    type: USER_DATA_LOAD,
    payload: {}
}

const connectionData = {};

describe("Socket Sagas", () => {
    describe("watchConnection", () => {
        it("handles the socket.io connection", () => {
            testSaga(watchConnection)
            .next()
            .take(USER_DATA_LOAD)
            .next(action)
            .call(generateConnectionData, action.payload)
            .next(connectionData)
            .call(handleConnection, connectionData)
            .finish()
            .isDone()
        });
    });

    describe("watchEmitActions", () => {
        const action = { 
            type: SOCKET_ACTION_EMIT, 
            payload: {}, 
            meta: { event: "message" } 
        };
        it("takes an emit action and calls emit on the socket", () => {
            testSaga(watchEmitActions)
            .next()
            .take(SOCKET_ACTION_EMIT)
            .next(action)
            .apply()
        });
    })
})