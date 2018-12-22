import { combineReducers } from "redux";
import { APP_LOAD_DATA_FAILURE } from "../../app/duck/types";
import {
    AUTH_JWT_SUCCESS,
    AUTH_LOGIN_SUCCESS,
    AUTH_REGISTRATION_SUCCESS
} from "./types";

const _id = (state = null, action) => {
    const { type, payload } = action;
    switch(type) {
        case AUTH_JWT_SUCCESS:
        case AUTH_LOGIN_SUCCESS:
        case AUTH_REGISTRATION_SUCCESS:
            return payload._id;

        default:
            return state;
    }
}

const username = (state = null, action) => {
    const { type, payload } = action;
    switch(type) {
        case AUTH_JWT_SUCCESS:
        case AUTH_LOGIN_SUCCESS:
        case AUTH_REGISTRATION_SUCCESS:
            return payload.username;

        default:
            return state;
    }
}

const email = (state = null, action) => {
    const { type, payload } = action;
    switch(type) {
        case AUTH_JWT_SUCCESS:
        case AUTH_LOGIN_SUCCESS:
        case AUTH_REGISTRATION_SUCCESS:
            return payload.email;

        default:
            return state;
    }
}

const isLoggedIn = (state = false, action) => {
    const { type } = action;
    switch(type) {
        case AUTH_JWT_SUCCESS:
        case AUTH_LOGIN_SUCCESS:
        case AUTH_REGISTRATION_SUCCESS:
            return true;

        default:
            return state;
    }
}

const isRejected = (state = false, action) => {
    const { type, payload } = action;
    switch(type) {
        case APP_LOAD_DATA_FAILURE:
            return true;
        default:
            return state;
    }
}

export default combineReducers({
    _id,
    email,
    username,
    isLoggedIn,
    isRejected
})