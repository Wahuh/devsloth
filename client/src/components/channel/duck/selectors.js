import { 
    getAllGroups,
    getCurrentGroup,
    getCurrentGroupId, 
    getGroupIdSelected,
    getSelectedGroupId,
    getSelectedGroup
} from "../../group/duck/selectors";

export const getAllChannels = state => {
    const groupId = getSelectedGroupId(state);
    if (groupId) return state.channels.allIds
    .map(id => state.channels.byId[id])
.filter(channel => channel.group === groupId)
    return [];
}


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

export const getSelectedChannel = state => {
    const channelId = getSelectedChannelId(state);
    if (channelId) return state.channels.byId[channelId];
    return null;
}

export const getSelectedChannelId = state => {
    const groupId = getSelectedGroupId(state);
    return state.channels.selectedIds[groupId];
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

export const getCurrentChannel = state => state.channels.byId[getCurrentChannelId(state)];

export const getCurrentChannelId = (state) => {
    const id = getCurrentGroupId(state);
    if (id) return state.channels.currentIds[id].slice(-1)[0];
    return null;
};
export const getCurrentChannelIdDefault = state => getCurrentGroup(state)["channels"][0]

export const getCurrentChannelIdsDefault = state => {
    const groups = getAllGroups(state);
    return groups.map( ({ _id, channels }) => [_id, channels[0]] )
    .reduce( (accum, [k, v]) => ({ ...accum, [k]: v }), {});
}

export const getCurrentChannelName = state => {
    const id = getCurrentChannelId(state);
    if (id) return state.channels.byId[id].name;
    return null;
}

export const getDefaultChannelInviteId = state => {
    const channel = getAllChannels(state)
    .find(({ isDefault }) => isDefault)
    return channel ? channel.inviteId : null;
}