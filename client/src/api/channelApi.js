import http from "./httpApi";
import { CHANNELS_ENDPOINT } from "./endpoints";

export function createChannel(channel) {
    return http.post(CHANNELS_ENDPOINT, {
        name: channel.name,
        groupId: channel.groupId
    });
}

export function updateChannel(channel) {
    return http.put(`${CHANNELS_ENDPOINT}/${channel._id}`, {
        name: channel.name
    });
}

export function deleteChannel(channel) {
    return http.delete(`${CHANNELS_ENDPOINT}/${channel._id}`);
}

export default {
    createChannel,
    updateChannel,
    deleteChannel,
}