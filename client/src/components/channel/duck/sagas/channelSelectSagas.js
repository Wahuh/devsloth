import { call, take, put, select } from "redux-saga/effects";
import { GROUP_SELECT } from "../../../group/duck/types";
import { selectChannel } from "../actions";
import { getSelectedChannelId, getDefaultChannelId } from "../selectors";

export function* watchSelectedChannel() {
    while(true) {
        const { payload } = yield take(GROUP_SELECT);
        const { result: groupId } = payload;
        const channelId = yield select(getSelectedChannelId);
        if (!channelId) {
            const defaultChannelId = yield select(getDefaultChannelId);
            yield put(selectChannel({ [groupId]: defaultChannelId }));
        }
    }
}