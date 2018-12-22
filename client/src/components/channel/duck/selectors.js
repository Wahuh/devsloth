import { 
    getAllGroups,
    getCurrentGroup,
    getCurrentGroupId 
} from "../../group/duck/selectors";

export const getAllChannels = state => {
    const groupId = getCurrentGroupId(state);
    if (groupId) return state.channels.allIds
    .map(id => state.channels.byId[id])
    .filter(channel => channel.group === groupId)
    return [];
}

export const getChannelIdsToDelete = (state, groupId) => {
    return state.channels.allIds
    .filter(id => state.channels.byId[id].group === groupId);
}

export const getCurrentChannel = state => state.channels.byId[getCurrentChannelId(state)];

export const getCurrentChannelId = (state) => {
    const id = getCurrentGroupId(state);
    if (id) return state.channels.currentIds[id];
    return null;
};
export const getCurrentChannelIdDefault = state => getCurrentGroup(state)["channels"][0]

export const getCurrentChannelIdsDefault = state => {
    const groups = getAllGroups(state);
    return groups.map( ({ _id, channels }) => [_id, channels[0]] )
    .reduce( (accum, [k, v]) => ({ ...accum, [k]: v }), {});
}

export const getCurrentChannelName = state => {
    const id = getCurrentChannelId(state);
    if (id) return state.channels.byId[id].name;
    return "";
}