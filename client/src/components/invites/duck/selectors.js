export const getInvites = state => {
    return state.invites.allIds;
}

export const getPendingInviteIds = state => {
    return state.invites.pendingIds;
}