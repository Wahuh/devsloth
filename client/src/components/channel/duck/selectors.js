export const getAllChannels = (state) => {
    return state.channels.allIds.map(id => state.channels.byId[id]);
}