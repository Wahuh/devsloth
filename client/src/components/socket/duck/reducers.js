import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { socketConnected, socketDisconnected, socketConnecting, namespacesConnected, receiveConnectAll } from "./actions";

export const connectedGroups = handleActions(
    {
        [receiveConnectAll]: (state, { payload }) => addGroups(state, payload),
    }, {}
);

export const status = handleActions(
    {
        [socketConnected]: (state, { payload }) => changeStatus(state, payload),
        [socketDisconnected]: (state, { payload }) => changeStatus(state, payload),
        [socketConnecting]: (state, { payload }) => changeStatus(state, payload),
    }, "connecting"
);

const addGroups = (state, payload) => {
    return { ...state, ...payload };
}

const changeStatus = (state, status) => {
    return status;
}

const addNamespaces = (state, payload) => {
    return [...state, ...payload];
}

export default combineReducers({
    status,
    groups: connectedGroups
});
