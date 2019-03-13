import { call, put, take } from "redux-saga/effects";
import { USER_UPDATE_REQUEST } from "../types";
import { addUiFetching, removeUiFetching } from "../../../ui/duck/actions";
import userApi from "../../../../api/userApi";
import { updateUserFailure, updateUserSuccess } from "../actions";
import { toastify } from "../../../ui/duck/sagas";

export function* watchUpdateUserRequest() {
    while(true) {
        const { payload } = yield take(USER_UPDATE_REQUEST);
        yield put(addUiFetching("userUpdate"));
        yield call(handleUserUpdate, payload);
    }
}

function* handleUserUpdate(payload) {
    try {
        const { data } = yield call(updateUser, payload);
        yield put(updateUserSuccess(data));
        yield call(toastify, { 
            message: "Account updated successfully!",
            duration: 3000,
            status: "success"
        });
        yield put(removeUiFetching("userUpdate"));
    } catch (error) {
        yield put(updateUserFailure(error));
        yield call(toastify, {
            message: error.response.data,
            status: "error"
        });

        yield put(removeUiFetching("userUpdate"));
    }
}

function* updateUser(user) {
    try {
        const response = yield call(userApi.updateUser, user);
        return response
    } catch(error) {
        throw(error);
    }
}