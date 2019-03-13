import { put, takeEvery } from "redux-saga/effects";
import { GROUP_CREATE_SUCCESS, GROUP_JOIN_SUCCESS } from "../types";
import { addGroup, selectGroup } from "../actions";

export function* watchAddGroup() {
    yield takeEvery([
        GROUP_CREATE_SUCCESS,
        GROUP_JOIN_SUCCESS,
    ], handleAddGroup);
}

function* handleAddGroup({ payload }) {
    const { result: groupId } = payload;
    yield put(addGroup(payload));
    yield put(selectGroup(groupId));
}