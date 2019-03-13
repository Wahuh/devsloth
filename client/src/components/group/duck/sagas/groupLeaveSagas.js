import { call, put, take, select } from "redux-saga/effects";
import { GROUP_LEAVE_REQUEST, GROUP_LEAVE_SUCCESS } from "../types";
import { addUiFetching, removeUiModal, removeUiFetching } from "../../../ui/duck/actions";
import { leaveGroupFailure, leaveGroupSuccess, selectGroup } from "../actions";
import { MODAL_GROUP_SETTINGS } from "../../../ui/constants";
import groupsApi from "../../../../api/groupsApi";

export function* watchLeaveGroupRequest() {
    while(true) {
        const { payload } = yield take(GROUP_LEAVE_REQUEST);
        yield put(addUiFetching("groupLeave"));
        yield call(handleLeaveGroup, payload);
    }
}

function* handleLeaveGroup(payload) {
    try {
        const { data } = yield call(leaveGroup, payload);
        yield put(leaveGroupSuccess(data));
        yield put(removeUiModal(MODAL_GROUP_SETTINGS));
        yield call(toastify, { 
            message: "You have left the group",
            duration: 3000,
            status: "success"
        });
        yield put(removeUiFetching("groupLeave"));
    } catch(error) {
        yield put(leaveGroupFailure(error));
        yield put(removeUiModal(MODAL_GROUP_SETTINGS));
        yield put(removeUiFetching("groupLeave"));
    }
}

function* leaveGroup(payload) {
    try {
        const response = yield call(groupsApi.leaveGroup, payload);
        return response
    } catch (error) {
        throw(error);
    }
}

export function* watchLeaveGroupSuccess() {
    while(true) {
        const { payload } = yield take(GROUP_LEAVE_SUCCESS);
        const { result: groupId } = payload;

        // yield call(denormalize, groupId, schemas.group, )
        yield put(selectGroup(null));
    }
}