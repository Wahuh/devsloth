import SagaTester from "redux-saga-tester"

describe("Task Move Sagas", () => {
    describe("watchTaskMoveRequest", () => {
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