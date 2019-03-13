import http from "./httpApi";
import { LISTS_ENDPOINT } from "./endpoints";


export function updateList({ listId, name }) {
    return http.put(`${LISTS_ENDPOINT}/${listId}`, { name });
} 


export default {
    updateList
}