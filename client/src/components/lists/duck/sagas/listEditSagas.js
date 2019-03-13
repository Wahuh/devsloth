import { call, takeEvery, put } from "redux-saga/effects";
import { LIST_UPDATE_REQUEST, LIST_UPDATE_SUCCESS } from "../types";
import { updateListFailure, editList } from "../actions";
import listsApi from "../../../../api/listsApi";

export function* watchListEdit() {
    yield takeEvery(LIST_UPDATE_SUCCESS, handleListEdit)
}

function* handleListEdit({ payload }) {
    yield put(editList(payload));
}