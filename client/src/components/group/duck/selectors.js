export const getAllGroups = state => state.groups.allIds.map(id => state.groups.byId[id]);
export const getAllGroupIds = state => state.groups.allIds;

export const getCurrentGroup = state => state.groups.byId[getCurrentGroupId(state)];
export const getCurrentGroupId = state => state.groups.currentId;
export const getCurrentGroupIdDefault = state => state.groups.allIds[0];


export const getCurrentGroupName = state => {
    if (state.groups.currentId) {
        return state.groups.byId[getCurrentGroupId(state)].name;
    }
}

export const getCurrentGroupInviteId = state => {
    const id = getCurrentGroupId(state);
    if (id) return state.groups.byId[id].inviteId
    return "";
}

export const getCurrentGroupMemberCount = state => {
    if (state.groups.currentId) {
        return state.groups.byId[getCurrentGroupId(state)].members.length;
    }
}

