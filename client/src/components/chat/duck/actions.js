import { createAction } from "redux-actions";
import { normalize } from "normalizr";
import schemas from "../../../schemas";
import {
    CHAT_MESSAGE_RECEIVE,
    CHAT_MESSAGE_SEND_REQUEST,
    CHAT_MESSAGE_SEND_SUCCESS,
    CHAT_MESSAGE_SEND_FAILURE,
    CHAT_TYPING_REQUEST,
    CHAT_MESSAGE_SEND,
    CHAT_TYPING_START,
    CHAT_TYPING_STOP,
    CHAT_TYPING_START_RECEIVE,
    CHAT_TYPING_STOP_RECEIVE
} from "./types";

const payloadCreator = data => normalize(data, schemas.message);
const metaCreator = () => ({ errorType: "chat" });
const event = event => () => ({ event });

export const sendChatMessageRequest = createAction(CHAT_MESSAGE_SEND_REQUEST);
export const sendChatMessageSuccess = createAction(CHAT_MESSAGE_SEND_SUCCESS);
export const sendChatMessageFailure = createAction(CHAT_MESSAGE_SEND_FAILURE, null, metaCreator);

export const sendChatMessage = createAction(CHAT_MESSAGE_SEND, null, event("chat"));
export const receiveChatMessage = createAction(CHAT_MESSAGE_RECEIVE, payloadCreator);

export const requestChatTyping = createAction(CHAT_TYPING_REQUEST, _id => ({ _id }));
export const startChatTyping = createAction(CHAT_TYPING_START, null, event("typingStart"));
export const stopChatTyping = createAction(CHAT_TYPING_STOP, null, event("typingStop"));
export const receiveStartChatTyping = createAction(CHAT_TYPING_START_RECEIVE, data => normalize(data, schemas.member));
export const receiveStopChatTyping = createAction(CHAT_TYPING_STOP_RECEIVE, data => normalize(data, schemas.member));