import { sendMessage, receiveMessage } from "./actions";
import { MESSAGE_SEND, MESSAGE_RECEIVE } from "./types";
import { normalize } from "normalizr";
import schemas from "../../../schemas";


describe("Messages Actions", () => {
    describe("sendMessage", () => {
        const message = {
            text: "anyMessageText",
            channelId: "anyChannelId",
            memberId: "anyMemberId",
        }
        const expectedAction = {
            type: MESSAGE_SEND,
            payload: message,
        }
        it("should return a message object in payload", () => {
            expect(sendMessage(message)).toEqual(expectedAction)
        });
    });

    describe("receiveMessage", () => {
        it("should return a normalized message", () => {
            const message = {
                _id: "anyMessageId",
                text: "anyMessageText",
                channelId: "anyChannelId",
                memberId: "anyMemberId",
            }
            const expectedAction = {
                type: MESSAGE_RECEIVE,
                payload: normalize(message, schemas.message),
            }
            expect(receiveMessage(message)).toEqual(expectedAction)
        });
    });
});