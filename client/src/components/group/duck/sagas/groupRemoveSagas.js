import { put, takeEvery, select } from "redux-saga/effects";
import { GROUP_DELETE_SUCCESS, GROUP_LEAVE_SUCCESS } from "../types";
import { removeGroup } from "../actions";
import { getDenormalizedGroup } from "../selectors";
import { removeChannels } from "../../../channel/duck/actions";

export function* watchRemoveGroup() {
    yield takeEvery([
        GROUP_DELETE_SUCCESS,
        GROUP_LEAVE_SUCCESS
    ], handleRemoveGroup);
}

function* handleRemoveGroup({ payload }) {
    const { result: groupId } = payload;

    const { taskIds, channelIds, memberIds } = yield select(getDenormalizedGroup, groupId);
    yield put(removeGroup(payload));
    console.log({ taskIds, channelIds, memberIds });
    yield put(removeChannels({ result: channelIds }));
}