import { emitSocketAction } from "./actions";
import { SOCKET_ACTION_EMIT } from "./types";

const payload = {
    text: "anyMessageText",
    channelId: "anyChannelId",
    memberId: "anyMemberId",
}

const expectedAction = {
    type: SOCKET_ACTION_EMIT,
    payload: { ...payload, event: "message" }
}

describe("Socket Actions", () => {
    describe("emitSocketAction", () => {
        it("should return a payload with an event property", () => {
            expect(emitSocketAction(payload, "message")).toEqual(expectedAction)
        });
    })
})

