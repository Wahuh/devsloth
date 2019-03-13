import { call, put, takeEvery } from "redux-saga/effects";
import { GROUP_UPDATE_REQUEST, GROUP_UPDATE_SUCCESS } from "../types";
import { updateGroupFailure, updateGroupSuccess } from "../actions";
import { removeUiFetching, addUiFetching } from "../../../ui/duck/actions";
import groupsApi from "../../../../api/groupsApi";
import { toastify } from "../../../ui/duck/sagas";

export function* watchGroupUpdateRequest() {
    yield takeEvery(GROUP_UPDATE_REQUEST, handleGroupUpdate);
}

function* handleGroupUpdate({ payload }) {
    console.log("updating", payload);
    yield put(addUiFetching("groupEdit"));
    
    try {
        yield call(groupsApi.updateGroup, payload);
        console.log("toasting");
        yield call(toastify, { 
            message: "Group updated successfully!",
            duration: 3000,
            status: "success"
        });
    } catch(error) {
        yield put(updateGroupFailure(error));
    } finally {
        yield put(removeUiFetching("groupEdit"));
    }
}
