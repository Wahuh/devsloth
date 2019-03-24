import http from "./httpApi";
import { LISTS_ENDPOINT, CHANNELS_ENDPOINT, CURRENT_USER_ENDPOINT } from "./endpoints";


export function createList({ _id, name }) {
    console.log("IDNAME", _id, name);
    if (_id) {
        return http.post(`${CHANNELS_ENDPOINT}/${_id}/lists`, { name });
    } else {
        return http.post(`${CURRENT_USER_ENDPOINT}/lists`, { name });
    }
}

export function updateList({ listId, name }) {
    return http.put(`${LISTS_ENDPOINT}/${listId}`, { name });
}

export default {
    updateList,
    createList
}