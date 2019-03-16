import { all } from "redux-saga/effects";
import { watchChannelCreateRequest } from "./channelCreateSagas";
import { watchChannelDeleteRequest } from "./channelDeleteSagas";
import { watchChannelUpdateRequest } from "./channelUpdateSagas";
import { watchChannelAdd } from "./channelAddSagas";
import { watchChannelEdit } from "./channelEditSagas";
import { watchChannelRemove } from "./channelRemoveSagas";

export default function* channelSaga() {
    yield all([
        watchChannelCreateRequest(),
        watchChannelUpdateRequest(),
        watchChannelDeleteRequest(),
        watchChannelAdd(),
        watchChannelEdit(),
        watchChannelRemove()
    ]);
}