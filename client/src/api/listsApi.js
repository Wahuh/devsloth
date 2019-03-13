import http from "./httpApi";
import { LISTS_ENDPOINT, CHANNELS_ENDPOINT } from "./endpoints";


export function createList({ _id, name }) {
    return http.post(`${CHANNELS_ENDPOINT}/${_id}/lists`, { name });
}

export function updateList({ listId, name }) {
    return http.put(`${LISTS_ENDPOINT}/${listId}`, { name });
} 

export default {
    updateList,
    createList
}