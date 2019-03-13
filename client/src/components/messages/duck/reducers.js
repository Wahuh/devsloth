import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { receiveMessage } from "./actions";

export const byId = handleActions(
    {
        [receiveMessage]: (state, { payload }) => addMessage(state, payload),
    }, {}
);

export const allIds = handleActions(
    {
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

export default combineReducers({
    byId,
    allIds,
});