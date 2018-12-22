import { delay } from "redux-saga";
import { call, take, put } from "redux-saga/effects";

import { 
    registrationAuthFailure, 
    registrationAuthSuccess, 
    loginAuthFailure,
    loginAuthSuccess,
    jwtAuthSuccess,
    jwtAuthFailure
} from "./actions";

import { 
    AUTH_JWT_REQUEST,
    AUTH_LOGIN_REQUEST, 
    AUTH_REGISTRATION_REQUEST,
} from "./types";

import { hideUiModal } from "../../ui/duck/actions";

import { clearAppError } from "../../app/duck/actions";

import authApi from "../../../api/authApi";
import userApi from "../../../api/userApi";

export function* watchJwtRequest() {
    while(true) {
        const { payload } = yield take(AUTH_JWT_REQUEST);
        yield call(authApi.setJwtHeader, payload);
        yield call(handleJwtAuth);
    }
}

function* handleJwtAuth() {
    try {
        const { data } = yield call(authJwt);
        yield put(jwtAuthSuccess(data));
    } catch (error) {
        yield put(jwtAuthFailure(error));
        yield put(hideUiModal());
    } 
}

function* authJwt() {
    try {
        const response = yield call(userApi.getCurrentUser);
        return response;
    } catch (error) {
        throw (error);
    }
}

export function* watchLoginRequest() {
    while(true) {
        const { payload } = yield take(AUTH_LOGIN_REQUEST);
        console.log(payload);
        yield put(clearAppError("auth"));
        yield call(handleLogin, payload);
    }
}

function* handleLogin(payload) {
    try {
        const { data, headers } = yield call(login, payload);

        yield call(authApi.setJwt, headers["authorization"])
        yield call(authApi.setJwtHeader, headers["authorization"]);

        yield put(loginAuthSuccess(data));
    } catch (error) {
        yield put(loginAuthFailure(error));
    }
}

function* login(user) {
    try {
        const response = yield call(authApi.login, user);
        return response;
    } catch (error) {
        throw (error);
    }
}

export function* watchRegistrationRequest() {
    while(true) {
        const { payload } = yield take(AUTH_REGISTRATION_REQUEST);
        yield put(clearAppError("auth"));
        yield call(handleRegistration, payload);
    }
}

function* handleRegistration(payload) {
    try {
        const { data, headers } = yield call(register, payload);
        yield call(authApi.setJwt, headers["authorization"])
        yield call(authApi.setJwtHeader, headers["authorization"]);

        yield put(registrationAuthSuccess(data));
    } catch (error) {
        yield put(registrationAuthFailure(error));
    }
}

function* register(user) {
    for (let i = 0; i < 4; i++) {
        try {
            const response = yield call(authApi.register, user);
            return response;
        } catch (error) {
            if (!error.response && i < 3) {
                console.log("attempt", i);
                yield call(delay, 2000);
            } else {
                throw (error);
            }
        }
    }
}
