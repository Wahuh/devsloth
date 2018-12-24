import { take, put, call, select } from "redux-saga/effects";

import groupsApi from "../../../api/groupsApi";
import schemas from "../../../schemas";
import { normalize } from "normalizr";
import * as types from "./types";
import { hideUiModal } from "../../ui/duck/actions";
import {
    createGroupSuccess,
    createGroupFailure,
    updateGroupSuccess,
    updateGroupFailure,
    deleteGroupSuccess,
    deleteGroupFailure,
    selectGroup
} from "./actions";
import { getCurrentGroupId, getCurrentGroupIdDefault } from "./selectors";
import { selectChannel } from "../../channel/duck/actions";
import { 
    getCurrentChannelIdDefault,
    getChannelIdsToDelete
} from "../../channel/duck/selectors";

export function* watchCreateGroupRequest() {
    while(true) {
        const { payload } = yield take(types.GROUP_CREATE_REQUEST);
        yield call(handleCreateGroup, payload);
    }
}

export function* watchUpdateGroupRequest() {
    while(true) {
        const { payload } = yield take(types.GROUP_UPDATE_REQUEST);
        yield call(handleUpdateGroup, payload);
    }
}

export function* watchCreateGroupSuccess() {
    while(true) {
        const { payload } = yield take(types.GROUP_CREATE_SUCCESS);
        yield call(handleSelectGroup, payload);
    }
}

function* handleCreateGroup(payload) {
    try {
        const { data } = yield call(createGroup, payload);
        console.log("groupRAW", data);
        const groupData = yield call(normalize, data, schemas.group);
        console.log("normalized", groupData);
        yield put(createGroupSuccess(groupData));
        // yield put(actions.selectGroup({ _id: normalizedData.result }));
        // const groupId = yield select(getCurrentGroupId);
        // const channelId = yield select(getCurrentChannelIdDefault);
        // yield put(selectChannel({ [groupId]: channelId }));
        yield put(hideUiModal());
    } catch (error) {
        yield put(createGroupFailure(error));
    }
}

function* handleSelectGroup({ result }) {
    yield put(selectGroup({ _id: result }));
}

function* handleUpdateGroup(payload) {
    try {
        const { data } = yield call(updateGroup, payload);
        yield put(updateGroupSuccess(data))
        yield put(hideUiModal());
    } catch (error) {
        yield put(updateGroupFailure(error));
    }
}

export function* watchDeleteGroupRequest() {
    while(true) {
        const { payload } = yield take(types.GROUP_DELETE_REQUEST);
        console.log(payload, "delete");
        yield call(handleDeleteGroup, payload);
    }
}

function* handleDeleteGroup(payload) {
    try {
        const { data } = yield call(deleteGroup, payload);
        const deletedGroupData = yield call(normalize, data, schemas.group);
        const { _id } = deletedGroupData;
        const channelsToDelete = yield select(getChannelIdsToDelete, _id);
        console.log("channels to delete", channelsToDelete);
        yield put(deleteGroupSuccess({ _id, channelIds: channelsToDelete }));
        const groupId = yield select(getCurrentGroupIdDefault);
        console.log(groupId);
        yield put(selectGroup({ _id: groupId }));
        yield put(hideUiModal());
    } catch (error) {
        yield put(deleteGroupFailure(error));
    }
}

function* deleteGroup(payload) {
    try {
        const response = yield call(groupsApi.deleteGroup, payload);
        return response
    } catch (error) {
        throw(error);
    }
}

function* createGroup(group) {
    try {
        const response = yield call(groupsApi.createGroup, group);
        return response
    } catch (error) {
        throw(error);
    }
}

function* updateGroup() {
    try {
        const response = yield call(groupsApi.updateGroup, group);
        return response
    } catch (error) {
        throw(error);
    }
}
