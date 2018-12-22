import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { 
    mergeObject,
    mergeArray,
    removeFromArray,
    removeFromObject,
    removeFromObjectByMatch
 } from "../../../utils";

 import {
    createChannelSuccess,
 } from "../../channel/duck/actions";

const byId = handleActions(
    {
        [createChannelSuccess]: (state, { payload }) => updateMemberChannels(state, payload),
    }, {}
);

const allIds = handleActions(
    {
    }, []
);

const currentId = handleActions(
    {
    }, null
);

const updateMemberChannels = (state, { entities }) => {
    const { members } = entities;
    console.log("STATE", { ...state });
    console.log("MEM", { ...members });
    return { ...state, ...members };
}

export default combineReducers({
    byId,
    allIds,
    currentId
});