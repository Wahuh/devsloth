import { delay } from "redux-saga";
import { call, take, put } from "redux-saga/effects";
import { hideAuthentication, showRegistrationLoading, registrationError } from "./actions";

import api from "../../../api";
import * as types from "./types";

export function* register() {
    while(true) {
        const { payload } = yield take(types.REGISTRATION_PENDING);
        console.log(payload);
        yield put(showRegistrationLoading());

        try {
            const { id, email } = yield call(api.register, payload);
            console.log(id, email);
        } catch (error) {
            yield put(registrationError(error));
            return;
        }

        yield call(delay, 2000);
        yield put(hideAuthentication());
    }
}