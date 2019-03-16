import { createSelector } from "reselect";

import { 
    getSelectedGroupId,
} from "../../group/duck/selectors";

export const getAllChannels = state => {
    const groupId = getSelectedGroupId(state);
    if (groupId) return state.channels.allIds
    .map(id => state.channels.byId[id])
.filter(channel => channel.group === groupId)
    return [];
}

export const getChannelsById = state => state.channels.byId;
const getSelectedIds = state => state.channels.selectedIds;




export const getDefaultChannelId = state => {
    const groupId = getSelectedGroupId(state);
    return state.channels.allIds
    .find(id => {
        const { group, isDefault } = state.channels.byId[id];
        return group === groupId && isDefault;
    });
} 


export const getDefaultChannelName = state => {
    const channelId = getDefaultChannelId(state);
    if (channelId) return state.channels.byId[channelId].name;
    return null;
}


export const getChannelIds = state => {
    const groupId = getSelectedGroupId(state);
    if (groupId) {
        return state.channels.allIds
        .filter(id => state.channels.byId[id].group === groupId);
    }
    return [];
}



export const getSelectedChannelName = state => {
    const channelId = getSelectedChannelId(state);
    if (channelId) return state.channels.byId[channelId].name;
    return null;
}

export const getSelectedChannelTopic = state => {
    const channelId = getSelectedChannelId(state);

    if (channelId) return state.channels.byId[channelId].topic;

    return null;
}

export const getSelectedChannelMemberCount = state => {
    const channelId = getSelectedChannelId(state);
    if (channelId) return state.channels.byId[channelId].members.length;
    return null;
}

export const getChannel = (state, channelId) => state.channels.byId[channelId] 

export const getAllChannelIds = state => {
    const groupId = getCurrentGroupId(state);
    if (groupId) return state.channels.allIds
    .filter(id => state.channels.byId[id].group === groupId);
    return [];
}

export const getChannelIdsToDelete = (state, groupId) => {
    return state.channels.allIds
    .filter(id => state.channels.byId[id].group === groupId);
}

export const getDefaultChannelInviteId = state => {
    const channel = getAllChannels(state)
    .find(({ isDefault }) => isDefault)
    return channel ? channel.inviteId : null;
}
export const getSelectedChannelId = createSelector(
    [ getSelectedIds, getSelectedGroupId ],
    (selectedIds, selectedGroupId) => selectedGroupId ? selectedIds[selectedGroupId] : null
)

export const getSelectedChannel = createSelector(
    [ getChannelsById, getSelectedChannelId ],
    (byId, selectedChannelId) => selectedChannelId ? byId[selectedChannelId] : null
)


