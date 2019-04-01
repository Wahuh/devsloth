import { put, takeEvery } from "redux-saga/effects";
import { LIST_CREATE_SUCCESS } from "../types";
import { addList } from "../actions";
import { receiveMessage } from "../../../messages/duck/actions";

export function* watchListAdd() {
    yield takeEvery([
        LIST_CREATE_SUCCESS
    ], handleListAdd);
}

function* handleListAdd({ payload }) {

    yield put(addList(payload));
}