import { delay } from "redux-saga";
import { call, take, put } from "redux-saga/effects";
import { 
    hideAuthentication, 
    startRegistrationLoading, 
    stopRegistrationLoading, 
    registrationError 
} from "./actions";

import authApi from "../../../api/authApi";
import api from "../../../api";
import * as types from "./types";

export function* register() {
    while(true) {
        const { payload } = yield take(types.REGISTRATION_PENDING);
        console.log(payload);
        yield put(startRegistrationLoading());

        try {
            const { data, headers } = yield call(api.register, payload);
            console.log(data);
            authApi.setJwt(headers["Authorization"]);
        } catch (error) {
            yield put(registrationError(error.response.data));
            yield put(stopRegistrationLoading());
            return;
        }

        yield call(delay, 2000);
        yield put(hideAuthentication());
    }
}

