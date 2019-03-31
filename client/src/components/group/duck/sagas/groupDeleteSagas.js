import { call, put, takeEvery } from "redux-saga/effects";

import groupsApi from "../../../../api/groupsApi";
import { deleteGroupFailure, deleteGroupSuccess } from "../actions";
import { addUiFetching, removeUiFetching, removeUiPortal } from "../../../ui/duck/actions";
import { MODAL_GROUP_SETTINGS } from "../../../ui/constants";
import { GROUP_DELETE_REQUEST } from "../types";
import { toastify } from "../../../ui/duck/sagas";

export function* watchDeleteGroupRequest() {
    yield takeEvery(GROUP_DELETE_REQUEST, handleDeleteGroup);
}

function* handleDeleteGroup({ payload }) {
    yield put(addUiFetching("groupDelete"));

    try {
        const { data } = yield call(groupsApi.deleteGroup, payload);
        yield put(removeUiPortal(MODAL_GROUP_SETTINGS));
        yield put(deleteGroupSuccess(data));

        yield call(toastify, {
            message: "Group deleted successfully!",
            duration: 3000,
            status: "success"
        });
    } catch(error) {
        yield put(deleteGroupFailure(error));

    } finally {
        yield put(removeUiFetching("groupDelete"));
    }
}