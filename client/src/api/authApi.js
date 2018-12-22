import http from "./httpApi";
import { LOGIN_ENDPOINT, REGISTRATION_ENDPOINT } from "./endpoints";

export const getJwt = () => localStorage.getItem("jwt");

export const setJwt = (jwt) => {
    const token = jwt.replace("Bearer ", "");
    localStorage.setItem("jwt", token);
}

export const setJwtHeader = (jwt) => {
    http.setAuthHeader(jwt);
}

export const register = (user) => {
    console.log(REGISTRATION_ENDPOINT, user);
    return http.post(REGISTRATION_ENDPOINT, {
        email: user.email,
        password: user.password,
    });
}

export const login = (user) => {
    return http.post(LOGIN_ENDPOINT, {
        email: user.email,
        password: user.password
    });
}

export default {
    getJwt,
    setJwt,
    setJwtHeader,
    login,
    register
}
