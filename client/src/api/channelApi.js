import http from "./httpApi";
import { CHANNELS_ENDPOINT } from "./endpoints";

export function createChannel(channel) {
    const { name, isPublic, groupId } = channel;
    return http.post(`${CHANNELS_ENDPOINT}/${groupId}`, {
        name,
        isPublic,
    });
}

export function updateChannel(channel) {
    const { _id, name, topic } = channel;
    return http.put(`${CHANNELS_ENDPOINT}/${_id}`, {
        name,
        topic
    });
}

export function deleteChannel({ _id }) {
    return http.delete(`${CHANNELS_ENDPOINT}/${_id}`);
}

export function createList({ _id, name }) {
    return http.post(`${CHANNELS_ENDPOINT}/${_id}/lists`, { name });
} 

export function createTask({ channelId, list, name, localId }) {
    return http.post(`${CHANNELS_ENDPOINT}/${channelId}/lists/${list}/tasks`, { name, localId });
} 


export default {
    createChannel,
    updateChannel,
    deleteChannel,
    createList,
    createTask
}