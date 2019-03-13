import { put, take } from "redux-saga/effects";
import { GROUP_CONNECT_SEND } from "../types";
import { emitSocketAction } from "../../../socket/duck/actions";

export function* watchGroupDisconnect() {
    while(true) {
        const { payload } = yield take(GROUP_CONNECT_SEND);
        const { entities, result: groupId } = payload;
        const group = entities.groups[groupId];
        yield put(emitSocketAction(group, "sendGroupConnect"))
    }
}
