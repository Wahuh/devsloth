import { call, put, takeEvery } from "redux-saga/effects";
import { LIST_CREATE_REQUEST } from "../types";
import { createListFailure } from "../actions";
import { addUiFetching, removeUiFetching } from "../../../ui/duck/actions";
import { toastify } from "../../../ui/duck/sagas";
import listsApi from "../../../../api/listsApi";


export function* watchCreateListRequest() {
    yield takeEvery(LIST_CREATE_REQUEST, handleCreateList);
}

function* handleCreateList({ payload }) {
    yield put(addUiFetching("listCreate"));

    try {
        yield call(listsApi.createList, payload);
        yield call(toastify, {
            message: "List created successfully!",
            duration: 3000,
            status: "success"
        });
    } catch(error) {
        yield put(createListFailure(error));

    } finally {
        yield put(removeUiFetching("listCreate"));
    }
}