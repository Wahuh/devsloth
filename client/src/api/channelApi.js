import http from "./httpApi";
import { CHANNELS_ENDPOINT, GROUPS_ENDPOINT } from "./endpoints";

export function createChannel(channel) {
    const { name, isPublic, groupId } = channel;
    return http.post(`${GROUPS_ENDPOINT}/${groupId}/channels`, {
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

export default {
    createChannel,
    updateChannel,
    deleteChannel,
}