import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
    sendChatMessageSuccess, 
    receiveChatMessageSuccess,
    receiveChatTypingSuccess
} from "./actions";
import { mergeObject, mergeArray } from "../../../utils";

const byId = handleActions(
    {
        [sendChatMessageSuccess]: (state, { payload }) => addMessage(state, payload),
        [receiveChatMessageSuccess]: (state, { payload }) => addMessage(state, payload),
    }, {}
);

const allIds = handleActions(
    {
        [sendChatMessageSuccess]: (state, { payload }) => addMessageId(state, payload),
        [receiveChatMessageSuccess]: (state, { payload }) => addMessageId(state, payload),
    }, []
);

const isTyping = handleActions(
    {
        [receiveChatTypingSuccess]: (state, { payload }) => state.indexOf(payload) > -1 ? state : [ ...state, payload ]
    }, []
);

const addMessage = (state, { entities }) => {
    const { messages } = entities;
    console.log("merge", mergeObject(state, messages));
    return mergeObject(state, messages);
}

const addMessageId = (state, { result }) => {
    return mergeArray(state, result);
}

export default combineReducers({
    byId,
    allIds,
    isTyping
});