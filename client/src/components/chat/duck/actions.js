import { createAction } from "redux-actions";
import * as types from "./types"

const metaCreator = () => ({ errorType: "chat" });

export const sendChatMessageRequest = createAction(types.CHAT_MESSAGE_SEND_REQUEST);
export const sendChatMessageSuccess = createAction(types.CHAT_MESSAGE_SEND_SUCCESS);
export const sendChatMessageFailure = createAction(types.CHAT_MESSAGE_SEND_FAILURE, null, metaCreator);

export const receiveChatMessageSuccess = createAction(types.CHAT_MESSAGE_RECEIVE_SUCCESS);

export const requestChatTyping = createAction(types.CHAT_TYPING_REQUEST);
export const receiveChatTypingSuccess = createAction(types.CHAT_TYPING_RECEIVE_SUCCESS);