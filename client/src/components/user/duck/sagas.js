import { take, put, call, select } from "redux-saga/effects";
import { normalize } from "normalizr";
import schemas from "../../../schemas";

import { loadUserDataSuccess } from "./actions";

import { 
    AUTH_JWT_SUCCESS,
    AUTH_LOGIN_SUCCESS,
    AUTH_REGISTRATION_SUCCESS
} from "../../auth/duck/types";

export function* watchAuthenticationSuccess() {
    while(true) {
        const { payload } = yield take([
            AUTH_JWT_SUCCESS,
            AUTH_LOGIN_SUCCESS,
            AUTH_REGISTRATION_SUCCESS
        ]);
        yield call(handleUserDataLoad, payload);
    }
}

function* handleUserDataLoad(data) {
    console.log("DATA", data);
    yield put(loadUserDataSuccess(data));
}