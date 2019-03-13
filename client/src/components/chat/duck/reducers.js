import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
    sendChatMessageSuccess, 
    receiveChatMessage
} from "./actions";
import { mergeObject, mergeArray } from "../../../utils";

const byId = handleActions(
    {
        [sendChatMessageSuccess]: (state, { payload }) => addMessage(state, payload),
        [receiveChatMessage]: (state, { payload }) => addMessage(state, payload),
    }, {}
);

const allIds = handleActions(
    {
        [sendChatMessageSuccess]: (state, { payload }) => addMessageId(state, payload),
        [receiveChatMessage]: (state, { payload }) => addMessageId(state, payload),
    }, []
);

const addMessage = (state, { entities }) => {
    const { messages } = entities;
    return mergeObject(state, messages);
}

const addMessageId = (state, { result }) => {
    return mergeArray(state, result);
}

export default combineReducers({
    byId,
    allIds,
});