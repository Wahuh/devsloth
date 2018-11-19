import http from "./httpApi";
import { registrationEndpoint, CURRENT_USER_ENDPOINT } from "./endpoints";

export function register(user) {
    console.log(registrationEndpoint, user);
    return http.post(registrationEndpoint, {
        email: user.email,
        password: user.password,
    });
}

export function getCurrentUser() {
    return http.get(CURRENT_USER_ENDPOINT);
}

export default {
    getCurrentUser
}