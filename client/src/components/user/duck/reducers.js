import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { loadUserDataSuccess } from "./actions";

export const id = handleActions(
    {
        [loadUserDataSuccess]: (state, { payload }) => updateId(state, payload),
    }, null
);

export const email = handleActions(
    {
        [loadUserDataSuccess]: (state, { payload }) => updateEmail(state, payload),
    }, null
);

const updateId = (state, { result }) => result;
const updateEmail = (state, { entities, result: id }) => {
    const { user } = entities;
    return user[id].email;
}

export default combineReducers({
    id,
    email,
});