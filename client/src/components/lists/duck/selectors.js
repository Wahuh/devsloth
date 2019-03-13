import { getCurrentChannelId, getSelectedChannelId } from "../../channel/duck/selectors";


export const getCurrentChannelLists = state => {
    const channelId = getCurrentChannelId(state);
    if (channelId) {
        return state.lists.allIds
        .map(id => state.lists.byId[id])
        .filter(({ channel }) => channel === channelId)
    }
    return [];
}

export const getList = (state, id) => state.lists.byId[id]

export const getListIdsChannelCurrent = state => {
    const channelId = getSelectedChannelId(state);
    if (channelId) {
        return state.lists.allIds
            .filter(listId => state.lists.byId[listId].channel === channelId)
    }
    return [];
}

export const getSelectedChannelLists = state => {
    const channelId = getSelectedChannelId(state);
    if (channelId) {
        return state.lists.allIds
        .map(id => state.lists.byId[id])
        .filter(({ channel }) => channel === channelId)
    }
    return null;
}

export const getLastTaskId = (state, listId) => {
    if (state.lists.byId[listId].tasks) {
        return state.lists.byId[listId].tasks
        .find(taskId => !state.tasks.byId[taskId].next)
    }
    return null;
}