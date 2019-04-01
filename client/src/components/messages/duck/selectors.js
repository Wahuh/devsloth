import { getSelectedChannelId } from "../../channel/duck/selectors";

export const getChannelMessages = (state) => {
    const channelId = getSelectedChannelId(state);
    if (channelId) {
        return state.messages.allIds
        .map(id => state.messages.byId[id])
        .filter(message => message.channel === channelId)
        .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    }
    return [];
}

export const getIsTyping = (state) => {
    return state.messages.isTyping;
}