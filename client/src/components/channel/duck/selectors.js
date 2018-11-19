export const getAllChannels = state => state.result.channels.map(id => state.entities.channels[id]);
export const getCurrentChannel = state => state.currentChannel;
export const getCurrentChannelDefault = state => {
    const currentGroup = state.entities.groups[state.currentGroup];
    return currentGroup.channels[0];
};