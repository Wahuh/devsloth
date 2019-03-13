import { byId, allIds } from "./reducers";
import { receiveMessage } from "./actions";
const message = {
    _id: "anyMessageId",
    text: "anyMessageText",
    channelId: "anyChannelId",
    memberId: "anyMemberId",
}
const receiveMessageAction = receiveMessage(message)

describe("Messages Reducers", () => {
    describe("byId (Messages)", () => {
        it("should return the initial state", () => {
            expect(byId(undefined, {})).toEqual({});
        });

        it("handles receiving a message", () => {
            expect(allIds({}, receiveMessage(message)))
            .toEqual(receiveMessageAction.payload.entities.messages);
        });
    });

    describe("allIds (Messages)", () => {
        it("should return the initial state", () => {
            expect(allIds(undefined, {})).toEqual([]);
        });

        it("handles receiving a message", () => {
            expect(allIds([], receiveMessage(message)))
            .toEqual(Object.keys(receiveMessageAction.payload.entities.messages));
        });
    });
});