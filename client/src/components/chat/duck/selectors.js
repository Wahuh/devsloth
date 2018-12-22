export const getChannelMessages = (state) => {
    return state.messages.allIds
    .map(id => state.messages.byId[id])
    .filter(message => message.channel === state.channels.currentId);
}

export const getIsTyping = (state) => {
    return state.messages.isTyping;
}