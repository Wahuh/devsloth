import { call, put, takeEvery } from "redux-saga/effects";
import { GROUP_CREATE_REQUEST } from "../types";
import { createGroupSuccess, createGroupFailure } from "../actions";
import { removeUiModal, addUiFetching, removeUiFetching } from "../../../ui/duck/actions";
import groupsApi from "../../../../api/groupsApi";
import { MODAL_GROUP_CREATE_OR_JOIN } from "../../../ui/constants";
import { toastify } from "../../../ui/duck/sagas";


export function* watchCreateGroupRequest() {
    yield takeEvery(GROUP_CREATE_REQUEST, handleCreateGroup);
}

function* handleCreateGroup({ payload }) {
    yield put(addUiFetching("groupCreate"));

    try {
        const { data } = yield call(groupsApi.createGroup, payload);
        yield put(createGroupSuccess(data));
        yield call(toastify, { 
            message: "Group created successfully!",
            duration: 3000,
            status: "success"
        });
    } catch (error) {
        yield put(createGroupFailure(error));
        yield call(toastify, { 
            message: "Failed to create group. Please try again",
            duration: 3000,
            status: "error"
        });
    } finally {
        yield put(removeUiModal(MODAL_GROUP_CREATE_OR_JOIN));
        yield put(removeUiFetching("groupCreate"));
    }
}

