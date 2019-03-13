import { all } from "redux-saga/effects";
import authSaga from "../components/auth/duck/sagas";
import groupSaga from "../components/group/duck/sagas";
import channelSaga from "../components/channel/duck/sagas";
import socketSaga from "../components/socket/duck/sagas";
import uiSaga from "../components/ui/duck/sagas";
import membersSaga from "../components/members/duck/sagas";
import messagesSaga from "../components/messages/duck/sagas";
import listsSaga from "../components/lists/duck/sagas";
import tasksSaga from "../components/tasks/duck/sagas";
import userSaga from "../components/user/duck/sagas";

export default function* rootSaga() {
    yield all([
        authSaga(),
        channelSaga(),
        // connectionSaga(),
        groupSaga(),
        uiSaga(),
        membersSaga(),
        messagesSaga(),
        socketSaga(),
        listsSaga(),
        userSaga(),
        tasksSaga()
    ]);
}