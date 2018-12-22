import { getCurrentChannelId } from "../../channel/duck/selectors"; 

export const getCurrentChannelMembers = state => {
    const channelId = getCurrentChannelId(state);
    console.log(state);
    if (channelId) return state.members.allIds
    .map(id => state.members.byId[id])
    .filter(member => member.channels.indexOf(channelId) > -1)
    // if (state.members.allIds.length > 0 && state.channels.currentId) {
    //     const channelId = getCurrentChannelId(state);
    //     return state.members.allIds
    //     .map(id => state.members.byId[id])
    //     .filter(member => member.channels.indexOf(channelId) > -1);
    // } 
    return [];
}

export const getMemberAlias = (state, id) => state.members.byId[id]["alias"];
