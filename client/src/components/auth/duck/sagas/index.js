import { delay } from "redux-saga";
import { all, call, take, put, select } from "redux-saga/effects";

import { 
    registrationAuthFailure, 
    registrationAuthSuccess, 
    loginAuthFailure,
    loginAuthSuccess,
    jwtAuthSuccess,
    jwtAuthFailure,
    logoutAuthSuccess
} from "../actions";

import { 
    AUTH_JWT_REQUEST,
    AUTH_LOGIN_REQUEST, 
    AUTH_REGISTRATION_REQUEST,
    AUTH_LOGOUT,
    AUTH_JWT_SUCCESS,
    AUTH_LOGIN_SUCCESS,
    AUTH_REGISTRATION_SUCCESS,
} from "../types";

import { clearAppError } from "../../../app/duck/actions";

import authApi from "../../../../api/authApi";
import userApi from "../../../../api/userApi";
import { loadUserData } from "../../../user/duck/actions";
import { getPendingInviteIds } from "../../../invites/duck/selectors";
import { addUiFetching, removeUiFetching } from "../../../ui/duck/actions";
import { toastify } from "../../../ui/duck/sagas";
import { disconnectSocket } from "../../../socket/duck/actions";

function* mergeInvites(payload) {
    const inviteIds = yield select(getPendingInviteIds);
    if (inviteIds.length > 0) {
        if (payload) {
            return  { ...payload, inviteIds };
        } else {
            return { inviteIds };
        }
    } else {
        return payload;
    }
}

export function* authFlow() {
    while(true) {
        yield take([
            AUTH_JWT_REQUEST,
            AUTH_LOGIN_REQUEST,
            AUTH_REGISTRATION_REQUEST
        ]);

        const { payload } = yield take([
            AUTH_JWT_SUCCESS,
            AUTH_LOGIN_SUCCESS,
            AUTH_REGISTRATION_SUCCESS
        ]);
        yield put(loadUserData(payload));
        console.log(loadUserData(payload));
        yield take(AUTH_LOGOUT);
        yield put(addUiFetching("userLogout"));
        yield call(handleLogout);
    }
}

export function* watchJwtRequest() {
    while(true) {
        const { payload } = yield take(AUTH_JWT_REQUEST);
        yield put(addUiFetching("jwt"));
        yield call(authApi.setJwtHeader, payload);
        yield call(handleJwtAuth);
    }
}

function* handleJwtAuth() {
    try {
        const { data } = yield call(authJwt);

        yield put(jwtAuthSuccess(data));
        yield put(removeUiFetching("jwt"));
    } catch (error) {
        yield put(jwtAuthFailure(error));
        yield put(removeUiFetching("jwt"));
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
        yield put(addUiFetching("login"));
        yield put(clearAppError("auth"));
        yield call(handleLogin, payload);
    }
}

function* handleLogin(payload) {
    try {
        const { data, headers } = yield call(login, payload);

        const { authorization } = headers;
        yield call(authApi.setJwt, authorization)
        const jwt = yield call(authApi.getJwt);
        yield call(authApi.setJwtHeader, jwt);
        yield put(loginAuthSuccess(data));
        yield put(removeUiFetching("login"));
    } catch (error) {
        yield put(loginAuthFailure(error));
        yield call(toastify, {
            message: error.response.data,
            status: "error"
        });

        yield put(removeUiFetching("login"));
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
        yield put(addUiFetching("registration"));
        yield put(clearAppError("auth"));
        yield call(handleRegistration, payload);
    }
}

function* handleRegistration(payload) {
    try {
        const { data, headers } = yield call(register, payload);
        //headers are converted to lowercase
        const { authorization } = headers;
        if (typeof data === 'string' || data instanceof String) {
            yield call(toastify, {
                message: data,
                status: "error"
            });
        } else {
            yield call(authApi.setJwt, authorization)
            const jwt = yield call(authApi.getJwt);
            yield call(authApi.setJwtHeader, jwt);
            yield put(registrationAuthSuccess(data));
        }
        yield put(removeUiFetching("registration"));
    } catch (error) {
        yield put(registrationAuthFailure(error));
        yield put(removeUiFetching("registration"));
    }
}

function* register(user) {
    for (let i = 0; i < 4; i++) {
        try {
            const response = yield call(authApi.register, user);
            return response;
        } catch (error) {
            if (!error.response && i < 3) {
                yield call(delay, 2000);
            } else {
                throw (error);
            }
        }
    }
}

function* handleLogout() {
    yield put(disconnectSocket());
    yield call(authApi.logout);
    yield put(logoutAuthSuccess());
    yield put(removeUiFetching("userLogout"));
}

export default function* authSaga() {
    yield all([
        watchJwtRequest(),
        watchLoginRequest(),
        watchRegistrationRequest(),
        authFlow()
    ]);
}