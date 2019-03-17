import { createSelector } from "reselect";

export const getAllGroups = state => state.groups.allIds.map(id => state.groups.byId[id]);
export const getAllGroupIds = state => state.groups.allIds;
export const getGroup = (state, id) => state.groups.byId[id]

export const getHasChannels = state => {
    const groupId = getSelectedGroupId(state);
    return groupId ? state.groups.byId[groupId].channels.length > 0 : null
}
export const getGroupChannelIds = (state, groupId) => {
    const { channels: channelIds } = state.groups.byId[groupId];
    return channelIds;
}

export const getOwnerId = state => {
    const id = getSelectedGroupId(state);
    if (id) return state.groups.byId[id].owner;
    return null;
}

export const getHasGroups = state => state.groups.allIds.length > 0 || false;

export const getQueuedInvite = state => state.groups.queuedInvite;

export const getGroupsById = state => state.groups.byId;
export const getSelectedGroupId = state => state.groups.selectedId;
export const getSelectedGroup = createSelector(
    [ getGroupsById, getSelectedGroupId ],
    (byId, selectedGroupId) => selectedGroupId ? byId[selectedGroupId] : null
)

export const getSelectedGroupName = state => state.groups.selectedId ? state.groups.byId[state.groups.selectedId].name : null;
export const getIsGroupSelected = state => {
    return state.groups.selectedId
}
