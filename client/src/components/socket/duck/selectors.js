export const getConnectionStatus = state => state.connection.status;
export const getConnectedGroups = state => {
    const groupIds = Object.keys(state.connection.groups);
    if (groupIds) {
        return groupIds.map(
            id => ({ name: state.groups.byId[id].name, channels: state.connection.groups[id].map(channelId => state.channels.byId[channelId].name) }))
    } else {
        return [];
    }
};