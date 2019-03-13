import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { 
    createGroupSuccess,
    deleteGroupSuccess,
    joinGroupSuccess,
    addGroup,
    removeGroup
} from "../../group/duck/actions";
import {
    createChannelSuccess,
    deleteChannelSuccess,
    updateChannelSuccess,
    selectChannel,
    receiveChannelCreate,
    addChannel,
    removeChannels
} from "./actions";
import { loadUserData } from "../../user/duck/actions";

export const byId = handleActions(
    {
        [loadUserData]: (state, { payload }) => addChannels(state, payload),
        [addChannel]: (state, { payload }) => addChannels(state, payload),
        [addGroup]: (state, { payload }) => addChannels(state, payload),
        [removeChannels]: (state, { payload }) => deleteChannels(state, payload),
        [updateChannelSuccess]: (state, { payload }) => updateChannel(state, payload),
        // [deleteChannelSuccess]: (state, { payload }) => removeChannel(state, payload),
        [receiveChannelCreate]: (state, { payload }) => addChannels(state, payload),
    }, {}
);

export const allIds = handleActions(
    {
        [loadUserData]: (state, { payload }) => addChannelIds(state, payload),
        [addChannel]: (state, { payload }) => addChannelIds(state, payload),
        [addGroup]: (state, { payload }) => addChannelIds(state, payload),
        [removeChannels]: (state, { payload }) => deleteChannelIds(state, payload),
        // [deleteChannelSuccess]: (state, { payload }) => removeChannelId(state, payload),
    }, []
);

export const selectedIds = handleActions(
    {
        [loadUserData]: (state, { payload }) => mapGroupsToChannels(state, payload),
        [addChannel]: (state, { payload }) => updateSelectedChannel(state, payload),
        [selectChannel]: (state, { payload }) => addChannelToMap(state, payload),
    }, {}
);


//group delete action, deletes all channels of the same group

const addChannels = (state, { entities }) => {
    const { channels } = entities;
    return { ...state, ...channels };
}

const addChannelIds = (state, { entities }) => {
    const { channels } = entities;
    if (channels) {
        return [ ...state, ...Object.keys(channels) ];
    }
    return state;
}

const updateChannel = (state, { entities, result: channelId }) => {
    const { channels } = entities;

    const updatedChannel = channels[channelId];
    const channel = { ...state[channelId] };
    channel.name = updatedChannel.name;
    channel.topic = updatedChannel.topic;
    return { ...state, [channelId]: channel };
}

const mapGroupsToChannels = (state, { entities }) => {
    const { groups, channels } = entities;
    if (groups) {
        const groupIds = Object.keys(groups);
        return groupIds
        .reduce( (object, groupId) => ({ ...object, [groupId]: groups[groupId].channels.find(
                channelId => channels[channelId].group === groupId && channels[channelId].isDefault
            ) 
        }), {});
    }
}

const addChannelToMap = (state, payload) => {
    return { ...state, ...payload };
}

const updateSelectedChannel = (state, { entities, result: channelId }) => {
    const { channels } = entities;
    const { group: groupId } = channels[channelId];
    return { ...state, [groupId]: channelId };
}

const deleteChannels = (state, { result: channelIds }) => {
    console.log(channelIds);
    const result = channelIds.reduce((total, key) => {
        const { [key]: dummy, ...remainder } = total;
        return remainder;
    }, state);
    console.log(result, "DELETED CHANNELS", state);
    return result;
}

const deleteChannelIds = (state, { result: channelIds }) => {
    return state.filter(channelId => !channelIds.includes(channelId));
}

export default combineReducers({
    byId,
    allIds,
    selectedIds
});