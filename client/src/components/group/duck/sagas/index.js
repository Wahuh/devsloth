import { all } from "redux-saga/effects";
import { watchCreateGroupRequest } from "./groupCreateSagas";
import { watchJoinGroupRequest } from "./groupJoinSagas";
import { watchGroupInviteCopy } from "./groupInviteCopySagas";
import { watchSelectedChannel } from "../../../channel/duck/sagas/channelSelectSagas";
import { watchLeaveGroupRequest } from "./groupLeaveSagas";
import { watchDeleteGroupSuccess, watchDeleteGroupRequest } from "./groupDeleteSagas";
import { watchAddGroup } from "./groupAddSagas";
import { watchEditGroup, watchGroupEditReceive } from "./groupEditSagas";
import { watchRemoveGroup } from "./groupRemoveSagas";
import { watchGroupUpdateRequest } from "./groupUpdateSagas";

export default function* groupSaga() {
    yield all([
        watchCreateGroupRequest(),
        watchJoinGroupRequest(),
        watchLeaveGroupRequest(),
        watchDeleteGroupRequest(),

        watchGroupUpdateRequest(),
        watchGroupInviteCopy(),
        watchSelectedChannel(),
        watchAddGroup(),
        watchEditGroup(),
        watchRemoveGroup()
    ]);
}