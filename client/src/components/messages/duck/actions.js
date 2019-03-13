import { createAction } from "redux-actions";
import { normalize } from "normalizr";
import { MESSAGE_SEND, MESSAGE_RECEIVE, MESSAGE_TYPING_START_RECEIVE, MESSAGE_TYPING_STOP_RECEIVE, MESSAGE_TYPING_START_SEND, MESSAGE_TYPING_STOP_SEND } from "./types";
import schemas from "../../../schemas";

const payloadCreator = data => normalize(data, schemas.message);

export const sendMessage = createAction(MESSAGE_SEND);
export const receiveMessage = createAction(MESSAGE_RECEIVE, payloadCreator);
export const sendStartTypingMessage = createAction(MESSAGE_TYPING_START_SEND);
export const sendStopTypingMessage = createAction(MESSAGE_TYPING_STOP_SEND);
export const receiveMessageTypingStart = createAction(MESSAGE_TYPING_START_RECEIVE, data => normalize(data, schemas.member));
export const receiveMessageTypingStop = createAction(MESSAGE_TYPING_STOP_RECEIVE, data => normalize(data, schemas.member));