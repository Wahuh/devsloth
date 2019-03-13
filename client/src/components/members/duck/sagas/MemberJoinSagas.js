import { call, put, take } from "redux-saga/effects";
import { MEMBER_NEW_RECEIVE } from "../types";
import { receiveMemberGroupJoin } from "../actions";
import { receiveMessage } from "../../../messages/duck/actions";

export function* watchNewMembers() {
    while(true) {
        const { payload } = yield take(MEMBER_NEW_RECEIVE);
        const { member, message } = payload;
        yield put(receiveMemberGroupJoin(member));
        yield put(receiveMessage(message));
    }   
}