import { all } from "redux-saga/effects";
import { watchCreateChannelRequest, watchSendChannelCreate } from "./channelCreateSagas";
import { watchDeleteChannelRequest, watchDeleteChannelSuccess } from "./channelDeleteSagas";
import { watchUpdateChannelRequest } from "./channelUpdateSagas";
import { watchChannelConnect } from "./channelConnectSagas";
import { watchAddChannel } from "./channelAddSagas";

export default function* channelSaga() {
    yield all([
        watchCreateChannelRequest(),
        watchChannelConnect(),
        watchUpdateChannelRequest(),
        watchDeleteChannelRequest(),
        watchDeleteChannelSuccess(),
        watchAddChannel(),
    ]);
}