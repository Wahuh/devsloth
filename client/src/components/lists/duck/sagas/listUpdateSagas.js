import { call, takeEvery, put } from "redux-saga/effects";
import { LIST_UPDATE_REQUEST } from "../types";
import { updateListFailure } from "../actions";
import listsApi from "../../../../api/listsApi";
import { toastify } from "../../../ui/duck/sagas";

export function* watchListUpdateRequest() {
    yield takeEvery(LIST_UPDATE_REQUEST, handleListUpdate)
}

function* handleListUpdate({ payload }) {
    try {
        yield call(listsApi.updateList, payload)
        yield call(toastify, { 
            message: "List updated successfully!",
            duration: 3000,
            status: "success"
        });
    } catch(error) {
        yield put(updateListFailure(error));
    }
}