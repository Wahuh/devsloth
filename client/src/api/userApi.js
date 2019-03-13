import http from "./httpApi";
import { CURRENT_USER_ENDPOINT } from "./endpoints";

export function getCurrentUser() {
    return http.get(CURRENT_USER_ENDPOINT);
}

export function updateUser(user) {
    return http.put(CURRENT_USER_ENDPOINT, user);
}

export default {
    getCurrentUser,
    updateUser
}