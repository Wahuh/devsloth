import { take, put, call, select } from "redux-saga/effects";
import groupsApi from "../../../api/groupsApi";
import schemas from "../../../schemas";
import { normalize } from "normalizr";
import * as types from "./types";
import { hideUiModal } from "../../ui/duck/actions";
import { selectGroup } from "./actions";
import * as actions from "./actions";
import { getCurrentGroupId, getCurrentGroupIdDefault } from "../../group/duck/selectors";
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

function* handleCreateGroup(payload) {
    try {
        const { data } = yield call(createGroup, payload);
        const normalizedData = yield call(normalize, data, schemas.group);
        console.log("normalized", normalizedData);
        yield put(actions.createGroupSuccess(normalizedData));
        yield put(actions.selectGroup({ _id: normalizedData.result }));
        const groupId = yield select(getCurrentGroupId);
        const channelId = yield select(getCurrentChannelIdDefault);
        yield put(selectChannel({ [groupId]: channelId }));
        yield put(hideUiModal());
    } catch (error) {
        yield put(actions.createGroupFailure(error));
    }
}

function* handleUpdateGroup(payload) {
    try {
        const { data } = yield call(updateGroup, payload);
        yield put(actions.updateGroupSuccess(data))
        yield put(hideUiModal());
    } catch (error) {
        yield put(actions.updateGroupFailure(error));
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
        const { _id } = data;
        const channelsToDelete = yield select(getChannelIdsToDelete, _id);
        console.log("channels to delete", channelsToDelete);
        yield put(actions.deleteGroupSuccess({ _id, channelIds: channelsToDelete }));
        const groupId = yield select(getCurrentGroupIdDefault);
        console.log(groupId);
        yield put(selectGroup({ _id: groupId }));
        yield put(hideUiModal());
    } catch (error) {
        yield put(actions.deleteGroupFailure(error));
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

