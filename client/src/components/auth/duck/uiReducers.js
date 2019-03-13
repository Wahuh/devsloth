import * as types from "./types";

export const auth = (state = { isFetching: false }, { type }) => {
    switch(type) {

        case types.AUTH_LOGIN_REQUEST:
        case types.AUTH_REGISTRATION_REQUEST:
            return { isFetching: true };

        case types.AUTH_LOGIN_FAILURE:
        case types.AUTH_LOGIN_SUCCESS:
        case types.AUTH_REGISTRATION_FAILURE:
        case types.AUTH_REGISTRATION_SUCCESS:
            return { isFetching: false };

        default:
            return state;
    }
}