import { call, put, take } from "redux-saga/effects";
import groupsApi from "../../../../api/groupsApi";
import { GROUP_JOIN_REQUEST } from "../types";
import { MODAL_GROUP_CREATE_OR_JOIN } from "../../../ui/constants";
import { joinGroupSuccess, joinGroupFailure } from "../actions";
import { removeUiModal, addUiFetching, removeUiFetching } from "../../../ui/duck/actions";
import { toastify } from "../../../ui/duck/sagas";

export function* watchJoinGroupRequest() {
    while(true) {
        const { payload } = yield take(GROUP_JOIN_REQUEST);
        yield put(addUiFetching("groupJoin"));
        yield call(handleJoinGroup, payload);
    }
}

function* handleJoinGroup(payload) {
    try {
        const { data } = yield call(joinGroup, payload);
        yield put(joinGroupSuccess(data));
        yield put(removeUiModal(MODAL_GROUP_CREATE_OR_JOIN));
        yield call(toastify, { 
            message: "You have joined the group",
            duration: 3000,
            status: "success"
        });
        yield put(removeUiFetching("groupJoin"));
    } catch (error) {
        yield put(joinGroupFailure(error));
        yield put(removeUiFetching("groupJoin"));
    }
} 

function* joinGroup(payload) {
    try {
        const response = yield call(groupsApi.joinGroup, payload);
        return response
    } catch (error) {
        throw(error);
    }
}
