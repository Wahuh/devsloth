import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { loadUserData, updateUserSuccess } from "./actions";

export const id = handleActions(
    {
        [loadUserData]: (state, { payload }) => updateId(state, payload),
        [updateUserSuccess]: (state, { payload }) => updateId(state, payload),
    }, null
);

export const email = handleActions(
    {
        [loadUserData]: (state, { payload }) => updateEmail(state, payload),
        [updateUserSuccess]: (state, { payload }) => updateEmail(state, payload),
    }, null
);

export const username = handleActions(
    {
        [loadUserData]: (state, { payload }) => updateUsername(state, payload),
        [updateUserSuccess]: (state, { payload }) => updateUsername(state, payload),
    }, null
);

const updateId = (state, { result: userId }) => userId;
const updateEmail = (state, { entities, result: userId }) => {
    const { user } = entities;
    return user[userId].email;
}

const updateUsername = (state, { entities, result: userId }) => {
    const { user } = entities;
    return user[userId].username
}

export default combineReducers({
    id,
    email,
    username
});