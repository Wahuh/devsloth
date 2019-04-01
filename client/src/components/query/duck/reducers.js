import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { startListQuery, cancelListQuery } from "./actions";

const lists = handleActions(
    {
        [startListQuery]: (state, { payload }) => handleStartQuery(state, payload),
        [cancelListQuery]: (state, { payload }) => handleCancelQuery(state, payload),
    }, {}
);

const handleStartQuery = (state, payload) => {
    const { listId, query } = payload;
    return { ...state, [listId]: query };
}

const handleCancelQuery = (state, payload) => {
    const { listId } = payload;
    return { ...state, [listId]: "" };
}

export default combineReducers({
    lists
});