import { takeEvery, call, put } from "redux-saga/effects";
import { toastify } from "../../../ui/duck/sagas";
import { GROUP_INVITE_COPY } from "../types";
import { removeUiPortal } from "../../../ui/duck/actions";
import { MODAL_GROUP_INVITE } from "../../../ui/constants";

export function* watchGroupInviteCopy() {
    yield takeEvery(GROUP_INVITE_COPY, handleCopyInvite);
}

function* handleCopyInvite() {
    yield put(removeUiPortal(MODAL_GROUP_INVITE));
    yield call(toastify, {
        message: "Copied to clipboard!",
        duration: 3000,
        status: "success"
    });
}