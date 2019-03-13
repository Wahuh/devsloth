export const getAllGroups = state => state.groups.allIds.map(id => state.groups.byId[id]);
export const getAllGroupIds = state => state.groups.allIds;
export const getGroup = (state, id) => state.groups.byId[id]

export const getCurrentGroup = state => state.groups.byId[getCurrentGroupId(state)];
export const getCurrentGroupId = state => state.groups.select.currentId;
export const getCurrentGroupIdDefault = state => state.groups.allIds[0];

export const getHasChannels = state => {
    const groupId = getSelectedGroupId(state);
    return groupId ? state.groups.byId[groupId].channels.length > 0 : null
}
export const getDenormalizedGroup = (state, groupId) => {
    console.log(state, groupId);
    const { channels: channelIds, members: memberIds } = state.groups.byId[groupId];
    const taskIds = state.tasks.allIds
        .filter(taskId => channelIds.includes(state.tasks.byId[taskId].channel));
    return ({
        taskIds,
        channelIds,
        memberIds
    });
}

export const getOwnerId = state => {
    const id = getSelectedGroupId(state);
    if (id) return state.groups.byId[id].owner;
    return null;
}

export const getCurrentGroupName = state => {
    const id = getCurrentGroupId(state);
    if (id) return state.groups.byId[id].name;
    return "";
}

export const getCurrentGroupInviteId = state => {
    const id = getCurrentGroupId(state);
    if (id) return state.groups.byId[id].inviteId
    return "";
}

//reducer to update this when new member added
export const getCurrentGroupMemberCount = state => {
    const id = getCurrentGroupId(state);
    if (id) return state.groups.byId[id].members.length;
    return null;
}

export const getHasGroups = state => state.groups.allIds.length > 0 ? true : false;

export const getQueuedInvite = state => state.groups.queuedInvite;


export const getSelectedGroup = state => state.groups.byId[state.groups.selectedId];
export const getSelectedGroupId = state => state.groups.selectedId;
export const getSelectedGroupName = state => state.groups.selectedId ? state.groups.byId[state.groups.selectedId].name : null;
export const getIsGroupSelected = state => {
    return state.groups.selectedId
}

export const getGroupEntities = state => {
    console.log("state", state);
    return ({
    groups: state.groups.byId,
    channels: state.channels.byId,
    tasks: state.tasks.byId,
    messages: state.messages.byId
})}