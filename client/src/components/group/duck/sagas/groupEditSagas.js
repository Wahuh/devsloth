import { all, put, takeEvery } from "redux-saga/effects";
import { GROUP_UPDATE_SUCCESS, GROUP_UPDATE_RECEIVE } from "../types";
import { editGroup, updateGroupSuccess } from "../actions";
import { receiveMessage } from "../../../messages/duck/actions";

export function* watchEditGroup() {
    yield takeEvery(GROUP_UPDATE_SUCCESS, handleEditGroup);
}

function* handleEditGroup({ payload }) {
    yield put(editGroup(payload));
}
