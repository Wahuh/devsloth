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
    createGroupSuccess,
    deleteGroupSuccess
} from "../../group/duck/actions";
import {
    createChannelSuccess,
    deleteChannelSuccess,
    updateChannelSuccess,
    selectChannel
} from "./actions";

export const byId = handleActions(
    {
        [createGroupSuccess]: (state, { payload }) => addChannel(state, payload),
        [deleteGroupSuccess]: (state, { payload }) => removeGroupChannels(state, payload),
        [createChannelSuccess]: (state, { payload }) => addChannel(state, payload),
        [deleteChannelSuccess]: (state, { payload }) => removeChannel(state, payload),
    }, {}
);

export const allIds = handleActions(
    {
        [createChannelSuccess]: (state, { payload }) => addChannelId(state, payload),
        [deleteChannelSuccess]: (state, { payload }) => removeChannelId(state, payload),
        [createGroupSuccess]: (state, { payload }) => addChannelId(state, payload),
        [deleteGroupSuccess]: (state, { payload }) => removeGroupChannelIds(state, payload),
    }, []
);

export const currentIds = handleActions(
    {
        [selectChannel]: (state, { payload }) => updateCurrentChannelIdFromSelect(state, payload),
        [createChannelSuccess]: (state, { payload }) => updateCurrentChannelId(state, payload),
        [deleteChannelSuccess]: (state, { payload }) => deleteCurrentChannelId(state, payload),
        [createGroupSuccess]: (state, { payload }) => updateCurrentChannelIdFromGroup(state, payload),
        [deleteGroupSuccess]: (state, { payload }) => removeGroupId(state, payload)
    }, {}
);

const addChannel = (state, { entities }) => {
    console.log(entities)
    const { channels } = entities;
    return mergeObject(state, channels);
}

const addChannelId = (state, { entities }) => {
    const { channels } = entities;
    return mergeArray(state, Object.keys(channels));
}

const removeChannel = (state, { _id }) => {
    return removeFromObject(state, _id)
}

const removeChannelId = (state, { _id }) => {
    return removeFromArray(state, _id)
}

const removeGroupChannels = (state, { _id }) => {
    //if the group property of a channel matches the supplied group id, remove it
    return removeFromObjectByMatch(state, "group", _id);
}

const removeGroupChannelIds = (state, { _id, channelIds }) => {
    return state.filter(id => !channelIds.includes(id));
    //if the group property of a channel matches the supplied group id, remove it
}

const updateCurrentChannelId = (state, { entities, result: channelId }) => {
    const { channels } = entities;
    const { group } = channels[channelId];
    return { ...state, [group]: channelId };
};

const updateCurrentChannelIdFromGroup = (state, { entities, result: groupId }) => {
    const { channels } = entities;
    const channelId = Object.keys(channels)[0];
    return { ...state, [groupId]: channelId };
}

const deleteCurrentChannelId = (state, { _id }) => {
    const result = Object.values(state).some(v => v === _id);
    if (result) {
        return Object.entries(state)
        .map( ([k, v]) => v === _id ? [k, null] : [k, v] )
        .reduce((accum, [k, v]) => {
            accum[k] = v;
            return accum;
        }, {})
    }
    return state;
}

const updateCurrentChannelIdFromSelect = (state, map) => {
    return { ...state, ...map };
} 

const removeGroupId = (state, { _id }) => removeFromObject(state, _id);

export default combineReducers({
    byId,
    allIds,
    currentIds
});