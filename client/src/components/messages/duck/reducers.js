import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { receiveMessage } from "./actions";
import { loadUserData } from "../../user/duck/actions";

export const byId = handleActions(
    {
        [loadUserData]: (state, { payload }) => addMessage(state, payload),
        [receiveMessage]: (state, { payload }) => addMessage(state, payload),
    }, {}
);

export const allIds = handleActions(
    {
        [loadUserData]: (state, { payload }) => addMessageIds(state, payload),
        [receiveMessage]: (state, { payload }) => addMessageId(state, payload),
    }, []
);

const addMessage = (state, { entities }) => {
    const { messages } = entities;
    return { ...state, ...messages };
}

const addMessageId = (state, { result: messageId }) => {
    return [ ...state, messageId ];
}

const addMessageIds = (state, { entities }) => {
    const { messages } = entities;
    const messageIds = Object.keys(messages);
    return [ ...state, ...messageIds ];
}


export default combineReducers({
    byId,
    allIds,
});